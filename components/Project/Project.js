import Title from '../Title';
import ProjectItem from './ProjectItem';
import { projectData } from './projectData';
const Project = () => {
    return (
        <div className="flex flex-col md:px-8 lg:px-12 xl:px-20 mb-8 ">
            {/* Heading: Projects */}
            <Title id="02." heading="Personal Projects" />
            <div className="flex flex-col gap-y-12">
                {projectData.map((project, index) => (
                    <ProjectItem key={index} project={project} />
                ))}
            </div>
            {/* Projects list */}
        </div>
    );
};

export default Project;
