// import Footer from '../atoms/marginals/Footer';
import NavBar from '../atoms/marginals/Navbar';

const Layout = ({ children }) => (
	<>
		<NavBar />
		<main>{children}</main>
		{/* <Footer /> */}
	</>
);

export default Layout;
