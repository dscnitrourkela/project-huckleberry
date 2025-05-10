import ProjectCard from './projects-card';

const projectsData = [
  {
    name: 'Huckleberry',
    description:
      'This project generated us fake images of dogs learnt from real ones that exists using Generative Adversial Networks. Our project is based on the concept of GANs(Generative Adversarial Networks). We have trained our model to differentiate between fake and real dog images using GAN.',
    count: 29,
    githubUrl: '#',
    bgColor: 'bg-blue-100',
  },
  {
    name: 'Huckleberry',
    description:
      'This project generated us fake images of dogs learnt from real ones that exists using Generative Adversial Networks. Our project is based on the concept of GANs(Generative Adversarial Networks). We have trained our model to differentiate between fake and real dog images using GAN.',
    count: 29,
    githubUrl: '#',
    bgColor: 'bg-yellow-50',
  },
  {
    name: 'Huckleberry',
    description:
      'This project generated us fake images of dogs learnt from real ones that exists using Generative Adversial Networks. Our project is based on the concept of GANs(Generative Adversial Networks). We have trained our model to differentiate between fake and real dog images using GAN.',
    count: 29,
    githubUrl: '#',
    bgColor: 'bg-purple-50',
  },
  {
    name: 'Huckleberry',
    description:
      'This project generated us fake images of dogs learnt from real ones that exists using Generative Adversial Networks. Our project is based on the concept of GANs(Generative Adversarial Networks). We have trained our model to differentiate between fake and real dog images using GAN.',
    count: 29,
    githubUrl: '#',
    bgColor: 'bg-green-50',
  },
];

export default function ProjectsSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-white to-blue-50">
      <div className="container mx-auto px-20">
        <div className="border-t border-b border-gray-500 py-10 mb-10 flex justify-between">
          <h2 className="text-8xl font-extrabold font-productsans text-gray-800">
            Our Projects
          </h2>
          <p className="text-gray-800 mt-2 font-productsans text-2xl font-bold max-w-md ml-auto text-right">
            We are a group of passionate developers who love to work on open
            source projects.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          {projectsData.map((project, index) => (
            <ProjectCard
              key={index}
              name={project.name}
              description={project.description}
              count={project.count}
              githubUrl={project.githubUrl}
              bgColor={project.bgColor}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
