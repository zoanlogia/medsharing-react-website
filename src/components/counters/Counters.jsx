import CountUp from "react-countup"
import { counters } from "@/constants/index"
import styles from "@/constants/style"
import { useState } from "react"
import ScrollTrigger from 'react-scroll-trigger'

const Counters = () => {

    const [counterOn, setCounterOn] = useState(false)

  return (
    <>
    <ScrollTrigger onEnter={() => setCounterOn(true)} onExit={() => setCounterOn(false)} >
        <section className={`${styles.flexCenter} flex-row flex-wrap sm:mb-20 mb-6`}>
          {counters.map((counter) => (
            <div key={counter.id} className={`flex-1 flex justify-start items-center flex-col m-3`}>
              {/* <img src={counter.value} alt="" /> */}
              
              {/* <img className='h-[80px]' src={counter.icon} alt="" /> */}
              <h4 className='font-poppins font-semibold xs:text-[40px] text-[30px] xs:leading-[53px] leading-[43px] '>
                {counterOn && <CountUp start={counter.start} end={counter.end}/>}
                +
              </h4>
              <p className='font-poppins font-normal xs:text-[16px] text-[15px] xs:leading-[26px] leading-[21px] text-center'>{counter.title}</p>
            </div>
          ))}
        </section>
    </ScrollTrigger>
    </>
  )
}

export default Counters