import ServiceImage from "../assets/live_stream.png"
import SetupImage from "../assets/setup.png"

const Offers = () => {
    return (
        <div className="snap-y snap-mandatory">
            <div className="snap-always snap-start px-5 lg:px-10 pt-20 bg-gray-900 h-screen overflow-y-auto" id="services">
                <div className="lg:w-2/3">
                    <small className="text-gray-400">Our Services</small>
                    <h2 className="text-white text-2xl lg:text-5xl py-4 lg:py-7 font-bold">DAILY LIVE STREAMING AND LIVE TRADINGS</h2>
                    <p className="text-gray-300 lg:w-[550px]">Immerse yourself in daily sessions that bring the market to life. Learn from seasoned traders, engage in real-time discussions, and experience the excitement of live trading.</p>
                </div>
                <div className="w-full flex justify-end mt-2 lg:-mt-48">
                    <img src={ServiceImage} className="lg:w-2/3 h-full object-contain" alt=""/>
                </div>
            </div>
            <div className="snap-always snap-start px-5 lg:px-10 pt-20 bg-teal-700 h-screen overflow-y-auto">
                <div className="lg:w-2/3">
                    <h2 className="text-white text-2xl lg:text-5xl py-7 font-bold">MARKET SETUPS AND REVIEWS</h2>
                    <p className="text-gray-300 lg:w-[550px]">Always be a step ahead with our detailed market setups and comprehensive price reviews, ensuring you’re prepared for every trading opportunity.</p>
                </div>
                <div className="w-full flex justify-end">
                    <img src={SetupImage} className="lg:w-3/5 h-full object-contain mt-10 lg:-mt-10" alt=""/>
                </div>
            </div>
        </div>
    )
}

export default Offers