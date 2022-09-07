import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ProjectResponse } from "../../entities/project";
import { fetchProjects } from "../../services/projects";
import fetchCategory from "../../services/category";
import { useLoadingContext } from "../../store/LoadingContext";
import { toast } from "react-toastify";
import { icons } from "../../utils/icons";

import { VscEdit } from "react-icons/vsc";
import { MergeProjectModal } from "../../components/MergeProjectModal/MergeProjectModal";
import { KanbanTasksView } from "../../components/KanbanTasksView/KanbanTasksView";

import * as S from "./styles";

export const Project = () => {
  const [project, setProject] = useState<ProjectResponse>();
  const [categories, setCategories] = useState([]);
  const [isEditingProject, setIsEditingProject] = useState<boolean>(false);

  const { id } = useParams();
  const { setLoading } = useLoadingContext();

  const getProject = async () => {
    if(id) {
      setLoading(true);
      try {
        const projectRes = await fetchProjects.getProjectById(id);
        const { data } = projectRes;
        setProject(data);
      } catch (e: any) {
        if(e.message)
          toast.error(e.message);
      }
      setLoading(false);
    }
  };

  const getProjectTasks = async () => {
    setLoading(true);
    try {
      const categoriesRes = await fetchCategory.getProjectCategories(id as string);
      const { data } = categoriesRes;
      setCategories(data);
    } catch (e: any) {
      if(e.message)
        toast.error(e.message);
    }
    setLoading(false);
  };

  useEffect(() => {
    getProject();
    getProjectTasks();
  }, [id]);

  return (
    <>
      <S.ProjectPageContainer>
        <S.ProjectHeader>
          <div>
            <h1 style={{ display: "flex", color: "lightgrey" }}>
              {icons.find(icon => icon.id === project?.icon)?.element()}
            </h1>
            <h1>{project?.name}</h1>
          </div>
          <S.EditProjectButton onClick={() => setIsEditingProject(true)}>
            <VscEdit />
          </S.EditProjectButton>
        </S.ProjectHeader>
        
        <KanbanTasksView categories={categories} updateCategoriesAndTasks={getProjectTasks}/>
      </S.ProjectPageContainer>
      <MergeProjectModal
        projectToBeEdited={project}
        active={isEditingProject}
        onClose={() => setIsEditingProject(false)}
        onFinish={getProject}
      />
    </>
  );
};