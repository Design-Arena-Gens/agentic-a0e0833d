export default function Home() {
  return (
    <div className="relative flex min-h-screen flex-col overflow-hidden bg-slate-950 text-slate-100">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -left-1/2 top-0 h-[48rem] w-[48rem] rounded-full bg-gradient-to-br from-sky-400/50 via-blue-500/20 to-purple-500/40 blur-3xl opacity-70 animate-[pulse_10s_ease-in-out_infinite]" />
        <div className="absolute -top-32 right-[-20%] h-[36rem] w-[36rem] rounded-full bg-gradient-to-br from-indigo-500/40 via-cyan-500/10 to-transparent blur-3xl opacity-60 animate-[spin_60s_linear_infinite]" />
        <div className="absolute inset-x-0 bottom-[-40%] h-[38rem] bg-gradient-to-t from-slate-950 via-slate-950/80 to-transparent" />
      </div>

      <header className="relative z-10 mx-auto flex w-full max-w-5xl items-center justify-between px-6 py-10 sm:px-10">
        <div className="flex items-center gap-3">
          <span className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/5 shadow-[0_0_40px_-15px_rgba(56,189,248,0.9)] backdrop-blur-md transition duration-500 hover:shadow-[0_0_50px_-10px_rgba(129,140,248,0.9)]">
            <span className="text-lg font-semibold tracking-wide text-sky-100">
              NL
            </span>
          </span>
          <div>
            <p className="text-sm uppercase tracking-[0.45em] text-slate-400">
              Flowboard
            </p>
            <p className="text-base font-semibold text-white">
              No-Code Storycraft
            </p>
          </div>
        </div>

        <nav className="hidden items-center gap-6 text-sm text-slate-300 sm:flex">
          <a className="transition hover:text-white" href="#vision">
            Vision
          </a>
          <a className="transition hover:text-white" href="#canvas">
            Canvas
          </a>
          <a className="transition hover:text-white" href="#support">
            Support
          </a>
        </nav>
      </header>

      <main className="relative z-10 mx-auto flex w-full max-w-4xl grow flex-col px-6 pb-20 sm:px-10">
        <section
          id="vision"
          className="flex flex-col gap-8 rounded-3xl border border-white/10 bg-white/5 p-8 shadow-[0_40px_120px_-45px_rgba(14,116,144,0.55)] backdrop-blur-2xl sm:p-12"
        >
          <div className="flex flex-col gap-3">
            <p className="text-sm font-medium uppercase tracking-[0.4em] text-sky-200/90">
              Imagine & Ship
            </p>
            <h1 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl">
              Shape your product narrative in a space that feels alive.
            </h1>
            <p className="max-w-2xl text-lg leading-relaxed text-slate-300">
              Flowboard gives you a responsive, tactile canvas to map concepts,
              narrate user journeys, and refine your launch copy without
              touching a single line of code.
            </p>
          </div>

          <div
            id="canvas"
            className="group relative flex min-h-[26rem] flex-col overflow-hidden rounded-3xl border border-white/10 bg-slate-950/60 p-6 shadow-[0_25px_80px_-40px_rgba(56,189,248,0.7)] transition duration-500 focus-within:border-sky-300/70 focus-within:shadow-[0_35px_120px_-45px_rgba(129,140,248,0.65)] sm:p-8"
          >
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-sky-500/10 via-transparent to-indigo-500/10 opacity-0 transition duration-500 group-focus-within:opacity-100" />
            <label
              htmlFor="idea"
              className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.35em] text-slate-400"
            >
              Strategy Canvas
              <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[0.65rem] font-medium text-slate-200">
                Live Synth
              </span>
            </label>
            <textarea
              id="idea"
              className="flex-1 resize-none rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 via-transparent to-white/0 p-6 text-lg leading-relaxed text-white shadow-[inset_0_1px_0_0_rgba(255,255,255,0.08)] outline-none transition duration-500 placeholder:text-slate-500 focus:border-sky-300/80 focus:bg-white/10 focus:shadow-[0_0_0_1px_rgba(56,189,248,0.6),0_25px_80px_-40px_rgba(56,189,248,0.75)] sm:text-xl"
              placeholder="Describe the experience you want to build. Capture mood, flow, and the tiny details that make it unforgettable..."
            />
            <div className="mt-4 flex flex-col gap-4 text-sm text-slate-400 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex items-center gap-2">
                <span className="h-2 w-2 animate-ping rounded-full bg-sky-300/80" />
                Autosaving to Flowstream
              </div>
              <button className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 bg-white/10 px-5 py-2 text-sm font-medium text-white backdrop-blur transition duration-300 hover:border-white/40 hover:bg-white/20 hover:text-sky-100">
                Play Idea Animation
              </button>
            </div>
          </div>
        </section>

        <div
          id="support"
          className="mt-12 grid gap-6 text-sm text-slate-300 sm:grid-cols-3"
        >
          <div className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur transition duration-300 hover:-translate-y-1 hover:border-sky-200/60 hover:text-white">
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-slate-400">
              Pulse
            </p>
            <p className="mt-2 font-medium text-white">
              Real-time interface feedback with dreamy micro-animations.
            </p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur transition duration-300 hover:-translate-y-1 hover:border-sky-200/60 hover:text-white">
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-slate-400">
              Launchpad
            </p>
            <p className="mt-2 font-medium text-white">
              Publish polished experiences to the world in one click.
            </p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur transition duration-300 hover:-translate-y-1 hover:border-sky-200/60 hover:text-white">
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-slate-400">
              Support
            </p>
            <p className="mt-2 font-medium text-white">
              Guided onboarding to transform ideas into lovable journeys.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
