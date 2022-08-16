import styled from "styled-components";

export const Button = styled.button`
    background: rgba(255, 255, 255, 0.1);
    color: white;
    width: clamp(240px, 12.5vw, 12.5vw);
    height: clamp(60px, 3.125vw, 3.125vw);
    border-radius: clamp(15px, 0.78125vw, 0.78125vw);
    border: none;
    font-weight: 300;
    font-size: clamp(1.8rem, 1.5vw, 1.5vw);
    transition: background 0.2s;
    cursor: pointer;

    :hover {
        background: rgba(255, 255, 255, 0.2);
    }
`;

interface SubmitButton {
    value?: string;
}

export const SubmitButton = styled.input<SubmitButton>`
    background: rgba(255, 255, 255, 0.1);
    color: white;
    width: clamp(240px, 12.5vw, 12.5vw);
    height: clamp(60px, 3.125vw, 3.125vw);
    border-radius: clamp(15px, 0.78125vw, 0.78125vw);
    border: none;
    font-weight: 300;
    font-size: clamp(1.8rem, 1.5vw, 1.5vw);
    transition: background 0.2s;
    cursor: pointer;

    :hover {
        background: rgba(255, 255, 255, 0.2);
    }
`;