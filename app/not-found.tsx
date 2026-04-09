import Link from "next/link";

export default function NotFound() {
  return (
    <div className="max-w-[740px] mx-auto px-6 pt-24 pb-16">
      <h1 className="font-display text-[48px] font-extrabold leading-[0.95] tracking-[-0.035em] mb-4">
        404
      </h1>
      <p className="text-[17px] text-muted mb-6">
        This page doesn&apos;t exist.
      </p>
      <Link
        href="/"
        className="text-sm text-accent font-semibold hover:text-accent-hover"
      >
        ← Back to home
      </Link>
    </div>
  );
}
