
export default ({ stroke, fill }: { stroke: string; fill: string }) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill={fill}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M3 21L3 3L9 3V15L21 15V21H3Z"
      stroke={stroke}
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M13 19V21"
      stroke={stroke}
      stroke-width="1.5"
      stroke-linecap="round"
    />
    <path
      d="M9 19V21"
      stroke={stroke}
      stroke-width="1.5"
      stroke-linecap="round"
    />
    <path
      d="M3 7H5"
      stroke={stroke}
      stroke-width="1.5"
      stroke-linecap="round"
    />
    <path
      d="M3 11H5"
      stroke={stroke}
      stroke-width="1.5"
      stroke-linecap="round"
    />
    <path
      d="M3 15H5"
      stroke={stroke}
      stroke-width="1.5"
      stroke-linecap="round"
    />
    <path
      d="M17 19V21"
      stroke={stroke}
      stroke-width="1.5"
      stroke-linecap="round"
    />
  </svg>
);
