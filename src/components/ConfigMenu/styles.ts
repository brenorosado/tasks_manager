import styled from "styled-components";

export const ConfigContainer = styled.div`
    position: relative;
`;

interface DefaultPictureContainer {
    backgroundColor: string;
}

export const DefaultPictureContainer = styled.div<DefaultPictureContainer>`
    background: ${props => props.backgroundColor};
    border-radius: 50%;
    width: 4vh;
    height: 4vh;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    transition: background 0.2s;
    
    :hover {
        background: grey;
    }
`;

export const OptionsContainer = styled.div`
    background: #262626;
    color: lightgrey;
    position: absolute;
    box-shadow: 0 0 2vw rgba(0, 0, 0, 0.4);
    width: clamp(180px, 10.41vw, 10.41vw);
    border-radius: clamp(10px, 0.52vw, 0.52vw);
    right: 0;
    top: 4.5vh;
    overflow: hidden;
    font-size: clamp(15px, 0.78125vw, 0.78125vw);

    a {
        color: inherit;
        text-decoration: none;
        padding: clamp(5px, 0.26vw, 0.26vw) clamp(15px, 0.78vw, 0.78vw);
        display: flex;
        align-items: center;
        justify-content: start;
        gap: clamp(10px, 0.52vw, 0.52vw);
        cursor: pointer;

        :hover {
            background: rgba(255, 255, 255, 0.1);
        }
    }
`;