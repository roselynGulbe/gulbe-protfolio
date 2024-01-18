import React from 'react'
import Title from '../layouts/Title'
import { projectOne, projectTwo, projectThree,projectFour,projectFive,projectSix} from "../../assets/index";
import ProjectsCard from './ProjectsCard';

const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <div className="flex justify-center items-center text-center">
        <Title
          title=""
          des="My Projects"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
        <ProjectsCard
          title="Website"
          des=" Website developersince 2019."
          src={projectOne}
          githubLink="https://github.com/mihirc0111/IPL-Predictor-Mihir"
          websiteLink="https://mihirc0111-ipl-predictor-mihir-app-8s1ct4.streamlit.app/"

        />
        
        
        
      </div>
    </section>
  );
}

export default Projects