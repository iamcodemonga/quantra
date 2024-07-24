import Twitter from "../assets/TwitterX.png"
import Instagram from "../assets/Instagram Circle.png"
import Discord from "../assets/Discord.png"
// import Telegram from "../assets/Telegram App.png"
import TickerSlider from "./tradingView/TickerSlider"
import TickWidget from "./tradingView/TickWidget"

const Footer = () => {
  return (
    <footer className="w-full pt-20 pb-24 lg:pb-5 bg-gray-900 overflow-x-hidden relative" id="about">
        <div>
            <h2 className="text-2xl lg:text-4xl text-white uppercase text-center font-bold px-2 mt-10">Subscribe To Our Newsletter</h2>
            <div className="w-full flex justify-center">
                <p className="text-gray-300 text-center pt-3 pb-10 px-2 lg:w-[550px]">Subscribe to our newsletter for exclusive updates and the latest market trends. Stay ahead with Quantum Trading Community.</p>
            </div>
            <form action="" method="post" className="w-full pb-10 px-7 lg:px-96 flex justify-center">
                <div className="w-full">
                    <div className="w-full">
                        <input type="text" name="email" id="" className="w-full py-3 px-5 rounded-xl outline-none" placeholder="Add your email address" />
                    </div>
                    <div className="w-full flex justify-start lg:justify-end mt-7">
                        <button type="submit" className="py-3 px-10 bg-teal-500 border-1 border-teal-500 rounded-xl text-white">Subscribe</button>
                    </div>
                </div>
            </form>
            <div className="hidden lg:block lg:mx-32 mb-14">
                <TickWidget />
            </div>
        </div>
        <div className="w-full absolute top-0 left-0">
            <TickerSlider />
        </div>
        <div className="lg:flex justify-between items-center px-10 mt-4 border-t border-gray-500 pt-5">
            <p className="text-gray-200">Quantum trading community</p>
            <div className="flex items-center space-x-4 my-5 lg:my-0">
                <a href="/" className="text-gray-200">
                    <img src={Twitter} width={20} height={20} />
                </a>
                <a href="/" className="text-gray-200">
                    <img src={Instagram} width={20} height={20} />
                </a>
                <a href="/" className="text-gray-200">
                    <img src={Discord} width={20} height={20} />
                </a>
                {/* <a href="/" className="text-gray-200">
                    <img src={Telegram} width={20} height={20} />
                </a> */}
            </div>
            <a href="mailto:" className="text-gray-200">Contact us</a>
        </div>
    </footer>
  )
}

export default Footer