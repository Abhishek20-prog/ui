
import arrow from "../../assets/arrow-sm-right-svgrepo-com.svg"
const Card3 = () => {
  return (
    <div className=" bg-center bg-[url('https://images.unsplash.com/photo-1599149535927-36b3fc68a1d6?q=80&w=688&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')]  border-2 border-amber-100 rounded-[25px] w-[220px]">
          <div className="bg-white flex justify-center items-center w-10 h-10 rounded-[50%] relative top-8 left-8" >3</div>
          <div className="relative top-90 text-white flex justify-center items-center left-8 pr-10">Prime customers, that <br></br>have access to bank <br></br>credit and are satisfied <br></br>with the current product.
    
    </div>
    <div className="flex relative right-6">
      <div className="bg-green-400 h-11 w-[140px] relative left-13 top-120 rounded-[40px] flex text-[15px] text-white pt-2.5 pl-5">Underbanked</div>
    <div className="bg-green-400 h-5 w-[50px] relative left-8 top-123 rounded-[40px]"></div>
    <button className="bg-green-400 h-12 w-12 relative left-4 top-119 rounded-[50%] flex justify-center items-center hover:bg-blue-500 hover:pointer hover:scale-105 hover:shadow-lg"><img src={arrow} alt="arrow" className="w-8 h-8"/></button>
    </div>
    
        </div>
  )
}

export default Card3