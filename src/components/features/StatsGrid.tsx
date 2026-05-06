import { ArrowUpRight } from 'lucide-react'
import Button from '../ui/Button'
import Card from '../ui/Card'

const stats = [
  { value: '13', label: 'ongoing trips' },
  { value: '06', label: 'scheduled trips' },
  { value: '30,000.00', label: 'GHS in total trip cost' },
]

const StatsGrid = () => {
  return (
    <section className="mb-16 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
      {stats.map((stat) => (
        <Card
          key={stat.label}
          className="relative flex h-[120px] min-w-[220px] items-center gap-4 px-4 py-3"
        >
          <span className="h-6 w-6 rounded bg-[#0E3B6E]" />
          <div className="space-y-1">
            <p className="text-[30px] leading-none text-[#111827]">{stat.value}</p>
            <p className="text-[20px] leading-none text-[#111827]">{stat.label}</p>
          </div>
          <Button
            aria-label="Open card details"
            className="absolute right-3 top-3 h-5 w-5"
            icon={<ArrowUpRight size={12} strokeWidth={1.8} />}
          />
        </Card>
      ))}
    </section>
  )
}

export default StatsGrid
