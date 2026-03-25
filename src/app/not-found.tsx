import Link from "next/link";

export default function NotFound() {
  return (
    <main id="main-content" className="flex flex-1 items-center justify-center pb-20 pt-24">
      <div className="section-shell text-center">
        <p className="section-kicker">404</p>
        <h1 className="section-heading mt-4">Page not found</h1>
        <p className="section-copy mx-auto mt-6 text-center">
          The page you are looking for does not exist or has been moved.
        </p>
        <div className="mt-10">
          <Link href="/" className="btn-primary">
            Back to home
          </Link>
        </div>
      </div>
    </main>
  );
}
