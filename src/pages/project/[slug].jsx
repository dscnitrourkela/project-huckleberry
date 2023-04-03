const Project = ({ slug }) => (
	<div>
		<h1>{slug}</h1>
	</div>
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
