import { useEffect, useRef, useState } from "react";
import { Howl } from "howler";

export function useHowlerAudio(src: string) {
  const howlRef = useRef<Howl | null>(null);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    if (howlRef.current) {
      howlRef.current.unload();
    }
    const howl = new Howl({
      src: [src],
      html5: true,
      volume: 1.0,
      preload: true,
      onplay: () => setPlaying(true),
      onpause: () => setPlaying(false),
      onstop: () => setPlaying(false),
      onend: () => setPlaying(false),
    });
    howlRef.current = howl;
    return () => {
      howl.unload();
    };
  }, [src]);

  const play = () => {
    howlRef.current?.play();
  };
  const pause = () => {
    howlRef.current?.pause();
  };
  const stop = () => {
    howlRef.current?.stop();
  };

  return { playing, play, pause, stop };
}
