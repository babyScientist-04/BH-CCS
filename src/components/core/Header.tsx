import { Heading, Meta } from '../ui/Typography'

const getDashboardDate = () => {
  const now = new Date()
  const weekday = now
    .toLocaleDateString('en-GB', { weekday: 'long' })
    .toUpperCase()
  const day = now.toLocaleDateString('en-GB', { day: '2-digit' })
  const month = now.toLocaleDateString('en-GB', { month: 'short' }).toUpperCase()
  const year = now.toLocaleDateString('en-GB', { year: 'numeric' })
  return `${weekday}, ${day} ${month}, ${year}`
}

const Header = () => {
  return (
    <header className="mb-8">
      <Heading className="mb-2">Good afternoon, Cooper</Heading>
      <Meta>{getDashboardDate()}</Meta>
    </header>
  )
}

export default Header
