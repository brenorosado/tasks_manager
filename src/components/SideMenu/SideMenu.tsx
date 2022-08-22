import { useEffect, useState } from "react";

import { Link } from "react-router-dom";

import { fetchProjects } from "../../services/projects";

import { AddProjectModal } from "../AddProjectModal/AddProjectModal";
import { toast } from "react-toastify";

import * as S from "./styles";
import { AiOutlineSchedule, AiOutlineDown, AiOutlinePlusCircle } from "react-icons/ai";
import { MdOutlineApps } from "react-icons/md";
import { HiMenu } from "react-icons/hi";

import { icons } from "../../utils/icons";

export const SideMenu = () => {
  const [showOptions, setShowOptions] = useState<boolean>(true);
  const [projects, setProjects] = useState<any[]>([]);
  const [isShowingProjects, setIsShowingProjects] = useState<boolean>(true);
  const [showProjectModal, setShowProjectModal] = useState<boolean>(false);

  const getProjects = async () => {
    try {
      const projectsRes = await fetchProjects.getUserProjects();
      
      const { data }: any = projectsRes;
      console.log("data", data);
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

  const onConfirm = () => {
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
                <AiOutlineDown style={{ display: "flex" }} />
              </S.ProjectsShowIcon>
              <span
                onClick={() => setIsShowingProjects(prevState => !prevState)}
              >
                projects
              </span>
              <div onClick={() => setShowProjectModal(true)}>
                <AiOutlinePlusCircle color="lightgreen" style={{ display: "flex" }} />
              </div>
            </S.ProjectsSectionTitle>

            <S.ProjectsOptionsContainer isShowing={isShowingProjects}>
              {projects.map((item, index) => (
                <Link to={`/project/${item.id}`} key={index}>
                  <span style={{
                    display: "flex",
                    color: "orange"
                  }}>
                    {icons.find(icon => icon.id === item.icon)?.element()} 
                  </span>
                  <span>
                    {item.name}
                  </span>
                </Link>
              ))}
            </S.ProjectsOptionsContainer>
          </S.ProjectsContainer>
        </S.SideOptions>
      </S.SideOptionsContainer>

      <AddProjectModal
        active={showProjectModal}
        onClose={closeModal}
        onConfirm={onConfirm}
      />
    </>
  );
};