import { SectionContainer } from '@/components/atoms/shared';
import { Container, Wrapper } from './styles';
import HeroContent from '@/components/atoms/Hero/Content';
import AnimatedDomain from '@/components/atoms/Hero/AnimatedDomain';

const HeroSection = () => (
	<Wrapper>
		<SectionContainer>
			<Container>
				<HeroContent />
				<AnimatedDomain />
			</Container>
		</SectionContainer>
	</Wrapper>
);

export default HeroSection;
