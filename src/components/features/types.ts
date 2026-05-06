export type DashboardTab =
  | 'Map'
  | 'Trip Details'
  | 'Vehicle Details'
  | 'Passenger Details'
  | 'Billing'

export type Trip = {
  id: string
  code: string
  category: string
  passengers: number
  pickupTime: string
  dropoffTime: string
  pickupLocation: string
  dropoffLocation: string
  duration: string
  planType: string
}
