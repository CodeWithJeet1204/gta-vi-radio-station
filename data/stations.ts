// app/data/stations.ts

export type Station = {
  slug: string; // e.g. "vice-city-heat"
  name: string;
  description: string;
  assets: {
    logo: string;       // station logo/icon (circle)
    song: string;       // path to mp3
    songImage: string;  // cover art for the song
    background: string; // background image for this station
  };
  song: {
    title: string;
  };
};

// Helper to extract slug from a path like '/stations/vice-city-heat/station.png'
function extractSlug(path: string) {
  // path = '/stations/vice-city-heat/station.png'
  // gives 'vice-city-heat'
  return path.split('/')[2];
}

export const stations: Station[] = [
  {
    slug: extractSlug("/stations/vice-city-heat/station.png"),
    name: "Vice City Heat 101.1",
    description: "A high-energy track blending Miami trap beats with Latin-infused rhythms, reflecting the city's vibrant nightlife and street culture.",
    assets: {
      logo: "/stations/vice-city-heat/station.png",
      song: "/stations/vice-city-heat/song.mp3",
      songImage: "/stations/vice-city-heat/song.png",
      background: "/stations/vice-city-heat/background.png",
    },
    song: {
      title: "305 Degrees",
      
    },
  },
  {
    slug: extractSlug("/stations/miami-bass-fm/station.png"),
    name: "Miami Bass FM 95.5",
    description: "An ode to the '80s Miami bass scene, featuring deep 808s and call-and-response lyrics that get the party started.",
    assets: {
      logo: "/stations/miami-bass-fm/station.png",
      song: "/stations/miami-bass-fm/song.mp3",
      songImage: "/stations/miami-bass-fm/song.png",
      background: "/stations/miami-bass-fm/background.png",
    },
    song: {
      title: "Booty Bounce Boulevard",
      
    },
  },
  {
    slug: extractSlug("/stations/the-lab-2-0/station.png"),
    name: "The Lab 2.0 98.7",
    description: "A fusion of abstract beats and introspective lyrics, capturing the essence of a city that's both futuristic and nostalgic.",
    assets: {
      logo: "/stations/the-lab-2-0/station.png",
      song: "/stations/the-lab-2-0/song.mp3",
      songImage: "/stations/the-lab-2-0/song.png",
      background: "/stations/the-lab-2-0/background.png",
    },
    song: {
      title: "Neon Dreams",
      
    },
  },
  {
    slug: extractSlug("/stations/reggaeton-revolucion/station.png"),
    name: "Reggaetón Revolución 96.9",
    description: "A dancefloor anthem with infectious rhythms and fiery vocals, embodying the passion of Latin nightlife.",
    assets: {
      logo: "/stations/reggaeton-revolucion/station.png",
      song: "/stations/reggaeton-revolucion/song.mp3",
      songImage: "/stations/reggaeton-revolucion/song.png",
      background: "/stations/reggaeton-revolucion/background.png",
    },
    song: {
      title: "Fuego en la Pista",
      
    },
  },
  {
    slug: extractSlug("/stations/playa-latina/station.png"),
    name: "Playa Latina 104.3",
    description: "A romantic tune that transports listeners to a seaside promenade, with traditional instruments and heartfelt lyrics.",
    assets: {
      logo: "/stations/playa-latina/station.png",
      song: "/stations/playa-latina/song.mp3",
      songImage: "/stations/playa-latina/song.png",
      background: "/stations/playa-latina/background.png",
    },
    song: {
      title: "Corazones en el Malecón",
      
    },
  },
  {
    slug: extractSlug("/stations/neo-urbano/station.png"),
    name: "Neo Urbano 90.7",
    description: "A gritty track reflecting the urban underbelly, combining hard-hitting beats with raw storytelling.",
    assets: {
      logo: "/stations/neo-urbano/station.png",
      song: "/stations/neo-urbano/song.mp3",
      songImage: "/stations/neo-urbano/song.png",
      background: "/stations/neo-urbano/background.png",
    },
    song: {
      title: "Callejón Oscuro",
      
    },
  },
  {
    slug: extractSlug("/stations/sunshine-pop-fm/station.png"),
    name: "Sunshine Pop FM 99.9",
    description: "An upbeat pop song celebrating the carefree moments of life, perfect for cruising down the coast.",
    assets: {
      logo: "/stations/sunshine-pop-fm/station.png",
      song: "/stations/sunshine-pop-fm/song.mp3",
      songImage: "/stations/sunshine-pop-fm/song.png",
      background: "/stations/sunshine-pop-fm/background.png",
    },
    song: {
      title: "Golden Hour Glow",
      
    },
  },
  {
    slug: extractSlug("/stations/rhythm-and-vibe/station.png"),
    name: "Rhythm & Vibe 102.3",
    description: "A smooth, sultry track that delves into late-night thoughts and emotions, with velvety vocals and mellow instrumentation.",
    assets: {
      logo: "/stations/rhythm-and-vibe/station.png",
      song: "/stations/rhythm-and-vibe/song.mp3",
      songImage: "/stations/rhythm-and-vibe/song.png",
      background: "/stations/rhythm-and-vibe/background.png",
    },
    song: {
      title: "Midnight Whispers",
      
    },
  },
  {
    slug: extractSlug("/stations/vice-city-rock/station.png"),
    name: "Vice City Rock Radio 88.5",
    description: "A guitar-driven anthem reminiscent of '70s rock legends, capturing the rebellious spirit of the era.",
    assets: {
      logo: "/stations/vice-city-rock/station.png",
      song: "/stations/vice-city-rock/song.mp3",
      songImage: "/stations/vice-city-rock/song.png",
      background: "/stations/vice-city-rock/background.png",
    },
    song: {
      title: "Electric Sunset",
      
    },
  },
  {
    slug: extractSlug("/stations/boulevard-buzz/station.png"),
    name: "Boulevard Buzz 92.1",
    description: "An indie track with jangly guitars and introspective lyrics, painting a picture of city life and personal journeys.",
    assets: {
      logo: "/stations/boulevard-buzz/station.png",
      song: "/stations/boulevard-buzz/song.mp3",
      songImage: "/stations/boulevard-buzz/song.png",
      background: "/stations/boulevard-buzz/background.png",
    },
    song: {
      title: "Sidewalk Serenade",
      
    },
  },
  {
    slug: extractSlug("/stations/skull-and-chrome/station.png"),
    name: "Skull & Chrome 103.6",
    description: "A relentless metal track with thunderous drums and aggressive riffs, embodying the raw energy of the underground scene.",
    assets: {
      logo: "/stations/skull-and-chrome/station.png",
      song: "/stations/skull-and-chrome/song.mp3",
      songImage: "/stations/skull-and-chrome/song.png",
      background: "/stations/skull-and-chrome/background.png",
    },
    song: {
      title: "Iron Pulse",
      
    },
  },
  {
    slug: extractSlug("/stations/neon-wave/station.png"),
    name: "Neon Wave 107.7",
    description: "A nostalgic synth-driven piece that evokes the neon-lit streets and retro-futuristic vibes of Vice City.",
    assets: {
      logo: "/stations/neon-wave/station.png",
      song: "/stations/neon-wave/song.mp3",
      songImage: "/stations/neon-wave/song.png",
      background: "/stations/neon-wave/background.png",
    },
    song: {
      title: "Digital Mirage",
      
    },
  },
  {
    slug: extractSlug("/stations/circuit-breaker/station.png"),
    name: "Circuit Breaker 100.5",
    description: "An electrifying EDM track designed to energize listeners, with pulsating beats and dynamic drops.",
    assets: {
      logo: "/stations/circuit-breaker/station.png",
      song: "/stations/circuit-breaker/song.mp3",
      songImage: "/stations/circuit-breaker/song.png",
      background: "/stations/circuit-breaker/background.png",
    },
    song: {
      title: "Voltage Rush",
      
    },
  },
  {
    slug: extractSlug("/stations/bassline-underground/station.png"),
    name: "Bassline Underground 91.9",
    description: "A fast-paced track with intricate rhythms and deep basslines, capturing the essence of underground club culture.",
    assets: {
      logo: "/stations/bassline-underground/station.png",
      song: "/stations/bassline-underground/song.mp3",
      songImage: "/stations/bassline-underground/song.png",
      background: "/stations/bassline-underground/background.png",
    },
    song: {
      title: "Subterranean Flow",
      
    },
  },
  {
    slug: extractSlug("/stations/groove-street/station.png"),
    name: "Groove Street 93.3",
    description: "A groovy tune with infectious basslines and soulful vocals, transporting listeners to a dancefloor in the '70s.",
    assets: {
      logo: "/stations/groove-street/station.png",
      song: "/stations/groove-street/song.mp3",
      songImage: "/stations/groove-street/song.png",
      background: "/stations/groove-street/background.png",
    },
    song: {
      title: "Funkadelic Nights",
      
    },
  },
  {
    slug: extractSlug("/stations/studio-79/station.png"),
    name: "Studio 79 97.4",
    description: "A disco revival track with shimmering synths and catchy hooks, perfect for a night out in the city.",
    assets: {
      logo: "/stations/studio-79/station.png",
      song: "/stations/studio-79/song.mp3",
      songImage: "/stations/studio-79/song.png",
      background: "/stations/studio-79/background.png",
    },
    song: {
      title: "Mirrorball Dreams",
      
    },
  },
  {
    slug: extractSlug("/stations/lion-sound/station.png"),
    name: "Lion Sound 89.7",
    description: "A laid-back reggae tune that brings the tropical vibes, with smooth rhythms and uplifting lyrics.",
    assets: {
      logo: "/stations/lion-sound/station.png",
      song: "/stations/lion-sound/song.mp3",
      songImage: "/stations/lion-sound/song.png",
      background: "/stations/lion-sound/background.png",
    },
    song: {
      title: "Island Breeze",
      
    },
  },
  {
    slug: extractSlug("/stations/alligator-county/station.png"),
    name: "Alligator County 87.9",
    description: "A country-rock fusion that tells tales of life in the southern swamps, with twangy guitars and storytelling lyrics.",
    assets: {
      logo: "/stations/alligator-county/station.png",
      song: "/stations/alligator-county/song.mp3",
      songImage: "/stations/alligator-county/song.png",
      background: "/stations/alligator-county/background.png",
    },
    song: {
      title: "Bayou Trails",
      
    },
  },
  {
    slug: extractSlug("/stations/biscayne-blues/station.png"),
    name: "Biscayne Blues 105.2",
    description: "A smooth jazz piece with melancholic melodies, evoking images of moonlit waters and introspective moments.",
    assets: {
      logo: "/stations/biscayne-blues/station.png",
      song: "/stations/biscayne-blues/song.mp3",
      songImage: "/stations/biscayne-blues/song.png",
      background: "/stations/biscayne-blues/background.png",
    },
    song: {
      title: "Midnight on the Bay",
      
    },
  },
  {
    slug: extractSlug("/stations/afterglow-fm/station.png"),
    name: "Afterglow FM 106.6",
    description: "A soothing lo-fi track with gentle beats and ambient textures, ideal for relaxing drives through the city.",
    assets: {
      logo: "/stations/afterglow-fm/station.png",
      song: "/stations/afterglow-fm/song.mp3",
      songImage: "/stations/afterglow-fm/song.png",
      background: "/stations/afterglow-fm/background.png",
    },
    song: {
      title: "Twilight Drift",
      
    },
  },
];
