const Member = ({ memberID, memberName }) => (
	<div>
		<h1>
			{memberID} {memberName}
		</h1>
	</div>
);

export default Member;

export async function getStaticProps({ params: { memberID } }) {
	return {
		props: {
			memberID: memberID[0],
			memberName: memberID[1],
		},
		revalidate: 60 * 60 * 24 * 7,
	};
}

export async function getStaticPaths() {
	return {
		paths: [{ params: { memberID: ['1', 'Hello World'] } }, { params: { memberID: ['2', 'Bye World'] } }],
		fallback: true,
	};
}
