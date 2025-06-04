import { TALLY_FORM_ID } from '@/config/home';
import React, { useEffect } from 'react';

interface TallyFormWrapperProps {
  formId?: string;
  buttonText?: string;
  layout?: 'modal' | 'page';
  width?: number;
  emojiText?: string;
  emojiAnimation?: string;
  children?: React.ReactNode;
}

const TallyFormWrapper: React.FC<TallyFormWrapperProps> = ({
  formId = TALLY_FORM_ID,
  layout = 'modal',
  width = 700,
  emojiText = '👋',
  emojiAnimation = 'wave',
  children,
}) => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://tally.so/widgets/embed.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const formUrl = `https://tally.so#tally-open=${formId}&tally-layout=${layout}&tally-width=${width}&tally-emoji-text=${emojiText}&tally-emoji-animation=${emojiAnimation}`;

  return <a href={formUrl}>{children}</a>;
};

export default TallyFormWrapper;
