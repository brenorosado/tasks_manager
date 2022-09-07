import styled from "styled-components";

export const ProjectPageContainer = styled.div`
    background: #212121;;
    width: 100vw;
    height: 92vh;
    padding: clamp(15px, 0.78125vw, 78125vw);
    padding-left: clamp(270px, 15vw, 15vw);
    padding-right: clamp(270px, 15vw, 15vw);
    overflow: hidden;
`;

export const ProjectHeader = styled.div`
    color: grey;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: clamp(30px, 1.5625vw, 1.5625vw);

    div {
        display: flex;
        align-items: center;
        gap: clamp(15px, 0.78125vw, 78125vw);
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;

        h1 {
            font-weight: bold;
            font-size: clamp(28px, 1.45833333vw, 1.45833333vw);
        }
    }
`;

export const EditProjectButton = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    border: none;
    outline: none;
    border-radius: 50%;
    padding: clamp(9px, 0.46875vw, 0.46875vw);
    font-size: clamp(16px, 0.83333vw, 0.83333vw);
    background: #666;
    transition: all 0.2s;
    cursor: pointer;
    color: lightgrey;
    
    :hover {
        background: #999;
    }
`;