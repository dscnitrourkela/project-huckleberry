import styled from 'styled-components';
// import { device } from './device';

export default styled.nav`
	font-family: -apple-system, BlinkMacSystemFont, sans-serif;
	font-weight: ${(props) => (props.semibold ? '600' : '400')};

	font-size: 14 px;
	line-height: 16 px;
`;
