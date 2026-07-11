"use client"

import React, { useEffect } from 'react'
import { MapContainer, TileLayer, Marker, Tooltip, useMap } from 'react-leaflet'
import L from 'leaflet'
import 'leaflet/dist/leaflet.css'
import { useRouter } from 'next/navigation'

// Custom MapPin icon using raw HTML so it matches our previous Tailwind UI
const createCustomIcon = () => {
  return L.divIcon({
    className: 'bg-transparent border-none', // Override leaflet default white box
    html: `
      <div class="relative flex flex-col items-center justify-center cursor-pointer group">
        <div class="relative flex items-center justify-center w-10 h-10 md:w-12 md:h-12 bg-white dark:bg-slate-800 rounded-full shadow-[0_10px_25px_-5px_rgba(0,0,0,0.3)] border-[3px] border-teal-500 hover:scale-110 hover:bg-teal-500 transition-all duration-300 group-hover:bg-teal-500 group-hover:scale-110">
          <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-500 opacity-30"></span>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-5 h-5 md:w-6 md:h-6 text-teal-600 dark:text-teal-400 group-hover:text-white transition-colors"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
        </div>
      </div>
    `,
    iconSize: [48, 48],
    iconAnchor: [24, 24],
    popupAnchor: [0, -24],
  })
}

const LOCATIONS = [
  {
    id: "jakarta",
    name: "Jakarta",
    position: [-6.2088, 106.8456] as [number, number],
    businesses: [{ id: 1, name: "Nawasena Alkes" }]
  },
  {
    id: "tangerang",
    name: "Tangerang",
    position: [-6.1702, 106.6403] as [number, number],
    businesses: [{ id: 2, name: "Nawasena ATK" }]
  },
  {
    id: "depok",
    name: "Depok",
    position: [-6.4025, 106.7942] as [number, number],
    businesses: [{ id: 3, name: "Faenzone & Warmindo" }]
  },
  {
    id: "bekasi",
    name: "Bekasi",
    position: [-6.2383, 106.9756] as [number, number],
    businesses: [{ id: 4, name: "Koling" }]
  }
]

function MapSizeFixer() {
  const map = useMap()
  useEffect(() => {
    // invalidateSize forces the map to recalculate its container size
    // timeout is needed to allow DOM layout to settle when switching tabs
    const timer = setTimeout(() => {
      map.invalidateSize()
    }, 100)
    return () => clearTimeout(timer)
  }, [map])
  return null
}

export default function MapClient() {
  const router = useRouter()

  useEffect(() => {
    // Leaflet icon bug fix for webpack (often not needed for divIcon but good practice)
    delete (L.Icon.Default.prototype as any)._getIconUrl
    L.Icon.Default.mergeOptions({
      iconRetinaUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',
      iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
      shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
    })
  }, [])

  return (
    <div className="w-full max-w-[1440px] mx-auto h-[400px] md:h-[500px] rounded-3xl overflow-hidden shadow-2xl border bg-card relative z-0">
      <MapContainer 
        center={[-6.25, 106.8]} // Center of Jabodetabek roughly
        zoom={10} 
        scrollWheelZoom={false} // Prevent accidental zooming while scrolling page
        attributionControl={false} // Hide the attribution text at the bottom right
        className="w-full h-full z-0"
        style={{ zIndex: 0 }}
      >
        <MapSizeFixer />
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
          url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
        />
        {LOCATIONS.map((loc) => (
          <Marker 
            key={loc.id} 
            position={loc.position}
            icon={createCustomIcon()}
            eventHandlers={{
              click: () => {
                router.push(`/companies/${loc.businesses[0].id}`)
              }
            }}
          >
            <Tooltip direction="top" offset={[0, -24]} opacity={1} className="!bg-background !border-primary/20 !text-foreground !rounded-xl !shadow-xl !backdrop-blur-md">
              <div className="p-2 min-w-[140px] font-sans">
                <div className="flex items-center gap-2 mb-2 border-b border-border pb-2">
                  <span className="font-bold text-xs uppercase tracking-wider text-primary">{loc.name}</span>
                </div>
                <div className="text-sm font-semibold flex items-center gap-2 mb-1">
                  <div className="w-2 h-2 rounded-full bg-teal-500" />
                  {loc.businesses[0].name}
                </div>
                <div className="text-[10px] text-muted-foreground mt-2 italic text-center bg-muted/50 rounded p-1">Klik untuk detail profil</div>
              </div>
            </Tooltip>
          </Marker>
        ))}
      </MapContainer>
    </div>
  )
}
