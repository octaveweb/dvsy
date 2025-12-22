function Navbar() {
  return (
    <nav className="flex justify-between px-5 py-4 ">
      <div className="logo text-2xl text-[#fff] cursor-pointer">DVSY</div>
      <ul className="flex gap-2 ">
        <li className="px-2 py-1.5 bg-[#1d1d1d] text-[#fff] rounded-md font-f3 cursor-pointer">DESIGNERS</li>
        <li className="px-2 py-1.5 bg-[#1d1d1d] text-[#fff] rounded-md font-f3 cursor-pointer">COLLABS</li>
        <li className="px-2 py-1.5 bg-[#1d1d1d] text-[#fff] rounded-md font-f3 cursor-pointer">EVENTS</li>
        <li className="px-2 py-1.5 bg-[#1d1d1d] text-[#fff] rounded-md font-f3 cursor-pointer">BLOG</li>
        <li className="px-2 py-1.5 bg-[#1d1d1d] text-[#fff] rounded-md font-f3 cursor-pointer">CARD</li>
        <li className="px-2 py-1.5 bg-[#ee6d54] text-[#000] rounded-md font-f3 cursor-pointer">GET IN TOUCH</li>
      </ul>
    </nav>
  )
}

export default Navbar