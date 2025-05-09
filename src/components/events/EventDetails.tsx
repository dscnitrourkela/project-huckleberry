import { Calendar, MapPin, Info, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import EventInfoCard from '@/components/events/EventInfoCard';
import Image from 'next/image';

// Mock data to simulate fetching event by ID
const getEventById = (id: string) => {
  return {
    id,
    coverImage:
      'https://res.cloudinary.com/dpmlrxlzr/image/upload/v1746378087/hn_50_1_ru18tc.png',
    title: `#${id} HackNITR`,
    subTitle: 'Largest Student-run Hackathon: HackNITR',
    description:
      'Lorem ipsum dolor sit amet consectetur. Eget eu maecenas mattis dapibus fermentum duis. Mattis risus pharetra suspendisse posuere mauris suspendisse est diam quis. Amet nulla lobortis vitae dolor malesuada praesent arcu tincidunt. Feugiat posuere adipiscing pede duis elit in cras netus rhoncus.',
    location: 'NIT Rourkela, Odisha',
    mode: 'Offline',
    eligibility: 'All college students',
    timestamp: '18/04/2023',
  };
};

interface EventDetailProps {
  eventID: string;
}

const EventDetail = ({ eventID }: EventDetailProps) => {
  const event = getEventById(eventID);
  return (
    <div className="min-h-screen flex flex-col font-product-sans-regular tracking-wide">
      <main className="flex-1 px-4 sm:px-6 md:px-8 lg:px-16 max-w-7xl mx-auto w-full">
        <div className="py-10">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-center">
            {event.title}
          </h1>

          {/* Image Section */}
          <div className="w-full max-h-[400px] sm:max-h-[500px] overflow-hidden rounded-xl my-6">
            <Image
              src={event.coverImage}
              alt={event.title}
              width={800}
              height={500}
              className="w-full object-cover"
            />
          </div>

          {/* Event Details */}
          <div className="mt-4 bg-blue-50 rounded-xl p-6">
            <div className="flex flex-col sm:flex-row justify-between gap-6">
              <div className="flex-1">
                <h3 className="text-xl sm:text-2xl font-semibold mb-4">
                  {event.subTitle}
                </h3>
                <div className="text-gray-700 mb-6">{event.description}</div>

                {/* Event Info Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8">
                  <EventInfoCard
                    icon={<Calendar className="text-blue-600" />}
                    title="Date"
                    description={event.timestamp}
                    bgColor="bg-blue-100"
                  />

                  <EventInfoCard
                    icon={<MapPin className="text-red-600" />}
                    title="Location"
                    description={event.location}
                    bgColor="bg-red-100"
                  />

                  <EventInfoCard
                    icon={<Info className="text-green-600" />}
                    title="Mode"
                    description={event.mode}
                    bgColor="bg-green-100"
                  />

                  <EventInfoCard
                    icon={<Users className="text-purple-600" />}
                    title="Eligibility"
                    description={event.eligibility}
                    bgColor="bg-purple-100"
                  />
                </div>
              </div>
            </div>

            {/* Registration Button */}
            <div className="mt-10 flex justify-center">
              <Button className="bg-blue-600 hover:bg-blue-700 text-white rounded-md px-8 py-2 sm:px-10 sm:py-3 font-medium transition-all">
                Apply for Registration
              </Button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default EventDetail;
