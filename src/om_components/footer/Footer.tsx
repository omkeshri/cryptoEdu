import React from 'react'
import FooterAbout from './FooterAbout'
import FooterCompany from './FooterCompany'
import FooterCourses from './FooterCourses'
import FooterSupport from './FooterSupport'
import FooterCopyright from './FooterCopyright'

interface FooterProps {
  viewCourse: () => void;
}

export const Footer = ({viewCourse}:FooterProps) => {
  return (
    <div className="pt-10 md:pt-16 lg:pt-24 pb-4 px-2 md:px-10 lg:px-12 xl:px-36 bg-[#192031] rounded-lg backdrop-blur-sm border border-white/10">
      <div className="flex flex-col md:flex-row items-start justify-between text-white">
        <FooterAbout />
        <FooterCompany />
        <FooterCourses viewCourse = {() => viewCourse()}/>
        <FooterSupport />
      </div>
      <FooterCopyright />
    </div>
  )
}
