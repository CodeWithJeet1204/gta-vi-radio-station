"use client";
import { useState } from "react";
import { stations } from "../data/stations";
import { useHowlerAudio } from "./useHowlerAudio";
import { Play, Pause, Square } from "react-feather";

const CIRCLE_RADIUS_VMIN = 40;
const ICON_SIZE_VMIN = 12;

function getPosition(index: number, total: number) {
  const angle = ((index / total) * 2 * Math.PI) - Math.PI / 2;
  const x = 50 + CIRCLE_RADIUS_VMIN * Math.cos(angle);
  const y = 50 + CIRCLE_RADIUS_VMIN * Math.sin(angle);
  return {
    left: `calc(${x.toFixed(3)}% - ${(ICON_SIZE_VMIN / 2).toFixed(3)}vmin)`,
    top: `calc(${y.toFixed(3)}% - ${(ICON_SIZE_VMIN / 2).toFixed(3)}vmin)`,
  };
}

export default function Home() {
  const [selected, setSelected] = useState(0);
  const station = stations[selected];

  const handleStationSelect = (index: number) => {
    setSelected(index);
  };

  const handleKeyDown = (e: React.KeyboardEvent, index: number) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      setSelected(index);
    }
  };

  return (
    <main className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-gta-dark px-4 pt-[4vmin]">
      {/* Background Image */}
      <img
        src={station.assets.background}
        alt="background"
        className="absolute inset-0 w-full h-full object-cover scale-[1.05] brightness-[0.9] blur-[1px]"
        loading="lazy"
        draggable={false}
      />
      
      {/* Faded overlay */}
      <div className="absolute inset-0 z-10 faded-bg" />

      {/* Top Center Station Info */}
      <div className="absolute left-1/2 top-[6vmin] -translate-x-1/2 z-20 text-center px-6 py-3 bg-black/50 backdrop-blur-sm rounded-lg shadow-md shadow-black max-w-[90vw]">
        <h1 className="font-black text-white text-4xl md:text-5xl lg:text-6xl neon-glow">
          {station.name}
        </h1>
        <p className="mt-1 text-white/80 text-lg md:text-xl lg:text-2xl">
          {station.description}
        </p>
      </div>

      {/* The radio station wheel */}
      <div
        className="relative z-30 flex items-center justify-center"
        style={{
          width: "80vmin",
          height: "80vmin",
          minWidth: "400px",
          minHeight: "400px",
        }}
      >
        {stations.map((s, i) => {
          const position = getPosition(i, stations.length);
          const isSelected = i === selected;
          
          return (
            <button
              key={s.slug}
              aria-label={`Select ${s.name}`}
              className={`absolute transition-all duration-300 ease-in-out
                flex items-center justify-center overflow-hidden
                rounded-full border-2 aspect-square outline-none focus:outline-none
                ${ 
                  isSelected
                    ? "z-40 scale-130 border-gta-neon ring-4 ring-gta-neon ring-offset-2 ring-offset-black shadow-[0_0_25px_#f472b6]"
                    : "border-white/50 hover:border-gta-neon hover:ring-2 hover:ring-gta-neon hover:scale-105"
                }
              `}
              tabIndex={0}
              style={{
                ...position,
                width: `${ICON_SIZE_VMIN}vmin`,
                height: `${ICON_SIZE_VMIN}vmin`,
                minWidth: "60px",
                minHeight: "60px",
              }}
              onClick={() => handleStationSelect(i)}
              onKeyDown={(e) => handleKeyDown(e, i)}
            >
              <div className="w-full h-full rounded-full overflow-hidden">
                <img
                  src={s.assets.logo}
                  alt={s.name}
                  className="w-full h-full object-cover"
                  loading="lazy"
                  draggable={false}
                />
              </div>
            </button>
          );
        })}
      </div>

      {/* Bottom Center Audio Player */}
      <div className="absolute z-40 top-[calc(50%+45vmin)] left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 pointer-events-auto">
        <div className="flex items-center gap-4 bg-black/60 p-4 rounded-xl border border-white/20 backdrop-blur-sm max-w-[90vw] sm:max-w-md overflow-hidden shadow-md shadow-black">
          <div className="w-[64px] h-[64px] md:w-[80px] md:h-[80px] rounded-lg overflow-hidden shrink-0">
            <img
              src={station.assets.songImage}
              alt={station.song.title}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex flex-col truncate text-left">
            <span className="font-semibold text-white text-lg md:text-xl truncate">
              {station.song.title}
            </span>
            <span className="text-white/70 text-sm md:text-base truncate">
              {station.song.artist || "Unknown Artist"}
            </span>
          </div>
        </div>
        <AudioControls key={station.slug} songUrl={station.assets.song} />
      </div>

      {/* Screen reader announcements */}
      <div className="sr-only" aria-live="polite">
        Now playing: {station.song.title} by {station.song.artist || "Unknown Artist"} on {station.name}
      </div>
    </main>
  );
}

function AudioControls({ songUrl }: { songUrl: string }) {
  const { playing, play, pause, stop } = useHowlerAudio(songUrl);
  
  return (
    <div className="flex gap-3">
      <button
        className={`bg-white/20 hover:bg-gta-neon/30 rounded-full p-3 border border-white/40 transition-all duration-200 neon-glow hover:scale-110 ${playing ? 'animate-pulse' : ''}`}
        aria-label="Play"
        onClick={play}
        type="button"
      >
        <Play 
          color={playing ? "#f472b6" : "#fff"} 
          size={24} 
          strokeWidth={2.5} 
        />
      </button>
      <button
        className="bg-white/20 hover:bg-gta-neon/30 rounded-full p-3 border border-white/40 transition-all duration-200 neon-glow hover:scale-110"
        aria-label="Pause"
        onClick={pause}
        type="button"
      >
        <Pause color="#fff" size={24} strokeWidth={2.5} />
      </button>
      <button
        className="bg-white/20 hover:bg-gta-neon/30 rounded-full p-3 border border-white/40 transition-all duration-200 neon-glow hover:scale-110"
        aria-label="Stop"
        onClick={stop}
        type="button"
      >
        <Square color="#fff" size={24} strokeWidth={2.5} />
      </button>
    </div>
  );
}