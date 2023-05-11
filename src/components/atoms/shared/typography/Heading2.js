import styled from 'styled-components';
import { devices } from '../Devices.js';

export default styled.h2`
	font-family: 'Open Sans';
	font-weight: ${(props) => (props.semibold ? '600' : '400')};

	font-size: 48 px;
	line-height: 64 px;

	@media ${devices.mobile} {
		font-size: 32 px;
		line-height: 48 px;
	}
`;
