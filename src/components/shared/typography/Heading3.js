import styled from 'styled-components';
import { device } from '../device';

export default styled.h3`
	font-family: 'Poppins';
	font-weight: ${(props) => (props.semibold ? '600' : '400')};

	@media ${device.mobile} {
		font-size: 24 px;
	}

	@media ${device.tablet} {
		font-size: 36 px;
	}

	@media ${device.desktop} {
		font-size: 48 px;
	}
`;
