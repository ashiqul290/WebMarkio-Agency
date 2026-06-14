import React from 'react'
import HeroSecition from './_web/HeroSecition'
import LogoSeciton from './_web/LogoSeciton'
import Features from './_web/Features'
import Service from './_web/Service'
import Project from './_web/Project'
import Tecnology from './_web/Tecnology'

const page = () => {
  return (
    <>
      {/* <AllSection /> */}

      <HeroSecition />
      <Service />
    <Project />
    <Tecnology />

      {/* <Features /> */}

    </>
  )
}

export default page
