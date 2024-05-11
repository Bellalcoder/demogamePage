

import './project.css';

/*=================== react iocon use =========== */

import { TiArrowSortedDown } from "react-icons/ti";
import { FaReact } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";
import { IoLogoCss3 } from "react-icons/io5";
import { FaVuejs } from "react-icons/fa";
import { FaAngular } from "react-icons/fa6";
import { IoCheckmarkSharp } from "react-icons/io5";
import { useState } from 'react';
import { AiOutlineClose } from "react-icons/ai";
import { IoLogoFacebook } from "react-icons/io5";
import { FaGithub } from "react-icons/fa";

const project = () => {

  const [toggle, setShowToggle] = useState(null)
  const [toggle2, setShowToggle2] = useState(null)
  const [toggle3, setShowToggle3] = useState(null)
  const [toggle4, setShowToggle4] = useState(null)
  const [toggle5, setShowToggle5] = useState(null)
  /*======= drop down menu in Add useState  ==========*/
  const [droped, setShowDroped] = useState(null)

  return (
    <>
      
     <div className="project-container">

       <div className="project">
          {/*=========== project-menu ========== */}
          <div className="project-menu">
              <div className="top-project-name" onClick={() => setShowDroped(!droped)}>
                <p><TiArrowSortedDown className={droped ? "arrow roted-arrow": "arrow"}/> porjects</p>
              </div>
            {/*============== Drop-down-menu =============*/ }
             <div className={droped ? "drop-down-menu show-droped": "drop-down-menu"}>

                <div className="selection">
                 <div className="checkbox" onClick={() => setShowToggle(!toggle)}>
                    <IoCheckmarkSharp className={toggle ? 'check-mark show-check': 'check-mark'}/>
                  </div>
                  <FaReact className='demo-icon'/>
                  <p>React</p>
                </div>

                <div className="selection">
                  <div className="checkbox" onClick={() => setShowToggle2(!toggle2)}>
                    <IoCheckmarkSharp className={toggle2 ? 'check-mark show-check': 'check-mark'}/>
                  </div>
                  <FaHtml5 className='demo-icon'/>
                  <p>HTML</p>
                </div>

                <div className="selection">
                  <div className="checkbox" onClick={() => setShowToggle3(!toggle3)}>
                    <IoCheckmarkSharp className={toggle3 ? 'check-mark show-check': 'check-mark'}/>
                  </div>
                  <IoLogoCss3 className='demo-icon'/>
                  <p>CSS</p>
                </div>

                <div className="selection">
                   <div className="checkbox" onClick={() => setShowToggle4(!toggle4)}>
                    <IoCheckmarkSharp className={toggle4 ? 'check-mark show-check': 'check-mark'}/>
                   </div>
                   <FaVuejs className='demo-icon'/>
                  <p>Vue</p>
                </div>

                <div className="selection">
                  <div className="checkbox" onClick={() => setShowToggle5(!toggle5)}>
                    <IoCheckmarkSharp className={toggle5 ? 'check-mark show-check': 'check-mark'}/>
                  </div>
                  <FaAngular className='demo-icon'/>
                  <p>Angular</p>
                </div>

             </div>

          </div>

          {/*=========== project-set-menu ============ */}
          <div className="project-set-menu">
             <div className="top-nav">
                <p>project <AiOutlineClose className='close-icon' /> </p> 
             </div>
             
             {/*============= project-list ================= */}
             <div className="project-list">

                <div className="project-number">
                   <p><span>project</span>// _porfolio-page</p>
                   {/*============= background-image upload ======*/}
                   <div className="background-image">

                   </div>

                   <div className="details-image">
                      <p>Duis aute irure dolor in velit esse cillum dolore.</p>

                       <div className="button-menu">
                        <button>view-project</button>
                       </div>

                   </div>
                  
                </div>

                <div className="project-number">
                   <p><span>project</span>// _porfolio-page</p>
                   {/*============= background-image upload ======*/}
                   <div className="background-image">

                   </div>

                   <div className="details-image">
                      <p>Duis aute irure dolor in velit esse cillum dolore.</p>
                      <div className="button-menu">
                        <button>view-project</button>
                      </div>
                   </div>
                   
                </div>

                <div className="project-number">
                   <p><span>project</span>// _porfolio-page</p>
                   {/*============= background-image upload ======*/}
                   <div className="background-image">

                   </div>

                   <div className="details-image">
                     <p>Duis aute irure dolor in velit esse cillum dolore.</p>
                      <div className="button-menu">
                        <button>view-project</button>
                      </div>
                   </div>
                   
                </div>

                <div className="project-number">
                   <p><span>project</span>// _porfolio-page</p>
                   {/*============= background-image upload ======*/}
                   <div className="background-image">

                   </div>

                   <div className="details-image">
                      <p>Duis aute irure dolor in velit esse cillum dolore.</p>
                        <div className="button-menu">
                          <button>view-project</button>
                        </div>
                   </div>
                   
                </div>

                <div className="project-number">
                   <p><span>project</span>// _porfolio-page</p>
                   {/*============= background-image upload ======*/}
                   <div className="background-image">

                   </div>

                   <div className="details-image">
                      <p>Duis aute irure dolor in velit esse cillum dolore.</p>
                      <div className="button-menu">
                        <button>view-project</button>
                      </div>
                   </div>
                   
                </div>

                <div className="project-number">
                   <p><span> project</span> // _porfolio-page</p>
                   {/*============= background-image upload ======*/}
                   <div className="background-image">

                   </div>

                   <div className="details-image">
                      <p>Duis aute irure dolor in velit esse cillum dolore.</p>
                      <div className="button-menu">
                        <button>view-project</button>
                      </div>
                   </div>
            
                </div>

             </div>
          </div>
       </div>

        {/*=========== bottom-navigation-bar section ============ */}
        <div className="bottom-menu">
              <div className="menu">
                <div className="icon-menu">
                    <p>find me:</p>
                    <FaGithub className="icon-fa"/>
                    <IoLogoFacebook className="icon-fa"/>
                </div>
              </div>
              <div className="git-file">
                <FaGithub/>
                <p>githup-file</p>
              </div>
        </div>
     </div>
       
    </>
  )
}

export default project;