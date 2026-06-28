import Card from "./Card"
import Card3 from "./Card3"
const Right = () => {
  let cards=[{
    id:"1",
    title:"Prime customers, that have access to bank credit and are satisfied with the current product.",
    description:"Satisfied",
    icon:"https://images.unsplash.com/photo-1543428390-52250776dd46?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8d29tZW4lMjBob2xkaW5nJTIwYW5kJTIwc2VlaW5nJTIwYSUyMHBob25lfGVufDB8fDB8fHww",
    color:"bg-blue-600",
    hover:"bg-blue-500",
    button:"w-12 h-12 rounded-[50%] flex justify-center items-center hover:bg-blue-500 hover:pointer hover:scale-105 hover:shadow-lg",
    arrow:"w-8 h-8"
  },
  {
    id:"2",
    title:"Customers from near-prime and sub-prime segments with no access to bank credit.",
    description:"Underserved",
    icon:"https://plus.unsplash.com/premium_photo-1675626492183-865d6d8e2e8a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHdvbWVuJTIwaG9sZGluZyUyMHBob25lfGVufDB8fDB8fHww",
    color:"bg-blue-600",
    hover:"bg-blue-500",
    button:"w-12 h-12 rounded-[50%] flex justify-center items-center hover:bg-blue-500 hover:pointer hover:scale-105 hover:shadow-lg",
    arrow:"w-8 h-8"
  },
{

  }]
  return (
    <div className="flex w-[80%] pl-8 pt-30 font-poppins h-screen bg-amber-300 gap-6">
        
      {cards.map((card)=>{
        return <Card key={card.id} title={card.title} description={card.description} icon={card.icon} color={card.color} hover={card.hover} button={card.button} arrow={card.arrow}/>
      })}
     
      <Card3/>
    </div>
  )
}

export default Right
