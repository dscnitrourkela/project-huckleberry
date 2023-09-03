import styled from 'styled-components';

export const Wrapper = styled.div`
	width: 100%;
	height: 100%;
	background-image: url('/images/hero/background-desktop.png');
	background-size: contain;
	background-position: center;
	background-repeat: no-repeat;
	padding: 0 24px;
	background-color: #fff;

	@media (max-width: 720px) {
		background-image: url('/images/hero/background-mobile.png');
		background-size: contain;
	}
`;

export const Container = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
	height: 100%;
	width: 100%;

	@media (max-width: 720px) {
		height: 600px;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}
`;
