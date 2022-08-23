import * as S from "./styles";
import { UseFormRegisterReturn } from "react-hook-form";

interface InputTypes {
    id: string;
    label: string;
    register: UseFormRegisterReturn;
}

export const Input = ({ id, label, register}: InputTypes) => {
  return (
    <S.InputContainer>
      <label htmlFor={id}>{label}</label>
      <input id={id} {...register} autoComplete="off" defaultValue="" />
    </S.InputContainer>
  );
};