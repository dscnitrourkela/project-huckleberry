import Head from 'next/head';

const Event = ({ eventID, eventName }) => (
	<>
		<Head>
			<title>{eventName} | GDSC NITR</title>
		</Head>
		<div>
			<h1>
				{eventID} {eventName}
			</h1>
		</div>
	</>
);

export default Event;

export async function getStaticProps({ params: { eventID } }) {
	return {
		props: {
			eventID: eventID[0],
			eventName: eventID[1],
		},
		revalidate: 60 * 60 * 24 * 7,
	};
}

export async function getStaticPaths() {
	return {
		paths: [{ params: { eventID: ['1', 'Hello World'] } }, { params: { eventID: ['2', 'Bye World'] } }],
		fallback: true,
	};
}
