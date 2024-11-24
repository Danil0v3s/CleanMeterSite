import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col justify-center h-screen">
      <div className="absolute flex aspect-[9/16] h-full md:aspect-video">
        <iframe
          className="aspect-[9/16] h-full md:aspect-video"
          src="https://www.youtube.com/embed/G79McCEQCQg?si=FRZy5iNukuRqs8gE&autoplay=1&mute=1&loop=1&rel=0&showinfo=0&controls=0&color=white&iv_load_policy=3&enablejsapi=1&hd=1&vq=hd1080&playlist=G79McCEQCQg"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
        />
        <div className="aspect-[9/16] h-full md:aspect-video absolute backdrop-brightness-75" />
      </div>
      <div className="absolute z-1 size-full grid-bg" />

      <main className="flex flex-col gap-8 md:gap-20 row-start-2 items-center relative z-2 p-8">
        <Image
          src="/logo.png"
          alt="Clean Meter logo"
          width={150}
          height={150}
          priority
        />

        <div className="flex flex-col text-center gap-2">
          <span>INTRODUCING</span>
          <h1>Clean Meter</h1>
          <div>
            <p>Minimalistic performance monitor to track</p>
            <p>your system&apos;s stats in real-time</p>
          </div>
        </div>

        <div className="flex gap-4 items-center flex-col">
          <a
            className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
            href="https://github.com/Danil0v3s/CleanMeter/releases/latest/download/cleanmeter.windows.zip"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/download.svg"
              alt="Download icon"
              width={20}
              height={20}
            />
            Download now
          </a>
          <a
            className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:min-w-44"
            href="https://discord.gg/phqwe89cvE"
            target="_blank"
            rel="noopener noreferrer"
          >
            Join our community
          </a>
        </div>
      </main>

      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center z-1 relative">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://www.paypal.com/donate/?hosted_button_id=W2GU6AHGQUND8"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/paypal.svg"
            alt="Paypal icon"
            width={16}
            height={16}
          />
          Donate via PayPal
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://ko-fi.com/danil0v3s"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/kofi_symbol.svg"
            alt="Ko-Fi icon"
            width={16}
            height={16}
          />
          Donate via Ko-Fi
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://github.com/Danil0v3s/CleanMeter"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/github-mark-white.svg"
            alt="GitHub icon"
            width={16}
            height={16}
          />
          Source code
        </a>
      </footer>
    </div>
  );
}
