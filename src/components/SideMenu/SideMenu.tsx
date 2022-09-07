import { useEffect, useState } from "react";

import { Link } from "react-router-dom";

import { fetchProjects } from "../../services/projects";

import { MergeProjectModal } from "../MergeProjectModal/MergeProjectModal";
import { toast } from "react-toastify";
import * as S from "./styles";
import { AiOutlineSchedule, AiOutlinePlus } from "react-icons/ai";
import { MdOutlineApps, MdOutlineKeyboardArrowDown } from "react-icons/md";
import { HiMenu } from "react-icons/hi";

import { icons } from "../../utils/icons";

import { ProjectResponse } from "../../entities/project";
import { AxiosResponse } from "axios";

export const SideMenu = () => {
  const [showOptions, setShowOptions] = useState<boolean>(true);
  const [projects, setProjects] = useState<ProjectResponse[]>([]);
  const [isShowingProjects, setIsShowingProjects] = useState<boolean>(true);
  const [showProjectModal, setShowProjectModal] = useState<boolean>(false);
  const [projectId, setProjectId] = useState<string>("");

  useEffect(() => {
    setProjectId(window.location.pathname.split("/")[
      window.location.pathname.split("/").length -1 
    ]);
  }, []);

  const getProjects = async () => {
    try {
      const projectsRes = await fetchProjects.getUserProjects();
      
      const { data }: AxiosResponse = projectsRes;
      setProjects(data);

    } catch (e: any) {
      if(e.response.data.message) 
        toast.error(e.response.data.message);
    }
  };

  useEffect(() => {
    getProjects();
  }, []);

  const closeModal = () => setShowProjectModal(false);

  const onFinish = () => {
    getProjects();
  }; 

  return (
    <>
      <S.SideMenuContainer showOptions={showOptions}
        onClick={() => setShowOptions(prevState => !prevState)}>
        <HiMenu />
      </S.SideMenuContainer>
      
      <S.SideOptionsContainer showOptions={showOptions}>
        <S.SideOptions>
          <Link to="/app">
            <span>
              <MdOutlineApps color="lightcoral" /> 
            </span>
            <span>
              app
            </span>
          </Link>

          <Link to="/soon">
            <span>
              <AiOutlineSchedule color="skyblue"/>
            </span>
            <span>
                soon
            </span>
          </Link>

          <S.ProjectsContainer>
            <S.ProjectsSectionTitle>
              <S.ProjectsShowIcon
                isShowing={isShowingProjects}
                onClick={() => setIsShowingProjects(prevState => !prevState)}
              >
                <MdOutlineKeyboardArrowDown style={{ display: "flex" }} />
              </S.ProjectsShowIcon>
              <span
                onClick={() => setIsShowingProjects(prevState => !prevState)}
              >
                projects
              </span>
              <S.PlusIcon onClick={() => setShowProjectModal(true)}>
                <AiOutlinePlus color="lightgrey" style={{ display: "flex" }} />
              </S.PlusIcon>
            </S.ProjectsSectionTitle>

            <S.ProjectsOptionsContainer isShowing={isShowingProjects}>
              {projects.map((item, index) => (
                <S.ProjectLinkContainer onClick={() => setProjectId(item.id)} selected={projectId === item.id} key={index}>
                  <Link to={`/project/${item.id}`}>
                    <span style={{
                      display: "flex",
                      color: "orange"
                    }}>
                      {icons.find(icon => icon.id === item.icon)?.element()} 
                    </span>
                    <S.ProjectName>
                      {item.name}
                    </S.ProjectName>
                  </Link>
                </S.ProjectLinkContainer>
              ))}
            </S.ProjectsOptionsContainer>
          </S.ProjectsContainer>
        </S.SideOptions>
      </S.SideOptionsContainer>

      <MergeProjectModal
        active={showProjectModal}
        onClose={closeModal}
        onFinish={onFinish}
      />
    </>
  );
};