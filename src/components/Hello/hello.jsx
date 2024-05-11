
import styled from "styled-components";
import useTypewriter from "react-use-typewriter";
import { IoIosArrowForward } from "react-icons/io";
/*=========  React code show =========== */
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { solarizedlight } from 'react-syntax-highlighter/dist/esm/styles/prism';
/*=========== icon setup in react =================== */
import { IoLogoFacebook } from "react-icons/io5";
import { FaGithub } from "react-icons/fa";
import { IoMdArrowDropleft } from "react-icons/io";
import { IoMdArrowDropright } from "react-icons/io";
import { IoMdArrowDropdown } from "react-icons/io";
import { IoMdArrowDropup } from "react-icons/io";
 
const hello = () => {
  

 //*============== react code aria ========= */

  const words = ["Fonted developer", "Passionate coder", "Tech enthusiast"];
  const currentWord = useTypewriter({words});
  /*========= show code import ============== */
  const codeString = `

  // complete the game to continue
  // you can see it also in my github page

  const github = https://github.com/yourchocomate/snake
  start-game

`

  const customStyle = {
    fontSize: '17px',
    borderRadius: '5px',
    backgroundColor: 'none',
    width: "100%",
    overflow: "hidden"
  };
 //*============== react code aria ========= */

  return (
    <>
     <Hellocontainer>
       <div>
          <div className="hello-container">
             <div className="hello">
                <div className="text-menu">
                   <div className="text-item">
                     <p>Hi, All, I'm</p>
                     <h2>Bellal Hosen</h2>
                     <h1>
                        <IoIosArrowForward className="arrow"/>
                        {currentWord}
                        <span className="cursor">|</span>
                     </h1>

                     <div className="code-render">
                        <SyntaxHighlighter language="javascript" customStyle={customStyle}
                         wrapLines={true}
                         style={solarizedlight} >
                          {codeString}
                        </SyntaxHighlighter>
                     </div>
                   </div>
                </div>
                <div className="game-menu">
                    <div className="game">
                       <div className="game-image">
                          <div className="button">
                            <button>Game-start</button>
                          </div>
                       </div>
                       <div className="button-menu">
                          <div className="main-button-icon">
                            <p>// use keyboard</p>
                            <p>// arrows to play</p>
                            <div className="top-icon">
                              <IoMdArrowDropup className="arrow-icon"/>
                            </div>
                            <div className="icon-there">
                              <IoMdArrowDropleft className="arrow-icon"/>
                              <IoMdArrowDropdown className="arrow-icon"/>
                              <IoMdArrowDropright className="arrow-icon"/>
                              
                            </div>
                          </div>
                          <div className="svg-icon">
                               
                              <div className="top-text">
                                <p>// food left</p>
                              </div>

                              <div className="top-svg">
                                <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-2 h-2 xl:w-2 xl:h-2"><circle opacity="0.1" cx="10.8456" cy="11.0379" r="10.3456" fill="#43D9AD"></circle><circle opacity="0.2" cx="10.8456" cy="11.0379" r="7.34558" fill="#43D9AD"></circle><circle cx="10.8457" cy="11.0379" r="4" fill="#43D9AD"></circle></svg>
                                <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-3 h-3 xl:w-7 xl:h-7"><circle opacity="0.1" cx="10.8456" cy="11.0379" r="10.3456" fill="#43D9AD"></circle><circle opacity="0.2" cx="10.8456" cy="11.0379" r="7.34558" fill="#43D9AD"></circle><circle cx="10.8457" cy="11.0379" r="4" fill="#43D9AD"></circle></svg>
                                <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-3 h-3 xl:w-7 xl:h-7"><circle opacity="0.1" cx="10.8456" cy="11.0379" r="10.3456" fill="#43D9AD"></circle><circle opacity="0.2" cx="10.8456" cy="11.0379" r="7.34558" fill="#43D9AD"></circle><circle cx="10.8457" cy="11.0379" r="4" fill="#43D9AD"></circle></svg>
                                <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-3 h-3 xl:w-7 xl:h-7"><circle opacity="0.1" cx="10.8456" cy="11.0379" r="10.3456" fill="#43D9AD"></circle><circle opacity="0.2" cx="10.8456" cy="11.0379" r="7.34558" fill="#43D9AD"></circle><circle cx="10.8457" cy="11.0379" r="4" fill="#43D9AD"></circle></svg>
                                <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-3 h-3 xl:w-7 xl:h-7"><circle opacity="0.1" cx="10.8456" cy="11.0379" r="10.3456" fill="#43D9AD"></circle><circle opacity="0.2" cx="10.8456" cy="11.0379" r="7.34558" fill="#43D9AD"></circle><circle cx="10.8457" cy="11.0379" r="4" fill="#43D9AD"></circle></svg>
                              </div>
                              <div className="bottom-svg">
                                <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-3 h-3 xl:w-7 xl:h-7"><circle opacity="0.1" cx="10.8456" cy="11.0379" r="10.3456" fill="#43D9AD"></circle><circle opacity="0.2" cx="10.8456" cy="11.0379" r="7.34558" fill="#43D9AD"></circle><circle cx="10.8457" cy="11.0379" r="4" fill="#43D9AD"></circle></svg>
                                <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-3 h-3 xl:w-7 xl:h-7"><circle opacity="0.1" cx="10.8456" cy="11.0379" r="10.3456" fill="#43D9AD"></circle><circle opacity="0.2" cx="10.8456" cy="11.0379" r="7.34558" fill="#43D9AD"></circle><circle cx="10.8457" cy="11.0379" r="4" fill="#43D9AD"></circle></svg>
                                <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-3 h-3 xl:w-7 xl:h-7"><circle opacity="0.1" cx="10.8456" cy="11.0379" r="10.3456" fill="#43D9AD"></circle><circle opacity="0.2" cx="10.8456" cy="11.0379" r="7.34558" fill="#43D9AD"></circle><circle cx="10.8457" cy="11.0379" r="4" fill="#43D9AD"></circle></svg>
                                <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-3 h-3 xl:w-7 xl:h-7"><circle opacity="0.1" cx="10.8456" cy="11.0379" r="10.3456" fill="#43D9AD"></circle><circle opacity="0.2" cx="10.8456" cy="11.0379" r="7.34558" fill="#43D9AD"></circle><circle cx="10.8457" cy="11.0379" r="4" fill="#43D9AD"></circle></svg>
                                <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-3 h-3 xl:w-7 xl:h-7"><circle opacity="0.1" cx="10.8456" cy="11.0379" r="10.3456" fill="#43D9AD"></circle><circle opacity="0.2" cx="10.8456" cy="11.0379" r="7.34558" fill="#43D9AD"></circle><circle cx="10.8457" cy="11.0379" r="4" fill="#43D9AD"></circle></svg>
                              </div>
                               
                               <div className="skipt-button">
                                  <button>Skip</button>
                               </div>
                          </div>
                       </div>
                    </div>
                </div>
             </div>
             <div className="bottom-menu">
               <div className="menu">
                  <div className="icon-menu">
                     <p>find me:</p>
                     <FaGithub className="icon-fa"/>
                     <IoLogoFacebook className="icon-fa"/>
                  </div>
               </div>
             </div>
          </div>
       </div>
     </Hellocontainer>
    </>
  )
}

