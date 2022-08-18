import * as S from "./styles";

import { SideMenu } from "../SideMenu/SideMenu";
import { ConfigMenu } from "../ConfigMenu/ConfigMenu";

export const Header = () => {
  return (
    <S.HeaderContainer>
      <SideMenu />
      <ConfigMenu/>
    </S.HeaderContainer>
  );
};