import andrew1 from "../assets/andrew1.webp";
import andrew2 from "../assets/andrew2.webp";
import tris2 from "../assets/Tris.webp";
import tris1 from "../assets/Tris1.webp";
import viet1 from "../assets/viet1.webp";
import viet2 from "../assets/viet2.webp";
import viet3 from "../assets/viet3.webp";
import viet4 from "../assets/viet4.webp";
import viet5 from "../assets/viet5.webp";
import person2 from "../assets/viet_badminton.webp";
import ImageIndividual from "./ImageIndividual";

const namePositionMap1 = {
  "Sara Gautier": ["President", viet4, viet1],
  "Michael Ho": ["Vice President", viet5, viet2],

}

const namePositionMap2 = {
  "Izabela Ligieza": ["Secretary", viet3, person2],
  "Tristan Wu": ["Treasurer", tris1, tris2],
  "Andrew Lye": ["Equipment Manager", andrew1, andrew2]
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