import styled from 'styled-components';
import { device } from '../device';

export default styled.h1`
	font-family: 'Open Sans';
	font-weight: ${(props) => (props.semibold ? '700' : '400')};

	font-size: 64 px;
	line-height: 96 px;

	@media ${device.mobile} {
		font-size: 48 px;
		line-height: 64 px;
	}
`;
