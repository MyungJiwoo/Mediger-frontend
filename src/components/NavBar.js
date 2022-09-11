import React from 'react';
import styled from 'styled-components';
import { AiOutlineHome } from 'react-icons/ai';
import { CgPill } from 'react-icons/cg';
import { MdLocalPharmacy } from 'react-icons/md';
import { FaHeartbeat } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const NavBarWrapper = styled.div`
  background-color: #3c7466;
  padding: 5px;
  text-align: center;
  width: 55vw;
  height: 6vh;
  display: flex;
  justify-content: space-between;
  justify-items: center;
  position: fixed;
  
  .item {
    list-style-type: none;
  }

  .itemList {
    font-size: 1.8rem;
    text-decoration: none;
    padding: 26px;
    color: white;
    display: inline;
    font-weight: bold;
    text-decoration-line: none;
  }
`;

function NavBar() {
  return (
    <NavBarWrapper>
      <ul className="item">
        <Link to={`/`}>
          <span className="itemList">
            <AiOutlineHome />
          </span>
        </Link>
        <Link to={`/pillSearch`}>
          <li className="itemList">
            <CgPill />
          </li>
        </Link>
        <Link to={`/pillSearch/detail`}>
          <li className="itemList">
            <CgPill />
          </li>
        </Link>
        <Link to={`/map/hospital`}>
          <li className="itemList">
            <MdLocalPharmacy />
          </li>
        </Link>
        <li className="itemList">
          <FaHeartbeat />
        </li>
      </ul>
    </NavBarWrapper>
  );
  }
  
export default NavBar;
