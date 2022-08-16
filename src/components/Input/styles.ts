import styled from "styled-components";

export const InputContainer = styled.div`
    width: 100%;
    background: #2D2D2D;
    border-radius: clamp(15px, 0.78125vw, 0.78125vw);
    padding: clamp(10px, 0.52vw, 0.52vw) clamp(20px, 1.04vw, 1.04vw);
    display: flex;
    align-items: center;
    font-size: clamp(20px, 1.04vw, 1.04vw);
    cursor: pointer;
    gap: clamp(5px, 0.26vw, 0.26vw);
    color: lightgrey;

    label {
        overflow-wrap: normal;
        word-break: normal;
        min-height: 100%;
    }

    input {
        flex: 1;
        background: #2D2D2D;
        border: none;
        outline: none;
        font-size: clamp(20px, 1.04vw, 1.04vw);
    }
`;