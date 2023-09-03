import styled from 'styled-components';
import { devices } from '../Devices';

export default styled.p`
	/* font-family: 'Poppins'; */
	font-weight: 500; // medium

	font-size: 16px;
	line-height: 24px;

	@media ${devices.mobile} {
		font-size: 14px;
		line-height: 20px;
	}
`;
