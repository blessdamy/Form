import React from "react";
import Input from "./Input";
import Password from "./Password";
import Button from "./Button";

function Form() {
  return (
    <>
        <div className="flex flex-col  justify-center pl-60 pt-60">
        <h1 className="text-3xl leading-[44px] mb-5">Welcome</h1>
        <form>
            <div className="w-[620px] mb-5">
              <Input
                type="email"
                label="Email Address"
                id="email"
                placeholder="@gmail.com"
              />
            </div>
            <div className="w-[620px] mb-9">
              <Password
                label="Password"
                id="password"
                placeholder="&*/!@#4"
              />
            </div>
            <div className="w-[620px] mb-[234px]">
              <Button
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




