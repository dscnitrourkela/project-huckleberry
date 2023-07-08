import styled from 'styled-components';
import { devices } from '../Devices.js';

export default styled.section`
	font-family: 'Poppins';
	font-weight: ${(props) => (props.semibold ? '500' : '400')};

	font-size: 16px;
	line-height: 20px;

	@media ${devices.mobile} {
		font-size: 14px;
	}
`;
