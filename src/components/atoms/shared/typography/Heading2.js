import styled from 'styled-components';
import { devices } from '../Devices.js';

export default styled.h2`
	font-family: 'Open Sans';
	font-weight: ${(props) => (props.semibold ? '600' : '400')};

	font-size: 48px;
	line-height: 64px;

	@media ${devices.mobile} {
		font-size: 32px;
		line-height: 48px;
	}
`;
