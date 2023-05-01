import styled from 'styled-components';
import { device } from './device';

export default styled.button`
	font-family: 'Poppins';
	font-weight: 500; // medium

	@media ${device.mobile} {
		font-size: 14 px;
	}
	@media ${device.tablet} {
		font-size: 16 px;
	}
	@media ${device.desktop} {
		font-size: 24 px;
	}
`;
