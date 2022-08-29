import * as S from "./styles";
import { TbSection } from "react-icons/tb";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Category } from "../../entities/category";

interface KanbanTasksViewProps {
  addCategory: (name: string) => void;
  categories: Category[];
}

type CategoryFormValues = {
  name: string;
}

export const KanbanTasksView = ({ addCategory, categories }: KanbanTasksViewProps) => {
  const [addingCategory, setAddingCategory] = useState<boolean>(false);

  const { register, handleSubmit, reset } = useForm<CategoryFormValues>();

  console.log("categories", categories);
  
  const mergeCategory = (values: any) => {
    console.log("values", values);
    addCategory(values.name);
  };

  return (
    <S.KanbanTasksViewContainer>
      {categories.map(category => (
        <S.CategoryColumn key={category.id}>
          <S.CategoryTitle>{category.name}</S.CategoryTitle>
        </S.CategoryColumn>
      ))}
      <S.CategoryColumn>
        {!addingCategory && (
          <S.AddCategoryButton onClick={() => setAddingCategory(true)}>
            <S.CategoryIcon style={{ display: "flex" }}>
              <TbSection color="orange"/>
            </S.CategoryIcon>
            <span>add new category</span>
          </S.AddCategoryButton>
        )}
        {addingCategory && (
          <S.AddCategoryFieldContainer>
            <form onSubmit={handleSubmit(mergeCategory)}>
              <input { ...register("name", { required: true }) } />
              <div>
                <button onClick={() => {
                  setAddingCategory(false);
                  reset({ name: "" });
                }}>cancel</button>
                <button type="submit">add category</button>
              </div>
            </form>
          </S.AddCategoryFieldContainer>
        )}
      </S.CategoryColumn>
    </S.KanbanTasksViewContainer>
  );
};