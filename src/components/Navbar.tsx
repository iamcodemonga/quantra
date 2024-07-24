import Logo from "../assets/qtclogo.png"
// import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className='pr-8 flex justify-between items-center fixed top-0 left-0 w-full z-10'>
        <img src={Logo} alt="" className='w-24 h-24 object-contain' />
        <div className='space-x-5 hidden lg:block text-white'>
            <a href="#hero">Home</a>
            <a href="#services">Services</a>
            <a href="#about">About</a>
            <a href="mailto:eufot30@gmail.com">Contact Us</a>
        </div>
        <a href="" className="text-white flex items-center font-bold hover:text-gray-700 lg:py-3 lg:px-5 lg:rounded-xl lg:bg-white lg:text-black lg:font-normal lg:text-sm">Open Broker<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5 ml-2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
          </svg>
        </a>
    </nav>
  )
}

export default Navbar