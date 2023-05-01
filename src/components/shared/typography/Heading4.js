import styled from 'styled-components';
import { device } from '../device';

export default styled.h4`
	font-family: 'Poppins';
	font-weight: ${(props) => (props.semibold ? '600' : '400')};

	@media ${device.mobile} {
		font-size: 20 px;
	}

	@media ${device.tablet} {
		font-size: 24 px;
	}

	@media ${device.desktop} {
		font-size: 36 px;
	}
`;
