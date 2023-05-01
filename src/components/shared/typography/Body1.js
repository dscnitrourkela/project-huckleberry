import styled from 'styled-components';
import { device } from './device';

export default styled.p`
	font-family: 'Poppins';
	font-weight: ${(props) => (props.semibold ? '600' : '400')};

	@media ${device.mobile} {
		font-size: 16 px;
	}
	@media ${device.tablet} {
		font-size: 20 px;
	}
	@media ${device.desktop} {
		font-size: 28 px;
	}
`;
