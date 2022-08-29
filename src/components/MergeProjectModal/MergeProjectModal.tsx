import * as S from "./styles";

import { useForm, SubmitHandler } from "react-hook-form";

import { ProjectPayload, ProjectResponse } from "../../entities/project";

import { fetchProjects } from "../../services/projects";
import { toast } from "react-toastify";

import { icons } from "../../utils/icons";

import { useLoadingContext } from "../../store/LoadingContext";
import { useEffect } from "react";

interface ModalProps {
    active: boolean;
    onClose: () => void;
    onFinish: () => void;
    projectToBeEdited?: ProjectResponse;
}

const initialValues = {
  name: "",
  icon: ""
};

export const MergeProjectModal = ({ 
  active,
  onClose,
  onFinish,
  projectToBeEdited = undefined
}: ModalProps) => {
  const { setLoading } = useLoadingContext();

  const {
    register,
    handleSubmit,
    reset,
    setValue,
    watch
  } = useForm<ProjectPayload>();

  const onCancel = () => {
    reset(initialValues);
    onClose();
  };

  const onSubmit: SubmitHandler<ProjectPayload> = async (data) => {
    setLoading(true);
    try {
      if(projectToBeEdited) await fetchProjects.updateProject(data);
      else await fetchProjects.createProject(data);
      onFinish();
    } catch (e: any) {
      if(e.response.data.message) 
        toast.error(e.response.data.message);
    }
    
    setLoading(false);
    onCancel();
  };

  useEffect(() => {
    if(projectToBeEdited) reset(projectToBeEdited);
  }, [active]);

  return (
    <S.Overlay active={active}>
      <S.Modal>
        <S.ModalHeader>
            create project
        </S.ModalHeader>

        <S.ModalBody>
          <form onSubmit={handleSubmit(onSubmit)}>
            <S.FormRow>
              <label>project name:</label>
              <input
                { ...register("name", { required: true }) }
              />
            </S.FormRow>
            <S.FormRow>
              <label>icon:</label>
              <S.IconsContainer>
                {icons.map((icon) => {
                  return (
                    <S.IconOption
                      selected={watch("icon") === icon.id}
                      key={icon.id} 
                      onClick={() => setValue("icon", icon.id)}>
                      {icon.element()}
                    </S.IconOption>
                  );
                })}
              </S.IconsContainer>
            </S.FormRow>
          </form>
        </S.ModalBody>

        <S.ModalFooter>
          <S.ModalButton action="cancel" onClick={onCancel}>cancel</S.ModalButton>
          <S.ModalButton type="submit" onClick={handleSubmit(onSubmit)} action="confirm">create</S.ModalButton>
        </S.ModalFooter>
      </S.Modal>
    </S.Overlay>
  );
};