import * as S from "./styles";
import { RiEyeFill, RiEyeOffFill } from "react-icons/ri";
import { useState } from "react";

interface PasswordInputTypes {
    register: any;
}

export const PasswordInput = ({ register }: PasswordInputTypes) => {
  const [inputTypePassword, setInputTypePassword] = useState(true);

  return (
    <S.PasswordInputContainer>
      <label htmlFor="password">password: </label>
      <input type={inputTypePassword ? "password" : "text"} id="password" {...register} autoComplete="off" defaultValue="" />
      <div 
        onClick={() => setInputTypePassword(prevState => !prevState)}
        style={{ display: "flex", justifyContent: "center", alignItems: "center" }}
      >
        {inputTypePassword ? <RiEyeOffFill size="1.3vw" /> : <RiEyeFill size="1.3vw" />}
      </div>
    </S.PasswordInputContainer>
  );
};