export default hello;


const Hellocontainer =  styled.div `


.hello-container{
  position: fixed;
  background-color: #011627;
  height: 100%;
  width: 100%;
  color: #fff;
}

.text-menu .text-item{
  padding-left: 50px;
  padding-top: 100px;
}

.text-menu .text-item p {
  font-size: 18px;
}

.text-menu .text-item h2 {
  font-size: 50px;
  padding-top: 20px;
}

.text-menu .text-item h1 {
  display: flex;
  align-items: center;
  font-size: 23px;
  color:#3c5bce;
  padding-top: 20px;
}

.hello .text-menu .text-item p {
  color: #fff;
}


/*=========== code-render ========== */ 

.code-render {
  margin-left: -20px;
  margin-top: -30px;
}


/*=========== bottom-contact-menu Desing =========== */

.bottom-menu{
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 10px;
  padding-left: 20px;
  margin-top:  45px;
  height: 50px;
  border-top: 1px solid  #607b965a;
  width: 100%;
  background-color: #011627;
  z-index: 200;
  
}

.icon-menu p {
  padding-right: 10px;
}

.bottom-menu .icon-menu{
   display: flex;
   align-items: center;
   margin-top: -19px;

}

/*============= game page desing ============ */

.hello {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 20px;
}

.hello .game-menu .game {
  width: 450px;
  height: 400px;
  display: flex;
  background-color: #1f6e63d6;
  margin-right: 20px;
  margin-top: 70px;
  border-radius: 10px;
  padding-top:  30px;
  padding-left: 20px;
  border: 1px solid #ffffff50;
 
}

.game-menu .game .game-image {
  width: 180px;
  height: 300px;
  background-color: #011627;
  border-radius: 10px;
  background-image: url("/public/image/game.png");
  background-position: center;
  background-size: cover;
  position: relative;
}

.game-image .button button {
  position: absolute;
  bottom: 30px;
  left: 30px;
  padding: 10px;
  border-radius: 5px;
  outline: none;
  background: #f5f5f5dd;
  border: none;
}

/*=============== .buton-menu desing in css ============ */

.game .main-button-icon{
  background-color: #0f404542;
  width: 170px;
  height: 200px;
  border-radius: 10px;
  margin-left: 30px;
  padding-top: 15px;
  padding-left: 5px;
}

.game .button-menu .top-icon {
  display: flex;
  justify-content: center;
  margin-top: 20px;
  margin-left: -5px;
  color: #fff;
}



.game .button-menu .top-icon .arrow-icon {
  width: 40px;
  height: 40px;
  border-radius: 5px;
  background: #01080E;
  padding: 8px;
  color: #fff;
}

.game .button-menu .icon-there {
  display: flex;
  gap: 10px;
  margin-left: 10px;
  margin-top: 10px;
  color: #fff;
}

.game .button-menu .icon-there .arrow-icon {
  font-size: 20px;
  width: 40px;
  height: 35px;
  padding: 8px;
  background-color: #01080E;
  border-radius: 5px;
}

.game .button-menu  p {
  padding-left: 10px;
}

/*==================== svg Icon Desing ============ */
.game .svg-icon {
  margin-left: 30px;
  margin-top: 20px;
  position: relative;
}

.svg-icon .top-text {
  margin-bottom: 10px;
}

.game .top-svg svg {
  width: 15px;
  margin-left: 10px;
}

.game .bottom-svg svg {
  width: 15px;
  margin-left: 10px;
  margin-top: 5px;
}
.svg-icon .skipt-button button {
  position: absolute;
  right: 20px;
  padding: 8px 20px;
  border: 1px solid #ffffffbc;
  border-radius: 5px;
  background: none;
  color: #fff;
}


@media (max-width: 992px) {
  
  .hello .game-menu .game {
    display: none;
  }
  
  .bottom-contact-menu .github-file {
    display: none;
  }


}


@media (max-width: 436px){

  .code-render {
    width: 300px;
  }

  .text-menu .text-item {
    margin: -30px;
  }


}


`