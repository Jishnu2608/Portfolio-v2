import { CERTIFICATES } from '@/lib/data';
import CertificateDetails from '@/components/data-display/certificate-details';
import Tag from '@/components/data-display/tag';
import Typography from '@/components/general/typography';
import Container from '@/components/layout/container';

const CertificateSection = () => {
  return (
    <Container id="certificates">
      <div className="flex flex-col items-center gap-4">
        <div className="self-center">
          <Tag label="Certificates" />
        </div>
        <Typography variant="subtitle" className="max-w-xl text-center">
          Some of the notable certificates I have earned :
        </Typography>
      </div>

      {CERTIFICATES?.map((certificate, index) => (
        <CertificateDetails
          key={index}
          {...certificate}
          layoutType={index % 2 === 0 ? 'default' : 'reverse'}
        />
      ))}
    </Container>
  );
};

export default CertificateSection;