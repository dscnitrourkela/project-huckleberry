import { useState } from 'react';

const Playground = () => {
	const [value, setValue] = useState(0);

	return (
		<div>
			<h1>Playground</h1>
			<p>Value: {value}</p>
			<button onClick={() => setValue(value + 1)}>Increment</button>
		</div>
	);
};

export default Playground;
