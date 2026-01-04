import Navbar from './Navbar'
import Section1 from './Section1'
import Section2 from './Section2'
import Section3 from './Section3'

function Main() {
  return (
    <main className='h-full bg-[#060503]'>
        <Navbar />
        <Section1 />
        <Section2 />
        <Section3 />
    </main>
  )
}

export default Main