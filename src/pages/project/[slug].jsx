import Head from 'next/head';

const Project = ({ slug }) => (
	<>
		<Head>
			<title>{slug} | GDSC NITR</title>
		</Head>
		<div>
			<h1>{slug}</h1>
		</div>
	</>
);

export default Project;

export async function getStaticProps({ params: { slug } }) {
	return {
		props: {
			slug,
		},
		revalidate: 60 * 60 * 24 * 7,
	};
}

export async function getStaticPaths() {
	return {
		paths: [{ params: { slug: 'slug' } }, { params: { slug: 'Hello' } }],
		fallback: true,
	};
}
