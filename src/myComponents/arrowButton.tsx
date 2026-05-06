import React from 'react'
import {ArrowUpRight} from 'lucide-react'

const arrowButton = () => {
  return (
    <div className='absolute right-4 top-4 border border-gray-300 rounded-lg p-2'>
         <ArrowUpRight className='w-4 h-4 text-gray-400' />
    </div>
  )
}

export default arrowButton