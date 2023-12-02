import React, { useEffect, useState } from "react";
import { useFirebase } from "../context/Firebase";
import { useNavigate } from "react-router-dom";
import {
  Card,
  Input,
  Button,
  Typography,
  CardHeader,
  CardBody,
  CardFooter,
} from "@material-tailwind/react";
import MyAlert from "../components/MyAlert";

const SignIn = () => {
  const [Bool, setBool] = useState(false);
  const [errorBool, setErrorBool] = useState(false);
  const firebase = useFirebase();
  const navigate = useNavigate();

  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setUser((preValue) => {
      return {
        ...preValue,
        [name]: value,
      };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await firebase.signIn(user);
    } catch (e) {
      setErrorBool(true);
    }
    setUser({
      email: "",
      password: "",
    });
  };
  useEffect(() => {
    firebase.isLoggedIn && navigate("/");
  }, [firebase, navigate]);

  useEffect(() => {
    errorBool && setBool(true);
    setTimeout(() => {
      setBool(false);
      setErrorBool(false);
    }, 4000);
  }, [errorBool]);

  return (
    <div className=" flex justify-center my-20">
      <Card className="w-96">
        <CardHeader
          variant="gradient"
          color="gray"
          className="mb-4 grid h-28 place-items-center to-primary from-primary"
        >
          <Typography variant="h3" color="white">
            Sign In
          </Typography>
        </CardHeader>
        <Typography color="gray" className="mt-1 ml-6 font-normal">
          Nice to meet you! Enter your details to register.
        </Typography>
        <CardBody className="flex flex-col gap-4">
          <Input
            onChange={handleChange}
            value={user.email}
            name="email"
            label="Email"
            size="lg"
          />
          <Input
            onChange={handleChange}
            value={user.password}
            name="password"
            label="Password"
            type="password"
            size="lg"
          />
        </CardBody>
        <CardFooter className="pt-0">
          <Button
            onClick={handleSubmit}
            variant="gradient"
            className="to-primary from-primary"
            fullWidth
          >
            Sign In
          </Button>
          <Typography variant="small" className="mt-6 flex justify-center">
            Don&apos;t have an account?
            <Typography
              as="a"
              href="/login"
              variant="small"
              color="blue-gray"
              className="ml-1 font-bold"
            >
              Sign Up
            </Typography>
          </Typography>
        </CardFooter>
        <Button onClick={firebase.googleSignIn} className=" mb-4 w-10/12 ml-8" color="red">
          <i className="fa-brands fa-google fa-lg"></i> SignIn With Google
        </Button>
      </Card>
      {Bool && (
        <MyAlert color="red" message="Error!!Email or password is Wrong!" />
      )}
    </div>
  );
};

export default SignIn;
