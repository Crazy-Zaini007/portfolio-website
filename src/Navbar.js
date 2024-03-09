import React,{useState} from 'react'
import { Link } from 'react-router-dom'
import Hamburger from 'hamburger-react'
export default function Navbar() {
  const [isOpen, setOpen] = useState(false)

  return (
    <>
    <div className="container-fluid p-0 m-0">
        <div className="row p-0 m-0">
        <div className="col-md-12 p-0 m-0">        
        <nav className="navbar navbar-expand-sm px-0 mx-0 fixed-top">
  <div className="container-fluid ">
    <Link className="navbar-brand" to="/">Success</Link>
    <button className="navbar-toggler p-0 m-0"  data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <Hamburger size={20} duration={0.8} toggled={isOpen} toggle={setOpen} />
      
    </button>
    <div className=" navbar-collapse collapse justify-content-end" id="navbarNav" >
        <ul className='navbar-nav'>
            <li className='nav-item'> <a href='/' className='nav-link mx-1'>Contacts</a></li>
            <li className='nav-item'> <Link className='nav-link mx-1' to='/projects'>Projects</Link></li>
            <li className="nav-item"><a href="/Zainullah-Khan (6).pdf" target="_blank" download="Zainullah Khan CV" className='mx-1 btn download shadow' >Download CV</a></li>
        </ul>
    </div>
  </div>
</nav>
            </div>
        </div>
    </div>
    </>
  )
}
