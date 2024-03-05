
export default ({ stroke, fill }: { stroke: string; fill: string }) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill={fill}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M6 12H12M18 12H12M12 12V6M12 12V18"
      stroke={stroke}
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
);
