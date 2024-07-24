import ServiceImage from "../assets/live_stream.png"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"

const Services = () => {
  const { ref: text, inView: textView } = useInView({ threshold: 0 })
  const { ref: illustration, inView: animeView } = useInView({ threshold: 0 })

  const headerText = {
    initial: {
        opacity: 0,
        x: -100,
    }, 
    animate: {
        opacity: 1,
        x: 0,
        transition: {
            delay: 0.1,
            // x: { duration: 1 },
            // ease: [ 0.6, 0.01, 0.05, 0.95 ],
            duration: 1,
            ease: "easeOut",
            // staggerChildren: 0.08
        }
    }
  }

  const animeImg = {
    initial: {
        opacity: 0,
        x: 100,
    }, 
    animate: {
        opacity: 1,
        x: 0,
        transition: {
            delay: 0.1,
            // x: { duration: 1 },
            // ease: [ 0.6, 0.01, 0.05, 0.95 ],
            duration: 1,
            ease: "easeOut",
            // staggerChildren: 0.08
        }
    }
  }

  return (
    <section className="px-5 lg:px-10 pt-20 bg-gray-900 h-screen overflow-y-auto" id="services">
        <motion.div className="w-full lg:w-2/3" ref={text} variants={headerText} initial="initial" animate={textView && "animate"}>
            <small className="text-gray-400">Our Services</small>
            <h2 className="text-white text-2xl lg:text-5xl py-4 lg:py-7 font-bold">DAILY LIVE STREAMING AND LIVE TRADINGS</h2>
            <p className="text-gray-300 lg:w-[550px]">Immerse yourself in daily sessions that bring the market to life. Learn from seasoned traders, engage in real-time discussions, and experience the excitement of live trading.</p>
        </motion.div>
        <motion.div className="w-full flex justify-end mt-2 lg:-mt-36" ref={illustration} variants={animeImg} initial="initial" animate={animeView && "animate"}>
            <img src={ServiceImage} className="lg:w-3/5 h-full object-contain" alt=""/>
        </motion.div>
    </section>
  )
}

export default Services