import Link from "next/link";
import Reveal from "@/components/Reveal";

export default function NotFound() {
  return (
    <div className="flex flex-1 items-center justify-center pb-20 pt-28">
      <div className="section-shell text-center">
        <Reveal animation="blur-in">
          <p className="font-display text-[8rem] leading-none text-terracotta-200 -rotate-2 md:text-[10rem]">
            404
          </p>
        </Reveal>

        <h1 className="heading-md mt-6">Page not found</h1>
        <p className="body-lg mx-auto mt-4 max-w-sm">
          The page you are looking for does not exist or has been moved.
        </p>
        <div className="mt-8">
          <Link href="/" className="btn-primary">
            Back to home
          </Link>
        </div>
      </div>
    </div>
  );
}
