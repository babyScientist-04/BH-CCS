import Button from '../ui/Button'
import type { DashboardTab, Trip } from './types'

const tabs: DashboardTab[] = [
  'Map',
  'Trip Details',
  'Vehicle Details',
  'Passenger Details',
  'Billing',
]

type DetailViewProps = {
  activeTab: DashboardTab
  onTabChange: (tab: DashboardTab) => void
  selectedTrip: Trip
}

const contentByTab: Record<DashboardTab, (trip: Trip) => string> = {
  Map: (trip) => `Live route preview for ${trip.code} will render here.`,
  'Trip Details': (trip) =>
    `Trip ${trip.code} runs from ${trip.pickupLocation} to ${trip.dropoffLocation}.`,
  'Vehicle Details': () =>
    'Assigned vehicle details, maintenance status, and registration info.',
  'Passenger Details': (trip) =>
    `Passenger manifest currently shows ${trip.passengers} seats booked.`,
  Billing: () => 'Invoice and payment trail in GHS (Cedis).',
}

const DetailView = ({ activeTab, onTabChange, selectedTrip }: DetailViewProps) => {
  return (
    <section className="max-w-180">
      <div className="mb-4 flex flex-wrap items-end gap-8 border-b border-[#E5E7EB]">
        {tabs.map((tab) => (
          <Button
            key={tab}
            variant="tab"
            active={activeTab === tab}
            onClick={() => onTabChange(tab)}
          >
            {tab}
          </Button>
        ))}
      </div>

      <div className="flex h-[420px] items-center justify-center rounded-none bg-[#E5E7EB] p-8 text-center text-[22px] text-[#6B7280]">
        {contentByTab[activeTab](selectedTrip)}
      </div>
    </section>
  )
}

export default DetailView
