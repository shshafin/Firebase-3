import {
  Card,
  Input,
  Checkbox,
  Button,
  Typography,
} from "@material-tailwind/react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import UseAuth from "../../Hook/UseAuth";
import toast, { Toaster } from "react-hot-toast";
import { useState } from "react";

const Register = () => {
  const { createUser } = UseAuth();
  const [regError, setRegError] = useState("");

  const handleRegister = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    const username = e.target.name.value;
    const accepted = e.target.terms.checked;
    console.log(email, password, username);
    // states clear
    setRegError("");

    if (!accepted) {
      setRegError(toast.error("Please Accept Our Terms & Conditions!"));
      return;
    }

    //
    createUser(email, password)
      .then((res) => {
        console.log(res.user);
        toast.success("Registration Successful!");
        e.target.reset();
      })
      .catch((error) => {
        console.log(error);
        toast.error("Registration Failed!");
      });
  };

  return (
    <>
      <Helmet>
        <title>Register</title>
      </Helmet>
      <div className="h-[80vh] flex justify-center items-center">
        <Card color="transparent" shadow={false}>
          <Typography variant="h4" color="blue-gray">
            Sign Up
          </Typography>
          <Typography color="gray" className="mt-1 font-normal">
            Nice to meet you! Enter your details to register.
          </Typography>
          <form
            onSubmit={handleRegister}
            className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96"
          >
            <div className="mb-1 flex flex-col gap-6">
              <Typography variant="h6" color="blue-gray" className="-mb-3">
                Your Name
              </Typography>
              <Input
                name="name"
                size="lg"
                placeholder="name@mail.com"
                className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
              />
              <Typography variant="h6" color="blue-gray" className="-mb-3">
                Your Email
              </Typography>
              <Input
                name="email"
                size="lg"
                placeholder="name@mail.com"
                className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
              />
              <Typography variant="h6" color="blue-gray" className="-mb-3">
                Password
              </Typography>
              <Input
                name="password"
                type="password"
                size="lg"
                placeholder="********"
                className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
              />
            </div>
            <Checkbox
              type="checkbox"
              name="terms"
              id="terms"
              label={
                <Typography
                  variant="small"
                  color="gray"
                  className="flex items-center font-normal"
                >
                  I agree the
                  <a
                    href="#"
                    className="font-medium transition-colors hover:text-gray-900"
                  >
                    &nbsp;Terms and Conditions
                  </a>
                </Typography>
              }
            />
            <Button type="submit" className="mt-6" fullWidth>
              sign up
            </Button>
            <Typography color="gray" className="mt-4 text-center font-normal">
              Already have an account?{" "}
              <a href="#" className="font-medium text-gray-900">
                <Link to={"/login"}>Sign In</Link>
              </a>
            </Typography>
          </form>
        </Card>
      </div>
    </>
  );
};
export default Register;
