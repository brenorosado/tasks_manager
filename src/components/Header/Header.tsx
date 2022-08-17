import * as S from "./styles";

import { HiMenu } from "react-icons/hi";
import { ConfigMenu } from "../ConfigMenu/ConfigMenu";

export const Header = () => {
  return (
    <S.HeaderContainer>
      <HiMenu />
      <ConfigMenu/>
    </S.HeaderContainer>
  );
};