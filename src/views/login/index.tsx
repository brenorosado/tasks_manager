import { useState, useMemo, useCallback } from "react";

import * as S from "./styles";
import { Button, SubmitButton } from "../../components/Button/styles";

import { MdKeyboardArrowLeft } from "react-icons/md";
import { AuthenticationPayload } from "../../entities/authentication";

import { Input } from "../../components/Input/Input";
import { PasswordInput } from "../../components/PasswordInput/PasswordInput";

import { useForm } from "react-hook-form";
import { authentication } from "../../services/authentication";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const initialValues = {
  email: "",
  password: "",
  name: ""
};

export const Login = () => {
  const [authenticationContent, setAuthenticationContent] = useState("default");

  const { register, handleSubmit, reset } = useForm({
    defaultValues: useMemo(() => {
      return initialValues;
    }, [])
  });

  const onSubmit = async (values: AuthenticationPayload) => {
    try {
      let authenticationRes = {};  
    
      if (authenticationContent === "signup")
        authenticationRes = await authentication.createAccount(values);
      else authenticationRes = await authentication.authenticate(values);

      const { data }: any = authenticationRes;
      if (data) {
        localStorage.setItem("@my_tasks_token", data.token);
        localStorage.setItem("@my_tasks_id", data.account.id);
        toast.success(data.message);
        window.location.href = "/app";
      }
    } catch (e: any) {
      if(e.response.data.message) 
        toast.error(e.response.data.message);
    }
  };

  const contentDecider = useCallback(
    (contentOption: string) => {
      if(contentOption === "default") {
        return (<>
          <h1>my tasks manager</h1>
          <Button onClick={(e) => {
            e.preventDefault();
            setAuthenticationContent("signin");
          }}>
              sign in
          </Button>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "clamp(10px, 0.52vw, 0.52vw)" }}>
            <S.Separator></S.Separator>
            <h2>or</h2>
            <S.Separator></S.Separator>
          </div>
          <Button onClick={(e) => {
            e.preventDefault();
            setAuthenticationContent("signup");
          }}>
              sign up
          </Button>
        </>);
      }

      return (
        <>
          <S.TitleContainer 
            onClick={() => {
              setAuthenticationContent("default");
              reset(initialValues);
            }}
          >
            <div>
              <MdKeyboardArrowLeft size="3.125vw" />
              <h1>{authenticationContent === "signin" ? "sign in" : "sign up"}</h1>
            </div>
          </S.TitleContainer>
          <form onSubmit={handleSubmit(onSubmit)}>
            {contentOption === "signup" && (
              <Input
                id="text"
                label="name:"
                register={{ ...register("name", { required: true }) }}
              />
            )}
  
            <Input
              id="email"
              label="e-mail:"
              register={{ ...register("email", { required: true }) }}
            />
            
            <PasswordInput
              register={{ ...register("password", { required: true }) }}
            />
  
            <SubmitButton type="submit" value={authenticationContent === "signin" ? "sign in" : "sign up"}/>
          </form>
        </>
      );
    }, [authenticationContent]
  );

  return (
    <>
      <S.PageContainer>
        <S.ContentContainer>
          {contentDecider(authenticationContent)}
        </S.ContentContainer>
      </S.PageContainer>
    </>
  );
};