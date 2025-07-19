import { useEffect, useRef, useState } from "react";
import { Howl, Howler } from "howler";

export function useHowlerAudio(src: string, canAutoplay: boolean) {
  const howlRef = useRef<Howl | null>(null);
  const [playing, setPlaying] = useState(false);
  const [loaded, setLoaded] = useState(false);

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
      onload: () => setLoaded(true),
    });

    howlRef.current = howl;

    return () => {
      howl.unload();
      setLoaded(false);
    };
  }, [src]);

  useEffect(() => {
    if (canAutoplay && loaded && !playing) {
      howlRef.current?.play();
    }
  }, [canAutoplay, loaded]);

  const play = () => howlRef.current?.play();
  const pause = () => howlRef.current?.pause();
  const stop = () => howlRef.current?.stop();

  return { playing, play, pause, stop, loaded };
}
