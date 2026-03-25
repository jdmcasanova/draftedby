import Link from "next/link";

export default function NotFound() {
  return (
    <main id="main-content" className="flex flex-1 items-center justify-center pb-20 pt-28">
      <div className="section-shell text-center">
        <p className="font-mono text-6xl font-medium tracking-[-0.04em] text-stone-200">404</p>
        <h1 className="heading-md mt-4">Page not found</h1>
        <p className="body-base mx-auto mt-4 max-w-sm text-center">
          The page you are looking for does not exist or has been moved.
        </p>
        <div className="mt-8">
          <Link href="/" className="btn-primary">
            Back to home
          </Link>
        </div>
      </div>
    </main>
  );
}
