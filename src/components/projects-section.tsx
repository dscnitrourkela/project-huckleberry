import ProjectCard from './projects-card';

const projectsData = [
  {
    name: 'Huckleberry',
    description:
      'This project generated us fake images of dogs learnt from real ones that exists using Generative Adversial Networks. Our project is based on the concept of GANs(Generative Adversarial Networks). We have trained our model to differentiate between fake and real dog images using GAN.',
    count: 29,
    githubUrl: '#',
    bgColor: 'bg-blue-50',
  },
  {
    name: 'Huckleberry',
    description:
      'This project generated us fake images of dogs learnt from real ones that exists using Generative Adversial Networks. Our project is based on the concept of GANs(Generative Adversarial Networks). We have trained our model to differentiate between fake and real dog images using GAN.',
    count: 29,
    githubUrl: '#',
    bgColor: 'bg-green-50',
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
    <section className="py-16 bg-gradient-to-br from-white to-blue-50">
      <div className="container mx-auto px-4">
        <div className="border-t border-b border-gray-400 py-6 mb-10">
          <h2 className="text-5xl font-bold text-gray-800">Our Projects</h2>
          <p className="text-gray-600 mt-2">
            At Vero Et Accusamus Et Iusto Odio Dignissimos The.
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
