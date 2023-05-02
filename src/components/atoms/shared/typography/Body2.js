import styled from 'styled-components';
import { device } from './device';

export default styled.section`
	font-family: 'Poppins';
	font-weight: ${(props) => (props.medium ? '500' : '400')};

	font-size: 16 px;
	line-height: 20 px;

	@media ${device.mobile} {
		font-size: 14 px;
	}
`;
