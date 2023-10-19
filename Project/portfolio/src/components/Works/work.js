import React from 'react';
import './work.css';

import pro1 from '../../assets/pro-1.png';
import pro2 from '../../assets/pro-2.png';
import pro3 from '../../assets/pro-3.png';
import pro4 from '../../assets/pro-4.png';
import pro5 from '../../assets/pro-5.png';
import pro6 from '../../assets/pro-6.png';




const Works = () => {
  return (
    <section id='works'>
      <h2 className='worksTitle'>My Projects</h2>
      <span className='worksDesc'>This portfolio website was created using ReactJS, a popular front-end JavaScript library. I have a good knowledge of the MERN Stack, which is a full-stack JavaScript development framework consisting of MongoDB, Express.js, React.js, and Node.js. I have also created some projects using the MERN Stack.</span>
      <div className='worksImgs'>
        <img src={pro1} alt='project-1' className='worksImg'></img>
        <img src={pro2} alt='project-2' className='worksImg'></img>
        <img src={pro3} alt='project-3' className='worksImg'></img>
        <img src={pro4} alt='project-4' className='worksImg'></img>
        <img src={pro5} alt='project-5' className='worksImg'></img>
        <img src={pro6} alt='project-6' className='worksImg'></img>
      </div>
      <button className='worksBtn'>See More</button>
    </section>
    
  )
}

export default Works
