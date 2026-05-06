import React from 'react'
import StatCard from './myComponents/statCard'
import { CarFront} from 'lucide-react'

const App = () => {
  return (
    <div className='p-4'>
      <StatCard title='ongoing trips' value='13' icon={CarFront } />
    </div>
  )
}

export default App

