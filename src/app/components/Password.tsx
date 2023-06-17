import React, { useState } from "react";
import { AiFillEyeInvisible as EyeOne } from "react-icons/ai";
import { AiFillEye as EyeTwo } from "react-icons/ai";

export interface PasswordProps {
  label: string;
  id: string;
  placeholder: string;
  classes?: string;
  value: string;
  setValue: Function;
}

function Password(props: PasswordProps) {
  const { label, id, placeholder, classes = "" } = props;

  const [showPassword, setShowPassword] = useState<boolean>(false);
  // const [password, setPassword] = useState<string>("");

  return (
    <div>
      <div
        className={`relative w-[100%] h-[83px] bg-white border border-solid border-gray-300 rounded-[16px] `}
      >
        <div
          className={`absolute top-[29.5px] right-[29.5px]`}
          onClick={() => setShowPassword(!showPassword)}
        >
          {showPassword ? <EyeTwo size={"24px"} /> : <EyeOne size={"24px"} />}
        </div>
        <div className={`flex flex-col py-[16px] pl-[24px] pr-[76px]`}>
          <label
            className={`mb-[8px] not-italic font-normal text-xs leading-4 tracking-[0.4px] text-primary`}
            htmlFor="email"
          >
            {label}
          </label>
          <input
            // onChange={(e: any) => setPassword(e.target.value)}
            onChange={(e: any) => props.setValue(e.target.value)}
            className={`not-italic font-black text-xl leading-7 tracking-[0.15px] text-black border-none outline-none`}
            type={showPassword ? "text" : "password"}
            id={props.value}
            name="password"
            placeholder={placeholder}
            value={props.value}
          />
        </div>
      </div>
    </div>
  );
}

export default Password;
