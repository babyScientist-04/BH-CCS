import { useMemo, useState } from 'react'
import Header from '../core/Header'
import PageContainer from '../core/PageContainer'
import DetailView from './DetailView'
import { ongoingTrips } from './mockTrips'
import StatsGrid from './StatsGrid'
import TripSidebar from './TripSidebar'
import type { DashboardTab } from './types'

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState<DashboardTab>('Vehicle Details')
  const [selectedTripId, setSelectedTripId] = useState<string>(ongoingTrips[0].id)

  const selectedTrip = useMemo(
    () => ongoingTrips.find((trip) => trip.id === selectedTripId) ?? ongoingTrips[0],
    [selectedTripId],
  )

  return (
    <PageContainer>
      <Header />
      <StatsGrid />

      <div className="grid grid-cols-[350px_1fr] gap-8">
        <TripSidebar
          trips={ongoingTrips}
          selectedTripId={selectedTripId}
          onTripSelect={setSelectedTripId}
        />
        <DetailView
          activeTab={activeTab}
          onTabChange={setActiveTab}
          selectedTrip={selectedTrip}
        />
      </div>
    </PageContainer>
  )
}

export default Dashboard
