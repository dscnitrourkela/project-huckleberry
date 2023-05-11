import styled from 'styled-components';
import { devices } from '../Devices';

export default styled.button`
	font-family: 'Poppins';
	font-weight: 500; // medium

	font-size: 16 px;
	line-height: 24 px;

	@media ${devices.mobile} {
		font-size: 14 px;
		line-height: 20 px;
	}
`;
