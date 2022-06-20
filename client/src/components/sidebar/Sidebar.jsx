import { ProSidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import "react-pro-sidebar/dist/css/styles.css";
import { FaBalanceScale, FaBeer, FaCogs, FaGem, FaHeart, FaChartArea } from "react-icons/fa";
import { FiHome, FiLogOut, FiArrowLeftCircle, FiArrowRightCircle } from "react-icons/fi";

import "./sidebar.css";
import { useState } from "react";
export const Sidebar = () => {
    const [menuCollapse, setMenuCollapse] = useState(false)
    const menuIconClick = () => {
        //condition checking to change state from true to false and vice versa
        menuCollapse ? setMenuCollapse(false) : setMenuCollapse(true);
      };
  return (
    <>
      <ProSidebar className="sidebar" collapsedWidth="30px" width="270px" collapsed={menuCollapse}>
      <div className="closemenu" onClick={menuIconClick}>
                {/* changing menu collapse icon on click */}
                {/* <i class="fa fa-align-left" aria-hidden="true"></i> */}

              {menuCollapse ? (
                 <FiArrowRightCircle/>
              ) : (
                <FiArrowLeftCircle/>
               )} 
            </div>
        <Menu className="sidebarList">
          <MenuItem className="sidebarListItemFirst">
            <i
              className="fa fa-gavel sidebarIcon  fa-3xs"
              aria-hidden="true"
            ></i>
            <span className="sidebarListItemText">Welcome Virgil</span>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <i class="fa fa-power-off" aria-hidden="true"></i>
          </MenuItem>
          <MenuItem className="sidebarListItem sidebarListItemEffect">
            <i
              className="fa fa-home sidebarIcon  fa-3xs"
              aria-hidden="true"
            ></i>

            <span className="sidebarListItemText">DASHBOARD</span>
          </MenuItem>
          <MenuItem className="sidebarListItem sidebarListItemEffect">
            <i
              className="fa fa-user-o sidebarIcon  fa-3xs"
              aria-hidden="true"
            ></i>

            <span className="sidebarListItemText">CUSTOMERS</span>
          </MenuItem>
         
           
            <SubMenu className="sidebarListItemEffect submenuList" title="SALES" icon={<FaBalanceScale />}>
              <MenuItem >Proposals</MenuItem>
              <MenuItem>Estimates</MenuItem>
              <MenuItem>Invoices</MenuItem>
              <MenuItem>Payments</MenuItem>
              <MenuItem>Credit Notes</MenuItem>
              <MenuItem>Items</MenuItem>
            </SubMenu>
         

          <MenuItem className="sidebarListItem sidebarListItemEffect">
            <i
              className="fa fa-repeat sidebarIcon  fa-3xs"
              aria-hidden="true"
            ></i>

            <span className="sidebarListItemText ">SUBSCRIPTIONS</span>
          </MenuItem>

          <MenuItem className="sidebarListItem sidebarListItemEffect">
            <i
              className="fa fa-file-text-o sidebarIcon  fa-3xs"
              aria-hidden="true"
            ></i>

            <span className="sidebarListItemText">EXPENSES</span>
          </MenuItem>
          <MenuItem className="sidebarListItem sidebarListItemEffect">
            <i
              className="fa fa-file-o sidebarIcon  fa-3xs"
              aria-hidden="true"
            ></i>

            <span className="sidebarListItemText">CONTRACTS</span>
          </MenuItem>
          <MenuItem className="sidebarListItem sidebarListItemEffect">
            <i
              className="fa fa-bars sidebarIcon  fa-3xs"
              aria-hidden="true"
            ></i>

            <span className="sidebarListItemText">PROJECTS</span>
          </MenuItem>
          <MenuItem className="sidebarListItem sidebarListItemEffect">
            <i
              className="fa fa-tasks sidebarIcon  fa-3xs"
              aria-hidden="true"
            ></i>

            <span className="sidebarListItemText">TASKS</span>
          </MenuItem>
          <MenuItem className="sidebarListItem sidebarListItemEffect">
            <i
              className="fa fa-ticket sidebarIcon  fa-3xs"
              aria-hidden="true"
            ></i>

            <span className="sidebarListItemText">SUPPORT</span>
          </MenuItem>
          <MenuItem className="sidebarListItem sidebarListItemEffect">
            <i className="fa fa-tty sidebarIcon  fa-3xs" aria-hidden="true"></i>

            <span className="sidebarListItemText">LEADS</span>
          </MenuItem>
          <MenuItem className="sidebarListItem sidebarListItemEffect">
            <i
              className="fa fa-list-alt sidebarIcon  fa-3xs"
              aria-hidden="true"
            ></i>

            <span className="sidebarListItemText">ESTIMATE REQUEST</span>
          </MenuItem>
          <MenuItem className="sidebarListItem sidebarListItemEffect">
            <i
              className="fa fa-folder-open-o sidebarIcon  fa-3xs"
              aria-hidden="true"
            ></i>

            <span className="sidebarListItemText">KNOWLEDGE BASE</span>
          </MenuItem>
        
          <SubMenu className="sidebarListItemEffect" title="UTILITIES" icon={<FaCogs />}>
            <MenuItem>Component 1</MenuItem>
            <MenuItem>Component 2</MenuItem>
          </SubMenu>
         
          <SubMenu className="sidebarListItemEffect" title="REPORTS" icon={<FaChartArea/>}>
            <MenuItem>Component 1</MenuItem>
            <MenuItem>Component 2</MenuItem>
          </SubMenu>
          <MenuItem className="sidebarListItem sidebarListItemEffect" >
            <i className="fa fa-cog sidebarIcon  fa-3xs" aria-hidden="true"></i>

            <span className="sidebarListItemText">SETUP</span>
          </MenuItem>

          <hr />
          <MenuItem className="sidebarListItem">
            <span className="sidebarListItemText">SEO OPTIMIZATION</span>
          </MenuItem>
        </Menu>
      </ProSidebar>
      
     
    </>
  );
};
