import styled from 'styled-components';
import { devices } from '../Devices';

export default styled.h4`
	font-family: 'Poppins';
	font-weight: ${(props) => (props.semibold ? '600' : '400')};

	font-size: 24px;
	line-height: 36px;

	@media ${devices.mobile} {
		font-size: 20px;
		line-height: 28px;
	}
`;
