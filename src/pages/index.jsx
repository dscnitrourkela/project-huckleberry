import Head from 'next/head';
import styled from 'styled-components';

const Container = styled.div`
	background: var(--background-primary);
`;

const HomePage = () => (
	<>
		<Head>
			<title>DSC NIT Rourkela</title>
		</Head>
		<Container>
			<h1>Home Page</h1>
		</Container>
	</>
);

export default HomePage;
