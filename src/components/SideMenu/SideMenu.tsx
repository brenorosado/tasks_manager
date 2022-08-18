import { useState } from "react";

import { Link } from "react-router-dom";

import { AiOutlineSchedule } from "react-icons/ai";
import { MdOutlineApps } from "react-icons/md";
import { HiMenu } from "react-icons/hi";
import { TbLayoutList } from "react-icons/tb";

import * as S from "./styles";

export const SideMenu = () => {
  const [showOptions, setShowOptions] = useState<boolean>(true);

  return (
    <>
      <S.SideMenuContainer showOptions={showOptions}
        onClick={() => setShowOptions(prevState => !prevState)}>
        <HiMenu />
      </S.SideMenuContainer>
      
      <S.SideOptions showOptions={showOptions}>
        <Link to="/app">
          <MdOutlineApps color="lightcoral" /> app
        </Link>
        <Link to="/soon">
          <AiOutlineSchedule color="skyblue"/> soon
        </Link>
      </S.SideOptions>
    </>
  );
};