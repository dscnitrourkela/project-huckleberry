import Image from 'next/image';
import { useEffect, useState } from 'react';

const { CircleContainer } = require('./styles');

const CircleDomain = ({ title, icon, fill, filter, position, handleClick, index }) => {
	const [coords, setCoords] = useState({ x: 0, y: 0 });

	useEffect(() => {
		const angle = (position * 360) / 5;
		const x = Math.cos((angle * Math.PI) / 180) * 50 + 50;
		const y = Math.sin((angle * Math.PI) / 180) * 50 + 50;

		setCoords({ x, y });
	}, [position]);

	return (
		<CircleContainer fill={fill} filter={filter} coors={coords} onClick={() => handleClick(index)}>
			{icon ? <Image src={icon} alt={title} width={65} height={31} /> : <h3>{title}</h3>}
		</CircleContainer>
	);
};

export default CircleDomain;
