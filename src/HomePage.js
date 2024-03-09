import React from 'react'
import pic1 from './images/Work_7.jpg'
import CountUp from 'react-countup';
import {Slide,Fade } from "react-awesome-reveal";
import skills from './images/skills2.jpg'
import frontend from './images/frontend.jpg'
import backend from './images/backend.jpg'
import fullstack from './images/fullstack1.jpg'
import html from './images/html5.png'
import css from './images/css3.png'
import js from './images/js.png'
import bs from  './images/bootstrap.png'
import jq from './images/jquery.png'
import react from './images/reactjs.png'
import material from './images/material ui.png'
import api from './images/api.png'
import node from './images/nodejs.png'
import express from './images/express.png'
import mongodb from './images/mongodb.png'
import api2 from './images/appi2.png'
import postman from './images/postman.png'
import contact from './images/contacts.jpg'
export default function HomePage() {
  return (
    <>
     
<div className="container mt-5">
<div className="row ">
        
        <div className="col-md-12 ">
        <div  className="carousel slide carousel-fade mt-4" data-ride="carousel">

  <div className="carousel-inner">
    <div className="carousel-item active">
      <div className="carousel-text">
        <div className="container">
          <div className="row">
            <div className="col-md-5 col-sm-12">
              <Slide>
              <h2><span>Hi Visitiors,</span><br/> Meet with the Passionate <br/><strong>MERN Stack Developer <br /></strong><b className='border px-2 rounded name'>Zainullah Khan</b></h2>
              </Slide>
             <p className="pb-3 pt-2">As an aspiring MERN Stack developer with 6 months of
                            hands-on experience, I aim to contribute my expertise in
                            web development to a forward-thinking organization. With a
                            strong foundation in modern web technologies, I am
                            dedicated to collaborating with dynamic teams to craft
                            innovative, user-friendly applications. I seek a challenging
                            MERN Stack developer role in a growth-oriented company to
                            make a meaningful impact and continue my professional
                            growth</p>
             <Fade cascade={true} damping={2} duration={1500} className='d-inline m-1 my-2'>
             <a className='btn shadow call ' href="https://wa.me/923046760779" target="_blank" rel="noreferrer">Hire Me</a>
             </Fade>
             <Fade cascade={true} damping={2} duration={1500} className='d-inline m-1 my-2'>
             <a className='btn download border rounded' href='/Zainullah-Khan (6).pdf' download="Zainullah Khan CV">Download CV <i className="far fa-cloud-download-alt"></i></a>
             </Fade>

             <div className="row mt-3 justify-content-center ">
              <div className="col-md-4 col-sm-6 skills text-center p-md-2 ">
              <h6><CountUp start={0} end={15} /> +</h6>
              <p>Trending Skills in Web Development</p>
              </div>
              <div className="col-md-4 col-sm-6 feelance text-center p-md-2">
              <h6><CountUp start={0}  end={2} />+</h6>
              <p>Years Experience in Freelancing Projects</p>
              </div>
              <div className="col-md-4 col-sm-6 projects text-center p-md-2">
              <h6><CountUp start={0}  end={6} /> + </h6>
              <p>Months experience in on-site job</p>
              </div>
             </div>
            </div>
            <div className="col-md-7">
              <div className="images">
              <img src={pic1} height="100%" width="100%" alt="" />

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
        </div>




      </div>

              {/* Skills  */}

<div className="about-me row mt-4 mb-2 justify-content-center px-3">
<div className="d-lg-block d-none col-lg-6 my-3 order-sm-last order-md-first">
  <div className="images">
    <img src={skills} alt="" />

  </div>
  </div>
  <div className="col-md-12 col-lg-6  my-3 order-first order-sm-last">
  <h2 className='text-start'>My Technical Skills: </h2>
  <p>My Technical Skills  show my ability for the post of <strong className='border px-2 py-1 rounded my-1'>MERN Stack Developer</strong></p>
  <div className="row">
    <div className="col-md-12">
    <h5 className=' mt-2'>My Skills:</h5>
    </div>
    <div className="col-md-6 my-1" >
     
<p className='my-2'><span className="material-icons">radio_button_checked</span> React JS</p>
      <div className="progress m-0 p-0 rounded">
  <div className="progress-bar react progress-bar-animated progress-bar-striped" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"></div>
</div>

<p className='my-2'><span className="material-icons">radio_button_checked</span> Node JS</p>
      <div className="progress m-0 p-0 rounded">
  <div className="progress-bar progress-bar-animated progress-bar-striped node" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"></div>
</div>
<p className='my-2'><span className="material-icons">radio_button_checked</span> Express JS</p>
      <div className="progress m-0 p-0 rounded">
  <div className="progress-bar progress-bar-animated progress-bar-striped express" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"></div>
</div>
<p className='my-2'><span className="material-icons">radio_button_checked</span> JavaScript</p>
      <div className="progress m-0 p-0 rounded">
  <div className="progress-bar progress-bar-animated progress-bar-striped js" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"></div>
</div>
<p className='my-2'><span className="material-icons">radio_button_checked</span> MongoDB</p>
      <div className="progress m-0 p-0 rounded">
  <div className="progress-bar progress-bar-animated progress-bar-striped mongo" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"></div>
</div>
<p className='my-2'><span className="material-icons">radio_button_checked</span> TypeScript</p>
      <div className="progress m-0 p-0 rounded">
  <div className="progress-bar progress-bar-animated progress-bar-striped ts" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"></div>
</div>
<p className='my-2'><span className="material-icons">radio_button_checked</span> Material UI</p>
      <div className="progress m-0 p-0 rounded">
  <div className="progress-bar progress-bar-animated progress-bar-striped material" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"></div>
</div>
<p className='my-2'><span className="material-icons">radio_button_checked</span> Github</p>
      <div className="progress m-0 p-0 rounded">
  <div className="progress-bar progress-bar-animated progress-bar-striped rl" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"></div>
</div>
<p className='my-2'><span className="material-icons">radio_button_checked</span> JQuery</p>
      <div className="progress m-0 p-0 rounded">
  <div className="progress-bar progress-bar-animated progress-bar-striped jq" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"></div>
</div>


    </div>
    <div className="col-md-6 my-1 ">
    <p className='my-2'><span className="material-icons">radio_button_checked</span> Deployment</p>
      <div className="progress m-0 p-0 rounded">
  <div className="progress-bar progress-bar-animated progress-bar-striped rl" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"></div>
</div>

<p className='my-2'><span className="material-icons">radio_button_checked</span> Node Package Manager</p>
      <div className="progress m-0 p-0 rounded">
  <div className="progress-bar progress-bar-animated progress-bar-striped npm" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"></div>
</div>

<p className='my-2'><span className="material-icons">radio_button_checked</span> API Development</p>
      <div className="progress m-0 p-0 rounded">
  <div className="progress-bar progress-bar-animated progress-bar-striped api" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"></div>
</div>
<p className='my-2'><span className="material-icons">radio_button_checked</span> API Integration</p>
      <div className="progress m-0 p-0 rounded">
  <div className="progress-bar progress-bar-animated progress-bar-striped apii" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"></div>
</div>

<p className='my-2'><span className="material-icons">radio_button_checked</span> HTML 5</p>
      <div className="progress m-0 p-0 rounded">
  <div className="progress-bar progress-bar-animated progress-bar-striped html" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"></div>
</div>
<p className='my-2'><span className="material-icons">radio_button_checked</span> CSS 3</p>
      <div className="progress m-0 p-0 rounded">
  <div className="progress-bar progress-bar-animated progress-bar-striped css" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"></div>
</div>
<p className='my-2'><span className="material-icons">radio_button_checked</span> Bootstrap</p>
      <div className="progress m-0 p-0 rounded">
  <div className="progress-bar progress-bar-animated progress-bar-striped bt" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"></div>
</div>
<p className='my-2'><span className="material-icons">radio_button_checked</span> Cloudinary</p>
      <div className="progress m-0 p-0 rounded">
  <div className="progress-bar progress-bar-animated progress-bar-striped cd" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"></div>
</div>
    </div>
  </div>
  </div>

 
 
  </div>

  {/* My Services */}

  <div className="row services justify-content-center  mb-2 ">
    <div className="col-md-12">
      <h2 className="text-center"><i className="fad fa-brackets-curly me-1"></i>Services</h2> 
      <p className='text-center'><b>Services</b> offered by me in Web Development as <strong className='border px-2 py-1 rounded my-1'>MERN Stack Developer</strong></p>
    </div>
    <div className="col-md-4">
    <div className="card m-1 shadow rounded border-0" >
  <img src={frontend} className="card-img-top" alt=""/>
  <div className="card-body">
    <h5 className="card-title">Frontend Development</h5>
    <p className="card-text">Desiging interactive & user-friendly web applications using</p>
    <div className="images">
      <img src={html} alt="" />
      <img src={css} alt="" />
      <img src={bs} alt="" />
      <img className='ms-1' src={js} alt="" />
      <img className='ms-1' src={jq} alt="" />
      <img className='ms-1' src={react} alt="" />
      <img className='ms-1' src={material} alt="" />
      <img className='ms-1' src={api} alt="" />
    </div>
  </div>
</div>
    </div>
    <div className="col-md-4">
    <div className="card m-1 shadow rounded border-0" >
  <img src={backend} className="card-img-top" alt=""/>
  <div className="card-body">
    <h5 className="card-title">Backend Development</h5>
    <p className="card-text">Adding functionalities to the websites & web apps using modern JS frameworks</p>
    <div className="images">
      <img src={node} alt="" />
      <img className='ms-1' src={express} alt="" />
      <img className='ms-1' src={mongodb} alt="" />
      <img src={api2} alt="" />
      
    </div>
  </div>
</div>
    </div>
    <div className="col-md-4">
    <div className="card m-1 shadow rounded border-0" >
  <img src={fullstack} className="card-img-top" alt=""/>
  <div className="card-body">
    <h5 className="card-title">Full Stack Development</h5>
    <p className="card-text">Design and Develop fully functional & user-friendly websites & web apps with </p>
    <div className="images">
      <img  src={js} alt="" />
      <img className='ms-1' src={react} alt="" />
      <img className='ms-1' src={api} alt="" />
      <img className='ms-1' src={node} alt="" />
      <img className='ms-1' src={express} alt="" />
      <img className='ms-1' src={mongodb} alt="" />
      <img className='ms-1' src={api2} alt="" />
      <img className='ms-1' src={postman} alt="" />
    </div>
  </div>
</div>
    </div>
    
  </div>
  <hr className='rounded'/>
  {/* Contacts */}

  <div className="row contacts justify-content-center my-4 px-2">

<div className="col-md-6 ">
<h2 className='text-start'>Connect with me: </h2>
  <p>Connect with me throgh my Whatsapp and Email for <strong className='border px-2 py-1 rounded my-1'>Communication</strong></p>
  <h6 className='my-2'>Whatsapp me at:</h6> 
  <a  href=" https://wa.me/923046760779" target="_blank"><i className="fab fa-whatsapp me-1"></i>+923046760779</a>
  <h6 className='my-2'>Email me:</h6>
  <a href="mailto:zk013506@gmail.com"><i className="far fa-envelope me-1"></i>zk013506@gmail.com</a>
  <h6 className='my-2'>Github </h6>
  <a href="https://github.com/Crazy-Zaini007"><i className="fab fa-github me-1"></i>https://github.com/Crazy-Zaini007</a>
  <h6 className='my-2'>Address</h6>
  <a href="/">788 R1, Johar Town Lahore</a>
  
    {/* <h6>Whatsapp at :</h6>
    <a className='btn call m-0' href=" https://wa.me/923046760779" target="_blank"><i className="fab fa-whatsapp"></i> +92304-6760779</a> */}

  
</div>
<div className="col-md-6 d-lg-block d-none">
  <div className="images">
  <img className='rounded shadow' src={contact} alt="" />

  </div>
</div>

  </div>
</div>

<div className="row footer p-0 m-0">
<div className="col-md-12 py-3">

</div>
</div>

    </>
  )
}
