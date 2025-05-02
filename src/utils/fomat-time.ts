export const formatTimestamp = (timestamp: string | number): string => {
  const date = new Date(Number(timestamp));
  if (isNaN(date.getTime())) return 'Invalid Date';

  const options: Intl.DateTimeFormatOptions = {
    weekday: 'long',
    year: '2-digit',
    month: 'short',
    day: 'numeric',
  };
  const formattedDate = date.toLocaleDateString('en-GB', options);

  const day = date.getDate();
  const suffix =
    ['th', 'st', 'nd', 'rd'][
      day % 10 > 3 || Math.floor((day % 100) / 10) === 1 ? 0 : day % 10
    ] || 'th';
  const dayWithSuffix = `${day}${suffix}`;

  const time = date.toLocaleTimeString('en-US', {
    hour: 'numeric',
    minute: '2-digit',
    hour12: true,
  });

  return `${formattedDate.replace(day.toString(), dayWithSuffix)} at ${time}`;
};

export const formatTimestampForHTML = (timestamp: string | number): string => {
  const date = new Date(Number(timestamp));
  if (isNaN(date.getTime())) return 'Invalid Date';

  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  const hours = String(date.getHours()).padStart(2, '0');
  const minutes = String(date.getMinutes()).padStart(2, '0');

  return `${year}-${month}-${day}T${hours}:${minutes}`;
};
