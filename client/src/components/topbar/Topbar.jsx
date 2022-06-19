
import { Link } from "react-router-dom";
import "./topbar.css";
export const Topbar = () => {
  return (
    <>
      <div className="topbarContainer">
        <div >
         <ul  className="topbarLeft">
          <li>
                
            <img src="https://perfexcrm.com/demo/uploads/company/logo.png" alt="" />
          </li>
         </ul>
         
        </div>

        <div >
        <ul className="topbarRight">
          <li>
            <Link to="/knowledgeBase" style={{textDecoration:"none",color:"white"}}>
              <span className="topbarRightKnowledgeBase">Knowledge Base</span>  

            </Link>
          </li>
          <div className="loginRegisterButtonContainer">
          <li >
            <Link to="/register" style={{textDecoration:"none",color:"white"}}>
          <span className="topbarRightRegister">Register</span>  
            </Link>
 
            
          </li>
          <li>
            <Link to="/login2" style={{textDecoration:"none",color:"white" ,cursor:"pointer"}}>
          <button className="topbarRightLoginButton">Login</button>
            </Link>
          </li>

          </div>
         </ul>
        </div>
      </div>
    </>
  );
};
