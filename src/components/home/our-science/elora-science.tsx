import MoveRightIcon from "@/components/icons/move-right";
import Link from "next/link";

type OurStats = { id: number; researchCount: string; caption: string };
export const ourStats: OurStats[] = [
  {
    id: 1,
    researchCount: "127",
    caption: "Clinical studies referenced",
  },
  {
    id: 2,
    researchCount: "14",
    caption: "Physician advisors",
  },
  {
    id: 3,
    researchCount: "06",
    caption: "Active patents ",
  },
  {
    id: 4,
    researchCount: "100%",
    caption: "Third-party tested",
  },
];
export default function EloraScience() {
  return (
    <section>
      <div>
        <span>OUR SCIENCE</span>
        <h1>Built on evidence, not trends.</h1>
        <p>
          Every formula begins with a peer-reviewed body of research, is
          reviewed by our clinical advisory board, and is verified by
          independent third-party laboratories.
        </p>
        <Link
          href="/shop"
          className="group animated-underline-swap inline-flex w-fit items-cente r gap-2 cursor-pointer lg:justify-end lg:items-end font-inter font-medium text-base lg:text-lg leading-7 hover:text-primary"
        >
          <span>Read More</span>
          <MoveRightIcon className="-rotate-45 transition-transform duration-500 group-hover:rotate-0 relative lg:bottom-2" />
        </Link>
      </div>
      <div>
        <div>
          <image></image>
          <ul>
            {ourStats.map((stats) => (
              <li key={stats.id}>
                <span>{stats.researchCount}</span>
                <span>{stats.caption}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div></div>
    </section>
  );
}
