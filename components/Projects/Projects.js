import Title from '../Title';
import Project from './Project';
const projectList = Array(5).fill(1);
const Projects = () => {
    return (
        // FIXME: Remove the items-center or justify-center from the index.js
        <div className="flex flex-col md:px-8 lg:px-12 xl:px-20 mb-8 ">
            {/* Heading: Projects */}
            <Title id="02." heading="Personal Projects" />
            <Project />
            {projectList.map(() => (
                <Project />
            ))}
            {/* Projects list */}
        </div>
    );
};

export default Projects;
