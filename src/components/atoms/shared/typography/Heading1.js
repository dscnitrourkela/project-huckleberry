import styled from 'styled-components';
import { devices } from '../Devices.js';

export default styled.h1`
	font-family: 'Open Sans';
	font-weight: ${(props) => (props.semibold ? '700' : '400')};

	font-size: 64 px;
	line-height: 96 px;

	@media ${devices.mobile} {
		font-size: 48 px;
		line-height: 64 px;
	}
`;
