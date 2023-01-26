import { SelectedPage, ClassType} from "@/shared/types"
import {motion} from "framer-motion"
import image1 from "../../assets/image1.png"
import image2 from "../../assets/image2.png"
import image3 from "../../assets/image3.png"
import image4 from "../../assets/image4.png"
import image5 from "../../assets/image5.png"
import image6 from "../../assets/image6.png"
import Class from './Class'

const classes: Array<ClassType> = [
  {
    name: "Personal Trainer",
    description: "Personal trainers assess their customers’ bodily strengths and weaknesses and create customized workout plans. They provide physical and mental guidance and monitor customers' progress on a regular basis.",
    image: image1,
  },
  {
    name: "Boxing Classes",
    image: image2,
  },
  {
    name: "Yoga Classes",
    image: image3,
  },
  {
    name: "Gymnastics",
    image: image4,
  },
  {
    name: "Crossfit Classes",
    description: "CrossFit welcomes and unites people of all ages, abilities, and goals around a methodology that is accessible and effective for all. We train, persevere, and progress together. We build strong local communities that drive unparalleled progress and a deep sense of belonging.",
    image: image5,
  },
  {
    name: "Weight Training Classes",
    description: "Weight training is an organized exercise in which muscles of the body are forced to contract under tension using weights, body weight or other devices in order to stimulate growth, strength, power, and endurance. Weight training is also called resistance training and strength training.",
    image: image6,
  },
]

type Props = {
setSelectedPage: (value:SelectedPage) => void 
}

const ourClasses = ({setSelectedPage}:Props) => {
  return (
    <section id="ourclasses" className="w-full bg-primary-100 py-40">
      <motion.div
      onViewportEnter={() => setSelectedPage(SelectedPage.OurClasses)}
      >
        <motion.div
        className="mx-auto w-5/6"
        initial="hidden"
        whileInView="visible"
        viewport={{once: true, amount: 0.5}}
        transition={{duration: 0.5}}
        variants={{
          hidden: {opacity:0, x:-50},
          visible: {opacity:1, x:0},
        }}
        >
          <div className="md:w-3/5">
          <h1 className="basis-3/5 font-montserrat text-3xl font-bold ">
            OUR CLASSES
          </h1>
          <p className="py-5">Activities include organized, group instructional programs such as spinning classes, yoga, and martial arts; organized and impromptu team sports; and individual fitness opportunities such as cardiovascular training, weight training, and swimming. Individual activities may be self-guided or conducted under the supervision of a trainer. </p>
          </div>

        </motion.div>
        <div className="mt-10 h-[353px] w-full overflow-x-auto overflow-y-hidden">
          <ul className="w-[2800px] whitespace-nowrap">
            {classes.map((item: ClassType, index) => (
              <Class
                key={`${item.name}-${index}`}
                name={item.name}
                description={item.description}
                image={item.image}
              />
            ))}
          </ul>
        </div>
      </motion.div>
    </section>
  )
}

export default ourClasses