import { useState } from "react";
import { Link } from "react-router-dom";

import { logout } from "../../store/UserContext";

import * as S from "./styles";

import { FaUser } from "react-icons/fa";
import { FiLogOut } from "react-icons/fi";
import { RiUser3Line } from "react-icons/ri";
import { BsGear } from "react-icons/bs";

export const ConfigMenu = () => {
  const [showOptions, setShowOptions] = useState<boolean>(false);

  return (
    <S.ConfigContainer>
      <S.DefaultPictureContainer
        backgroundColor={showOptions ? "grey" : "darkgrey"} 
        onClick={() => setShowOptions(prevState => !prevState)}>
        <FaUser color="lightgrey" size="2.5vh" />
      </S.DefaultPictureContainer>
      {showOptions && (
        <S.OptionsContainer>
          <Link to="/myaccount">
            <RiUser3Line/> profile
          </Link>
          <Link to="/settings">
            <BsGear/> settings
          </Link>
          <a onClick={() => logout()}>
            <FiLogOut/> log out
          </a>
        </S.OptionsContainer>
      )}
    </S.ConfigContainer>
  );
};