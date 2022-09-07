import * as S from "./styles";
import { Category } from "../../entities/category";
import { KanbanCategoryHeader } from "../KanbanCategoryHeader/KanbanCategoryHeader";
import { AiOutlinePlus } from "react-icons/ai";

interface KanbanTasksViewProps {
  categories: Category[];
  updateCategoriesAndTasks: () => void
}

export const KanbanTasksView = ({ categories, updateCategoriesAndTasks }: KanbanTasksViewProps) => {
  return (
    <S.KanbanTasksViewContainer>
      {categories.map(category => (
        <S.CategoryColumn key={category.id}>
          <KanbanCategoryHeader
            updateCategoriesAndTasks={updateCategoriesAndTasks}
            categoryId={category.id}
            categoryName={category.name}
          />
          <S.AddTaskContainer>
            <span>
              <AiOutlinePlus style={{ display: "flex" }} />
            </span>
            <span>
              add task
            </span>
          </S.AddTaskContainer>
        </S.CategoryColumn>
      ))}

      <S.CategoryColumn>
        <KanbanCategoryHeader
          updateCategoriesAndTasks={updateCategoriesAndTasks}
        />
      </S.CategoryColumn>
    </S.KanbanTasksViewContainer>
  );
};