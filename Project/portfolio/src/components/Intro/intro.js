import React from 'react';
import { Link } from 'react-scroll';
import './intro.css';

import bg from '../../assets/background.png';
import btnImg from '../../assets/hireme.png';

const Intro = () => {
  return (
    <section id='intro'>
        <div className='introContent'>
            <span className='hello'>Hello,</span>
            <span className='introText'>I'm <span className='introName'>Mohd Umar</span><br/>Web Developer</span>
            <p className='introPara'>I'm a beginner web developer and a Bachelor of Computer Applications <br/> student with a passion for MERN Stack development.</p>
            <Link><button className='btn'><img src={btnImg} alt='btn' className='btnImg'/>Hire me</button></Link>

        </div>
        <img src={bg} alt='Profile' className='bg'></img>
    </section>
  )
}

export default Intro
