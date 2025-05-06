import { TeamMember } from '@/types/team';
import MemberCard from './member-card';
import TeamTitle from './team-title';

const googleColors = [
  'bg-gdg-yellow',
  'bg-gdg-red',
  'bg-gdg-blue',
  'bg-gdg-green',
];

interface MembersProps {
  teamMembers: TeamMember[];
  showBatch?: boolean;
}

const Members = ({ teamMembers, showBatch = false }: MembersProps) => {
  const leads = teamMembers.filter((member) => member.isLead);
  const coreMembers = teamMembers.filter((member) => !member.isLead);

  return (
    <section>
      <TeamTitle title="Lead" />
      {leads.length > 0 && (
        <div className="flex justify-center mb-12">
          <div
            className={`grid ${getGridClass(leads.length)} gap-6 max-w-6xl w-full px-4`}
          >
            {leads.map((member, index) => (
              <MemberCard
                key={member.id}
                {...member}
                colorClass={googleColors[index % googleColors.length]}
                showBatch={showBatch}
              />
            ))}
          </div>
        </div>
      )}

      <TeamTitle title="Core Team" textColor="text-gdg-blue" />
      {coreMembers.length > 0 && (
        <div className="flex justify-center">
          <div
            className={`grid ${getGridClass(coreMembers.length)} gap-6 max-w-6xl w-full px-4`}
          >
            {coreMembers.map((member, index) => (
              <MemberCard
                key={member.id}
                {...member}
                colorClass={googleColors[index % googleColors.length]}
                showBatch={showBatch}
              />
            ))}
          </div>
        </div>
      )}
    </section>
  );
};

function getGridClass(count: number): string {
  if (count === 1) {
    return 'grid-cols-1 max-w-xs';
  } else if (count === 2) {
    return 'grid-cols-1 sm:grid-cols-2 max-w-xl';
  } else if (count === 3) {
    return 'grid-cols-1 sm:grid-cols-2 md:grid-cols-3 max-w-4xl';
  } else {
    return 'grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4';
  }
}

export default Members;
