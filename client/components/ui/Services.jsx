import React from 'react'
import { BsShieldFillCheck } from 'react-icons/bs'
import { BiSearchAlt } from 'react-icons/bi'
import { RiHeart2Fill } from 'react-icons/ri'

const style = {
  wrapper: `gradient-bg-services flex w-full items-center justify-center`,
  container: `flex flex-col items-center justify-between py-12 px-4 md:p-20 mf:flex-row`,
  title: `flex flex-1 flex-col items-start justify-start`,
  titleTextLarge: `text-gradient py-2 text-3xl text-white sm:text-5xl`,
  titleTextSmall: `my-2 w-11/12 text-left text-base font-light text-white md:w-9/12`,
  serviceCard: `flex flex-1 flex-col items-center justify-start`,
}

const ServiceCard = ({ color, title, icon, subtitle }) => (
  <div className="white-glassmorphism m-2 flex cursor-pointer flex-row items-start justify-start p-3 hover:shadow-xl">
    <div
      className={`flex h-10 w-10 items-center justify-center rounded-full ${color}`}
    >
      {icon}
    </div>
    <div className="ml-5 flex flex-1 flex-col">
      <h3 className="mt-2 text-lg text-white">{title}</h3>
      <p className="mt-1 text-sm text-white md:w-9/12">{subtitle}</p>
    </div>
  </div>
)

function Services() {
  return (
    <div className={style.wrapper}>
      <div className={style.container}>
        <div className={style.title}>
          <h1 className={style.titleTextLarge}>
            Services that we
            <br />
            continue to improve
          </h1>
          <p className={style.titleTextSmall}>
            The best choice for buying and selling your crypto assets, with the
            various super friendly services we offer
          </p>
        </div>

        <div className={style.serviceCard}>
          <ServiceCard
            color="bg-[#2952E3]"
            title="Security guarantee"
            icon={<BsShieldFillCheck fontSize={21} className="text-white" />}
            subtitle="Security is guaranteed. We always maintain privacy and maintain the quality of our products"
          />
          <ServiceCard
            color="bg-[#8945F8]"
            title="Best exchange rates"
            icon={<BiSearchAlt fontSize={21} className="text-white" />}
            subtitle="Security is guaranteed. We always maintain privacy and maintain the quality of our products"
          />
          <ServiceCard
            color="bg-[#F84550]"
            title="Fastest transactions"
            icon={<RiHeart2Fill fontSize={21} className="text-white" />}
            subtitle="Security is guaranteed. We always maintain privacy and maintain the quality of our products"
          />
        </div>
      </div>
    </div>
  )
}

export default Services
