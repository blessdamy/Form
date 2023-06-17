import React from "react";

function Button({
  label,
  type,
  textColor,
  backgroundColor,
  classes = "",
}: {
  label: string;
  type: "button" | "submit" | "reset" | undefined;
  textColor: string;
  backgroundColor: string;
  classes?: string;
}) {
  return (
    <>
      <button
        type={type}
        className={`w-[100%] h-[58px] font-normal ${backgroundColor} rounded-2xl py-[18px] px-[298.5px] ${textColor} ${
          classes || ""
        }`}
      >
        {label}
      </button>
    </>
  );
}

export default Button;
