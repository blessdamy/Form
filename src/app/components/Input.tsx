import React from "react";

function Input({
  type,
  label,
  id,
  placeholder,
  classes = "",
  value,
  setValue,
}: {
  type: string;
  label: string;
  id: string;
  placeholder: string;
  classes?: string;
  value: string;
  setValue: Function | any;
}) {
  return (
    <div
      className={`w-[100%] h-[83px] bg-white border border-solid border-gray-300 rounded-[16px] `}
    >
      <div className={`flex flex-col py-[16px] px-[24px]`}>
        <label
          className={`mb-[8px] not-italic font-normal text-xs leading-4 tracking-[0.3px] text-blue-400`}
          htmlFor="email"
        >
          {label}
        </label>
        <input
          value={value}
          onChange={(e: any) => setValue(e.target.value)}
          type={type}
          className={`not-italic font-medium text-xl leading-7 tracking-[0.13px] text-black border-none outline-none`}
          id={id}
          name="email"
          placeholder={placeholder}
        />
      </div>
    </div>
  );
}

export default Input;
