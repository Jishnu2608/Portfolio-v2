import { EDUCATION } from '@/lib/data';
import EducationDetails from '@/components/data-display/education-details';
import Tag from '@/components/data-display/tag';
import Typography from '@/components/general/typography';
import Container from '@/components/layout/container';

const EducationSection = () => {
  return (
    <Container className="bg-gray-50">
      <div className="flex flex-col items-center gap-4">
        <div className="self-center">
          <Tag label="Education" />
        </div>
        <Typography variant="subtitle" className="max-w-xl text-center">
          Here is a quick summary of my education :
        </Typography>
      </div>

      {EDUCATION?.map((education, index) => (
        <EducationDetails {...education} key={index} />
      ))}
    </Container>
  );
};

export default EducationSection;