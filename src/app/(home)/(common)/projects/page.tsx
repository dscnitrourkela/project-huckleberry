import Image from 'next/image';
import Link from 'next/link';
import ProjectsSection from '@/app/(home)/(common)/projects/projects-section';

export default function Home() {
  return (
    <div className="min-h-screen w-full overflow-hidden relative bg-gradient-to-br from-white to-blue-50 flex flex-col">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <div
          className="absolute top-10 left-10 w-56 h-56 rounded-full bg-gdg-blue/10 animate-float"
          style={{ animationDelay: '0s' }}
        ></div>
        <div
          className="absolute top-50 right-10 w-96 h-96 rounded-full bg-gdg-green/10 animate-float z-0"
          style={{ animationDelay: '1s' }}
        ></div>
      </div>

      {/* Header */}
      <header className="relative z-10 container mx-auto px-9 py-4 flex justify-between items-center">
        <div className="flex items-center">
          <Image
            src="https://res.cloudinary.com/djmnk7cvv/image/upload/v1746851582/AL_GDG_Short_hmdok8.png"
            alt="Google Developer Groups"
            width={200}
            height={50}
            className="mr-0 ml-10"
          />
        </div>

        <nav className="hidden md:flex items-center space-x-6 mr-4">
          <Link
            href="/"
            className="text-gray-600  font-bold hover:text-blue-600 font-large"
          >
            Home
          </Link>
          <Link
            href="/about"
            className="text-gray-600 font-bold hover:text-blue-600 font-large"
          >
            About us
          </Link>
          <Link
            href="/events"
            className="text-gray-600 font-bold hover:text-blue-600 font-large"
          >
            Events
          </Link>
          <Link
            href="/projects"
            className="text-gray-600 font-bold hover:text-blue-600 font-large"
          >
            Projects
          </Link>
          <Link
            href="/team"
            className="text-gray-600 font-bold hover:text-blue-600 font-large"
          >
            Team
          </Link>
          <Link
            href="/join"
            className="bg-blue-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-blue-700 transition"
          >
            Join Community
          </Link>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="relative z-10 container mx-auto px-4 py-8">
        <div className="rounded-lg overflow-hidden max-w-6xl mx-auto">
          <Image
            src="https://res.cloudinary.com/dqcrkrtyr/image/upload/v1747039475/banner_iuhyjr.jpg"
            alt="GDG Event"
            width={1000}
            height={400}
            className="object-cover h-90 rounded-2xl shadow-xl w-full"
          />
        </div>
      </section>

      {/* Projects Section */}
      <ProjectsSection />
    </div>
  );
}
