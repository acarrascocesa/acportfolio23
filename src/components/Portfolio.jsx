import PotfolioItem from "./PotfolioItem";
import portfolio from "../data/portfolio";

const Portfolio = () => {
  return (
    <div>
      <h1 className="text-4xl md:text-4xl mb-4 md:mb-6 font-bold items-center justify-center text-center mt-20">Some of my projects</h1>
      <div className="flex flex-col md:flex-row items-center justify-center">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {portfolio.map((project) => (
            <PotfolioItem
              key={project.title}
              img={project.img}
              title={project.title}
              stack={project.stack}
              link={project.link}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
