import '../../public/index.css';

import { useEffect, useState } from 'react';

import Layout from '@/components/molecules/layout';
import ThemeProvider from '@/context/ThemeContext';

function commonLayout(page) {
	return <Layout>{page}</Layout>;
}

export default function MyApp({ Component, pageProps }) {
	const [loading, setLoading] = useState(false);
	useEffect(() => {
		setLoading(false);
	}, []);

	// Use the layout defined at the page level, if available
	const getLayout = Component.getLayout || commonLayout;

	return <ThemeProvider>{loading ? <div>Loading</div> : getLayout(<Component {...pageProps} />)}</ThemeProvider>;
}
