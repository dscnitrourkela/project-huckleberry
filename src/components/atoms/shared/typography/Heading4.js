import styled from 'styled-components';
import { device } from '../device';

export default styled.h4`
	font-family: 'Poppins';
	font-weight: ${(props) => (props.semibold ? '600' : '400')};

	font-size: 24 px;
	line-height: 36 px;

	@media ${device.mobile} {
		font-size: 20 px;
		line-height: 28 px;
	}
`;
