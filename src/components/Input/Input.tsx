import * as S from "./styles";

interface InputTypes {
    id: string;
    label: string;
    register: any;
}

export const Input = ({ id, label, register}: InputTypes) => {
  return (
    <S.InputContainer>
      <label htmlFor={id}>{label}</label>
      <input id={id} {...register} autoComplete="off" defaultValue="" />
    </S.InputContainer>
  );
};