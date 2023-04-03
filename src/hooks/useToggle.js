import { useState } from 'react';

const useToggle = () => {
	const [state, setState] = useState(false);

	const toggle = () => {
		setState(!state);
	};

	return [state, toggle];
};

export default useToggle;
