import styled from 'styled-components';
import { devices } from '../Devices';

export default styled.h3`
	font-family: 'Poppins';
	font-weight: ${(props) => (props.semibold ? '600' : '400')};

	font-size: 32px;
	line-height: 48px;

	@media ${devices.mobile} {
		font-size: 24px;
		line-height: 36px;
	}
`;
