import React from 'react'
import { BsLinkedin } from 'react-icons/bs'
import { FaGithub } from 'react-icons/fa'
import { FiDribbble } from 'react-icons/fi'

// eslint-disable-next-line

const HeaderSocials = () => {
    return (
        <div className="header__socials">
            <a href="https://linkdin.com" target="_blank" rel="noreferrer"> <BsLinkedin /></a>
            <a href="https://github.com" target="_blank" rel="noreferrer"><FaGithub /></a>
            <a href="https://dribbble.com" target="_blank" rel="noreferrer"><FiDribbble /></a>
        </div>
    )
}

export default HeaderSocials