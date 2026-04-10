"use client"

import { useState } from "react"
import { Plus, MapPin, Calendar as CalIcon, Users } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

const MOCK_TRIPS = [
  { id: 101, client: "Eleanor Richards", destination: "Amalfi Coast, Italy", dates: "Oct 12 - Oct 20, 2026", pax: 2, val: "$18,500", status: "Upcoming" },
  { id: 102, client: "Marcus Thorne", destination: "Kyoto, Japan", dates: "Nov 02 - Nov 14, 2026", pax: 4, val: "$24,000", status: "Pending Deposit" },
  { id: 103, client: "Jonathan Davis", destination: "Banff, Canada", dates: "Dec 15 - Dec 22, 2026", pax: 2, val: "$8,950", status: "Confirmed" },
]

export default function TripsPage() {
  const [activeModal, setActiveModal] = useState<{type: string, client: string} | null>(null)

  return (
    <div className="max-w-6xl mx-auto space-y-8 animate-fade-in-up">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-foreground mb-2">Active Itineraries</h1>
          <p className="text-gray-500">Track and manage all upcoming trips and bookings.</p>
        </div>
        <Button className="h-10 gap-2">
          <Plus className="w-4 h-4" /> Create Booking
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {MOCK_TRIPS.map((trip) => (
          <div key={trip.id} className="bg-white border border-border-light rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden group">
            <div className="flex justify-between items-start mb-4">
              <Badge variant={trip.status === "Pending Deposit" ? "warning" : "success"} className="bg-opacity-10 shadow-none border-none">
                {trip.status}
              </Badge>
              <span className="font-bold text-lg text-primary">{trip.val}</span>
            </div>
            
            <h3 className="font-bold text-gray-900 text-lg mb-1">{trip.destination}</h3>
            <p className="text-sm font-medium text-gray-500 mb-6 flex items-center gap-2">
              <Users className="w-4 h-4" /> {trip.client} ({trip.pax} Pax)
            </p>

            <div className="space-y-3 pt-4 border-t border-gray-100">
              <div className="flex items-center gap-3 text-sm text-gray-600">
                <CalIcon className="w-4 h-4 text-gray-400" />
                {trip.dates}
              </div>
              <div className="flex items-center gap-3 text-sm text-gray-600">
                <MapPin className="w-4 h-4 text-gray-400" />
                Boutique Accommodations Only
              </div>
            </div>

            <div className="mt-6 pt-4 flex gap-2">
              <Button onClick={() => setActiveModal({type: "Itinerary", client: trip.client})} variant="outline" className="w-full h-8 text-xs cursor-pointer">Itinerary</Button>
              <Button onClick={() => setActiveModal({type: "Documents", client: trip.client})} variant="outline" className="w-full h-8 text-xs cursor-pointer">Documents</Button>
            </div>
          </div>
        ))}
      </div>

      {activeModal && (
        <>
          <div className="fixed inset-0 bg-black/20 z-40" onClick={() => setActiveModal(null)} />
          <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] bg-white rounded-2xl shadow-lg p-6 z-50 animate-fade-in-up">
            <h2 className="text-xl font-bold mb-4">{activeModal.type}</h2>
            <p className="text-gray-600 text-sm mb-6">
              Retrieving {activeModal.type.toLowerCase()} for {activeModal.client}... (Mock Data)
            </p>
            <Button onClick={() => setActiveModal(null)} className="w-full">Close</Button>
          </div>
        </>
      )}
    </div>
  )
}
