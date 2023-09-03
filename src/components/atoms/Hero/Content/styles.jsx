import styled from 'styled-components';
import { Heading1, Heading4 } from '../../shared';

export const ContentContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-start;

	@media (max-width: 720px) {
		align-items: center;
	}
`;

export const Title = styled(Heading1)`
	color: #646464;
	text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
	font-family: 'Open Sans', sans-serif !important;
	font-weight: 600 !important;

	@media (max-width: 720px) {
		font-size: 24px;
		line-height: 28px;
		text-shadow: none;
	}
`;

export const SubTitle = styled(Heading4)`
	color: #646464;
	font-weight: 600 !important;
	font-family: 'Open Sans', sans-serif !important;

	@media (max-width: 720px) {
		font-size: 16px;
	}
`;

export const ButtonsContainer = styled.div`
	display: flex;
	align-items: center;
	gap: 18px;
	margin-top: 24px;
`;
