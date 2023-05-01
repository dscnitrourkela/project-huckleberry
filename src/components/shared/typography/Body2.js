import styled from 'styled-components';
import { device } from './device';

export default styled.section`
	font-family: 'Poppins';
	font-weight: ${(props) => (props.medium ? '500' : '400')};

	@media ${device.mobile} {
		font-size: 14 px;
	}
	@media ${device.tablet} {
		font-size: 16 px;
	}
	@media ${device.desktop} {
		font-size: 20 px;
	}
`;
