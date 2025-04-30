import React from 'react'

import ServiceHero from '../../components/ServiceHero'
import PageSegmentMain from './(components)/PageSegmentMain'
import PageSegment4 from './(components)/PageSegment4'
import PageSegment5 from './(components)/PageSegment5'
import PageSegmentDropdowns from './(components)/PageSegmentDropdowns'
import Contact from '../../components/Contact'
import BlackSegment from './(components)/BlackSegment'

import brandTemplate from '../../public/pageHeros/brandTemplate.webp'
import brandTemplateMob from '../../public/pageHeros/mob/brandTemplateMob.webp'

const page = () => {
  return (
    <main>
      <ServiceHero
        title="Microsoft Word Brand Template's"
        desktopImage={brandTemplate}
        mobileImage={brandTemplateMob}
        altDesk={"Microsoft Word Brand Template Services"}
        altMob={"Brand templates for Microsoft Word"}
      />
      <PageSegmentMain />
      <PageSegment4 />
      <BlackSegment />
      <PageSegment5 />
      <PageSegmentDropdowns />
      <Contact />
    </main>
  )
}

export default page