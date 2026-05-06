import type { ReactNode } from 'react'

type PageContainerProps = {
  children: ReactNode
}

const PageContainer = ({ children }: PageContainerProps) => {
  return (
    <main className="min-h-screen bg-[#F9FAFB]">
      <div className="mx-auto w-full max-w-[1440px] px-10 py-12">{children}</div>
    </main>
  )
}

export default PageContainer
