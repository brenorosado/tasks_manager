import styled from "styled-components";

interface OverlayProps {
    active: boolean;
}

export const Overlay = styled.div<OverlayProps>`
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    z-index: 9999999999999999999;
    
    display: ${props => props.active ? "flex" : "none"};
    justify-content: center;
    align-items: center;

    background-color: rgba(0, 0, 0, 0.2);
    transition: all 0.3s;
    transition-timing-function: ease;
    overflow: auto;
`;

export const Modal = styled.div`
    z-index: 9999999999999999999999;
    opacity: 1;
    height: clamp(400px, 50vh, 50vh);
    width: clamp(300px, 30vw, 30vw);
    border-radius: clamp(15px, 0.78125vw, 0.78125vw);
    background: #262626;
    box-shadow: 0 0 2vw rgba(0, 0, 0, 0.4);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    color: lightgrey;
`;

export const ModalHeader = styled.div`
    height: clamp(65px, 6vh, 6vh);
    border-bottom: 1px solid #333333;
    display: flex;
    align-items: center;
    padding: 0.8vh;
    padding-left: 2vh;
    font-size: clamp(15.36px, 0.8vw, 0.8vw);
`;

export const ModalBody = styled.div`
    height: 100%;
    padding: clamp(5px, 0.463vh, 0.463vh) clamp(20px, 1.04vw, 1.04vw);

    form {
        display: flex;
        flex-direction: column;
        gap: clamp(10px, 0.926vh, 0.926vh);
        height: 100%;

        label {
            font-size: clamp(16px, 0.8333vw, 0.8333vw);
            padding: clamp(5px, 0.463vh, 0.463vh) 0; 
        }   
    
        input {
            font-size: clamp(16px, 0.8333vw, 0.8333vw);
            padding: clamp(10px, 0.52vw, 0.52vw);
            color: lightgrey;
            border: 1px solid #555555;
            border-radius: clamp(5px, 0.26vw, 0.26vw);
            outline: none;
            background: #262626;
            width: 100%;
        }
    }
`;

export const FormRow = styled.div`
    display: flex;
    flex-direction: column;
    gap: clamp(5px, 0.46vh, 0.46vh);
`;

export const IconsContainer = styled.div`
    width: 100%;
    height: 22vh;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    overflow-y: auto;
    border: 1px solid #555555;
    border-top-left-radius: 5px;
    border-bottom-left-radius: 5px;
    font-size: clamp(20px, 1vw, 1vw);
    gap: clamp(3px, 0.15625vw, 0.15625vw);
    padding: clamp(10px, 0.52vw, 0.52vw);
`;

interface IconOptionProps {
    selected: boolean;
}

export const IconOption = styled.div<IconOptionProps>`
    flex: 1;
    min-width: clamp(100px, 5.2vw, 5.2vw);
    height: clamp(100px, 5.2vw, 5.2vw);
    display: flex;
    justify-content: center;
    align-items: center;
    padding: clamp(15px, 0.78125vw, 0.78125vw);
    border: 1px solid ${props => props.selected ? "white" : "#333333"};
    border-radius: clamp(5px, 0.26vw, 0.26vw);
    cursor: pointer;

    transition: all 0.1s;
    transition-timing-function: ease;

    :hover {
        border: 1px solid white;
    }
`;

export const ModalFooter = styled.div`
    width: 100%;
    height: clamp(65px, 6vh, 6vh);
    border-top: 1px solid #333333;
    display: flex;
    justify-content: flex-end;
    padding: 0.8vh;
    gap: clamp(5.4px, 0.5vh, 0.5vh);
`;

interface ModalButtonProps {
    action: string;
}

export const ModalButton = styled.button<ModalButtonProps>`
    width: clamp(115px, 6vw, 6vw);
    cursor: pointer;
    border: none;
    border-radius: clamp(7px, 0.365vw, 0.365vw);
    background: ${props => props.action === "cancel" ? "#181818" : "grey"};
    color: ${props => props.action === "cancel" ? "lightgrey" : "#181818"};
    opacity: 1;
    transition: all 0.2s;

    font-size: clamp(14px, 0.729vw, 0.729vw);

    :hover {
        opacity: 0.9;
    }
`;