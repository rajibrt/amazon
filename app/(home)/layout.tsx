import Footer from '@/components/sharred/footer'
import Header from '@/components/sharred/header'

export default async function HomeLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div>
      <div className='flex flex-col min-h-screen'>
        <Header />
        <main className='flex-1 flex flex-col'>{children}</main>
        <Footer />
      </div>
    </div>
  )
}
