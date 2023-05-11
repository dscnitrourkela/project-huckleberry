import styled from 'styled-components';
import { devices } from '../Devices.js';

export default styled.p`
	font-family: 'Poppins';
	font-weight: ${(props) => (props.semibold ? '600' : '400')};

	font-size: 18 px;
	line-height: 28 px;

	@media ${devices.mobile} {
		font-size: 16 px;
		line-height: ${(props) => (props.semibold ? '20' : '24')};
		font-weight: ${(props) => (props.semibold ? '500' : '400')};
	}
`;
