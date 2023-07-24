import LineGradient from "../components/LineGradient";
import { motion } from "framer-motion";
import ggnation from '../assets/portfolio images/goodgame.png'
import eventmender from '../assets/portfolio images/eventmender.png'
import offiql from '../assets/portfolio images/offiql.png'

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const projectVariant = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1 },
};

const Project = (props) => {
  const { title, image, description,link } = props
  const overlayStyles = `absolute h-full w-full opacity-0 hover:opacity-90 transition duration-500
    bg-grey z-30 flex flex-col justify-center items-center text-center p-16 text-deep-blue`;


  return (
    <a href={link} target="_blank">
      <motion.div variants={projectVariant} className="relative">
        <div className={overlayStyles}>
          <p className="text-2xl font-playfair">{title}</p>
          <p className="mt-7">
            {description}
          </p>
        </div>
        <img src={image} alt={title} />
      </motion.div>
    </a>
  );
};

const Projects = () => {
  return (
    <section id="projects" className="pt-48 pb-48">
      {/* HEADINGS */}
      <motion.div
        className="md:w-2/5 mx-auto text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, y: -50 },
          visible: { opacity: 1, y: 0 },
        }}
      >
        <div>
          <p className="font-playfair font-semibold text-4xl">
            <span className="text-red">MY</span>WORKS
          </p>
          <div className="flex justify-center mt-5">
            <LineGradient width="w-2/3" />
          </div>
        </div>
        <p className="mt-10 mb-10">
          Below are some of the works that I performed during my internships and freelancing.
        </p>
      </motion.div>

      {/* PROJECTS */}
      <div className="flex justify-center">
        <motion.div
          className="sm:grid sm:grid-cols-3"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {/* ROW 1 */}
          <div
            className="flex justify-center text-center items-center p-10 bg-red
              max-w-[400px] max-h-[400px] text-2xl font-playfair font-semibold"
          >
            BEAUTIFUL USER INTERFACES
          </div>
          <Project title="Eventmender" link={"https://www.eventmender.com"} image={eventmender} description={"Developed using MERN stack and redux for state management along with admin dashboard."} />
          <Project title="GoodGameNation" link={"https://ggnation.com/"} image={ggnation} description={"Gaming webapp using ReactJS and redux for state management along with admin dashboard."} />

          {/* ROW 2 */}
          <Project title="Offiql" image={offiql} link={"https://www.offiqltech.com"}/>
          {/* <Project title="Project 4" />
          <Project title="Project 5" />

          {/* ROW 3 */}
          {/* <Project title="Project 6" />
          <Project title="Project 7" /> */} 
          <div
            className="flex justify-center text-center items-center p-10 bg-blue
              max-w-[400px] max-h-[400px] text-2xl font-playfair font-semibold"
          >
            SMOOTH USER EXPERIENCE
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
