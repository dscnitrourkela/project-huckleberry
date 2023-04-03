import Error from 'next/error';

const Custom404 = () => <Error statusCode={404} />;

Custom404.getLayout = (page) => <>{page}</>;

export default Custom404;
