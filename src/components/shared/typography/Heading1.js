import styled from 'styled-components';

export default styled.h1`
	font-size: ${(props) => (props.view === 'desktop' ? '96 px' : '64 px')};

	font-family: 'Open Sans';
	font-weight: ${(props) => (props.bold ? '700' : '400')};
`;
