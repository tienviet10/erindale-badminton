import person1 from "../assets/viet_badminton.png";
import person2 from "../assets/viet_badminton.webp";
import ImageIndividual from "./ImageIndividual";

const namePositionMap1 = {
  "Sara Gautier": "President",
  "Michael Ho": "Vice President",

}

const namePositionMap2 = {
  "Izabela Ligieza": "Secretary",
  "Tristan Wu": "Treasurer",
  "Andrew Lye": "Equipment Manager"
}

const Organizers = () => {


  return (
    <div className="bg-gray-100 flex justify-center w-full " id="Organizer">
      <section className="w-[90%] px-4  mx-auto space-y-10 lg:space-y-24 lg:px-6 py-24">
        <h2 className="text-3xl lg:text-4xl font-bold text-center text-[#1c185e]">Organizers</h2>
        <div className="flex flex-col md:flex-row items-center justify-center space-x-0 space-y-10 md:space-y-0 md:space-x-5 lg:space-x-10">
          {Object.keys(namePositionMap1).map((name)=>{
            return <ImageIndividual key={name} person1={person1} person2={person2} name={name} title={namePositionMap1[name]}/>
          })}
    
        </div>
        <div className="flex flex-col md:flex-row items-center justify-center space-y-10 md:space-y-0 space-x-0 md:space-x-5 l lg:space-x-10 mt-10 lg:mt-0">
          {Object.keys(namePositionMap2).map((name)=>{
            return <ImageIndividual key={name} person1={person1} person2={person2} name={name} title={namePositionMap2[name]}/>
          })}
        </div>
      </section>
    </div>
  )
}

export default Organizers