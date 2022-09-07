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

export const CategoryHeader = styled.div`
    display: flex;
    align-items: center;
    gap: 5px;
    justify-content: space-between;
    color: lightgrey;
`;

export const AddTaskContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
    color: lightgrey;
    padding-top: 10px;
    padding-left: 5px;
    
    span {
        transition: all 0.2s;
        :first-child {
            padding: 2px;
            color: orange;
            border-radius: 50%;
        }
    }

    :hover {
        span {
            :first-child {
                background: orange;
                color: white;
            }

            :last-child {
                color: orange;
            }
        }
    }
`;