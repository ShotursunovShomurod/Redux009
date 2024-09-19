import React, { useEffect } from "react";
import { Button, Form, Input, Typography } from "antd";
import { Link, useNavigate } from "react-router-dom";
import { useSingInRequestMutation } from "../../../redux/api/authApi";
import { useDispatch } from "react-redux";
import { sigIn } from "../../../redux/slices/authSlices";
import { useSearchParams } from "react-router-dom";

const { Title, Text } = Typography;

const Signin = () => {
  const [singInRequest, { data, isSuccess }] = useSingInRequestMutation();
  const dispatch = useDispatch();
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  const onFinish = (values) => {
    singInRequest(values);
  };

  useEffect(() => {
    if (isSuccess) {
      dispatch(sigIn(data?.payload.accessToken));
      navigate(`${searchParams.get("callback-url") ?? "/"}`);
    }
  }, [isSuccess]);

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div className="flex items-center justify-center bg-gradient-to-r from-purple-50 via-pink-50 to-red-50">
      <div className="bg-white p-10 rounded-3xl shadow-lg transform transition duration-500 hover:scale-105 w-full max-w-md">
        <Title
          level={2}
          className="text-center text-3xl font-extrabold text-gray-800 mb-6"
        >
          Welcome Back
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
            label="Email"
            name="email"
            rules={[
              {
                required: true,
                message: "Please input your email!",
              },
            ]}
          >
            <Input className="px-5 py-3 border border-gray-300 rounded-full focus:outline-none focus:ring-4 focus:ring-purple-500 transition duration-300" />
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
            <Input.Password className="px-5 py-3 border border-gray-300 rounded-full focus:outline-none focus:ring-4 focus:ring-purple-500 transition duration-300" />
          </Form.Item>

          <Form.Item>
            <Button
              className="w-full py-3 px-6 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-pink-500 hover:to-red-500 text-white font-semibold rounded-full shadow-lg transition duration-300 transform hover:scale-105"
              type="primary"
              htmlType="submit"
            >
              Sign in
            </Button>
          </Form.Item>
        </Form>
        <div className="text-center mt-6">
          <Text className="text-gray-600">
            Don&apos;t have an account?{" "}
            <Link
              to="/auth/sign-up"
              className="text-purple-500 font-semibold hover:underline transition duration-300"
            >
              Sign Up
            </Link>
          </Text>
        </div>
      </div>
    </div>
  );
};

export default Signin;


// import React, { useEffect } from "react";
// import { Button, Form, Input, Typography } from "antd";
// import { Link, useNavigate } from "react-router-dom";
// import { useSingInRequestMutation } from "../../../redux/api/authApi";
// import { useDispatch } from "react-redux";
// import { sigIn } from "../../../redux/slices/authSlices";
// import { useSearchParams } from "react-router-dom";

// const { Title, Text } = Typography;

// const Signin = () => {
//   const [singInRequest, { data, isSuccess }] = useSingInRequestMutation();
//   const dispatch = useDispatch();
//   const [searchParams] = useSearchParams();
//   const navigate = useNavigate();

//   const onFinish = (values) => {
//     singInRequest(values);
//   };

//   useEffect(() => {
//     if (isSuccess) {
//       dispatch(sigIn(data?.payload.accessToken));
//       navigate(`${searchParams.get("callback-url") ?? "/"}`);
//     }
//   }, [isSuccess]);

//   const onFinishFailed = (errorInfo) => {
//     console.log("Failed:", errorInfo);
//   };

//   return (
//     <div className="flex items-center justify-center bg-gray-100">
//       <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
//         <Title level={2} className="text-center text-2xl font-bold mb-6">
//           Sign In
//         </Title>
//         <Form
//           name="basic"
//           layout="vertical"
//           initialValues={{
//             remember: true,
//           }}
//           onFinish={onFinish}
//           onFinishFailed={onFinishFailed}
//           autoComplete="off"
//           className="space-y-4"
//         >
//           <Form.Item
//             label="Email"
//             name="email"
//             rules={[
//               {
//                 required: true,
//                 message: "Please input your email!",
//               },
//             ]}
//           >
//             <Input className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
//           </Form.Item>

//           <Form.Item
//             label="Password"
//             name="password"
//             rules={[
//               {
//                 required: true,
//                 message: "Please input your password!",
//               },
//             ]}
//           >
//             <Input.Password className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
//           </Form.Item>

//           <Form.Item>
//             <Button
//               className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md"
//               type="primary"
//               htmlType="submit"
//             >
//               Sign in
//             </Button>
//           </Form.Item>
//         </Form>
//         <div className="text-center mt-4">
//           <Text>
//             Don&apos;t have an account?{" "}
//             <Link to="/auth/sign-up" className="text-blue-500 hover:underline">
//               Sign Up
//             </Link>
//           </Text>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Signin;



// import React, { useEffect } from "react";
// import { Button, Form, Input, Typography } from "antd";
// import { Link, useNavigate } from "react-router-dom";
// import { useSingInRequestMutation } from "../../../redux/api/authApi";
// import { useDispatch } from "react-redux";
// import { sigIn } from "../../../redux/slices/authSlices";
// import { useSearchParams } from "react-router-dom";

// const { Title, Text } = Typography;
// const Signin = () => {
//   const [singInRequest, { data, isSuccess }] = useSingInRequestMutation();
//   const dispatch = useDispatch();
//   const [searchParams] = useSearchParams();
//   const navigete = useNavigate();
//   const onFinish = (values) => {
//     singInRequest(values);
//   };
//   useEffect(() => {
//     if (isSuccess) {
//       dispatch(sigIn(data?.payload.accessToken));
//       console.log(data?.payload.accessToken);

//       navigete(`${searchParams.get("callback-url") ?? "/"}`);
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
//         {/* <Title level={1}>Sign in</Title> */}
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
//             Sign in
//           </Button>
//         </Form.Item>
//         <Text>
//           Don't heve an account? <Link to="/auth/sign-up">Sign Up</Link>
//         </Text>
//       </Form>
//     </div>
//   );
// };

// export default Signin;
