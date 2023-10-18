import React from 'react';
import './skills.css';

import UI from '../../assets/ui-design.png';
import webdev from '../../assets/web-dev.png';
import Mern from '../../assets/mern.png';

const Skills = () => {
  return (
    <section id='skills'>
        <span className='skillTitle'>What I do</span>
        <span className='skillDesc'>I am a Computer application student and a freshers intern as a MERN Stack developer. I am passionate about computer science and I am eager to learn and grow as a developer. I have experience with the MERN Stack, including React, Node.js, Express.js, and MongoDB. I am also familiar with other technologies such as HTML, CSS, JavaScript, and Python. I am a hard worker and I am always willing to go the extra mile. I am also a team player and I am always willing to help others. I am excited to start my career as a software developer and I look forward to making a positive impact on the world.</span>
        <div className='skillBars'>
            <div className='skillBar'>
                <img src={UI} alt='UI/UX' className='skillBarImg'></img>
                <div className='skillBarText'><h2>UI/UX Design</h2>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p></div>
            </div>
            <div className='skillBar'>
                <img src={webdev} alt='Web-Dev' className='skillBarImg'></img>
                <div className='skillBarText'><h2>Web Developer</h2>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p></div>
            </div>
            <div className='skillBar'>
                <img src={Mern} alt='MERN-Stack' className='skillBarImg'></img>
                <div className='skillBarText'><h2>MERN Stack Developer</h2>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p></div>
            </div>

        </div>
    </section>
  )
}

export default Skills;
