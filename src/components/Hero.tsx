import HeroImage from "../assets/hero.png"
import DiscordIcon from "../assets/Discord.png"

const Hero = () => {
  return (
    <header className="h-screen w-full relative overflow-x-hidden" id="hero">
        <img src={HeroImage} className="w-full h-full object-cover" />
        <div className="absolute top-0 left-0 w-full h-full bg-black/50 flex items-end lg:pl-10 pb-40 lg:pb-48">
            <div className="text-white lg:w-2/3">
                <h1 className="text-white text-2xl lg:text-6xl uppercase font-bold px-5">Your journey to confident trading starts here</h1>
                <p className="text-slate-300 mt-5 mb-10 md:text-base px-5">Start your journey to confident trading with us. Join Quantum Trading Community today and unlock your potential with expert support, comprehensive resources and a vibrant network of traders. Your success starts here</p>
                <div className="space-x-5 px-5 flex">
                    <a href="" className="py-3 px-4 lg:px-7 border-2 border-white text-white rounded-xl bg-transparent hover:bg-white/30 flex items-center">Join Discord<img src={DiscordIcon} alt="" width={18} height={18} className="object-contain ml-1" /></a>
                    <a href="" className="py-3 px-4 lg:px-7 border-2 border-white text-black rounded-xl bg-white flex items-center">Go Premium<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5 ml-1">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
                    </svg>
                    </a>
                </div>
            </div>
        </div>
    </header>
  )
}

export default Hero