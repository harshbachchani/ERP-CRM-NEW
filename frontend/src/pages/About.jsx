import { Button, Result } from 'antd';

import useLanguage from '@/locale/useLanguage';

const About = () => {
  const translate = useLanguage();
  return (
    <Result
      status="info"
      title={'VERTEX'}
      subTitle={translate('Do you need help on customize of this app')}
      extra={
        <>
          <p>
            Website : <a href="https://uvigaming.com/">www.Vertex.com</a>{' '}
          </p>
          <p>
            GitHub :{' '}
            <a href="https://github.com/harshbachchani/ERP-CRM-NEW.git">
              https://github.com/vertex/vertex-erp-crm
            </a>
          </p>
        </>
      }
    />
  );
};

export default About;
