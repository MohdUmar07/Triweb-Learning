import React from 'react';
import './contact.css';

import facebook from '../../assets/facebook.png';
import insta from '../../assets/instagram.png';
import twitter from '../../assets/twitter.png';


const Contact = () => {
  return (
   <section id='contactsPage'>
       <div id='contact'>
            <h1 className='contactPageTitle'>Contact Me</h1>
            <span className='contactDesc'> Please fill the form for any quires and support </span>
            <form className='cotactForm'>
                <input type='text' className='name' placeholder='Your Name' />
                <input type='email' className='email' placeholder='Your Email' />
                <textarea className='msg' name='message' rows='5' placeholder='Your Message' />
                <button type='submit' value='Send' className='submitBtn'>Submit</button>
                <div className='links'>
                    <img src={facebook} alt='facebook' className='link'/>
                    <img src={insta} alt='instagram' className='link'/>
                    <img src={twitter} alt='twitter' className='link'/>
                    
                    
                </div>
            </form>
       </div>
   </section>
  )
}

export default Contact
