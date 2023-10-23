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

const AboutUs = () => (
	<AboutUsContainer>
		<Row>
			<Image
				src='https://res.cloudinary.com/dafdencvh/image/upload/v1698089836/hacknitr5.0%20maerae%20component%20kae%20regarding%20image/Frame_998_hz4ynb.png'
				alt='About Us'
			/>
			<Text>
				<h2>UI UX</h2>
				<p>Some text about ABout us.</p>
			</Text>
		</Row>
		<Row>
			<Text>
				<h2>WEB DEV</h2>
				<p>Some text about ABout us.</p>
			</Text>
			<Image
				src='https://res.cloudinary.com/dafdencvh/image/upload/v1698089998/hacknitr5.0%20maerae%20component%20kae%20regarding%20image/Frame_999_ag21ux.png'
				alt='About Us'
			/>
		</Row>
		<Row>
			<Image
				src='https://res.cloudinary.com/dafdencvh/image/upload/v1698089836/hacknitr5.0%20maerae%20component%20kae%20regarding%20image/Frame_998_hz4ynb.png'
				alt='About Us'
			/>
			<Text>
				<h2>ML / AI</h2>
				<p>Some text about ABout us.</p>
			</Text>
		</Row>
	</AboutUsContainer>
);

export default AboutUs;
