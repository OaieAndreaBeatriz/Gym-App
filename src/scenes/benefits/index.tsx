import ActionButton from "@/shared/ActionButton";
import { BenefitType, SelectedPage } from "@/shared/types";
import {
  HomeModernIcon,
  UserGroupIcon,
  AcademicCapIcon,
} from "@heroicons/react/24/solid"
import { motion } from "framer-motion";
import Benefit from "./Benefit";
import BenefitsGirl2 from "../../assets/CoverGirl2.png"

const benefits: Array<BenefitType> = [
  {
    icon: <HomeModernIcon className="h-6 w-6"/>,
    title: "Personal Trainer College Education, Ohio",
    description: "This preference is based on the fact that it demonstrates possessing a solid foundation in the area of fitness and health promotion."
  },
  {
    icon: <UserGroupIcon className="h-6 w-6"/>,
    title: "100's of Diverse Classes",
    description: "Mind and Body, Cardio, Yoga, Circuit Training, Strength and Conditioning, Dance, Weight training, Crossfit training, HIIT etc."
  },
  {
    icon: <AcademicCapIcon className="h-6 w-6"/>,
    title: "Personal Trainer Career Diploma",
    description: "The best candidates have an education that is relevant to the health and fitness industry and a national certification as a personal trainer."
  },
]

const container = {
  hidden: {},
  visible: {
    transition: {staggerChildren: 0.2}
  }
}

type Props = {
setSelectedPage: (value: SelectedPage) => void;
};


const Benefits = ({ setSelectedPage }:Props) => {
  return (
    <section 
    id="benefits"
    className="mx-auto min-h-full w-5/6 py-20">
      <motion.div
      onViewportEnter={() => setSelectedPage(SelectedPage.Benefits)}
      >
        {/* HEADER */}
        <motion.div 
        initial="hidden"
        whileInView="visible"
        viewport={{once: true, amount: 0.5}}
        transition={{ duration: 0.5}}
        variants={{
          hidden: {opacity:0, x:-50},
          visible: {opacity:1, x:0},
        }}
        className="md:my-5 md:w-3/5">
          <h1 className="basis-3/5 font-montserrat text-3xl font-bold ">MORE THAN JUST A GYM.</h1>
          <p className="my-5 text-sm">We provide world class fitness equipment, trainers nd classes to get you to your ultimate fitness goals with ease. We provide true care into each and every member.</p>
        </motion.div>
        {/* BENEFITS */}
        <motion.div 
        className="md:flex items-center justify-between gap-8 mt-5"
        initial="hidden"
        whileInView="visible"
        viewport={{once:true, amount: 0.5}}
        variants={container}
        >
          {benefits.map((benefit: BenefitType)=>(
            <Benefit
              key={benefit.title}
              icon={benefit.icon}
              title={benefit.title}
              description={benefit.description}
              setSelectedPage={setSelectedPage}
            />
          ))}
        </motion.div>
        {/* GRAPHICS AND DESCRIPTION */}
        <div className="mt-16 items-center justify-between gap-20 md:mt-28 md:flex">
          {/* GRAPHIC */}
          <img 
          className="mx-auto"
          alt="benefits-page-girl2"
          src={BenefitsGirl2}
          ></img>
          {/* DESCRIPTION */}
          <div>
            {/* TITLE */}
            <div className="relative">
              <div className="before:absolute before:-top-20 before:-left-20 before:-z-[1] before:content-heart">
                <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{once: true, amount: 0.5}}
                transition={{ duration: 0.5}}
                variants={{
                  hidden: {opacity:0, x:50},
                  visible: {opacity:1, x:0},
                }}
                >
                <h1 className="basis-3/5 font-montserrat text-3xl font-bold ">MILLIONS OF HAPPY MEMBERS GETTING {" "}
                  <span className="text-primary-500">FIT</span>.
                </h1>
                </motion.div>
              </div>
            </div>

            {/* DESCRIPTION */}
              <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{once: true, amount: 0.5}}
              transition={{ delay: 0.1, duration: 0.5}}
              variants={{
                hidden: {opacity:0, x:50},
                visible: {opacity:1, x:0},
              }}
              >
                <p className="my-5">Our Fitness Center is a health, recreational, and social facility geared towards exercise, sports, and other physical activities. It's an institutionally-supported center.
                </p>

                <p className="mb-5">The social component is an important secondary function of our Fitness Center and is represented by elements that support the fitness goals but also encourage social interaction. These include a juice and snack bar, sport spectator seating, saunas, and hot tubs.
                </p>
              </motion.div>
            {/* BUTTON */}
              <div className="relative mt-16">
                <div className="before:absolute before:-bottom-20 before:right-20 before:z-[-1] before:content-eyeopen">
                  <ActionButton setSelectedPage={SelectedPage}>Join Now</ActionButton>
                </div>
              </div>
          </div>
        </div>
      </motion.div>
    </section>
  )
}

export default Benefits
