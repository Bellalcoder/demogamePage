

import styled from "styled-components";
import {NavLink} from "react-router-dom";

/*========= react icon setup ===========*/
import { IoCloseSharp } from "react-icons/io5";
import { LuMenu } from "react-icons/lu";
import { IoLogoFacebook } from "react-icons/io5";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

/*======== use react hook ==============*/
import { useState } from "react";



const header = () => {
  
  const [toggle, setToggle] = useState(false)

  return (
    <>

      <Headercontainer>
        <div>
           <div className="header-container">
              <div className="header">
               <div className="logo">
                 <NavLink to="/hello">Bellal Hosen</NavLink>
               </div>
               <LuMenu className="menu-icon" onClick={() => setToggle(!toggle)}/>

               <div className={toggle ? "nav show-menu" : "nav"}>
                  <ul>
                    <li className="check-mark" ><NavLink to="/hello" onClick={()=> setToggle(!toggle)}>_hello</NavLink> <IoCloseSharp className="close-icon" onClick={()=> setToggle(!toggle)}/> </li>
                    <li><NavLink to="/about" onClick={()=> setToggle(!toggle)}>_about-me</NavLink></li>
                    <li><NavLink to="/projects" onClick={()=> setToggle(!toggle)}>_projects</NavLink></li>
                  </ul>
                  <div className="social-viwe">
                     <div className="text-demo">
                        <p>find me in:</p>
                     </div>
                     <div className="icon-setup">
                        <IoLogoFacebook className="social-icon"/>
                        <FaGithub className="social-icon"/>
                        <FaLinkedin className="social-icon"/>
                     </div>
                  </div>
               </div>
               <div className="contact">
                 <NavLink to="/contacts">_contacts-me</NavLink>
               </div>
              </div>
           </div>
        </div>
      </Headercontainer>

    </>
  )
}

export default header;


const Headercontainer = styled.div`

  .header{
    display: flex;
    justify-content: space-between;
    padding: 10px 20px;
    border-bottom: 1px solid #ffffff34;
    background-color: #011627;
  }

  .header ul .check-mark {
    position: relative;
  }

  .header .social-viwe {
    display: none;
  }

  .header .menu-icon{
    display: none;
  }

  .header .close-icon {
    display: none;
  }


  .header .logo a {
    text-decoration: none;
    color: #607b96;
    font-size: 18px;
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    border: none;
  }
  
  /*=== contact desing ===== */
  .header a {
    text-decoration: none;
    color: #fff;
    font-size: 18px;
    color: #607b96;
    padding: 10px;
    border-right: 1px solid #607b9621;
    border-left: 1px solid #607b9642;
  }

  /*======= header .logo ==== */
  .header .logo .active::after{
    background-color: #011627;
  }

  .header .nav ul {
    display: flex;
  }

  .header .nav ul li {
    list-style: none;
  }
   
  /*====== nav a desing ========== */
  .header .nav ul li a {
    color: #607b96;
    text-decoration: none;
    font-size: 18px;
    border-left: 1px solid #ffffff2b;
    padding: 9px 20px;
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
  }

  .header .nav ul li .active {
    position: relative;
    color: #fff;
  }
  
  /*========= nav active after deing ========== */
  .header .nav ul li .active::after{
    content: "";
    position: absolute;
    width: 100%;
    height: 1px;
    background-color: #ff8a05;
    bottom: -1.5px;
    z-index: 200;
    left: 0px;
  }

  .header .nav ul button {
    border: none;
    outline: none;
    background:#011627;
  }

  .header .active {
    position: relative;
    color: #fff; 
  }

  .header .active::after {
    content: "";
    position: absolute;
    width: 100%;
    height: 1px;
    background-color: #ff8a05;
    bottom: -1px;
    z-index: 200;
    left: 0px;
    
  }

  /*========== Responsive navigation bar ========= */

  @media (max-width:768px) {

      .header {
        position: fixed;
        width: 100%;
        z-index: 400;
      }
      
      .header .nav {
        position: fixed;
        top: -100%;
        left: 0px;
        width: 100%;
        height: 100%;
        z-index: 400;
        background-color: #011627;
        transition: .8s ;
      }

      .nav.show-menu {
        top: 43px;
      }

      .header .menu-icon{
        display: block;
        color: #607b96;
        font-size: 22px;
        position: absolute;
        right: 20px;
      }

      .header .close-icon {
        display: block;
        color: #607b96;
        font-size: 22px;
        margin-top: 10px;
        margin-right: 20px;
      }

      .header ul li {
        display: flex;
        justify-content:space-between;
      }

      .header .contact {
        margin-right: 30px;
      }

      .header .nav ul {
        display: block;
      }

      .header .nav ul li {
        border-top: 1px solid #607b9653;
        border-bottom: 1px solid #607b9645;
      }

      .header .nav ul li a {
        border: none;
      }

      .header .nav ul li .active::after {
        display: none;
      }
       
      /*======== Social icon desing in use css ========== */

      .header .social-viwe {
        display: block;
        position: absolute;
        bottom: 40px;
        border-top: 1px solid #607b963d;
        width: 100%;
        display: flex;
        justify-content: space-between;
        
      }

      .header .text-demo p {
        color: #607b96;
        font-size: 20px;
        padding-left: 20px;
        padding-top: 13px;
      }

      .header .social-viwe .social-icon {
        color: #607b96;
        font-size: 60px;
        border-left: 1px solid #607b9653;
        border-right: 1px solid #607b9653;
        height: 50px;
        padding: 0px 20px;
      }

  }

`