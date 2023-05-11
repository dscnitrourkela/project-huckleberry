import styled from 'styled-components';
import { devices } from '../Devices';

export default styled.caption`
	font-family: 'Poppins';
	font-weight: 400; // regular

	font-size: 14 px;
	line-height: 20 px;

	@media ${devices.mobile} {
		font-size: 12 px;
		line-height: 18 px;
	}
`;
