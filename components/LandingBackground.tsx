export default function LandingBackground() {
  return (
    <>
      <div className="pointer-events-none absolute inset-0 z-0 bg-[var(--background)]" />
      <div className="pointer-events-none absolute inset-x-0 top-0 z-0 h-[34rem] bg-[linear-gradient(180deg,var(--section)_0%,var(--background)_76%)]" />
      <div className="pointer-events-none absolute left-1/2 top-28 z-0 h-80 w-[44rem] -translate-x-1/2 rounded-full bg-[var(--overlay)] blur-3xl" />
    </>
  );
}
