

import styled from "styled-components";
import {useState} from "react";
import "./about.css"
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomDark } from "react-syntax-highlighter/dist/esm/styles/prism";

/*============ react icon setup ================ */
import { IoLogoFacebook } from "react-icons/io5";
import { FaGithub } from "react-icons/fa";
import { IoMdArrowDropright } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import { AiFillFolder} from "react-icons/ai";
import { IoIosCall } from "react-icons/io";
import { MdEmail } from "react-icons/md";
import { IoMdClose } from "react-icons/io";

const about = () => {

  const [toggle, setToggle] = useState(false)
  const [toggle2, setToggle2] = useState(false)
  
  /*========= show code import ============== */
  const codeString = `/**
  * About me
  * I have 5 years of еxperience in web
  * development lorem ipsum dolor sit amet, 
  * consectetur adipiscing elit, sed do eiusmod
  * tempor incididunt ut labore et dolore
  * magna aliqua. Ut enim ad minim veniam,
  * quis nostrud exercitation ullamco laboris
  * nisi ut aliquip ex ea commodo consequat.
* Duis aute irure dolor in reprehenderit in
* Duis aute irure dolor in reprehenderit in
* voluptate velit esse cillum dolore eu fugiat 
* nulla pariatur. Excepteur sint occaecat 
* officia deserunt mollit anim id est laborum.
*/
`

const codeInfo = `
 function initializeModelChunk<T>(chunk: ResolvedModelChunk): T {
        const value: T = parseModel(chunk._response, chunk._value);
        const initializedChunk: InitializedChunk<T> = (chunk: any);
        initializedChunk._status = INITIALIZED;
        initializedChunk._value = value;
        return value;
        }
`


  return (
    <Aboutcontainer>
      <div>

        <div className="about-container">
          <div className="about">
              <div className="main-menu">
                 <svg width="20" height="18" viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg" className="size-4 opacity-50"><path d="M1 0H19C19.2652 0 19.5196 0.105357 19.7071 0.292893C19.8946 0.48043 20 0.734784 20 1V17C20 17.2652 19.8946 17.5196 19.7071 17.7071C19.5196 17.8946 19.2652 18 19 18H1C0.734784 18 0.48043 17.8946 0.292893 17.7071C0.105357 17.5196 0 17.2652 0 17V1C0 0.734784 0.105357 0.48043 0.292893 0.292893C0.48043 0.105357 0.734784 0 1 0ZM10 12V14H16V12H10ZM6.414 9L3.586 11.828L5 13.243L9.243 9L5 4.757L3.586 6.172L6.414 9Z" fill="currentColor"></path></svg>
                 <svg width="16" height="20" viewBox="0 0 16 20" fill="none" xmlns="http://www.w3.org/2000/svg" className="size-4"><path d="M1 18H15V20H1V18ZM8 16C5.87827 16 3.84344 15.1571 2.34315 13.6569C0.842855 12.1566 0 10.1217 0 8C0 5.87827 0.842855 3.84344 2.34315 2.34315C3.84344 0.842855 5.87827 0 8 0C10.1217 0 12.1566 0.842855 13.6569 2.34315C15.1571 3.84344 16 5.87827 16 8C16 10.1217 15.1571 12.1566 13.6569 13.6569C12.1566 15.1571 10.1217 16 8 16Z" fill="currentColor"></path></svg>
                 <svg width="22" height="16" viewBox="0 0 22 16" fill="none" xmlns="http://www.w3.org/2000/svg" className="size-4 opacity-50"><path d="M16 0C17.5913 0 19.1174 0.632141 20.2426 1.75736C21.3679 2.88258 22 4.4087 22 6V10C22 11.5913 21.3679 13.1174 20.2426 14.2426C19.1174 15.3679 17.5913 16 16 16H6C4.4087 16 2.88258 15.3679 1.75736 14.2426C0.632141 13.1174 0 11.5913 0 10V6C0 4.4087 0.632141 2.88258 1.75736 1.75736C2.88258 0.632141 4.4087 0 6 0H16ZM9 5H7V7H5V9H6.999L7 11H9L8.999 9H11V7H9V5ZM17 9H15V11H17V9ZM15 5H13V7H15V5Z" fill="currentColor"></path></svg>
              </div>
              {/*=========== personal-info section ============ */}
              <div className="personal-info">
                 <div className="drop-down">

                    <p onClick={()=> setToggle(!toggle)}><IoMdArrowDropright className={toggle ? "roted-icon": "show-icon"}/> personal-info</p>

                    <div className={toggle ? "drop show-menu": "drop"}>
                       <p><IoIosArrowForward/> <AiFillFolder className="file"/> bio</p>
                       <p><IoIosArrowForward/> <AiFillFolder className="file"/> interests</p>
                       <p><IoIosArrowForward/> <AiFillFolder className="file"/> education</p>
                    </div>

                  </div>

                  <div className="drop-down2">

                    <p onClick={()=> setToggle2(!toggle2)}><IoMdArrowDropright className={toggle2 ? "roted-icon": "show-icon"}/> contacts</p>

                    <div className={toggle2 ? "drop2 show-menu": "drop2"}>
                      <p><MdEmail/>mdbellalcoder@gmail.com</p>
                      <p><IoIosCall/>01837232265</p>
                    </div>
                 </div>
              </div>
              {/*=========== project-info section ============ */}
              <div className="project-info">
                <div className="top-tag">
                   <p>personal-info <IoMdClose/></p>
                </div>
                <div className="details">
                  <SyntaxHighlighter language="javascript"  
                    language="javascript"
                    style={atomDark}
                    showLineNumbers={true}
                    useInlineStyles={false}
                    wrapLines={true}
                    customStyle={{
                        backgroundColor: "none",
                        opacity: "1",
                        fontSize: '15px',
                        lineHeight: '40px',
                        overflowX: 'auto',
                        marginLeft: '10px',
                        marginTop: '50px'
                    }}
                    codeTagProps={{
                        style: {
                          color: "#ffffffab"
                        },
                    }}

                  >
                    {codeString}
                  </SyntaxHighlighter>
                </div>
              </div>
              {/*=========== personal-code section ============ */}
              <div className="personal-code">
                 <h4>// Code snippet showcase:</h4>

                 {/*=========== code-demo section-1 ============ */}
                 <div className="code-demo">
                    <div className="pofile">
                       
                    </div>
                    <div className="pofile-text">
                       <h3>@yourchocomate</h3>
                       <p>Created 5 months ago</p>
                    </div>
                    <div className="pofile-icon">
                      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" className="size-4"><path d="M2.92901 17.071C1.99904 16.1434 1.26154 15.0413 0.758889 13.8278C0.256234 12.6143 -0.00166634 11.3135 8.1015e-06 10C8.1015e-06 4.477 4.47701 0 10 0C15.523 0 20 4.477 20 10C20 15.523 15.523 20 10 20H8.1015e-06L2.92901 17.071ZM6.00001 11C6.00001 12.0609 6.42144 13.0783 7.17158 13.8284C7.92173 14.5786 8.93914 15 10 15C11.0609 15 12.0783 14.5786 12.8284 13.8284C13.5786 13.0783 14 12.0609 14 11H6.00001Z" fill="currentColor"></path></svg>
                       <p>details</p>
                    </div>
                 </div>
                 <div className="code-details">
                    <SyntaxHighlighter language="javascript"  
                    style={atomDark}
                    wrapLongLines
                    customStyle={{
                        backgroundColor: "transparent",
                        opacity: "1",
                        fontSize: '15px',
                        width: '300px',
                        height: '450px',
                        borderRadius: '10px',
                        display: 'flex',
                        justifyContent: 'center',
                    }}
                    codeTagProps={{
                        style: {
                          color: "#c50dd6",
                        },
                    }}

                  >
                    {codeInfo}
                  </SyntaxHighlighter>
                 </div>
                 {/*=========== code-demo section-1 ============ */}
                 <div className="code-demo">
                    <div className="pofile">
                       
                    </div>
                    <div className="pofile-text">
                       <h3>@yourchocomate</h3>
                       <p>Created 5 months ago</p>
                    </div>
                    <div className="pofile-icon">
                      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" className="size-4"><path d="M2.92901 17.071C1.99904 16.1434 1.26154 15.0413 0.758889 13.8278C0.256234 12.6143 -0.00166634 11.3135 8.1015e-06 10C8.1015e-06 4.477 4.47701 0 10 0C15.523 0 20 4.477 20 10C20 15.523 15.523 20 10 20H8.1015e-06L2.92901 17.071ZM6.00001 11C6.00001 12.0609 6.42144 13.0783 7.17158 13.8284C7.92173 14.5786 8.93914 15 10 15C11.0609 15 12.0783 14.5786 12.8284 13.8284C13.5786 13.0783 14 12.0609 14 11H6.00001Z" fill="currentColor"></path></svg>
                       <p>details</p>
                    </div>
                 </div>
                 <div className="code-details">
                    <SyntaxHighlighter language="javascript"  
                    style={atomDark}
                    wrapLongLines
                    customStyle={{
                        backgroundColor: "transparent",
                        opacity: "1",
                        fontSize: '15px',
                        width: '300px',
                        height: '450px',
                        borderRadius: '10px',
                        display: 'flex',
                        justifyContent: 'center',
                    }}
                    codeTagProps={{
                        style: {
                           color: "#c50dd6",
                        },
                    }}

                  >
                    {codeInfo}
                  </SyntaxHighlighter>
                 </div>
                 {/*=========== code-demo section-1 ============ */}
                 <div className="code-demo">
                    <div className="pofile">
                       
                    </div>
                    <div className="pofile-text">
                       <h3>@yourchocomate</h3>
                       <p>Created 5 months ago</p>
                    </div>
                    <div className="pofile-icon">
                      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" className="size-4"><path d="M2.92901 17.071C1.99904 16.1434 1.26154 15.0413 0.758889 13.8278C0.256234 12.6143 -0.00166634 11.3135 8.1015e-06 10C8.1015e-06 4.477 4.47701 0 10 0C15.523 0 20 4.477 20 10C20 15.523 15.523 20 10 20H8.1015e-06L2.92901 17.071ZM6.00001 11C6.00001 12.0609 6.42144 13.0783 7.17158 13.8284C7.92173 14.5786 8.93914 15 10 15C11.0609 15 12.0783 14.5786 12.8284 13.8284C13.5786 13.0783 14 12.0609 14 11H6.00001Z" fill="currentColor"></path></svg>
                       <p>details</p>
                    </div>
                 </div>
                 <div className="code-details">
                    <SyntaxHighlighter language="javascript"  
                    style={atomDark}
                    wrapLongLines
                    customStyle={{
                        backgroundColor: "transparent",
                        opacity: "1",
                        fontSize: '15px',
                        width: '300px',
                        height: '450px',
                        borderRadius: '10px',
                        display: 'flex',
                        justifyContent: 'center',
                    }}
                    codeTagProps={{
                        style: {
                          color: "#c50dd6",
                        },
                    }}

                  >
                    {codeInfo}
                  </SyntaxHighlighter>
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
      </div>
    </Aboutcontainer>
  )
}

export default about;

const Aboutcontainer = styled.div `

`
