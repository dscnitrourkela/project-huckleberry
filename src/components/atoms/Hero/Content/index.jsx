import { heroContent } from '@/data/hero';
import { ButtonsContainer, ContentContainer, SubTitle, Title } from './styles';
import Button from '../../shared/Button';

const HeroContent = () => (
	<ContentContainer>
		<Title>{heroContent.title}</Title>
		<SubTitle>{heroContent.subtitle}</SubTitle>

		<ButtonsContainer>
			{heroContent.links.map((link) => (
				<Button {...link} key={link.text} />
			))}
		</ButtonsContainer>
	</ContentContainer>
);

export default HeroContent;
