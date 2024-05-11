

import "./contact.css";
import { useState } from "react";
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomDark } from "react-syntax-highlighter/dist/esm/styles/prism";
/*============ react icon setup ================ */
import { IoLogoFacebook } from "react-icons/io5";
import { FaGithub } from "react-icons/fa";
import { TiArrowSortedDown } from "react-icons/ti";
import { MdEmail } from "react-icons/md";
import { IoMdCall } from "react-icons/io";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import { IoClose } from "react-icons/io5";


const contact = () => {

  const [dropDown1, setDropDown1] = useState(false);
  const [dropDown2, setDropDown2] = useState(false);

  const codeInfo = 
  `const ContactSchema =
    z.object({
    name: 
    z.string().required(),
    email: 
    z.string().email().required(),
    message: 
    z.string().min(10).max(200)
  })

  type ContactSchemaType = 
  z.infer<typeof ContactSchema>
  const form = 
  useForm<ContactSchemaType>({ 
      resolver: zodResolver(ContactSchema)  
  })
  <button onClick={
      () => form.handleSubmit()
  }>send-message</button>`
  
  return (
    <>
    <div className="contact-container">
      <div className="contact-menu">

        {/*================ Contact-item-1 =========== */}
        <div className="contact-item-1">
          {/*============ droped-menu-show-1 ============ */}
          <div className="drop-down-menu-1">
            <div className="top-tag-click-menu" onClick={() => setDropDown1(!dropDown1)}>
              <p> <TiArrowSortedDown className={dropDown1 ? "arrow-icon arrow-roted" : "arrow-icon"}/> contacts </p>
            </div>
            
            <div className={dropDown1 ? "droped-menu-show-1 show-drop-menu": "droped-menu-show-1"}>
                <p><MdEmail className="gamil"/> mdbellalcoder@gmail.com</p>
                <p><IoMdCall className="gamil"/> 01837232265</p>
            </div>
          </div>

          {/*============ droped-menu-show-2 ============ */}
          <div className="drop-down-menu-2">
            <div className="top-tag-click-menu" onClick={() => setDropDown2(!dropDown2)}>
              <p> <TiArrowSortedDown className={dropDown2 ? "arrow-icon arrow-roted": "arrow-icon"}/> find-me-also-in </p>
            </div>
           
            <div className={dropDown2 ? "droped-menu-show-2 show-drop-menu": "droped-menu-show-2"}>
                <p><FaArrowUpRightFromSquare className="gamil"/> Facebook</p>
                <p><FaArrowUpRightFromSquare className="gamil"/> Linkdin</p>
                <p><FaArrowUpRightFromSquare className="gamil"/> Githup</p>
            </div>
          </div>

        </div>

        {/*================ Contact-item-2 =========== */}
        <div className="contact-item-2">
           <div className="top-name">
              <p>contacts <IoClose className="close-contact"/> </p>
           </div>
           <div className="sing-up-page">

              <div className="sing-main-page">
                <div className="input">
                  <p>_name</p>
                  <input type="text" />
                </div>

                <div className="input">
                  <p>_gmail</p>
                  <input type="text" />
                </div>

                <div className="input">
                  <p>_message</p>
                  <textarea name="" id="" cols="30" rows="10"></textarea>
                </div>

                <div className="sing-button">
                  <button>send-message</button>
                </div>

              </div>
           </div>
        </div>

        {/*================ Contact-item-3 =========== */}
        <div className="contact-item-3">
          <SyntaxHighlighter language="javascript"  
            style={atomDark}
             
            showLineNumbers={true}
            lineProps={{ style: { flexWrap: 'wrap' } }}
            wrapLines={true}
            customStyle={{
                background: "none",
                fontSize: '15px',
                width: '300px',
                overflow: 'hidden',
                lineHeight: '25px'
                
            }}
            codeTagProps={{
                style: {
                  color: '#bc11fff2',
                },
            }}

          >
            {codeInfo}
          </SyntaxHighlighter>
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

export default contact;