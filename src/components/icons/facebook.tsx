import { cn } from "cn";

export default function FaceBookIcon({ className }: { className?: string }) {
  return (
    <div className={cn("", className)}>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="10"
      height="15"
      viewBox="0 0 10 15"
      fill="none"
    >
      <path
        d="M8.48731 0.592285H6.33399C5.38216 0.592285 4.46932 0.94582 3.79627 1.57512C3.12323 2.20441 2.74512 3.05792 2.74512 3.94788V5.96123H0.591797V8.64571H2.74512V14.0147H5.61621V8.64571H7.76953L8.48731 5.96123H5.61621V3.94788C5.61621 3.76989 5.69184 3.59918 5.82644 3.47332C5.96105 3.34747 6.14362 3.27676 6.33399 3.27676H8.48731V0.592285Z"
        strokeWidth="1.18433"
        strokeLinecap="round"
        strokeLinejoin="round"
        stroke="currentColor"
      />
    </svg>
    </div>
  );
}
