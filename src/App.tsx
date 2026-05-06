import { useState } from 'react'
import StatCard from './myComponents/statCard'
import { CarFront, Users} from 'lucide-react'
import TrackingCard from './myComponents/trackingCard'
import DetailView from './components/features/DetailView'
import { ongoingTrips } from './components/features/mockTrips'
import type { DashboardTab } from './components/features/types'
import WalletFundingModal from './myComponents/modals/walletFundingModal'

const App = () => {
  const [activeTab, setActiveTab] = useState<DashboardTab>('Map')
  const [walletModalOpen, setWalletModalOpen] = useState(true)
  const selectedTrip = ongoingTrips[0]

  return (
    <div className='p-4'>
      <StatCard title='ongoing trips' value='13' icon={CarFront } />

      <TrackingCard 
        id="#BK2345678"
        startTime="09:00 AM"
        endTime="12:00 PM"
        duration="3h 00 min"
        icon = {Users}
        vehicleImage="/download.jpg"
        typeBadge="Intra City"
        serviceLevel="Premium"
        passengerCount={4}
        isActive={true}
        startLocation={{
          address: "Boundary Rd.",
          city: "Accra, Ghana"
        }}
        endLocation={{
          address: "Kotoka",
          city: "International Air."
        }}
      />

      <DetailView
        activeTab={activeTab}
        onTabChange={setActiveTab}
        selectedTrip={selectedTrip}
      />
      <WalletFundingModal
        isOpen={walletModalOpen}
        onClose={() => setWalletModalOpen(false)}
        onProceed={() => setWalletModalOpen(false)}
        walletName="Blackhorse wallet"
      />
      
    </div>
    
  )
}

export default App

