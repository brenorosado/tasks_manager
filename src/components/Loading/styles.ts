import styled, { keyframes } from "styled-components";

interface LoadingProps {
    isLoading: boolean;
}

const rotationAnimation = keyframes`
    from {
        transform: rotate(0deg);
    }

    to {
        transform: rotate(360deg);
    }
`;

export const LoadingContainer = styled.div<LoadingProps>`
    z-index: 9999999999999999999999;
    position: fixed;
    display: ${props => props.isLoading ? "block" : "none"};
    opacity: ${props => props.isLoading ? "1" : "0"};
    width: 3vh;
    height: 3vh;
    top: 10vh;
    right: 3.5vh;
    border-radius: 50%;
    border: clamp(2px, 0.11vw, 0.11vw) solid grey;
    border-top: clamp(2px, 0.11vw, 0.11vw) solid lightgrey;

    animation: ${rotationAnimation} 0.8s ease infinite;
`;