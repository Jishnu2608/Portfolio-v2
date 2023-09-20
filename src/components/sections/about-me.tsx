import Image from 'next/image';

import BoyVector from '/public/images/boy-vector.png';
import Tag from '@/components/data-display/tag';
import Container from '@/components/layout/container';
import Typography from '@/components/general/typography';
import Link from '@/components/navigation/link';
import { EXTERNAL_LINKS } from '@/lib/data';

const AboutMeSection = () => {
  return (
    <Container className="bg-gray-50" id="about">
      <div className="self-center">
        <Tag label="About me" />
      </div>

      <div className="flex w-full flex-col justify-between gap-12 md:flex-row">
        {/* Image */}
        <div className="flex justify-center md:order-first md:justify-end">
          <div className="relative h-[380px] w-[320px] md:h-[460px] md:w-[380px] lg:h-[520px] lg:w-[440px]">
            <Image
              src={BoyVector}
              alt="vector img"
              className="absolute z-10 h-[360px] w-[280px] border-8 border-gray-50 max-md:left-5 md:right-0 md:top-0 md:h-[420px] md:w-[340px] lg:h-[480px] lg:w-[400px]"
              style={{ objectFit: 'cover' }}
            ></Image>
            
          </div>
        </div>

        {/* Content */}
        <div className="flex max-w-xl flex-col gap-6">
          <Typography variant="h3">
            A little about me :
          </Typography>
          <Typography>
            Hello! I&apos;m a passionate developer with a strong focus on frontend development and a growing interest in cloud solutions. 
            I derive great satisfaction from bridging the technical and visual elements of digital products. Currently, I&apos;m a proud student at Vellore Institute of Technology, Bhopal. 
            My journey into the world of development began in 2021, and it&apos;s been an incredibly fulfilling experience. 
            At the moment, I&apos;m immersing myself in Next.js, TailwindCSS and TypeScript - both are incredibly exciting areas to explore.
          </Typography>

          <Typography>
          Collaboration is my strong suit. I find great joy in working closely with teams and delving into collaborative projects. 
          Learning is my constant pursuit, and I always strive to stay updated with the latest tech trends.
          </Typography>

          <Typography>
            Away from the computer screen, you&apos;ll often find me online, reading up on tech articles. 
            Alternatively, I might be holding a camera, indulging in some photography. Music is another passion of mine - 
            I thoroughly enjoy playing the piano and guitar. On the achievement front, I&apos;ve earned recognition in the world of art. 
            I&apos;ve secured top 3 positions in over 25 painting competitions at both state and district levels. Additionally, I&apos;ve participated 
            in notable photography competitions.
          </Typography>

          <Typography>
          So, that&apos;s a glimpse into who I am - a developer, a student, an eager learner, and someone who appreciates the finer aspects of life like art and music. 
          Let&apos;s connect and have a chat, whether it&apos;s about tech or anything else that piques your interest!
          </Typography>
         
        </div>
      </div>
    </Container>
  );
};

export default AboutMeSection;