'use client';

import { useState } from 'react';
import { Copy, Mail, Phone, } from 'lucide-react';

import SocialIcons from '@/components/data-display/social-icons-II';
import Tag from '@/components/data-display/tag';
import IconButton from '@/components/general/icon-button';
import Typography from '@/components/general/typography';
import Container from '@/components/layout/container';
import useWindowSize from '@/hooks/use-window-size';
import { copyTextToClipboard } from '@/lib/utils';

let email = 'jishnudeepborah@gmail.com';
let phone1 = '+91 9365514936';
let phone2 = '+91 8822978435';

type CopyValue = 'email' | 'phone';

const ContactSection = () => {
  const { width } = useWindowSize();
  const [isCopied, setIsCopied] = useState(false);
  const [copiedValueType, setCopiedValueType] = useState<CopyValue | null>(
    null
  );

  const handleCopyClick = async (text: string, type: CopyValue) => {
    try {
      await copyTextToClipboard(text);
      setIsCopied(true);
      setCopiedValueType(type);
      let timoutId: any = setTimeout(() => {
        setIsCopied(false);
        setCopiedValueType(null);
        clearTimeout(timoutId);
      }, 1500);
    } catch (error) {
      setIsCopied(false);
      setCopiedValueType(null);
      alert('Unable to copy!');
    }
  };

  return (
    <Container id="contact">
      <div className="flex flex-col items-center gap-4">
        <div className="self-center">
          <Tag label="Get in touch" />
        </div>
        <Typography variant="subtitle" className="max-w-xl text-center">
          What&apos;s next? Feel free to reach out to me if you have a query, or simply want to connect.
        </Typography>
      </div>

      <div className="flex flex-col items-center gap-6 md:gap-12">
        <div className="flex flex-col items-center md:gap-4">
          <div className="flex items-center gap-4 md:gap-5">
            <Mail className="h-6 w-6 md:h-8 md:w-8" />
            <a href={`mailto:${email}`}>
            <Typography variant="h2">{email}</Typography>
            </a>
            <IconButton
              size={width && width < 768 ? 'md' : 'lg'}
              onClick={() => handleCopyClick(email, 'email')}
              showTooltip={isCopied && copiedValueType === 'email'}
              tooltipText="Copied!"
            >
              <Copy />
            </IconButton>
          </div>
          <div className="flex items-center gap-4 md:gap-5">
            <Phone className="h-6 w-6 md:h-8 md:w-8" />
            <a href={`tel:${phone1.replace(' ', '')}`}>
            <Typography variant="h2">{phone1}</Typography>
            </a>
            <IconButton
              size={width && width < 768 ? 'md' : 'lg'}
              onClick={() => handleCopyClick(phone1.replace(' ', ''), 'phone')}
              showTooltip={isCopied && copiedValueType === 'phone'}
              tooltipText="Copied!"
            >
              <Copy />
            </IconButton>
          </div>

          <div className="flex items-center gap-4 md:gap-5">
            <Phone className="h-6 w-6 md:h-8 md:w-8" />
            <a href={`tel:${phone2.replace(' ', '')}`}>
            <Typography variant="h2">{phone2}</Typography>
            </a>
            <IconButton
              size={width && width < 768 ? 'md' : 'lg'}
              onClick={() => handleCopyClick(phone2.replace(' ', ''), 'phone')}
              showTooltip={isCopied && copiedValueType === 'phone'}
              tooltipText="Copied!"
            >
              <Copy />
            </IconButton>
          </div>
        </div>
        <div className="flex flex-col items-center gap-2">
          <Typography className="text-center">
            You may also find me on these platforms!
          </Typography>
          <SocialIcons />
        </div>
      </div>
    </Container>
  );
};

export default ContactSection;