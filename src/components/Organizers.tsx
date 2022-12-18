import tris2 from "../assets/Tris.webp";
import tris1 from "../assets/Tris1.webp";
import person1 from "../assets/viet_badminton.png";
import person2 from "../assets/viet_badminton.webp";
import ImageIndividual from "./ImageIndividual";

const namePositionMap1 = {
  "Sara Gautier": ["President", person1, person2],
  "Michael Ho": ["Vice President", person1, person2],

}

const namePositionMap2 = {
  "Izabela Ligieza": ["Secretary", person1, person2],
  "Tristan Wu": ["Treasurer", tris1, tris2],
  "Andrew Lye": ["Equipment Manager", person1, person2]
}

const Organizers = () => {
  return (
    <div className="bg-gray-100 flex justify-center w-full " id="Organizer">
      <section className="w-[90%] px-4  mx-auto space-y-10 lg:space-y-24 lg:px-6 py-24">
        <h2 className="text-3xl lg:text-4xl font-bold text-center text-[#1c185e]">Organizers</h2>
        <div className="flex flex-col md:flex-row items-center justify-center space-x-0 space-y-10 md:space-y-0 md:space-x-5 lg:space-x-10">
          {Object.keys(namePositionMap1).map((name)=>{
            return <ImageIndividual key={name} person1={namePositionMap1[name][1]} person2={namePositionMap1[name][2]} name={name} title={namePositionMap1[name][0]}/>
          })}
    
        </div>
        <div className="flex flex-col md:flex-row items-center justify-center space-y-10 md:space-y-0 space-x-0 md:space-x-5 l lg:space-x-10 mt-10 lg:mt-0">
          {Object.keys(namePositionMap2).map((name)=>{
            return <ImageIndividual key={name} person1={namePositionMap2[name][1]} person2={namePositionMap2[name][2]} name={name} title={namePositionMap2[name][0]}/>
          })}
        </div>
      </section>
    </div>
  )
}

export default Organizers