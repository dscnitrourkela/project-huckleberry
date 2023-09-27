import { SectionContainer } from '../../shared';
import { Wrapper } from './styles';

const Footer = () => (
	<SectionContainer>
		<Wrapper>
			Made with{' '}
			<span role='img' aria-label='love'>
				❤️
			</span>{' '}
			by DSC NIT Rourkela
		</Wrapper>
	</SectionContainer>
);

export default Footer;
