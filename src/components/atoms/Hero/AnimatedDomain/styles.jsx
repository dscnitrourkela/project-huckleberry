import Image from 'next/image';
import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
	from {
		opacity: 0;
	}
	to {
		opacity: 1;
	}
`;

export const CircleContainer = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	color: #fff;
	width: 72px;
	height: 72px;
	border-radius: 50%;
	background-image: ${(props) => props.fill};
	background-color: #fff;
	position: absolute;
	top: ${(props) => props.coords.y}%;
	left: ${(props) => props.coords.x}%;
	transform: translate(-50%, -50%);
	filter: ${(props) => props.filter};
	transition: scale 0.3s ease-in-out, transform 0.3s ease-in-out, top 1s ease-in-out, left 1s ease-in-out;
	text-align: center;
	padding: 8px;
	&:hover {
		transform: translate(-50%, -50%) scale(1.1);
	}

	@media (max-width: 900px) {
		width: 48px;
		height: 48px;
	}
`;

export const AnimationContainer = styled.div`
	position: relative;
	max-width: 560px;
	width: 100%;
	aspect-ratio: 1 / 1;
	margin: 50px;

	@media (max-width: 720px) {
		display: none;
	}
`;

export const Pentagon = styled.div`
	position: absolute;
	width: 95%;
	height: 90.45%;
	top: 50%;
	left: 50%;
	transform: translate(-45%, -50%) rotate(90deg);
	clip-path: polygon(50% 0%, 100% 38%, 81% 100%, 19% 100%, 0% 38%);
	background-color: #000;
`;

export const Inner = styled.div`
	position: absolute;
	width: calc(100% - 8px);
	height: calc(100% - 8px);
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%) rotate(0deg);
	clip-path: polygon(50% 0%, 100% 38%, 81% 100%, 19% 100%, 0% 38%);
	background-color: #fff;
`;

export const CustomImage = styled(Image)`
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	animation: ${fadeIn} 0.5s ease-in-out;
	max-width: 50%;
	max-height: 50%;
`;
