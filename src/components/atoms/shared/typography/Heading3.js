import styled from 'styled-components';
import { devices } from '../Devices';

export default styled.h3`
	font-family: 'Poppins';
	font-weight: ${(props) => (props.semibold ? '600' : '400')};

	font-size: 32 px;
	line-height: 48 px;

	@media ${devices.mobile} {
		font-size: 24 px;
		line-height: 36 px;
	}
`;
