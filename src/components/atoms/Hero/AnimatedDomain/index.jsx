import { useEffect, useRef, useState } from 'react';
import { AnimationContainer, CustomImage, Inner, Pentagon } from './styles';
import CircleDomain from './domain';
import { heroContent } from '@/data/hero';

const AnimatedDomain = () => {
	const [currPos, setCurrPos] = useState(0);
	const [currIntervalID, setCurrIntervalID] = useState(null);

	const centerRef = useRef(null);

	useEffect(() => {
		const interval = setInterval(() => {
			setCurrPos((prev) => (prev + 4) % 5);
		}, 3000);

		setCurrIntervalID(interval);

		return () => clearInterval(interval);
	}, []);

	useEffect(() => {
		centerRef.current.animate(
			[
				{
					opacity: 0,
				},
				{
					opacity: 1,
				},
			],
			{
				duration: 1000,
				easing: 'ease-in-out',
				fill: 'forwards',
			},
		);
	}, [currPos]);

	const handleClick = (position) => {
		setCurrPos(-position);

		clearInterval(currIntervalID);
		const interval = setInterval(() => {
			setCurrPos((prev) => (prev + 4) % 5);
		}, 3000);

		setCurrIntervalID(interval);
	};

	return (
		<AnimationContainer>
			<Pentagon>
				<Inner />
			</Pentagon>
			<CustomImage
				ref={centerRef}
				src={heroContent.domains[currPos].image}
				alt={heroContent.domains[currPos].title}
				width={heroContent.domains[currPos].dimensions.width}
				height={heroContent.domains[currPos].dimensions.height}
			/>
			{heroContent.domains.map((domain, index) => (
				<CircleDomain
					key={domain.title}
					title={domain.title}
					icon={domain.icon}
					fill={domain.fill}
					filter={domain.filter}
					position={(currPos + index) % 5}
					index={index}
					handleClick={handleClick}
				/>
			))}
		</AnimationContainer>
	);
};

export default AnimatedDomain;
