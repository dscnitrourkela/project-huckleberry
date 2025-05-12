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
    <section className="py-20 bg-gradient-to-br from-white to-blue-50 mr-14 ml-14">
      <div className="container mx-auto px-20">
        <div className="border-t border-b border-gray-500 py-10 mb-10 flex bg-white justify-between">
          <h2 className="text-8xl font-extrabold font-productsans  text-gray-800">
            Our Projects
          </h2>
          <p className="text-gray-800 mt-2 font-productsans text-2xl font-extrabold max-w-md ml-auto text-center py-4">
            At Vero Et Accusamus Et lusto Odio Dignissimos The.
          </p>
        </div>

        <div className="max-w-6xl mx-auto py-10 space-y-20">
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
