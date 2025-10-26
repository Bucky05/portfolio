import React from 'react'

import { MapIcon, DevicePhoneMobileIcon, EnvelopeIcon } from '@heroicons/react/24/solid'
import { FaLinkedin, FaGithub } from 'react-icons/fa'
import config from '../config/config'
import { link } from 'fs'
const { linkedinProfileLink, emailID, gitHubLink } = config;
const Footer = () => {
  const mailLink = "mailto:"+emailID
  return (
    <footer className="bg-[#02050a] text-white py-8">
  <div className="w-[85%] mx-auto flex flex-col md:flex-row items-center justify-between border-b border-gray-700 pb-6">
    <p className="text-sm opacity-50"></p>

    {/* Unified contact + social section */}
    <div className="flex items-center space-x-6">
      {/* Mobile */}
      <a 
        href="tel:+917725946209" 
        className="flex items-center space-x-2 hover:text-[#55e6a5] transition"
      >
        <DevicePhoneMobileIcon className="w-5 h-5" />
        <span className="text-sm">+91 77259 46209</span>
      </a>

      {/* Email */}
      <a 
        href={mailLink} 
        className="flex items-center space-x-2 hover:text-[#55e6a5] transition"
      >
        <EnvelopeIcon className="w-5 h-5" />
        <span className="text-sm">{emailID}</span>
      </a>

      {/* LinkedIn */}
      <a 
        href={linkedinProfileLink}
        target="_blank" 
        rel="noopener noreferrer"
        className="hover:text-[#55e6a5] transition"
      >
        <FaLinkedin size={22} />
      </a>

      {/* GitHub */}
      <a 
        href={gitHubLink} 
        target="_blank" 
        rel="noopener noreferrer"
        className="hover:text-[#55e6a5] transition"
      >
        <FaGithub size={22} />
      </a>
    </div>
  </div>

  {/* Bottom spacing or optional center note */}
  <div className="w-[85%] mx-auto mt-4 text-center text-xs opacity-50">
    Only purpose of life is to keep learning and applying that knowledge.
  </div>
</footer>


  )
}

export default Footer