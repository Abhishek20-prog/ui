

import arrow from "../../assets/arrow-sm-right-svgrepo-com.svg"
const Card = () => {
  return (
    <div className=" bg-center bg-[url('https://images.unsplash.com/photo-1543428390-52250776dd46?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8d29tZW4lMjBob2xkaW5nJTIwYW5kJTIwc2VlaW5nJTIwYSUyMHBob25lfGVufDB8fDB8fHww')]  border-2 border-amber-100 rounded-[25px] w-[95%]">
      <div className="bg-white flex justify-center items-center w-10 h-10 rounded-[50%] relative top-8 left-8" >1</div>
      <div className="relative top-90 text-white flex justify-center items-center left-8 pr-10">Prime customers, that <br></br>have access to bank <br></br>credit and are satisfied <br></br>with the current product.

</div>
<div className="flex">
  <div className="bg-blue-600 h-11 w-[43%] relative left-13 top-120 rounded-[40px] flex text-[15px] text-white pt-2 pl-5">Satisfied</div>
<div className="bg-blue-600 h-5 w-[17%] relative left-8 top-123 rounded-[40px]"></div>
<button className="bg-blue-600 h-12 w-12 relative left-5 top-119 rounded-[50%] flex justify-center items-center hover:bg-blue-500 hover:pointer hover:scale-105 hover:shadow-lg"><img src={arrow} alt="arrow" className="w-8 h-8"/></button>
</div>

    </div>
  )
}

export default Card
