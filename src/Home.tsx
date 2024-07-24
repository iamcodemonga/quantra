import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import MarketSetup from './components/MarketSetup'
import Insights from './components/Insights'
import Contents from './components/Contents'
import Psychology from './components/Psychology'
import Resources from './components/Resources'
import Footer from './components/Footer'
import BottomBar from './components/BottomBar'
// import Offers from './components/Offers'

const Home = () => {
  return (
    <>
        <Navbar />
        <div className='snap-y snap-mandatory overflow-y-scroll h-screen'>
            <div className='snap-always snap-start'>
                <Hero />
            </div>
            <div className='snap-always snap-start'>
                <Services />
            </div>
            <div className='snap-always snap-start'>
                <MarketSetup />
            </div>
            <div className='snap-always snap-start'>
                <Insights />
            </div>
            <div className='snap-always snap-start'>
                <Contents />
            </div>
            <div className='snap-always snap-start'>
                <Psychology />
            </div>
            <div className='snap-always snap-start'>
                <Resources />
            </div>
            <div className='snap-always snap-start '>
                <Footer />
            </div>
        </div>
        <BottomBar />
    </>
  )
}

export default Home