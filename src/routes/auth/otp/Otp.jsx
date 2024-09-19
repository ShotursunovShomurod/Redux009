// 


import { Input, Button, Form, Typography } from "antd";
import { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useOtpVerifyRequestMutation } from "../../../redux/api/authApi";

const { Title } = Typography;

const Otp = () => {
  const navigate = useNavigate();
  const [otpVerifyRequest, { data, isSuccess }] = useOtpVerifyRequestMutation();
  const [searchParams] = useSearchParams();
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");

  useEffect(() => {
    if (searchParams.get("email")) {
      setEmail(atob(searchParams.get("email")));
      if (isSuccess) {
        navigate(`/auth/sign-in`);
      }
    }
  }, [searchParams, isSuccess]);

  const onFinish = () => {
    otpVerifyRequest({ email, otp });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-purple-500 to-indigo-500">
      <div className="bg-white p-10 rounded-3xl shadow-lg w-full max-w-md transform transition duration-500 hover:scale-105">
        <Form
          onFinish={onFinish}
          className="flex flex-col gap-6 items-center justify-center"
          layout="vertical"
        >
          <Title level={2} className="text-center text-2xl font-bold text-gray-800">
            Verify Your Code
          </Title>

          <div className="flex items-center justify-center">
            <Input
              className="text-center text-xl font-semibold tracking-widest px-5 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-4 focus:ring-purple-500 transition duration-300"
              maxLength={6}
              placeholder="Enter OTP"
              onChange={(e) => setOtp(e.target.value)}
            />
          </div>

          <Form.Item className="w-full">
            <Button
              className="w-full py-3 px-6 bg-gradient-to-r from-purple-500 to-indigo-500 hover:from-indigo-500 hover:to-purple-500 text-white font-semibold rounded-full shadow-lg transition duration-300 transform hover:scale-105"
              type="primary"
              htmlType="submit"
            >
              Verify
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default Otp;
