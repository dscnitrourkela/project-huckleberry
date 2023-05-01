import styled from 'styled-components';
// import { device } from '../device';

export default styled.h2`
	font-size: ${(props) => (props.view === 'desktop' ? '64 px' : '48 px')};

	font-family: 'Open Sans';
	font-weight: ${(props) => (props.semibold ? '600' : '400')};
`;
