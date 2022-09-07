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
    window.location.reload();
  };

  const deleteProject = () => {
    if(projectToBeEdited) {
      setLoading(true);
      try {
        fetchProjects.deleteProject(projectToBeEdited.id);
      } catch (e: any) {
        if(e.response.data.message) 
          toast.error(e.response.data.message);
      }
      setLoading(false);
      onClose();
      window.location.pathname = "/app";
    }
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

        <S.ModalFooter justifyEnd={!projectToBeEdited?.id}>
          {!!projectToBeEdited?.id && (
            <S.ModalButton
              action="cancel"
              onClick={deleteProject}
              background="#4a0000"
            >
              delete
            </S.ModalButton>
          )}

          <div 
            style={{
              display: "flex",
              gap: "clamp(5.4px, 0.5vh, 0.5vh)"
            }}
          >
            <S.ModalButton
              action="cancel"
              background="#181818"
              onClick={onCancel}
            >
              cancel
            </S.ModalButton>
            <S.ModalButton
              type="submit"
              onClick={handleSubmit(onSubmit)}
              action="confirm"
              background="grey"
            >
                create
            </S.ModalButton>
          </div>
        </S.ModalFooter>
      </S.Modal>
    </S.Overlay>
  );
};