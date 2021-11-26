
interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  suffix?: React.ReactNode;
}

function Input({ className, suffix, children, ...pass }: Props) {
  return (
    <div
      className={`flex items-center px-4 py-2 border border-gray-neutral-200 bg-white rounded-lg space-x-2  ${
        className || ""
      }`}
    >
      <input
        type="text"
        className="flex-1 font-bold text-gray-900 placeholder-gray-400 focus:outline-none"
        {...pass}
      />

      {suffix ? <span className="font-bold text-gray-900">{suffix}</span> : null}
    </div>
  )
}

export default Input;
