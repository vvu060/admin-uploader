import { useFormik } from "formik";
import * as Yup from "yup";
import { useRouter } from "next/router";

const Register = () => {
  const router = useRouter();
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      phoneNumber: "",
    },
    validationSchema: Yup.object({
      firstName: Yup.string()
        .max(15, "Must be 15 characters or less")
        .required("Required"),
      lastName: Yup.string()
        .max(20, "Must be 20 characters or less")
        .required("Required"),
      email: Yup.string().email("Invalid email address").required("Required"),
      phoneNumber: Yup.number()
        .min(10, "Invalid phone number")
        .max(12, "Invalid phone number")
        .required("Required"),
    }),
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <div className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 w-screen h-screen flex items-center justify-center">
      <div className="flex flex-col items-center justify-center bg-gradient-to-br from-pink-300 via-purple-300 to-indigo-300 bg-opacity-75  mx-auto rounded-md w-96 h-1/2">
        <text className="text-2xl text-gray-900 mb-5">Register</text>
        <form
          action=""
          className="flex flex-col items-center justify-center"
          onSubmit={formik.handleSubmit}
        >
          <div className="space-y-2">
            <div className="flex flex-col space-y-1">
              <label htmlFor="firstName" className="text-sm text-gray-700">
                First Name
              </label>
              <input
                id="firstName"
                type="text"
                className="bg-gray-200 rounded-sm h-7 outline-none px-2 text-gray-800"
                placeholder="first name"
                {...formik.getFieldProps("firstName")}
              />
              {formik.touched.firstName && formik.errors.firstName ? (
                <div className="text-xs text-red-600">
                  {formik.errors.firstName}
                </div>
              ) : null}
            </div>
            <div className="flex flex-col space-y-1">
              <label htmlFor="lastName" className="text-sm text-gray-700">
                Last Name
              </label>
              <input
                id="lastName"
                type="text"
                className="bg-gray-200 rounded-sm h-7 outline-none px-2 text-gray-800"
                placeholder="last name"
                {...formik.getFieldProps("lastName")}
              />
              {formik.touched.lastName && formik.errors.lastName ? (
                <div className="text-xs text-red-600">
                  {formik.errors.lastName}
                </div>
              ) : null}
            </div>
            <div className="flex flex-col space-y-1">
              <label htmlFor="email" className="text-sm text-gray-700">
                Email
              </label>
              <input
                id="email"
                type="email"
                className="bg-gray-200 rounded-sm h-7 outline-none px-2 text-gray-800"
                placeholder="email"
                {...formik.getFieldProps("email")}
              />
              {formik.touched.email && formik.errors.email ? (
                <div className="text-xs text-red-600">
                  {formik.errors.email}
                </div>
              ) : null}
            </div>
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
          </div>

          <div className="text-xs text-gray-900 mt-2">
            Already have an account?{" "}
            <span
              className="text-blue-700 hover:cursor-pointer hover:underline"
              onClick={() => router.push("/login")}
            >
              Sign in here.
            </span>
          </div>
          <button
            type="submit"
            className="h-10 bg-pink-600 rounded-md w-28 text-indigo-900 mt-3"
          >
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
