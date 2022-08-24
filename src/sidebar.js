import React from "react";
import "./css/sidebar.css";
import kgf from "./images/kgf.jpg";
import SearchIcon from "@material-ui/icons/Search";
import ChatIcon from "@material-ui/icons/Chat";
import { useState } from "react";
import IconButton from "@material-ui/core/IconButton";
import Drawer from "@material-ui/core/Drawer";
import { useTheme } from "@material-ui/core";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import GroupAddIcon from "@material-ui/icons/GroupAdd";
import PersonAddIcon from "@material-ui/icons/PersonAdd";
import { Modal } from "@material-ui/core";

const Sidebar = () => {
  const [slideOpen, setSlideOpen] = useState(false);
  const [modelOpen, setModelOpen] = useState(false);
  const theme = useTheme();

  const handleOpenSlide = () => {
    setSlideOpen(true);
  };

  const handleCloseSlide = () => {
    setSlideOpen(false);
  };

  const OpenModel = () => {
    setModelOpen(true);
  };

  const CloseModel = () => {
    setModelOpen(false);
  };

  const CloseModel1 =() =>{
    setModelOpen(false);
  }
  return (
    <div className="sidebar">
      <div className="sidebar_header">
        <img src={kgf} alt="" className="header_image" />

        <IconButton onClick={handleOpenSlide} edge="start" color="inherit">
          <ChatIcon />
        </IconButton>
      </div>

      {/* -----------------------Drawer start------------------------------------- */}

      <div>
        <div>
          <Drawer anchor="left" open={slideOpen} variant="persistent">
            <div className="drwerHeder">
              <IconButton onClick={handleCloseSlide}>
                {theme.direction === "ltr" ? (
                  <ChevronLeftIcon />
                ) : (
                  <ChevronRightIcon />
                )}
              </IconButton>
            </div>
            <div className="addnewgroupContact">
              <div className="contactGroup">
                <GroupAddIcon />
                <h1>New Group</h1>
              </div>
              <div className="contactGroup" onClick={OpenModel}>
                <PersonAddIcon />
                <h1>New Contact</h1>
              </div>
              <div className="contactGroup">
                <h1>Old Contact</h1>
              </div>
            </div>
          </Drawer>
        </div>
      </div>

      {/* -----------------------Drawer close------------------------------------- */}

      {/*---------------------new contact input in popup start-----------------------*/}
      {/* <button type="button" onClick={OpenModel}>Open Model</button> */}
      <div>
        <Modal open={modelOpen} onClose={CloseModel}>
          <div className="modelOpen1">
            <div style={{ backgroundColor: "white" }}>
              <h1 style={{ margin: "15px" }}>New Contact</h1>
              <form>
                <input
                  type="text"
                  placeholder="Enter First Name"
                  className="newConatctInput"
                />
                <br />
                <input
                  type="text"
                  placeholder="Enter Last Name"
                  className="newConatctInput"
                />
                <br />
                <input
                  type="email"
                  placeholder="Enter Email Id"
                  className="newConatctInput"
                />
                <br />
                <div className="modelbutton">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal" onClick={CloseModel1}>Close</button>
                  <button type="button" className="btn btn-secondary">
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </Modal>
      </div>

      {/*---------------------new contact input in popup close-----------------------*/}

      <div className="sidebar_search">
        <SearchIcon />
        <input type="text" placeholder="Search" className="sidebar_search1" />
      </div>

      <div className="contactMenu">
        <div className="sidebar_contact">
          <div style={{ display: "flex", alignItems: "center", margin: "5px" }}>
            <div>
              <img src={kgf} alt="" className="header_image" />
            </div>
            <div className="conatct_name_mess">
              <label>kishan patel</label>
              <span>hiii</span>
            </div>
          </div>
          <div style={{ margin: "5px" }}>
            <p> 12:58 pm</p>
          </div>
        </div>
        <div className="sidebar_contact">
          <div style={{ display: "flex", alignItems: "center", margin: "5px" }}>
            <div>
              <img src={kgf} alt="" className="header_image" />
            </div>
            <div className="conatct_name_mess">
              <label>Akash Jadav</label>
              <span>hiii</span>
            </div>
          </div>
          <div style={{ margin: "5px" }}>
            <p> 12:58 pm</p>
          </div>
        </div>

        <div className="sidebar_contact">
          <div style={{ display: "flex", alignItems: "center", margin: "5px" }}>
            <div>
              <img src={kgf} alt="" className="header_image" />
            </div>
            <div className="conatct_name_mess">
              <label>Jay Gadara</label>
              <span>hiii</span>
            </div>
          </div>
          <div style={{ margin: "5px" }}>
            <p> 12:58 pm</p>
          </div>
        </div>

        <div className="sidebar_contact">
          <div style={{ display: "flex", alignItems: "center", margin: "5px" }}>
            <div>
              <img src={kgf} alt="" className="header_image" />
            </div>
            <div className="conatct_name_mess">
              <label>Keyur Paghdar</label>
              <span>hiii</span>
            </div>
          </div>
          <div style={{ margin: "5px" }}>
            <p> 12:58 pm</p>
          </div>
        </div>

        <div className="sidebar_contact">
          <div style={{ display: "flex", alignItems: "center", margin: "5px" }}>
            <div>
              <img src={kgf} alt="" className="header_image" />
            </div>
            <div className="conatct_name_mess">
              <label>Gaurang Theshya</label>
              <span>hiiiiiiiiiiiii</span>
            </div>
          </div>
          <div style={{ margin: "5px" }}>
            <p> 12:58 pm</p>
          </div>
        </div>

        <div className="sidebar_contact">
          <div style={{ display: "flex", alignItems: "center", margin: "5px" }}>
            <div>
              <img src={kgf} alt="" className="header_image" />
            </div>
            <div className="conatct_name_mess">
              <label>Gaurang Theshya</label>
              <span>hiiiiiiiiiiiii</span>
            </div>
          </div>
          <div style={{ margin: "5px" }}>
            <p> 12:58 pm</p>
          </div>
        </div>

        <div className="sidebar_contact">
          <div style={{ display: "flex", alignItems: "center", margin: "5px" }}>
            <div>
              <img src={kgf} alt="" className="header_image" />
            </div>
            <div className="conatct_name_mess">
              <label>Gaurang Theshya</label>
              <span>hiiiiiiiiiiiii</span>
            </div>
          </div>
          <div style={{ margin: "5px" }}>
            <p> 12:58 pm</p>
          </div>
        </div>

        <div className="sidebar_contact">
          <div style={{ display: "flex", alignItems: "center", margin: "5px" }}>
            <div>
              <img src={kgf} alt="" className="header_image" />
            </div>
            <div className="conatct_name_mess">
              <label>Gaurang Theshya</label>
              <span>hiiiiiiiiiiiii</span>
            </div>
          </div>
          <div style={{ margin: "5px" }}>
            <p> 12:58 pm</p>
          </div>
        </div>

        <div className="sidebar_contact">
          <div style={{ display: "flex", alignItems: "center", margin: "5px" }}>
            <div>
              <img src={kgf} alt="" className="header_image" />
            </div>
            <div className="conatct_name_mess">
              <label>Gaurang Theshya</label>
              <span>hiiiiiiiiiiiii</span>
            </div>
          </div>
          <div style={{ margin: "5px" }}>
            <p> 12:58 pm</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
