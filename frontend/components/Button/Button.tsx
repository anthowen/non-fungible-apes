import React from "react";

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /**
   * Is this the principal call to action on the page?
   */
  primary?: boolean;
  /**
   * Is button disabled?
   */
  disabled?: boolean;
}

function Button({ primary = false, disabled, className, ...props }: Props) {
  let baseClass = `py-2 px-4 rounded-full font-semibold`;
  if (disabled) baseClass += " opacity-50 cursor-not-allowed";

  return (
    <button
      type="button"
      className={`${baseClass} ${
        primary
          ? "bg-indigo-500 text-white border border-indigo-500"
          : "text-indigo-500 bg-white border-indigo-700 border"
      } ${className || ""}`}
      disabled={disabled}
      {...props}
    >
      {props.children}
    </button>
  );
}

export default Button;
