import React from 'react'
import StatCard from './myComponents/statCard'
import { CarFront, Users} from 'lucide-react'
import TrackingCard from './myComponents/trackingCard'


const App = () => {
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
    </div>
  )
}

export default App

