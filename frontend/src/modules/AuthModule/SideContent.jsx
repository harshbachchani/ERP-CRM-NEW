import { Space, Layout, Divider, Typography } from 'antd';
import logo from '@/style/images/Vertex_logo.svg';
import useLanguage from '@/locale/useLanguage';
import { useSelector } from 'react-redux';
import { selectLangDirection } from '@/redux/translate/selectors';

const { Content } = Layout;
const { Title, Text } = Typography;

export default function SideContent() {
  const translate = useLanguage();
  const langDirection = useSelector(selectLangDirection)

  return (
    <Content
      style={{
        padding: '150px 30px 30px',
        width: '100%',
        maxWidth: '450px',
        margin: '0 auto',
      }}
      className="sideContent"
    >
      <div style={{ width: '100%' }}>
        <img
          src={logo}
          alt="VERTEX ERP CRM"
          style={{ margin: '0 0 12px', display: 'block' }}
          height={100}
          width={250}
        />
        <div style={{ height: '10px' }}></div>

        <Title level={3}>{translate('Manage Your Company With')} :</Title>

        <div className="space20"></div>
        <ul className="list-checked" style={{paddingRight:0}}>
          <li className={`list-checked-item ${langDirection === "rtl" ? "list-checked-item-right" : "list-checked-item-left"}`}>
            <Space direction="vertical">
              <Text strong>{translate('All-in-one tool')}</Text>

              <Text>{translate('Run And Scale Your Erp Crm Apps')}</Text>
            </Space>
          </li>

          <li className={`list-checked-item ${langDirection === "rtl" ? "list-checked-item-right" : "list-checked-item-left"}`}>
            <Space direction="vertical">
              <Text strong>{translate('Easily add and manage your services')}</Text>
              <Text>{translate('It brings together your invoice clients and leads')}</Text>
            </Space>
          </li>
        </ul>
        <Divider />
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
          }}
        >
          {/* <img
            src={logo1}
            alt="Logo1"
            style={{
              margin: '0 15px',
              display: 'block',
              float: 'left',
              width: '48px',
              filter: 'grayscale(1)',
              mixBlendMode: 'multiply',
              opacity: '0.8',
            }}
            height={48}
            width={48}
          />
          <img
            src={logo2}
            alt="Logo2"
            style={{
              margin: '0 15px',
              display: 'block',
              float: 'left',
              width: '48px',
              filter: 'grayscale(1)',
              mixBlendMode: 'multiply',
              opacity: '0.8',
            }}
            height={48}
            width={48}
          />
          <img
            src={logo3}
            alt="Logo3"
            style={{
              margin: '0 15px',
              display: 'block',
              float: 'left',
              width: '48px',
              filter: 'grayscale(1)',
              mixBlendMode: 'multiply',
              opacity: '0.8',
            }}
            height={48}
            width={48}
          />
          <img
            src={logo4}
            alt="Logo4"
            style={{
              margin: '0 15px',
              display: 'block',
              float: 'left',
              width: '48px',
              filter: 'grayscale(1)',
              mixBlendMode: 'multiply',
              opacity: '0.8',
            }}
            height={48}
            width={48}
          /> */}
        </div>
      </div>
    </Content>
  );
}
