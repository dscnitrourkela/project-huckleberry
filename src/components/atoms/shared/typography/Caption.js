import styled from 'styled-components';
import { devices } from '../Devices';

export default styled.caption`
	font-family: 'Poppins';
	font-weight: 400; // regular

	font-size: 14px;
	line-height: 20px;

	@media ${devices.mobile} {
		font-size: 12px;
		line-height: 18px;
	}
`;
