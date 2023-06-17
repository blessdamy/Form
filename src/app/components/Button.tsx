import React from "react";

function Button({
  label,
  type,
  textColor,
  backgroundColor,
  classes = "",
  disabled,
}: {
  label: string;
  type: "button" | "submit" | "reset" | undefined;
  textColor: string;
  backgroundColor: string;
  classes?: string;
  disabled: boolean;
}) {
  return (
    <>
      <button
        type={type}
        className={`w-[100%] h-[58px] font-normal ${backgroundColor} rounded-2xl py-[18px] px-[298.5px] ${textColor} ${
          classes || ""
        } ${disabled && "cursor-not-allowed"}`}
      >
        {label}
      </button>
    </>
  );
}

export default Button;
