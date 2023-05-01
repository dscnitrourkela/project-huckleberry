const sizes = {
	mobile: '375px',
	tablet: '600px',
	desktop: '1024px',
};

export const devices = {
	mobile: `(max-width: ${sizes.mobile})`,
	tablet: `(max-width: ${sizes.tablet})`,
	desktop: `(min-width: ${sizes.tablet})`,
};
