import React, { useState } from "react";
import Input from "./Input";
import Password from "./Password";
import Button from "./Button";
import { useEffect } from "react";

function Form() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [formIsValid, setFormIsValid] = useState<boolean>(false);
  useEffect(() => {
    if (
      email.length > 5 &&
      email.includes("@") &&
      email.includes(".com") &&
      password.length > 8
    ) {
      setFormIsValid(true);
    } else {
      setFormIsValid(false);
    }
  }, [email, password]);
  const onSubmit = (e: any) => {
    e.preventDefault();
    if (formIsValid) {
      alert(`Your email is ${email},Your password is ${password}`);
      setEmail("");
      setPassword("");
    } else {
      alert("Please fill in all inputs correctly");
    }
  };
  return (
    <>
      <div className=" w-[620px] m-auto  mt-[100px] ">
        <h1 className="text-3xl leading-[44px]  mb-5">Welcome</h1>
        <form>
          <div className="w-full  mb-5">
            <Input
              value={email}
              setValue={setEmail}
              type="email"
              label="Email Address"
              id="email"
              placeholder="@gmail.com"
            />
          </div>
          <div className="w-full mb-9">
            <Password
              value={password}
              setValue={setPassword}
              label="Password"
              id="password"
              placeholder="&*/!@#4"
            />
          </div>
          <div onClick={onSubmit} className="w-full">
            <Button
              disabled={!formIsValid}
              label="Login"
              type="submit"
              backgroundColor="bg-blue-400"
              textColor="text-white"
            />
          </div>
        </form>
      </div>
    </>
  );
}

export default Form;
