import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import drive1 from './images/Intro Screen (Desktop).PNG'
import drive2 from './images/Login Ui (Desktop).PNG'
import drive3 from './images/Driver create gig desktop.png'
import drive4 from './images/driver gigs desktop.PNG'
import drive5 from './images/Driver Wishlist Ui (Desktop).PNG'
import drive6 from './images/driving jobs desktop.PNG'
import threelogin from './images/3d login.PNG'
import three1 from './images/3d1.PNG'
import three2 from './images/3d2.PNG'
import three3 from './images/3d3.PNG'
import three4 from './images/3d4.PNG'
import three5 from './images/3d5.PNG'
import three6 from './images/3d6.PNG'
import html from './images/html5.png'
import trade1 from './images/trade1.PNG'
import trade2 from './images/trade2.PNG'
import trade3 from './images/trade3.PNG'
import trade4 from './images/trade4.PNG'
import trade5 from './images/trade5.PNG'
import trade6 from './images/trade6.PNG'
import cr1 from './images/cr1.PNG'
import cr2 from './images/cr2.PNG'
import cr3 from './images/cr3.PNG'
import cr4 from './images/cr4.PNG'
import cr5 from './images/cr5.PNG'
import cr6 from './images/cr6.PNG'
import md1 from './images/md1.PNG'
import md2 from './images/md2.PNG'
import md3 from './images/md3.PNG'
import md4 from './images/md4.PNG'
import md5 from './images/md5.PNG'
import md6 from './images/md6.PNG'
import md7 from './images/md7.PNG'
import fe1 from './images/fe1.PNG'
import fe2 from './images/fe2.PNG'
import fe3 from './images/fe3.PNG'
import fe4 from './images/fe4.PNG'
import fe5 from './images/fe5.PNG'
import fe6 from './images/fe6.PNG'
import fe7 from './images/fe7.PNG'
import ex1 from './images/ex1.PNG'
import ex2 from './images/ex2.PNG'
import ex3 from './images/ex3.PNG'
import ex4 from './images/ex4.PNG'
import ms1 from './images/ms1.PNG'
import ms2 from './images/ms2.PNG'
import ms3 from './images/ms3.PNG'
import ms4 from './images/ms4.PNG'
import ms5 from './images/ms5.PNG'

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
export default function Projects() {

   


  return (
    <>
      <div className="container mt-5 projects">
        <div className="row mt-5 px-2 py-4">
            <div className="col-md-12 mt-3">
                <h2 className=''>Projects using MERN Stack</h2>
            </div>
            <div className="col-md-6">
                <h5>Final Year Project (in University) </h5>
                <h6>Description:</h6>
                <p><strong>Note: Top 10 Ranking: My Final Year Project
Among the Best 10 at HERA Inter Universities Exhibition 2023.</strong></p>
                <p>A web-based Application where we connect unemployed drivers with auto-owners who need drivers for there vehicles. Drive deals includes shift and
                experience based jobs for the drivers, where drivers submit applications for
                the jobs posted by auto-owners. And drivers creates their gigs as well, where
                auto-owners send hiring requests. Drivers can switch their profiles to
                Hired/Available as well.</p>
                <h4>Technologies Used:</h4>
                <div className="images">
                <img src={html} alt="" />
                <img src={css} alt="" />
                <img src={bs} alt="" />
                <img className='m-1' src={js} alt="" />
                <img className='m-1' src={jq} alt="" />
                <img className='m-1' src={react} alt="" />
                <img className='m-1' src={material} alt="" />
                <img className='m-1' src={api} alt="" />
                <img className='m-1' src={node} alt="" />
                <img className='m-1' src={express} alt="" />
                <img className='m-1' src={mongodb} alt="" />
                <img className='m-1' src={api2} alt="" />
                <img className='m-1' src={postman} alt="" />
            
            </div>
            </div>


            <div className="col-md-6 py-2">
            <Carousel axis="vertical"   showArrows={false} showStatus={false} autoPlay={true} infiniteLoop={true}>
                <div>
                    <img src={drive1} alt='' />
                    
                </div>
                <div>
                    <img src={drive2} alt=''/>
                  
                </div>
                <div>
                    <img src={drive3} alt=''/>
                   
                </div>
                <div>
                    <img src={drive4} alt='' />
                    
                </div>
                <div>
                    <img src={drive5} alt=''/>
                  
                </div>
                <div>
                    <img src={drive6} alt=''/>
                   
                </div>
            </Carousel>

            </div>
        </div>
        

        <div className="row px-2 my-3 py-4">
           
            <div className="col-md-6 order-sm-last order-md-last  order-lg-first py-2" >
            <Carousel axis="vertical"  showArrows={false} showStatus={false} autoPlay={true} infiniteLoop={true}>
                <div>
                    <img src={threelogin} alt='' />
                    
                </div>
                <div>
                    <img src={three1} alt=''/>
                  
                </div>
                <div>
                    <img src={three2} alt=''/>
                   
                </div>
                <div>
                    <img src={three3} alt='' />
                    
                </div>
                <div>
                    <img src={three4} alt=''/>
                  
                </div>
                <div>
                    <img src={three5} alt=''/>
                   
                </div>
                <div>
                    <img src={three6} alt=''/>
                   
                </div>
            </Carousel>
            </div>

            <div className="col-md-6 order-first order-sm-last order-md-first">
                <h5>3D-Content-Studio-2022</h5>
                <h6>Description:</h6>
                <p>A web app for streamlined 3D model management. Users can easily request, monitor, and update 3D models. The app includes user authentication, request tracking, and an admin panel for task management. It integrates 3D modeling tools and offers notifications. Security measures protect user data, and regular maintenance ensures optimal functionality.</p>
                <h4>Technologies Used:</h4>
                <div className="images">
                <img src={html} alt="" />
                <img src={css} alt="" />
                <img src={bs} alt="" />
                <img className='m-1' src={js} alt="" />
                <img className='m-1' src={react} alt="" />
                <img className='m-1' src={api} alt="" />
                <img className='m-1' src={node} alt="" />
                <img className='m-1' src={express} alt="" />
                <img className='m-1' src={mongodb} alt="" />
                <img className='m-1' src={postman} alt="" />
            
            </div>
            <a className='my-2'  href="https://github.com/Crazy-Zaini007/3D-Content-Studio-2022" target='blank'><i className="fab fa-github me-2"> https://github.com/Crazy-Zaini007/3D-Content-Studio-2022 </i></a>
            </div>

        </div>

        <div className="row px-2 my-3 py-4">
            <div className="col-md-6">
            <h5>Trade Mission</h5>
            <h6>Description:</h6>
            <p>Designed a cryptocurrency trading website facilitating the buying and selling
            of digital coins. Implemented real-time market data tracking for users to
            monitor daily coin exchange rates and trends.</p>
            <h4>Technologies Used:</h4>
            <div className="images">
                <img src={html} alt="" />
                <img src={css} alt="" />
                <img src={bs} alt="" />
                <img className='m-1' src={js} alt="" />
                <img className='m-1' src={react} alt="" />
                <img className='m-1' src={api} alt="" />
                <img className='m-1' src={material} alt="" />
            
            </div>
            <a className='my-2'  href="https://github.com/Crazy-Zaini007/TradeMission" target='blank'><i className="fab fa-github me-2"> https://github.com/Crazy-Zaini007/TradeMission </i></a>

            </div>

            <div className="col-md-6 py-2">
                <Carousel axis="vertical" showArrows={false} showStatus={false} autoPlay={true} infiniteLoop={true}>
                    <div>
                        <img src={trade1} alt="" />
                    </div>
                    <div>
                        <img src={trade2} alt="" />
                    </div>
                    <div>
                        <img src={trade3} alt="" />
                    </div>
                    <div>
                        <img src={trade4} alt="" />
                    </div>
                    <div>
                        <img src={trade5} alt="" />
                    </div>
                    <div>
                        <img src={trade6} alt="" />
                    </div>
                </Carousel>
            </div>
        </div>

        <div className="row px-2 my-3 py-4">
            <div className="col-md-6 py-2 order-sm-last order-md-last  order-lg-first">
            <Carousel axis="vertical" showArrows={false} showStatus={false} autoPlay={true} infiniteLoop={true}>
                    <div>
                        <img src={cr1} alt="" />
                    </div>
                    <div>
                        <img src={cr2} alt="" />
                    </div>
                    <div>
                        <img src={cr3} alt="" />
                    </div>
                    <div>
                        <img src={cr4} alt="" />
                    </div>
                    <div>
                        <img src={cr5} alt="" />
                    </div>
                    <div>
                        <img src={cr6} alt="" />
                    </div>
                </Carousel>
            </div>
            <div className="col-md-6 order-first order-sm-last order-md-first">
            <h5>Crypto Express</h5>
                <h6>Description:</h6>
                <p>Crypto Express is the technological solution provider,
                and it continuously leverages its expertise in software
                (e-KYC, Blockchain Solution, Trading Platform,
                Marketplace, etc.) to integrate its unique software
                systems with emerging technologies..</p>
                <h4>Technologies Used:</h4>
                <div className="images">
                <img src={html} alt="" />
                <img src={css} alt="" />
                <img src={bs} alt="" />
                <img className='m-1' src={js} alt="" />
                <img className='m-1' src={react} alt="" />
            
            </div>
            <a className='my-2'  href="https://github.com/Crazy-Zaini007/cryptoexpress" target='blank'><i className="fab fa-github me-2"> https://github.com/Crazy-Zaini007/cryptoexpress </i></a>

            </div>
        </div>

        <div className="row px-2 my-3 py-4">
            <div className="col-md-6">
                <h5>Xchain Medicare</h5>
                <h6>Description:</h6>
                <p>It is now termed as “clinic/hospital booking” and how can we make benefit oh PHR from one clinic to other clinic on cloud using blockchain Clinic Co-sharing includes 2 processes A clinician books a healthlancer (consultant) to his/her clinic/hospital.- Healthlancer booking This is a newly added way, where a Doctor (Who can be a Healthlancer or an academicians or a clinician) can book a clinic/hospital to treat his own patients ( can be friends, family, neighbours or referals).- Clinic booking and all Records are shared from client Private key to access the pateint record.</p>
                <h4>Technologies Used:</h4>
                <div className="images">
                <img src={html} alt="" />
                <img src={css} alt="" />
                <img src={bs} alt="" />
                <img className='m-1' src={js} alt="" />
                <img className='m-1' src={react} alt="" />
            
            </div>
            <a className='my-2'  href="https://github.com/Crazy-Zaini007/Medicare-Sharing" target='blank'><i className="fab fa-github me-2"> https://github.com/Crazy-Zaini007/Medicare-Sharing </i></a>

            </div>
            <div className="col-md-6 py-2">
            <Carousel axis="vertical" showArrows={false} showStatus={false} autoPlay={true} infiniteLoop={true}>
                    <div>
                        <img src={md1} alt="" />
                    </div>
                    <div>
                        <img src={md2} alt="" />
                    </div>
                    <div>
                        <img src={md3} alt="" />
                    </div>
                    <div>
                        <img src={md4} alt="" />
                    </div>
                    <div>
                        <img src={md5} alt="" />
                    </div>
                    <div>
                        <img src={md6} alt="" />
                    </div>
                     <div>
                        <img src={md7} alt="" />
                    </div>
                </Carousel>
            </div>
        </div>


            <div className="row px-2 my-3 py-4">
                <div className="col-md-6 py-2 order-sm-last order-md-last  order-lg-first">
                <Carousel axis="vertical" showArrows={false} showStatus={false} autoPlay={true} infiniteLoop={true}>
                        <div>
                            <img src={fe1} alt="" />
                        </div>
                        <div>
                            <img src={fe2} alt="" />
                        </div>
                        <div>
                            <img src={fe3} alt="" />
                        </div>
                        <div>
                            <img src={fe4} alt="" />
                        </div>
                        <div>
                            <img src={fe5} alt="" />
                        </div>
                        <div>
                            <img src={fe6} alt="" />
                        </div>
                        <div>
                            <img src={fe7} alt="" />
                        </div>
                    </Carousel>
                </div>
                <div className="col-md-6 order-first order-sm-last order-md-first">
                <h5>Farm Earner</h5>
                    <h6>Description:</h6>
                    <p>Farm Earner is a crypto gaming platform that provides virtual farming environment through stake to earn, breed to earn, and battle to earn. 
                    Join in the Farm earner to discover a world of endless possibilities.</p>
                    <h4>Technologies Used:</h4>
                    <div className="images">
                    <img src={html} alt="" />
                    <img src={css} alt="" />
                    <img src={bs} alt="" />
                    <img className='m-1' src={js} alt="" />
                    <img className='m-1' src={react} alt="" />
                
                </div>
            <a className='my-2'  href="https://github.com/Crazy-Zaini007/farmearner" target='blank'><i className="fab fa-github me-2"> https://github.com/Crazy-Zaini007/farmearner </i></a>

                </div>
            </div>

        <div className="row px-2 my-3 py-4">
            <div className="col-md-6">
                <h5>XDao</h5>
                <h6>Description:</h6>
                <p>ExDao is a decentralized autonomous organization (DAO) investing in
          non fungible tokens (NFTs) used in virtual worlds and blockchain-based games. The
          organization's mission is to create the biggest virtual world economy, optimizing its community-owned assets for maximum utility and sharing its profits with its token holders.</p>
                <h4>Technologies Used:</h4>
                <div className="images">
                <img src={html} alt="" />
                <img src={css} alt="" />
                <img src={bs} alt="" />
                <img className='m-1' src={js} alt="" />
            </div>
            <a className='my-2'  href="https://github.com/Crazy-Zaini007/Xdao" target='blank'><i className="fab fa-github me-2"> https://github.com/Crazy-Zaini007/Xdao </i></a>

            </div>
            <div className="col-md-6 py-2">
            <Carousel axis="vertical" showArrows={false} showStatus={false} autoPlay={true} infiniteLoop={true}>
                    <div>
                        <img src={ex1} alt="" />
                    </div>
                    <div>
                        <img src={ex2} alt="" />
                    </div>
                    <div>
                        <img src={ex3} alt="" />
                    </div>
                    <div>
                        <img src={ex4} alt="" />
                    </div>
                   
                </Carousel>
            </div>
        </div>

        <div className="row px-2 my-3 py-4">
                <div className="col-md-6 py-2 order-sm-last order-md-last  order-lg-first">
                <Carousel axis="vertical" showArrows={false} showStatus={false} autoPlay={true} infiniteLoop={true}>
                        <div>
                            <img src={ms1} alt="" />
                        </div>
                        <div>
                            <img src={ms2} alt="" />
                        </div>
                        <div>
                            <img src={ms3} alt="" />
                        </div>
                        <div>
                            <img src={ms4} alt="" />
                        </div>
                        <div>
                            <img src={ms5} alt="" />
                        </div>
                        
                    </Carousel>
                </div>
                <div className="col-md-6 order-first order-sm-last order-md-first">
                <h5>MediStaffing V3</h5>
                    <h6>Description:</h6>
                    <p>Designed a Website 'MediStaffing' which is a  a dynamic online platform dedicated to simplifying and enhancing the hiring process within the medical staffing industry. Whether you're an employer seeking skilled professionals or a job seeker looking for opportunities in healthcare, our website offers a seamless and user-friendly experience. Explore roles, submit applications, and connect with top talents effortlessly. Welcome to the future of medical staffing. </p>
                    <h4>Technologies Used:</h4>
                    <div className="images">
                    <img src={html} alt="" />
                    <img src={css} alt="" />
                    <img src={bs} alt="" />
                    <img className='m-1' src={js} alt="" />
                    <img className='m-1' src={jq} alt="" />
                
                </div>
            <a className='my-2'  href="https://github.com/Crazy-Zaini007/MedistaffingV3" target='blank'><i className="fab fa-github me-2"> https://github.com/Crazy-Zaini007/MedistaffingV3 </i></a>

                </div>
            </div>
      </div>
    </>
  )
}
