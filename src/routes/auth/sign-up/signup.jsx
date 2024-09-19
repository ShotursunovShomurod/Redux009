import { Link, useNavigate } from "react-router-dom";
import { Button, Form, Input, Typography } from "antd";
import { useSignUpRequestMutation } from "../../../redux/api/authApi";
import { useEffect } from "react";

const { Title, Text } = Typography;

const SignUp = () => {
  const navigate = useNavigate();
  const [signUpRequest, { data, isSuccess }] = useSignUpRequestMutation();

  const onFinish = (values) => {
    signUpRequest(values);
  };

  useEffect(() => {
    if (isSuccess && data.payload?.email) {
      navigate(`/auth/otp?email=${btoa(data.payload.email)}`);
    }
  }, [isSuccess]);

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div className=" flex items-center justify-center bg-gradient-to-r from-blue-400 via-indigo-500 to-purple-600">
      <div className="bg-white p-10 rounded-3xl shadow-lg transform transition duration-500 hover:scale-105 w-full max-w-md">
        <Title
          level={2}
          className="text-center text-3xl font-extrabold text-gray-800 mb-6"
        >
          Create Your Account
        </Title>
        <Form
          name="basic"
          layout="vertical"
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
          className="space-y-6"
        >
          <Form.Item
            label="Firstname"
            name="first_name"
            rules={[
              {
                required: true,
                message: "Please input your firstname!",
              },
            ]}
          >
            <Input className="px-5 py-3 border border-gray-300 rounded-full focus:outline-none focus:ring-4 focus:ring-blue-500 transition duration-300" />
          </Form.Item>

          <Form.Item
            label="Email"
            name="email"
            rules={[
              {
                required: true,
                message: "Please input your email!",
              },
            ]}
          >
            <Input className="px-5 py-3 border border-gray-300 rounded-full focus:outline-none focus:ring-4 focus:ring-blue-500 transition duration-300" />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={[
              {
                required: true,
                message: "Please input your password!",
              },
            ]}
          >
            <Input.Password className="px-5 py-3 border border-gray-300 rounded-full focus:outline-none focus:ring-4 focus:ring-blue-500 transition duration-300" />
          </Form.Item>

          <Form.Item>
            <Button
              className="w-full py-3 px-6 bg-gradient-to-r from-indigo-500 to-purple-500 hover:from-purple-500 hover:to-pink-500 text-white font-semibold rounded-full shadow-lg transition duration-300 transform hover:scale-105"
              type="primary"
              htmlType="submit"
            >
              Sign Up
            </Button>
          </Form.Item>
        </Form>
        <div className="text-center mt-6">
          <Text className="text-gray-600">
            Already have an account?{" "}
            <Link
              to="/auth/sign-in"
              className="text-indigo-500 font-semibold hover:underline transition duration-300"
            >
              Sign In
            </Link>
          </Text>
        </div>
      </div>
    </div>
  );
};

export default SignUp;



// import { Link, useNavigate } from "react-router-dom";
// import { Button, Form, Input, Typography } from "antd";
// import { useSignUpRequestMutation } from "../../../redux/api/authApi";
// import { useEffect } from "react";

// const { Title, Text } = Typography;
// const SignUp = () => {
//   const navigete = useNavigate();
//   const [signUpRequest, { data, isSuccess }] = useSignUpRequestMutation();
//   const onFinish = (values) => {
//     signUpRequest(values);
//   };
//   console.log(data);
//   useEffect(() => {
//     if (isSuccess && data.payload?.email) {
//       navigete(`/auth/otp?email=${btoa(data.payload.email)}`);
//     }
//   }, [isSuccess]);
//   const onFinishFailed = (errorInfo) => {
//     console.log("Failed:", errorInfo);
//   };
//   return (
//     <div>
//       {" "}
//       <Form
//         name="basic"
//         layout="vertical"
//         initialValues={{
//           remember: true,
//         }}
//         onFinish={onFinish}
//         onFinishFailed={onFinishFailed}
//         autoComplete="off"
//       >
//         <Title level={1}>Sign Up</Title>
//         <Form.Item
//           label="Firstname"
//           name="first_name"
//           rules={[
//             {
//               required: true,
//               message: "Please input your first_name!",
//             },
//           ]}
//         >
//           <Input />
//         </Form.Item>
//         <Form.Item
//           label="Email"
//           name="email"
//           rules={[
//             {
//               required: true,
//               message: "Please input your email!",
//             },
//           ]}
//         >
//           <Input />
//         </Form.Item>

//         <Form.Item
//           label="Password"
//           name="password"
//           rules={[
//             {
//               required: true,
//               message: "Please input your password!",
//             },
//           ]}
//         >
//           <Input.Password />
//         </Form.Item>

//         <Form.Item>
//           <Button className="w-full" type="primary" htmlType="submit">
//             Sign Up
//           </Button>
//         </Form.Item>
//         <Text>
//           Already have an account? <Link to="/auth/sign-in">Sign Ip</Link>
//         </Text>
//       </Form>
//     </div>
//   );
// };

// export default SignUp;
