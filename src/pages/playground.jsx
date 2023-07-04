import { useState } from 'react';
import { Body1, Body2, Heading1, Heading2, Nav, Button } from '@/components/atoms/shared';

const Playground = () => {
	const [value, setValue] = useState(0);

	return (
		<>
			<Nav>This is navigation bar</Nav>
			<Body1>
				<Heading1>Playground</Heading1>
				<Body2>Value: {value}</Body2>
				<Button onClick={() => setValue(value + 1)}>Increment</Button>
				<Heading2>Checking...</Heading2>
			</Body1>
		</>
	);
};

export default Playground;
