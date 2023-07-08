import styled from 'styled-components';
import { devices } from '../Devices.js';

export default styled.p`
	font-family: 'Poppins';
	font-weight: ${(props) => (props.semibold ? '600' : '400')};

	font-size: 18px;
	line-height: 28px;

	@media ${devices.mobile} {
		font-size: 16px;
		line-height: ${(props) => (props.semibold ? '20px' : '24px')};
		font-weight: ${(props) => (props.semibold ? '500' : '400')};
	}
`;
