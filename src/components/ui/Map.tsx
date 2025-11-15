'use client'

import { useEffect, useRef } from 'react'
import L from 'leaflet'
import 'leaflet/dist/leaflet.css'

// Fix for default marker icon in Next.js
delete (L.Icon.Default.prototype as any)._getIconUrl
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-shadow.png',
})

interface MapProps {
  latitude?: number
  longitude?: number
  zoom?: number
  height?: string
  markerTitle?: string
  markerDescription?: string
}

export default function Map({
  latitude = 32.646569,
  longitude = -97.293374,
  zoom = 15,
  height = '400px',
  markerTitle = 'Cable-Com Services Dallas',
  markerDescription = '2101 Joel East Road, Fort Worth, TX 76140',
}: MapProps) {
  const mapRef = useRef<HTMLDivElement>(null)
  const mapInstanceRef = useRef<L.Map | null>(null)

  useEffect(() => {
    if (!mapRef.current || mapInstanceRef.current) return

    // Initialize map
    const map = L.map(mapRef.current).setView([latitude, longitude], zoom)

    // Add OpenStreetMap tiles (100% free, no API key needed!)
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      maxZoom: 19,
    }).addTo(map)

    // Add marker
    const marker = L.marker([latitude, longitude]).addTo(map)

    // Add popup to marker
    marker.bindPopup(`
      <div style="text-align: center;">
        <strong style="font-size: 16px;">${markerTitle}</strong><br/>
        <span style="font-size: 14px;">${markerDescription}</span><br/>
        <a
          href="https://www.google.com/maps/dir/?api=1&destination=${latitude},${longitude}"
          target="_blank"
          rel="noopener noreferrer"
          style="color: #0066cc; text-decoration: underline; font-size: 14px; margin-top: 8px; display: inline-block;"
        >
          Get Directions
        </a>
      </div>
    `)

    mapInstanceRef.current = map

    // Cleanup
    return () => {
      if (mapInstanceRef.current) {
        mapInstanceRef.current.remove()
        mapInstanceRef.current = null
      }
    }
  }, [latitude, longitude, zoom, markerTitle, markerDescription])

  return (
    <div
      ref={mapRef}
      style={{ height, width: '100%', borderRadius: '8px', zIndex: 1 }}
      className="leaflet-container"
    />
  )
}
