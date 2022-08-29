import styled from "styled-components";

export const KanbanTasksViewContainer = styled.div`
    width: 100%;
    height: 96%;
    border-radius: 10px;
    padding: 10px;
    display: flex;
    gap: 10px;

    overflow-x: auto;
`;

export const CategoryColumn = styled.div`
    padding: 5px;
    height: 100%;
    border-radius: 6px;
    display: flex;
    flex-direction: column;
    cursor: pointer;
    transition: all 0.2s;
    border: 1px solid #262626;

    :hover {
        border: 1px solid #444;
    }
`;

export const CategoryTitle = styled.span`
    width: clamp(200px, 10vw, 10vw);
    color: lightgrey;
    padding: 5px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
`;

export const AddCategoryButton = styled.button`
    width: clamp(200px, 10vw, 10vw);
    padding: 5px;
    background: rgba(0, 0, 0, 0);
    border: none;
    outline: none;
    font-size: 17px;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
    color: lightgrey;
    cursor: pointer;
    transition: all 0.2s;
    
    span {
        display: flex;
        align-items: center;
        justify-content: center;
    }

    :hover {
        color: orange;
    }
`;

export const CategoryIcon = styled.span`
    transform: rotate(-90deg);
`;

export const AddCategoryFieldContainer = styled.div`
    form { 
        width: clamp(200px, 10vw, 10vw);
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 5px;
    }

    input {
        color: lightgrey;
        width: 100%;
        background: #181818;
        outline: none;
        border: none;
        padding: 4px;
        border-radius: 2px;
    }

    div {
        width: 100%;
        display: flex;
        justify-content: flex-end;
        gap: 3px;

        button {
            padding: 5px;
            border: none;
            outline: none;
            background: #555;
            color: lightgrey;
            border-radius: 3px;
            cursor: pointer;
            transition: all 0.2s;

            :hover {
                opacity: 0.8;
            }

            :last-child {
                background: #181818;
            }
        }
    }
`;