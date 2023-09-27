const imagesFolder = '/images/hero/';

export const heroContent = {
	id: 'hero',
	title: 'Google Developer Student Clubs',
	subtitle: 'National Institute of Technology, Rourkela',
	links: [
		{
			text: 'Apply Now',
			variant: 'primary',
			link: 'https://dsc.community.dev/national-institute-of-technology-rourkela/',
		},
		{
			text: 'Join Community',
			variant: 'outline',
			link: 'https://dsc.community.dev/national-institute-of-technology-rourkela/',
		},
	],
	domains: [
		{
			title: 'Web Dev',
			image: `${imagesFolder}web.png`,
			fill: 'radial-gradient(111.68% 111.68% at 115.28% 68.06%, rgba(229, 229, 229, 0.95) 0%, #169E23 100%)',
			filter: 'drop-shadow(0px 2px 6px rgba(0, 0, 0, 0.15)) drop-shadow(0px 1px 2px rgba(0, 0, 0, 0.30))',
			dimensions: {
				width: 277,
				height: 277,
			},
		},
		{
			title: 'App Dev',
			image: `${imagesFolder}app.png`,
			fill: 'radial-gradient(49.73% 49.73% at 34.72% 20.14%, rgba(235, 235, 235, 0.97) 0%, #FACB00 100%)',
			filter: 'drop-shadow(0px 2px 6px rgba(0, 0, 0, 0.15)) drop-shadow(0px 1px 2px rgba(0, 0, 0, 0.30))',
			dimensions: {
				width: 334,
				height: 210,
			},
		},
		{
			title: 'ML/AI',
			image: `${imagesFolder}mlai.png`,
			fill: 'radial-gradient(49.73% 49.73% at 34.72% 20.14%, rgba(235, 235, 235, 0.97) 0%, #DB4437 100%)',
			filter: 'drop-shadow(0px 2px 6px rgba(0, 0, 0, 0.15)) drop-shadow(0px 1px 2px rgba(0, 0, 0, 0.30))',
			dimensions: {
				width: 277,
				height: 277,
			},
		},
		{
			icon: `${imagesFolder}logo.png`,
			image: `${imagesFolder}dsc.png`,
			filter: 'drop-shadow(0px 2px 6px rgba(0, 0, 0, 0.15)) drop-shadow(0px 1px 2px rgba(0, 0, 0, 0.30))',
			dimensions: {
				width: 311,
				height: 311,
			},
		},
		{
			title: 'UI/UX',
			image: `${imagesFolder}uiux.png`,
			filter: 'drop-shadow(0px 2px 6px rgba(0, 0, 0, 0.15)) drop-shadow(0px 1px 2px rgba(0, 0, 0, 0.30))',
			fill: 'radial-gradient(49.73% 49.73% at 34.72% 20.14%, rgba(235, 235, 235, 0.97) 0%, #4285F4 100%)',
			dimensions: {
				width: 323,
				height: 206,
			},
		},
	],
};
