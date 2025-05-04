import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate, Link } from "react-router-dom";
import useLanguage from "@/locale/useLanguage";
import { Form, Button } from "antd";
import { selectAuth } from "@/redux/auth/selectors";
import RegisterForm from "@/forms/RegisterForm";
import AuthModule from "@/modules/AuthModule";

const RegisterPage = () => {
  const translate = useLanguage();
  const { isSuccess } = useSelector(selectAuth);
  const navigate = useNavigate();
  useEffect(() => {
    if (isSuccess) navigate("/");
  }, [isSuccess, navigate]);

  const handleSendOtp = (values) => {
    navigate("/otp", { state: { values: values } });
  };

  const FormContainer = () => {

    return (
      <Form
        name="register_form"
        layout="vertical"


        className="login-form"
        onFinish={handleSendOtp}
      >
        <RegisterForm />
        <div className='button-container'>
          <Button type="primary" htmlType="submit" size="large" className="login-form-button">
            {translate("Send OTP")}
          </Button>
        
          <p>
            {translate("Already a customer?")} <Link to="/login">{translate("Log In!")}</Link>
          </p>
        </div>
      </Form>
    );
  };
  return <AuthModule authContent={<FormContainer />} AUTH_TITLE="Sign Up" />;
};

export default RegisterPage;