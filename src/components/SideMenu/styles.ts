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

export const SideOptionsContainer = styled.div<SideOptionsProps>`
    width: clamp(250px, 14vw, 14vw);
    position: fixed;
    top: 8vh;
    left: ${props => props.showOptions ? "0" : "clamp(-900px, -30vw, -30vw)"};
    opacity: ${props => props.showOptions ? "1" : "0"};
    background: #181818;
    transition: all 0.3s;
    transition-time-function: ease;
    height: 92vh;
    font-size: clamp(16px, 0.8333vw, 0.8333vw);
`;

export const SideOptions = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: slex-start;
    align-items: center;
    min-height: 86vh;
    overflow-y: auto;
    
    a {
        width: 100%;
        display: flex;
        min-height: 4vh;
        flex-wrap: nowrap;
        justify-content: flex-start;
        align-items: center;
        gap: clamp(10px, 0.52vw, 0.52vw);
        padding: clamp(10px, 0.52vw, 0.52vw);
        padding-left: clamp(40px, 2vw, 2vw);
        cursor: pointer;
        color: lightgrey;
        text-decoration: none;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        
        :hover {
            background: rgba(255, 255, 255, 0.01);
        }
    }
`;

export const ProjectsContainer = styled.div`
    position: relative;
    width: 100%;
    min-height: 4vh;
`;

interface ProjectsShowIconProps {
    isShowing: boolean;
}

export const ProjectsSectionTitle = styled.div`
    display: flex;
    padding-top: clamp(5px, 0.46vh, 0.46vh);
    padding-left: clamp(40px, 2vw, 2vw);
    align-items: center;
    gap: clamp(15px, 0.78vw, 0.78vw);
    color: lightgrey;
    cursor: pointer;
    width: 100%;
`;

export const ProjectsShowIcon = styled.div<ProjectsShowIconProps>`
    ${props => props.isShowing ? "" : "transform: rotate(-90deg);"};
    transition-timing-function: ease;
    transition: all 0.2s;
`;

interface ProjectLinkContainerProps {
    selected: boolean;
}

export const ProjectLinkContainer = styled.div<ProjectLinkContainerProps>`
    background: ${props => props.selected ? "rgba(255, 255, 255, 0.01)" : ""};
`;

export const ProjectsOptionsContainer = styled.div<ProjectsShowIconProps>`
    position: absolute;
    display: ${props => props.isShowing ? "block" : "none"};
    opacity: ${props => props.isShowing ? "1" : "0"};
    top: 3.5vh;

    transition: 0.2s;
    transition-timing-function: ease;
    font-size: clamp(14px, 0.729vw, 0.729vw);

    a {
        display: flex;
        width: clamp(250px, 14vw, 14vw);
        padding-left: clamp(50px, 2.6vw, 2.6vw);
        padding-right: clamp(30px, 1.56vw, 1.56vw);
    }
`;

export const ProjectName = styled.span`
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
`;

export const PlusIcon = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 2px;
    border-radius: 50%;
    transition: all 0.1s;
    transition-timing-function: ease;

    :hover {
        background: rgba(255, 255, 255, 0.1);
    }
`;