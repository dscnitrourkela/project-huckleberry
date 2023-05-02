import styled from 'styled-components';
import { device } from './device';

export default styled.caption`
	font-family: 'Poppins';
	font-weight: 400; // regular

	font-size: 14 px;
	line-height: 20 px;

	@media ${device.mobile} {
		font-size: 12 px;
		line-height: 18 px;
	}
`;
