import styled from "styled-components";

interface SideOptionsProps {
    showOptions: boolean;
}

export const SideMenuContainer = styled.div<SideOptionsProps>`
    display: flex;
    justify-content: center;
    align-items: center;
    ${props => `background: ${props.showOptions ? "rgba(255, 255, 255, 0.1)" : ""}`};
    transition: background 0.2s;
    color: lightgrey;
    cursor: pointer;
    padding: clamp(5px, 0.26vw, 0.26vw);
    font-size: clamp(25px, 1.3vw, 1.3vw);
    border-radius: clamp(10px, 0.52vw, 0.52vw);

    :hover {
        background: rgba(255, 255, 255, 0.1);
    }
`;

export const SideOptions = styled.div<SideOptionsProps>`
    width: clamp(250px, 10vw, 10vw);
    position: fixed;
    top: 8vh;
    left: ${props => props.showOptions ? "0" : "clamp(-900px, -30vw, -30vw)"};
    opacity: ${props => props.showOptions ? "1" : "0"};
    background: #181818;
    transition: all 0.3s;
    transition-time-function: ease;
    height: 92vh;
    font-size: clamp(18px, 0.9375vw, 0.9375vw);
    
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;

    overflow-y: scroll;
    
    a {
        color: lightgrey;
        text-decoration: none;
        width: 100%;
        display: flex;
        justify-content: flex-start;
        align-items: center;
        gap: clamp(10px, 0.52vw, 0.52vw);
        padding: clamp(10px, 0.52vw, 0.52vw);
        padding-left: clamp(40px, 2vw, 2vw);
        border-bottom: 1px solid #101010;
        cursor: pointer;
        white-space: wrap;
        overflow-x: hidden;
        text-overflow: ellipsis;

        :hover {
            background: radial-gradient(#202020, #181818);
        }
    }
`;