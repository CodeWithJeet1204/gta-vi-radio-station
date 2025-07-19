"use client";
import { useState, useEffect } from "react";
import { stations } from "../data/stations";
import { useHowlerAudio } from "./useHowlerAudio";
import { Play, Pause, SkipBack, SkipForward } from "react-feather";
import Image from "next/image";
import Head from "next/head";
import './globals.css';

const CIRCLE_RADIUS_VMIN = 42;
const ICON_SIZE_VMIN = 10.5;

function getPosition(index: number, total: number, rotate: number) {
  const angle = ((index / total) * 2 * Math.PI) - Math.PI / 2 + rotate;
  const x = 50 + CIRCLE_RADIUS_VMIN * Math.cos(angle);
  const y = 50 + CIRCLE_RADIUS_VMIN * Math.sin(angle);
  return {
    left: `calc(${x.toFixed(3)}% - ${(ICON_SIZE_VMIN / 2).toFixed(3)}vmin)`,
    top: `calc(${y.toFixed(3)}% - ${(ICON_SIZE_VMIN / 2).toFixed(3)}vmin)`,
  };
}

export default function Home() {
  const [rotation, setRotation] = useState(0);
  const [selected, setSelected] = useState(0);
  const station = stations[selected];
  const { playing, play, pause, loaded } = useHowlerAudio(station.assets.song, true);

  useEffect(() => {
    let id: number;
    const step = () => {
      setRotation(prev => prev + 0.0015);
      id = requestAnimationFrame(step);
    };
    id = requestAnimationFrame(step);
    return () => cancelAnimationFrame(id);
  }, []);

  useEffect(() => {
    if (loaded) play();
  }, [loaded, station.slug]);

  const togglePlay = () => (playing ? pause() : play());
  const previous = () => setSelected((prev) => (prev - 1 + stations.length) % stations.length);
  const next = () => setSelected((prev) => (prev + 1) % stations.length);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") next();
      else if (e.key === "ArrowLeft") previous();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, []);

  const handleStationSelect = (index: number) => setSelected(index);

  const handleKeyDown = (e: React.KeyboardEvent, index: number) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      setSelected(index);
    }
  };

  return (
    <main className="antialiased relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-black">
      <Head>
        <link rel="preload" as="audio" href={station.assets.song} />
      </Head>

      {/* Background Image */}
      <Image
        src={station.assets.background}
        alt="background"
        fill
        quality={90}
        sizes="100vw"
        className="relative inset-0 w-full h-full object-cover scale-[1.05] blur-[2px] opacity-80 transition-opacity duration-300"
        loading="lazy"
        draggable={false}
      />

      {/* Wheel Container */}
      <div
        className="relative z-30 flex items-center justify-center"
        style={{
          width: "min(90vmin, 100vw)",
          height: "min(90vmin, 100vh)",
          minWidth: "280px",
          minHeight: "280px",
        }}
      >
        {stations.map((s, i) => {
          const position = getPosition(i, stations.length, rotation);
          const isSelected = i === selected;

          return (
            <div key={s.slug} className="absolute" style={position}>
              <button
                onClick={() => handleStationSelect(i)}
                onKeyDown={(e) => handleKeyDown(e, i)}
                aria-label={s.name}
                title={s.name}
                tabIndex={0}
                className={`relative transition-transform duration-300 ease-in-out 
                  flex items-center justify-center rounded-full overflow-hidden
                  border outline-none focus:outline-none
                  ${isSelected
                    ? "z-40 scale-125 border-white ring-2 ring-white"
                    : "hover:scale-105 border-white/30 hover:border-white/50"}`}
                style={{
                  width: `${ICON_SIZE_VMIN}vmin`,
                  height: `${ICON_SIZE_VMIN}vmin`,
                  minWidth: "50px",
                  minHeight: "50px",
                  willChange: "transform",
                }}
              >
                <Image
                  src={s.assets.logo}
                  alt={s.name}
                  fill
                  quality={90}
                  sizes="(max-width: 768px) 12vw, 6vw"
                  className="rounded-full object-cover"
                  loading="lazy"
                  draggable={false}
                />
              </button>
            </div>
          );
        })}

        {/* Center Content */}
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 sm:gap-6 z-40 pointer-events-none text-white">
          <div className="relative w-[120px] h-[120px] sm:w-[180px] sm:h-[180px] rounded-full overflow-hidden border-4 border-white/20 animate-spin-slow pointer-events-auto">
            <Image
              src={station.assets.songImage}
              alt="song"
              fill
              quality={90}
              sizes="(max-width: 768px) 40vmin, 25vmin"
              className="w-full h-full object-cover"
              draggable={false}
            />
          </div>

          <h1 className="font-satoshi text-center text-[20px] sm:text-sm md:text-3xl pointer-events-auto max-w-[80vw] truncate">
            {station.name}
          </h1>

          <div className="pointer-events-auto">
            <AudioControls
              key={station.slug}
              playing={playing}
              play={play}
              pause={pause}
              previous={previous}
              next={next}
            />
          </div>
        </div>
      </div>

      {/* Screen reader */}
      <div className="sr-only" aria-live="polite">
        Now playing: {station.song.title} on {station.name}
      </div>
    </main>
  );
}

function AudioControls({
  playing,
  play,
  pause,
  next,
  previous,
}: {
  playing: boolean;
  play: () => void;
  pause: () => void;
  next?: () => void;
  previous?: () => void;
}) {
  return (
    <div className="flex items-center justify-center gap-4 sm:gap-6">
      <GlassButton
        label="Previous"
        onClick={previous}
        icon={<SkipBack size={20} strokeWidth={2.5} color="#000" />}
        size="small"
      />
      <GlassButton
        label={playing ? "Pause" : "Play"}
        onClick={playing ? pause : play}
        icon={
          playing ? (
            <Pause size={30} strokeWidth={2.75} color="#000" />
          ) : (
            <Play size={30} strokeWidth={2.75} color="#000" />
          )
        }
        size="large"
      />
      <GlassButton
        label="Next"
        onClick={next}
        icon={<SkipForward size={20} strokeWidth={2.5} color="#000" />}
        size="small"
      />
    </div>
  );
}

function GlassButton({
  label,
  onClick,
  icon,
  size,
}: {
  label: string;
  onClick?: () => void;
  icon: React.ReactNode;
  size: "small" | "large";
}) {
  const baseSize =
    size === "large"
      ? "w-20 h-20 sm:w-24 sm:h-24"
      : "w-12 h-12 sm:w-16 sm:h-16";

  return (
    <button
      onClick={onClick}
      aria-label={label}
      title={label}
      className={`${baseSize} flex items-center justify-center
        bg-transparent border-none outline-none focus:outline-none
        hover:scale-105 active:scale-95 transition-transform duration-150`}
    >
      {icon}
    </button>
  );
}
