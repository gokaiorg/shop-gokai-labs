import Image from "next/image";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
          <h1 className="max-w-md text-4xl sm:text-5xl font-semibold leading-tight tracking-tight text-black dark:text-zinc-50">
            Digital Maintenance & Tech Concierge
          </h1>
          <p className="max-w-md text-lg leading-8 text-zinc-600 dark:text-zinc-400">
            Building digital experiences and Artificial Intelligence solutions, including AI agents, that drive results and create lasting impact for businesses worldwide.
          </p>
        </div>
      </main>
    </div>
  );
}
