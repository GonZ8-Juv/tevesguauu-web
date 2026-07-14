import Footer from './Footer'
import Navbar from './Navbar'

type LayoutProps = {
  children: React.ReactNode
}

function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen bg-[#FFF8FA] text-[#2B2B2B]">
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  )
}

export default Layout
