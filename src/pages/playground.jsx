import { useState } from 'react';
// import Button from '../atoms/shared/button/Button';
// import Link from 'next/link';

const Playground = () => {
	const [value, setValue] = useState(0);

	return (
		<div>
			<h1>Playground</h1>
			<p>Value: {value}</p>
			<button onClick={() => setValue(value + 1)}>Increment</button>
			{/* <Link href="/" passHref>
		<Button variant="disabled">Button</Button>
		</Link>
		<Button>Button</Button>
		<Button variant="outline">Button</Button>
		<Button variant="disabled">Button</Button> */}
		</div>
	);
};

export default Playground;
