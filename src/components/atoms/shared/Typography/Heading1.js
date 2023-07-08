import styled from 'styled-components';
import { devices } from '../Devices.js';

export default styled.h1`
	font-family: 'Open Sans';
	font-weight: ${(props) => (props.semibold ? '700' : '400')};

	font-size: 64px;
	line-height: 96px;

	@media ${devices.mobile} {
		font-size: 48px;
		line-height: 64px;
	}
`;
