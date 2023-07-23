import LineGradient from "../components/LineGradient";
import useMediaQuery from "../hooks/useMediaQuery";
import { motion } from "framer-motion";
import { skillsData } from "../utils/skillsData";


const MySkills = () => {
  const isAboveLarge = useMediaQuery("(min-width: 1060px)");
  return (
    <section id="skills" className="pt-10 pb-24">
      {/* HEADER AND IMAGE SECTION */}
      <div className="md:flex md:justify-between md:gap-16 mt-32 flex-wrap">
        <motion.div
          className="md:w-1/3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <p className="font-playfair font-semibold text-4xl mb-5">
            MY <span className="text-red">SKILLS</span>
          </p>
          <LineGradient width="w-1/3" />
          
        </motion.div>

      </div>

      {/* SKILLS */}
      <div className="md:flex md:justify-between mt-16 gap-32 flex-wrap">
        {skillsData.map((value, index) => {
          return (

            <motion.div
              key={value.key}
              className="md:w-1/3 mt-10"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5 }}
              variants={{
                hidden: { opacity: 0, y: 50 },
                visible: { opacity: 1, y: 0 },
              }}
            >
              <div className="relative h-32">
                <div className="z-10">
                  <p className="font-playfair font-semibold text-5xl">0{index + 1}</p>
                  <p className="font-playfair font-semibold text-3xl mt-3">
                    {value.skill}
                  </p>
                </div>
                <div className="w-1/2 md:w-3/4 h-32 bg-yellow absolute right-0 top-0 z-[-1] flex justify-center items-center" >
                  <img src={value.logo} alt={`${value.skill}-logo`} width={"50%"} />
                </div>
              </div>
              <p className="mt-5">
                {value.description}
              </p>
            </motion.div>

          )
        })}

      </div>
    </section>
  );
};

export default MySkills;
