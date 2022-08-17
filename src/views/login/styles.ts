import styled from "styled-components";

export const PageContainer = styled.div`
    width: 100%;
    min-height: 100vh;
    display: flex;
    align-items: center;
    background: #262626;
    color: white;
`;

export const ContentContainer = styled.div`
    width: clamp(450px, 40%, 40%);
    height: 130vh;
    position: fixed;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: clamp(20px, 1vw, 1vw);
    background: #181818;
    border-top-right-radius: 100%;
    border-bottom-right-radius: 100%;

    h1 {
        color: white;
        text-align: center;
    }

    h2 {
        color: white;
    }

    form {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: clamp(20px, 1vw, 1vw);
    }
`;

export const Separator = styled.div`
    background: white;
    width: clamp(90px, 5.5vw, 5.5vw);
    height: 1px;
`;

export const TitleContainer = styled.div`
    width: 100%;
    cursor: pointer;
    color: white;

    h1 {
        color: white;
    }

    div {
        color: white;
        display: flex;
        justify-content: center;
        align-items: center;
        margin-left: clamp(-50px, -2.06vw, -2.06vw);
        transition: margin-left 0.3s;
        transition-timing-function: ease;
    }

    :hover {
        div {
            margin-left: clamp(-270px, -14.06vw, -14.06vw);
        }
    }
`;