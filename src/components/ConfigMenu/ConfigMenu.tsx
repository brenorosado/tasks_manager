import { useState } from "react";
import { Link } from "react-router-dom";

import * as S from "./styles";

import { FaUser } from "react-icons/fa";
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
            <RiUser3Line/> Profile
          </Link>
          <Link to="/settings">
            <BsGear/> Settings
          </Link>
        </S.OptionsContainer>
      )}
    </S.ConfigContainer>
  );
};