import { useState } from 'react';
import Body1 from '@/components/atoms/shared/typography/Body1';
import Heading1 from '@/components/atoms/shared/typography/Heading1';
import Body2 from '@/components/atoms/shared/typography/Body2';
import Heading2 from '../components/atoms/shared/typography/Heading2';

const Playground = () => {
	const [value, setValue] = useState(0);

	return (
		<Body1>
			<Heading1>Playground</Heading1>
			<Body2>Value: {value}</Body2>
			<button onClick={() => setValue(value + 1)}>Increment</button>
			<Heading2>Checking...</Heading2>
		</Body1>
	);
};

export default Playground;
