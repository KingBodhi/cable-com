'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'

interface FacebookPost {
  id: string
  message?: string
  full_picture?: string
  created_time: string
  permalink_url: string
}

// Fallback images if Facebook API fails
const fallbackImages = [
  {
    src: '/images/installations/fiber-patch-panel.jpg',
    title: 'Fiber Optic Infrastructure',
    description: 'High-density fiber patch panels with professional labeling',
  },
  {
    src: '/images/installations/data-center-environment.jpg',
    title: 'Data Center Solutions',
    description: 'Secure industrial facilities with integrated network infrastructure',
  },
  {
    src: '/images/installations/industrial-facility-1.jpg',
    title: 'Industrial Infrastructure',
    description: 'Large-scale warehouse and manufacturing facility installations',
  },
  {
    src: '/images/installations/ceiling-cable-install.jpg',
    title: 'Overhead Cable Management',
    description: 'Professional cable routing in industrial environments',
  },
  {
    src: '/images/installations/cabling-materials.jpg',
    title: 'Enterprise-Grade Materials',
    description: 'Professional cable management for large installations',
  },
]

export default function FacebookPostsGallery() {
  const [posts, setPosts] = useState<FacebookPost[]>([])
  const [loading, setLoading] = useState(true)
  const [useFallback, setUseFallback] = useState(false)

  useEffect(() => {
    async function fetchPosts() {
      try {
        const response = await fetch('/api/facebook/posts')
        const data = await response.json()

        if (data.posts && data.posts.length > 0) {
          setPosts(data.posts)
          setUseFallback(false)
        } else {
          setUseFallback(true)
        }
      } catch (error) {
        console.error('Error fetching Facebook posts:', error)
        setUseFallback(true)
      } finally {
        setLoading(false)
      }
    }

    fetchPosts()
  }, [])

  if (loading) {
    return (
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="relative overflow-hidden rounded-xl shadow-lg aspect-square bg-gray-200 animate-pulse"
          />
        ))}
      </div>
    )
  }

  const displayPosts = useFallback ? fallbackImages : posts.slice(0, 5)

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      {useFallback
        ? // Fallback: Show static installation images
          displayPosts.map((item, index) => (
            <div key={index} className="group relative overflow-hidden rounded-xl shadow-lg aspect-square">
              <Image
                src={item.src}
                alt={item.title}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40 to-transparent group-hover:from-gray-900/80 group-hover:via-gray-900/30 transition-all duration-700" />
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <h3 className="text-xl font-bold drop-shadow-lg mb-2">{item.title}</h3>
                <p className="text-gray-200 text-sm drop-shadow-md">{item.description}</p>
              </div>
            </div>
          ))
        : // Live: Show Facebook posts
          displayPosts.map((post, index) => (
            <a
              key={post.id}
              href={post.permalink_url}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative overflow-hidden rounded-xl shadow-lg aspect-square hover:shadow-2xl transition-shadow duration-300"
            >
              {post.full_picture && (
                <Image
                  src={post.full_picture}
                  alt={post.message?.substring(0, 100) || 'Cable-Com Services project'}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40 to-transparent group-hover:from-gray-900/80 group-hover:via-gray-900/30 transition-all duration-700" />
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <div className="flex items-center gap-2 mb-2">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                  <span className="text-sm font-semibold">From Facebook</span>
                </div>
                {post.message && (
                  <p className="text-gray-200 text-sm drop-shadow-md line-clamp-3">{post.message}</p>
                )}
              </div>
            </a>
          ))}

      {/* CTA Card - Visit Facebook */}
      <a
        href="https://www.facebook.com/profile.php?id=61575613031791"
        target="_blank"
        rel="noopener noreferrer"
        className="relative overflow-hidden rounded-xl shadow-lg aspect-square bg-gradient-to-br from-blue-600 to-blue-800 flex items-center justify-center p-8 group hover:from-blue-500 hover:to-blue-700 transition-all duration-500"
      >
        <div className="text-center text-white">
          <svg className="w-16 h-16 mx-auto mb-4" fill="currentColor" viewBox="0 0 24 24">
            <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
          </svg>
          <h3 className="text-2xl font-bold mb-4 drop-shadow-lg">Follow Us on Facebook</h3>
          <p className="text-blue-100 mb-6 drop-shadow-md">
            See more of our latest projects and updates
          </p>
          <span className="inline-block bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
            Visit Our Page
          </span>
        </div>
      </a>
    </div>
  )
}
