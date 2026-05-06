import React from 'react'
import ArrowButton from './arrowButton'

type StatCardProps = {
    title: string
    value: string
    icon: React.ElementType;
}


const StatCard = ({title, value, icon:Icon}: StatCardProps) => {
  return (
    <div className='bg-white border border-gray-300 w-[400px] h-[120px] rounded-lg p-4 relative'>
       <ArrowButton />
       <div className='flex items-center gap-2'>
        <div className='w-12 h-12 border border-gray-900 border-2 rounded-lg p-2'>
            <Icon className="w-6 h-6 text-gray-900"/>
        </div>
        <div className='flex flex-col'>
            <p className='text-[30px] font-semibold '>{value}</p>
            <p className='text-[20px] font-semibold'>{title}</p>
           
        </div>
       </div>
    </div>
  )
}

export default StatCard