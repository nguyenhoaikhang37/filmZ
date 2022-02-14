import { IoMailOutline } from 'react-icons/io5';
import { RiShieldKeyholeLine } from 'react-icons/ri';
import InputGroup from '../../../../components/Common/InputGroup';
import { Button, SectionTitle, Spacing, WidthFull } from '../../../../styles/GlobalComponents';

const LogInForm = () => {
  return (
    <WidthFull>
      <SectionTitle>Login</SectionTitle>
      <Spacing top="40px" />

      <InputGroup placeholder="Email" icon={<IoMailOutline />} />
      <Spacing top="16px" />

      <InputGroup placeholder="Password" icon={<RiShieldKeyholeLine />} />
      <Spacing top="40px" />

      <Button primary>Login</Button>
    </WidthFull>
  );
};

export default LogInForm;
