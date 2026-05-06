import { CarFront, Users } from 'lucide-react'
import Badge from '../ui/Badge'
import Card from '../ui/Card'
import { Body } from '../ui/Typography'
import type { Trip } from './types'

type TripSidebarProps = {
  trips: Trip[]
  selectedTripId: string
  onTripSelect: (tripId: string) => void
}

const TripSidebar = ({
  trips,
  selectedTripId,
  onTripSelect,
}: TripSidebarProps) => {
  return (
    <aside className="w-[350px]">
      <Body className="mb-4 text-[28px]">Tracking</Body>
      <div className="space-y-3">
        {trips.map((trip) => {
          const isActive = trip.id === selectedTripId
          return (
            <Card
              key={trip.id}
              className={`cursor-pointer px-3 py-3 transition ${isActive ? 'border-2 border-[#0E3B6E]' : 'border-[#E5E7EB]'}`}
              onClick={() => onTripSelect(trip.id)}
            >
              <div className="mb-3 flex items-center justify-between gap-2">
                <div className="flex items-center gap-2">
                  <div className="flex h-5 w-7 items-center justify-center rounded bg-[#E5E7EB] text-[#6B7280]">
                    <CarFront size={14} />
                  </div>
                  <p className="text-[10px] font-semibold text-[#111827]">{trip.code}</p>
                </div>
                <div className="flex items-center gap-2">
                  <Badge>{trip.category}</Badge>
                  <span className="inline-flex items-center gap-1 text-[9px] text-[#374151]">
                    <Users size={10} />
                    {trip.passengers} passengers
                  </span>
                </div>
              </div>

              <div className="mb-2 flex items-start justify-between">
                <p className="text-[14px] font-medium text-[#111827]">{trip.pickupTime}</p>
                <p className="text-[10px] text-[#374151]">{trip.planType}</p>
                <p className="text-[14px] font-medium text-[#111827]">{trip.dropoffTime}</p>
              </div>

              <div className="mb-2 flex items-center justify-center gap-2">
                <span className="h-0.5 w-4 rounded bg-[#93C5FD]" />
                <span className="h-0.5 w-4 rounded bg-[#93C5FD]" />
                <span className="h-0.5 w-4 rounded bg-[#93C5FD]" />
                <Badge className="rounded-md px-2 py-0 text-[8px]">{trip.duration}</Badge>
              </div>

              <div className="flex justify-between gap-3 text-[10px] text-[#9CA3AF]">
                <p className="max-w-[120px] leading-3">{trip.pickupLocation}</p>
                <p className="max-w-[120px] text-right leading-3">{trip.dropoffLocation}</p>
              </div>
            </Card>
          )
        })}
      </div>
    </aside>
  )
}

export default TripSidebar
