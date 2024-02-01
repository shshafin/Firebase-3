import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Input,
  Checkbox,
  Button,
} from "@material-tailwind/react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import UseAuth from "../../Hook/UseAuth";
import toast from "react-hot-toast";

const Login = () => {
  const { signInUser } = UseAuth();

  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(email, password);

    // sign in
    signInUser(email, password)
      .then((res) => {
        console.log(res.user);
        toast.success("Login Successful!");
      })
      .catch((error) => {
        console.log(error);
        toast.error("Login Failed!");
      });
  };

  return (
    <div>
      <Helmet>
        <title>Login</title>
      </Helmet>
      <div className=" h-[80vh] flex justify-center items-center ">
        <form onSubmit={handleLogin}>
          <Card className="w-96 ">
            <CardHeader
              variant="gradient"
              color="gray"
              className="mb-4 grid h-28 place-items-center"
            >
              <Typography variant="h3" color="white">
                Sign In
              </Typography>
            </CardHeader>
            <CardBody className="flex flex-col gap-4">
              <Input name="email" label="Email" size="lg" />
              <Input name="password" label="Password" size="lg" />
              <div className="-ml-2.5">
                <Checkbox label="Remember Me" />
              </div>
            </CardBody>
            <CardFooter className="pt-0">
              <Button type="submit" variant="gradient" fullWidth>
                Sign In
              </Button>
              <Typography variant="small" className="mt-6 flex justify-center">
                Don&apos;t have an account?
                <Typography
                  as="a"
                  href="#signup"
                  variant="small"
                  color="blue-gray"
                  className="ml-1 font-bold"
                >
                  <Link to={"/register"}>Sign up</Link>
                </Typography>
              </Typography>
            </CardFooter>
          </Card>
        </form>
      </div>
    </div>
  );
};

export default Login;
