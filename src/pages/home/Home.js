import React from 'react'
import {RiProductHuntLine} from 'react-icons/ri'
import { Link } from 'react-router-dom'
import {Button } from 'react-bootstrap'
import image1 from '../../assets/inv-img.png'
import './Home.scss';
import { ShowOnLogin , ShowOnLogout} from '../../components/protect/HiddenLinks'

const Home=()=> {
  return (
    <div className='home'>
        <nav className='container --flex-between'>
            <div className='logo'>
                <RiProductHuntLine size ={35}/>
             </div>
             <ul className='home-links'>
                <ShowOnLogout>
                <li>
                    <Link style={{textDecoration:'none'}} to ='/register'>Register</Link>
                </li>
                
                <li>
                    <Button variant="primary">
                        <Link style={{textDecoration:'none'}}to ='/login'>Login</Link>
                    </Button>
                </li>
                </ShowOnLogout>
                <ShowOnLogin>
                <li>
                    <Button variant="primary">
                        <Link style={{textDecoration:'none'}} to ='/dashboard'>Dashboard</Link>
                    </Button>
                </li>
                </ShowOnLogin>
             </ul>
        </nav>

        {/* hero section */}

        <section className='container hero'>
            <div className='hero-text'>
                <h1>Inventory Billing Management</h1>
                <p>Efficient inventory management is the key to unlocking business success. Our inventory management system software empowers you to streamline operations, optimize stock levels, and maximize profitability</p>
                    <div className='hero-buttons'>
                        <Button  variant="primary">
                            <Link style={{textDecoration:'none'}} to ='/dashboard'>Free Trail for 30 days</Link>
                        </Button>
                    </div>
                    <div className='--flex-start'>
                        <NumberText num = '14K' text ='Brand Owners'/>
                        <NumberText num = '23K' text ='Active Users'/>
                        <NumberText num = '500+' text ='Partners'/>
                    </div>
            </div>
                <div className='hero-image'>
                    <img src={image1} alt= 'Inventory'/>
                </div>
            
        </section>
    </div>
  )
};

const NumberText =({num, text})=>{
    return(
        <div className='--mr'>
            <h3 className='--color-white'>{num}</h3>
            <p className='--color-white'>{text}</p>
        </div>
    )
}

export default Home;
    