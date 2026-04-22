import Image from 'next/image';

import BoyVector from '/public/images/boy-vector.png';
import Tag from '@/components/data-display/tag';
import Container from '@/components/layout/container';
import Typography from '@/components/general/typography';


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
            Hello! I&apos;m a data professional currently working at LatentView Analytics, with a 
            strong focus on analytics and data engineering, while also maintaining a solid foundation in 
            frontend development. I build scalable data pipelines and insightful dashboards to turn complex 
            data into actionable decisions, and I enjoy extending that work into clean, intuitive web interfaces 
            when needed. My experience spans ETL design, data validation frameworks, and modern data stacks 
            including SQL, Python, Databricks, Apache Spark, and Power BI, with a growing interest in cloud-based 
            data architecture.

          </Typography>

          <Typography>
          I thrive in collaborative environments and enjoy working closely with teams to solve problems 
            end-to-end — from data ingestion to visualization. I&apos;m constantly learning and keeping up 
            with evolving tools and best practices in both data and web ecosystems.
          </Typography>

          <Typography>
            Outside of work, I spend time exploring tech content, practicing photography, 
            and playing the piano and guitar. I&apos;ve also earned top 3 positions in over 25 state and 
            district-level painting competitions, along with participation in photography contests.
          </Typography>
         
        </div>
      </div>
    </Container>
  );
};

export default AboutMeSection;
