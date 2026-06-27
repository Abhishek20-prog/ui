import Left from "./Left"
import Navbar from "./Navbar"
import Right from "./Right"
const Section1 = () => {
  return (
    <div className='h-screen w-full flex'>
      <Navbar/>
     <Left/>
     <Right/>
    </div>
  )
}

export default Section1
