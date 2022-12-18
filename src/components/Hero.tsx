import pill1 from "../assets/pill1.webp";
import pill2 from "../assets/pill2.webp";
import pill3 from "../assets/pill3.webp";

const Hero = () => {
  return (
    <section>
      <div className="bg-[#1c185e] text-white py-20">
        <div className="container mx-auto flex flex-col md:flex-row items-center my-12 md:my-24">
          <div className="flex flex-col w-full lg:w-1/3 justify-center items-start p-8">
            <h1 className="text-2xl md:text-4xl pt-2 pb-2 tracking-loose text-yellow-300">Welcome!</h1>
            <h2 className="text-3xl md:text-5xl leading-relaxed md:leading-snug mb-2 ">Erindale Badminton
            </h2>
            <p className="text-sm md:text-base text-gray-50 mb-4 text-justify">Erindale Badminton Club is a recreational badminton club for adults 18 years of age and older. The club aims to provide its 90 members fair and equitable access to our facilities, regardless of each member's level of play.</p>
            <div className="mt-4 lg:mt-2 z-10">
              <a href="#Information"
                className="bg-transparent hover:bg-yellow-300 text-yellow-300 hover:text-black rounded shadow hover:shadow-lg py-2 px-4 border border-yellow-300 hover:border-transparent">
                More Info
              </a>
              <a href="#Pricing"
                className="bg-transparent hover:bg-yellow-300 text-yellow-300 hover:text-black rounded shadow hover:shadow-lg py-2 px-6 border border-yellow-300 hover:border-transparent ml-4">
                Pricing
              </a>
            </div>

          </div>
          <div className="p-8 mt-12 mb-6 md:mb-0 md:mt-0 ml-0 md:ml-12 lg:w-2/3 lg:ml-20 justify-center">
            <div className="h-48 flex flex-wrap content-center">
              <div>
                <img className="mt-28 hidden xl:block" src={pill3} alt="Badminton Image 1"/>
              </div>
              <div>
                <img className="inline-block mt-24 md:mt-0 p-8 md:p-0"  src={pill2} alt="Badminton Image 2"/>
              </div>
              <div>
                <img className="mt-28 hidden lg:block" src={pill1} alt="Badminton Image 3"/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero