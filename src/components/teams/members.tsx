import MemberCard from './member-card';

const googleColors = [
  'bg-gdg-yellow',
  'bg-gdg-red',
  'bg-gdg-blue',
  'bg-gdg-green',
];

const teamMembers = [
  {
    id: 1,
    name: 'Lorem Ipsum',
    title: 'Founder And CEO',
    quote:
      'Good UX enhances usability, satisfaction, and engagement, making interactions seamless and efficient.',
    imageSrc:
      'https://res.cloudinary.com/dmvdbpyqk/image/upload/v1743838337/qoflholccal1ysef8x7w.jpg',
  },
  {
    id: 2,
    name: 'Sarah Johnson',
    title: 'Lead Designer',
    quote:
      'Design is not just what it looks like and feels like. Design is how it works.',
    imageSrc:
      'https://res.cloudinary.com/dmvdbpyqk/image/upload/v1743838337/qoflholccal1ysef8x7w.jpg',
  },
  {
    id: 3,
    name: 'Alex Chen',
    title: 'Senior Developer',
    quote:
      "The best code is no code at all. Every line of code you write is a line you'll have to maintain.",
    imageSrc:
      'https://res.cloudinary.com/dmvdbpyqk/image/upload/v1743838337/qoflholccal1ysef8x7w.jpg',
  },
  {
    id: 4,
    name: 'Maria Rodriguez',
    title: 'Product Manager',
    quote:
      'A good product manager is the CEO of the product, not just a feature requester.',
    imageSrc:
      'https://res.cloudinary.com/dmvdbpyqk/image/upload/v1743838337/qoflholccal1ysef8x7w.jpg',
  },
];

const Members = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto w-full px-4">
      {teamMembers.map((member, index) => (
        <MemberCard
          key={member.id}
          name={member.name}
          title={member.title}
          quote={member.quote}
          imageSrc={member.imageSrc}
          colorClass={googleColors[index % googleColors.length]}
        />
      ))}
    </div>
  );
};

export default Members;
