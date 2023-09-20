'use client';

import { SOCIAL_LINKS_II } from '@/lib/data';
import IconButton from '@/components/general/icon-button';

const SocialIconsII = () => {
  return (
    <div className="flex gap-1">
      {SOCIAL_LINKS_II.map((socialLink, index) => (
        <IconButton
          key={index}
          onClick={() => window.open(socialLink.url, '_blank')}
        >
          <socialLink.icon />
        </IconButton>
      ))}
    </div>
  );
};

export default SocialIconsII;