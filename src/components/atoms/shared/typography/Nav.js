import styled from 'styled-components';
// import { devices } from '../Devices';

export default styled.nav`
	font-family: -apple-system, BlinkMacSystemFont, sans-serif;
	font-weight: ${(props) => (props.semibold ? '600' : '400')};

	font-size: 14px;
	line-height: 16px;
`;
