import { SelectedPage } from '@/shared/types'
import { motion } from 'framer-motion'
import React from 'react'
import { useForm } from 'react-hook-form'
import CoverGirl3 from '../../assets/CoverGirl3.png'

type Props = {
  setSelectedPage: (value:SelectedPage) => void
}

const ContactUs = ({setSelectedPage}: Props) => {
  const inputStyles= `mt-5 w-full rounded-lg bg-primary-300 px-5 py-3 placeholder-white`

  const {
    register,
    trigger,
    formState: { errors }
  } = useForm()

  const onSubmit = async ( e: any ) => {
    const isValid = await trigger();
    if(!isValid){
      e.preventDefault()
    }
  }

  return (
    <section id="contactus" className="mx-auto w-5/6 pt-24 pb-32">
      <motion.div
      onViewportEnter={() => setSelectedPage(SelectedPage.ContactUs)}
      >
        {/* HEADER */}
        <motion.div 
        className="md:w-3/5"
        initial="hidden"
        whileInView="visible"
        viewport={{once: true, amount: 0.5}}
        transition={{ duration: 0.5}}
        variants={{
          hidden: {opacity:0, x:-50},
          visible: {opacity:1, x:0},
        }}
        >
          <h1 className="basis-3/5 font-montserrat text-3xl font-bold ">
            <span className="text-primary-500">JOIN NOW</span> TO GET IN SHAPE
          </h1>
           <p className='my-5'>Getting fit, in fact, can be a key supporter in almost every area of self-improvement: from helping to eradicate anxiety and low self-esteem, to combatting sleepless nights and ageing. Whatever the best version of you looks like, make no mistake. Exercising will help you get there, and the benefits are countless. Join now to get in shape.</p>
        </motion.div>
        {/* FORM AND IMAGE */}
        <div className="mt-10 justify-between gap-8 md:flex">
          <motion.div
          className="mt-10 basis-3/5 md:mt-0"
          initial="hidden"
          whileInView="visible"
          viewport={{once: true, amount: 0.5}}
          transition={{ duration: 0.5}}
          variants={{
            hidden: {opacity: 0, y: 50},
            visible: {opacity: 1, y: 0},
          }}
          >
            <form
              target="_blank"
              onSubmit={onSubmit}
              action="https://formsubmit.co/6339cccecc6ed8c3b96f40707c856a9b"
              method="POST"
            >
              <input 
              className={inputStyles}
              type='text'
              placeholder='NAME'
              {...register('name',{
                required: true,
                maxLength: 100,
              })}
              />
              {errors.name && (
                <p className='mt-1 text-primary-500'>
                  {errors.name.type === "required" && "This field is required."}
                  {errors.name.type === "maxLength" && "Max length is 100 char."}

                </p>
              )}

              <input 
              className={inputStyles}
              type='text'
              placeholder='EMAIL'
              {...register('email',{
                required: true,
                pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              })}
              />
              {errors.email && (
                <p className='mt-1 text-primary-500'>
                  {errors.email.type === "required" && "This field is required."}
                  {errors.email.type === "pattern" && "Invalid email adress."}

                </p>
              )}

              <textarea 
              className={inputStyles}
              placeholder='MESSAGE'
              rows={4}
              cols={50}
              {...register('message',{
                required: true,
                maxLength: 2000,
              })}
              />
              {errors.message && (
                <p className='mt-1 text-primary-500'>
                  {errors.message.type === "required" && "This field is required."}
                  {errors.message.type === "maxLength" && "Max length is 2000 char."}

                </p>
              )}

              <button
              type='submit' 
              className='mt-5 rounded-lg bg-secondary-500 px-20 py-3 transition duration-500 hover:text-white'>SUBMIT</button>

            </form>

          </motion.div>
          <motion.div 
          className='relative basis-2/5 md:mt-0'
          initial="hidden"
          whileInView="visible"
          viewport={{once: true, amount: 0.5}}
          transition={{ delay: 0.2, duration: 0.5}}
          variants={{
          hidden: {opacity:0, x:-50},
          visible: {opacity:1, x:0},
        }}
        >
          <div className='md:before:content-hustletext w-full before:absolute before:-bottom-0 before:-right-10 before:z-[-1]'>
          <img 
            className='w-full px-5 py-3'
            alt='contact-us-cover-girl-3'
            src={CoverGirl3}
            ></img>
          </div>
         

          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}
export default ContactUs
