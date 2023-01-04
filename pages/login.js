import { useFormik } from "formik";
import * as Yup from "yup";
import { useRouter } from "next/router";

const Login = () => {
  const router = useRouter();
  const formik = useFormik({
    initialValues: {
      phoneNumber: "",
      otp: "",
    },
    validationSchema: Yup.object({
      phoneNumber: Yup.number()
        .min(10, "Invalid phone number")
        .max(12, "Invalid phone number")
        .required("Required"),
      otp: Yup.number()
        .min(4, "Invalid otp")
        .max(4, "Invalid otp")
        .required("Required"),
    }),
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <div className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 w-screen h-screen flex items-center justify-center">
      <div className="w-1/3 flex flex-col items-center justify-center bg-gradient-to-br from-pink-300 via-purple-300 to-indigo-300 bg-opacity-75  mx-auto rounded-md h-1/3">
        <text className="text-2xl text-gray-900 mb-10">Login</text>
        <form
          action=""
          className="flex flex-col items-center justify-center"
          onSubmit={formik.handleSubmit}
        >
          <div className="flex flex-col space-y-1">
            <label htmlFor="phoneNumber" className="text-sm text-gray-700">
              Phone Number
            </label>
            <input
              id="phoneNumber"
              type="number"
              className="bg-gray-200 rounded-sm h-7 outline-none px-2 text-gray-800"
              placeholder="Phone number"
              {...formik.getFieldProps("phoneNumber")}
            />
            {formik.touched.phoneNumber && formik.errors.phoneNumber ? (
              <div className="text-xs text-red-600">
                {formik.errors.phoneNumber}
              </div>
            ) : null}
          </div>
          <div className="flex flex-col space-y-1 mt-4">
            <label htmlFor="otp" className="text-sm text-gray-700">
              OTP
            </label>
            <input
              id="otp"
              type="password"
              className="bg-gray-200 rounded-sm h-7 outline-none px-2 text-gray-800"
              placeholder="otp"
              {...formik.getFieldProps("otp")}
            />
            {formik.touched.otp && formik.errors.otp ? (
              <div className="text-xs text-red-600">{formik.errors.otp}</div>
            ) : null}
          </div>
          <div className="text-xs text-gray-900 mt-2">
            Don't have an account?{" "}
            <span
              className="text-blue-700 hover:cursor-pointer hover:underline"
              onClick={() => router.push("/register")}
            >
              Register here.
            </span>
          </div>
          <button
            type="submit"
            className="h-10 bg-pink-600 rounded-md w-28 text-indigo-900 mt-3"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
