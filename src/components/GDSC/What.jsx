import React from 'react';
import styled from 'styled-components';

const AboutUsContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
`;
const Row = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
	width: 100%;
	margin-bottom: 20px;
`;

const Image = styled.img`
	max-width: 100%;
	height: auto;
`;

const Text = styled.div`
	max-width: 600px;
	margin: 0 20px;
`;
const Heading = styled.h2`
	color: black;
	font-size: 2.5rem;
`;
const what = () => (
	<AboutUsContainer>
		<Heading>What is GDSC</Heading>
		<Row>
			<Image
				src='https://res.cloudinary.com/dafdencvh/image/upload/v1698091760/hacknitr5.0%20maerae%20component%20kae%20regarding%20image/image_83_pqmdbo.png'
				alt='About Us'
			/>
			<Text>
				<p>
					lorem Dialog content here. Dialog content here. Dialog content here. Dialog content here. Dialog content here.
					Dialog content here. Dialog content here. Dialog content here. Dialog content here. Dialog content here.
					Dialog content here. Dialog content here. Dialog content here. Dialog content here. Dialog content here.
					Dialog content here. Dialog content here. Dialog content here. Dialog content here. Dialog content here.
					Dialog content here. Dialog content here. Dialog content here. Dialog content here. Dialog content here.
					Dialog content here. Dialog content here.{' '}
				</p>
			</Text>
		</Row>
	</AboutUsContainer>
);

export default what;
