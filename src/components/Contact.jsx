import React from 'react'
import contact from '../img/contact-img.svg'

function Contact() {
  return (
    <div className='contact_contanier'>
        <div className='contact_img'>
            <img src={contact} alt="" />
        </div>
        <div className='contact_form'>
            <h2>Get In Touch</h2>
            <div className='names'> 
                <input type="text"  placeholder='First Name'/>
                <input type="text" placeholder='Last Name'/>
            </div>
            <div className='names'> 
                <input type="text"  placeholder='Email'/>
                <input type="text" placeholder='Phone No'/>
            </div>
            <textarea placeholder='Massage'  rows="7" cols="40"></textarea>
         <button className='send'>Send</button>
        </div>
    </div>
  )
}

export default Contact