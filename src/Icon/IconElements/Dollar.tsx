export default ({ stroke, fill }: { stroke: string; fill: string }) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill={fill}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M16.1538 7.15382C15.2054 6.20538 13.5351 5.54568 12 5.50437M7.84618 16.1538C8.73853 17.3436 10.3977 18.0222 12 18.0798M12 5.50437C10.1735 5.45522 8.53848 6.2815 8.53848 8.53845C8.53848 12.6923 16.1538 10.6154 16.1538 14.7692C16.1538 17.1383 14.127 18.1562 12 18.0798M12 5.50437V3M12 18.0798V20.9999"
      stroke={stroke}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
