import { cn } from "cn";

export default function VectorIcon({ className }: { className?: string }) {
  return (
    <div className={cn("", className)}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="5"
        height="8"
        viewBox="0 0 5 8"
        fill="none"
      >
        <path
          d="M-1.19209e-07 0.653816L0.743627 -4.76837e-07L4.79398 3.5633C4.85927 3.6204 4.91108 3.68829 4.94644 3.76308C4.9818 3.83787 5 3.91807 5 3.99907C5 4.08008 4.9818 4.16028 4.94644 4.23507C4.91108 4.30986 4.85927 4.37775 4.79398 4.43485L0.743627 8L0.000700831 7.34618L3.80224 4L-1.19209e-07 0.653816Z"
          fill="currentColor"
        />
      </svg>
    </div>
  );
}
