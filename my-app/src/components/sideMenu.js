import React, { useState } from "react";
import "./sideMenu.css";
import {
  FaGithub,
  FaTwitter,
  FaInstagram,
  FaEnvelope,
  FaFacebookSquare,
} from "react-icons/fa";
import { Link } from "react-scroll";
import Dog from "../img/d.jpg";
import Modal from "../function/modal";

function SideMenu() {
  const [modalOpen, setModalOpen] = useState(false);
  // const openModal = () => {
  //   setModalOpen(true);
  // };

  return (
    <div id="sideBox">
      <div className="profile">
        <div className="hash">
          <ul>
            <li># 개는 멍멍</li>
            <li># 고양이는 야옹</li>
            <li># 소는 음머</li>
          </ul>
        </div>
        <div className="name">Sachin Mittal</div>
        <div
          className="picture"
          role="presentation"
          onClick={() => setModalOpen(!modalOpen)}
        >
          {modalOpen && (
            <Modal
              open={modalOpen}
              close={() => setModalOpen(modalOpen)}
              header="Profile"
            >
              <main />
            </Modal>
          )}
          <img className="pictureImg" src={Dog} alt="" />
        </div>
        <div className="email">
          <a href="http://gmail.com" target="_blank" rel="noreferrer">
            mittalsam98@gmail.com
          </a>
        </div>
      </div>
      <div className="linkList">
        <ul>
          <li>
            <Link to="aboutTextBox" spy smooth>
              About
            </Link>
          </li>
          <li>
            <Link to="eduTextBox" spy smooth>
              Education
            </Link>
          </li>
          <li>
            <Link to="jourTextBox" spy smooth>
              Journey
            </Link>
          </li>
        </ul>
      </div>
      <div className="contactList">
        <ul>
          <li>
            <a href="http://github.com" target="_blank" rel="noreferrer">
              <FaGithub size="24" />
            </a>
          </li>
          <li>
            <a href="http://twitter.com" target="_blank" rel="noreferrer">
              <FaTwitter size="24" />
            </a>
          </li>
          <li>
            <a href="http://instargram.com" target="_blank" rel="noreferrer">
              <FaInstagram size="24" />
            </a>
          </li>
          <li>
            <a href="http://gmail.com" target="_blank" rel="noreferrer">
              <FaEnvelope size="24" />
            </a>
          </li>
          <li>
            <a href="http://facebook.com" target="_blank" rel="noreferrer">
              <FaFacebookSquare size="24" />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
export default SideMenu;
