import { ArrowProps } from "../types";

const Arrow = (props: ArrowProps) => {
  return (
    <svg
      width="25"
      height="24"
      viewBox="0 0 25 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M9.91424 11.9999L16.9142 4.99991L15.5 3.58569L7.08582 11.9999L15.5 20.4141L16.9142 18.9999L9.91424 11.9999Z"
        fill={props.disabled ? "#818181" : "#3C3C3C"}
      />
    </svg>
  );
};

export default Arrow;
