import styled from 'styled-components';
import { device } from './device';

export default styled.caption`
	font-family: 'Poppins';
	font-weight: 400; // regular

	@media ${device.mobile} {
		font-size: 12 px;
	}
	@media ${device.tablet} {
		font-size: 14 px;
	}
	@media ${device.desktop} {
		font-size: 20 px;
	}
`;
