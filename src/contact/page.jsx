import React from 'react';
import classes from './contact.module.css';

const Contact = () => {
  return (
    <div>
      <h1>Contact Page</h1>

      <button className='global-btn'>Global Login Button</button>
      <button className={classes.contactBtn}>Local button</button>

    </div>
  )
}

export default Contact;