import React from 'react';
type TrackingCardProps = {
  id: string;              // e.g., "#BK2345678"
  startTime: string;       // e.g., "09:00 AM"
  endTime: string;         // e.g., "12:00 PM"
  duration: string; 
  icon: React.ElementType       // e.g., "3h 00 min"
  startLocation: {
    address: string;       // e.g., "Boundary Rd."
    city: string;          // e.g., "Accra, Ghana"
  };
  endLocation: {
    address: string;       // e.g., "Kotoka"
    city: string;          // e.g., "International Air."
  };
  vehicleImage: string;    // URL path to the car image
  typeBadge: 'Intra City' | 'Inter City'; // Union type for strictness
  serviceLevel: string;    // e.g., "Premium"
  passengerCount: number;  // e.g., 4
  isActive?: boolean;      // To handle the dark border highlight
};

const TrackingCard: React.FC<TrackingCardProps> = ({
  id,
  startTime,
  endTime,
  duration,
  startLocation,
  endLocation,
  vehicleImage,
  typeBadge,
  serviceLevel,
  icon:Icon,
  passengerCount,
  isActive = false,
}) => {
  return (
    <div className={`p-2 rounded-lg border-2 w-[450px] h-[140px] transition-all m-2  hover:border-2 hover:border-zinc-900 ${
      isActive ? 'border-gray-100 ' : 'border-slate-100'
    }`}>
      
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-3">
          <img src={vehicleImage} alt="Vehicle" className="w-12 h-auto" />
          <span className="font-semibold text-slate-800">{id}</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="px-2 py-1 text-xs border rounded-md text-slate-500">
            {typeBadge}
          </span>
          <Icon className="w-4 h-4"/>
          <div className="flex items-center text-slate-600 text-xs gap-1">
             
             <span>{passengerCount} passengers</span>
          </div>
        </div>
      </div>

      
      <div className="grid grid-cols-3  items-center">
        <div className="text-left">
          <p className="font-medium ">{startTime}</p>
          <p className="text-xs text-slate-400">{startLocation.address}</p>
          <p className="text-xs text-slate-400">{startLocation.city}</p>
        </div>

        <div className="flex flex-col  items-center">
          <span className="text-[10px] text-slate-500 uppercase tracking-widest">
            {serviceLevel}
          </span>
          <div className="w-full border-t-2 border-dashed border-sky-400 my-2 relative">
             <div className="absolute -bottom-7 left-1/2 -translate-x-1/2 bg-gray-200 px-2 py-0.5 rounded text-[10px] whitespace-nowrap">
                {duration}
             </div>
          </div>
        </div>

        <div className="text-right">
          <p className="font-medium ">{endTime}</p>
          <p className="text-xs text-slate-400">{endLocation.address}</p>
          <p className="text-xs text-slate-400">{endLocation.city}</p>
        </div>
      </div>
    </div>
  );
};

export default TrackingCard;     