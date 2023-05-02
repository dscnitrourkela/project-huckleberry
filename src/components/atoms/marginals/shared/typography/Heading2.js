import styled from 'styled-components';
import { device } from '../device';

export default styled.h2`
	font-family: 'Open Sans';
	font-weight: ${(props) => (props.semibold ? '600' : '400')};

	font-size: 48 px;
	line-height: 64 px;

	@media ${device.mobile} {
		font-size: 32 px;
		line-height: 48 px;
	}
`;
