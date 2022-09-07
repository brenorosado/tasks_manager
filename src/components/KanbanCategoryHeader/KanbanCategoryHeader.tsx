import { useState } from "react";
import { MdViewColumn } from "react-icons/md";
import { useForm } from "react-hook-form";
import * as S from "./styles";
import { useLoadingContext } from "../../store/LoadingContext";
import fetchCategory from "../../services/category";
import { toast } from "react-toastify";
import { useParams } from "react-router-dom";

interface KanbanCategoryHeaderProps {
    categoryName?: string;
    categoryId?: string;
    updateCategoriesAndTasks: () => void
}

type CategoryFormValues = {
    name: string;
}

export const KanbanCategoryHeader = ({
  updateCategoriesAndTasks,
  categoryId,
  categoryName
}: KanbanCategoryHeaderProps) => {
  const [merginCategory, setMerginCategory] = useState<boolean>(false);

  const { id } = useParams();
  const { setLoading } = useLoadingContext();

  const { register, handleSubmit, reset } = useForm<CategoryFormValues>();
  
  const mergeCategory = async (values: CategoryFormValues) => {
    setLoading(true);
    try {
      if(categoryName && categoryId) {
        await fetchCategory.updateCategory({
          name:values.name as string,
          id: categoryId 
        });
      } else {
        await fetchCategory.createCategory({
          name:values.name as string, 
          projectId: id as string 
        });
      }
    } catch (e: any) {
      if(e.message)
        toast.error(e.message);
    }
    updateCategoriesAndTasks();
    setLoading(false);
    setMerginCategory(false);
    reset({ name: "" });
  };

  const deleteCategory = async () => {
    setLoading(true);
    try {
      await fetchCategory.deleteCategory(categoryId as string);
    } catch (e: any) {
      if(e.message)
        toast.error(e.message);
    }
    updateCategoriesAndTasks();
    setLoading(false);
  };

  return (
    <>
      {!merginCategory && (
        <S.CategoryTitle onClick={(event) => {
          if(event.detail === 2) {
            setMerginCategory(true);
            reset({ name: categoryName });
          }
        }}>
          {categoryName}
        </S.CategoryTitle>
      )}
      {!merginCategory && !categoryName && (
        <S.AddCategoryButton onClick={() => setMerginCategory(true)}>
          <MdViewColumn style={{ display: "flex", height: "100%" }} />
          <span>add new category</span>
        </S.AddCategoryButton>
      )}
      {merginCategory && (
        <S.AddCategoryFieldContainer>
          <form onSubmit={handleSubmit(mergeCategory)}>
            <input { ...register("name", { required: true }) } />
            <div>
              {categoryId && categoryName && (
                <div>
                  <button type="button"
                    style={{ background: "#4a0000" }}
                    onClick={() => deleteCategory()}
                  >
                  delete
                  </button>
                </div>
              )}
              <div>
                <button type="button" onClick={() => {
                  setMerginCategory(false);
                  reset({ name: "" });
                }}>cancel</button>
                <button type="submit">
                  {categoryId && categoryName ? "save" : "save"}
                </button>
              </div>
            </div>
          </form>
        </S.AddCategoryFieldContainer>
      )}
    </>
  );
};