import { NextResponse } from 'next/server'

export const dynamic = 'force-dynamic'

interface FacebookPost {
  id: string
  message?: string
  full_picture?: string
  created_time: string
  permalink_url: string
}

export async function GET() {
  try {
    // Facebook Graph API configuration
    const pageId = '61575613031791'
    const accessToken = process.env.FACEBOOK_ACCESS_TOKEN

    if (!accessToken) {
      // Return fallback static posts if no access token
      return NextResponse.json({
        posts: [],
        error: 'No access token configured',
      })
    }

    // Fetch posts with images from Facebook Graph API
    const response = await fetch(
      `https://graph.facebook.com/v18.0/${pageId}/posts?fields=id,message,full_picture,created_time,permalink_url&limit=10&access_token=${accessToken}`,
      {
        next: { revalidate: 3600 }, // Cache for 1 hour
      }
    )

    if (!response.ok) {
      throw new Error('Failed to fetch Facebook posts')
    }

    const data = await response.json()

    // Filter posts that have images and get the latest 5
    const postsWithImages = (data.data || [])
      .filter((post: FacebookPost) => post.full_picture)
      .slice(0, 5)

    return NextResponse.json({
      posts: postsWithImages,
      success: true,
    })
  } catch (error) {
    console.error('Facebook API Error:', error)

    // Return empty array on error - component will show fallback
    return NextResponse.json({
      posts: [],
      error: 'Failed to fetch posts',
    })
  }
}
