import Photo from "../assets/psychology.png"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"

const Psychology = () => {
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
    <section className="px-5 lg:px-10 pt-20 bg-cyan-500 h-screen overflow-y-auto">
        <motion.div className="lg:w-2/3" ref={text} variants={headerText} initial="initial" animate={textView && "animate"}>
            <h2 className="text-black text-3xl lg:text-5xl py-7 font-bold">PSYCHOLOGY SESSIONS</h2>
            <p className="text-gray-700 lg:w-[550px]">Learn to manage emotions, conquer fears, and build unwavering confidence for smarter, more successful trading decisions with our psychology sessions and psychology hacks.</p>
        </motion.div>
        <motion.div className="w-full flex justify-end" ref={illustration} variants={animeImg} initial="initial" animate={animeView && "animate"}>
            <img src={Photo} className="lg:w-1/2 h-full object-contain mt-10 lg:-mt-10" alt=""/>
        </motion.div>
    </section>
  )
}

export default Psychology