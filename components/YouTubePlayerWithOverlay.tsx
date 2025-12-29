"use client";

import { useMemo, useState } from "react";

function getYoutubeId(url: string) {
  try {
    const u = new URL(url);
    if (u.hostname.includes("youtu.be")) return u.pathname.replace("/", "");
    return u.searchParams.get("v") ?? "";
  } catch {
    return "";
  }
}

function getEmbedUrl(id: string, autoplay: boolean) {
  const params = new URLSearchParams({
    autoplay: autoplay ? "1" : "0",
    mute: "0",
    controls: "0",
    modestbranding: "1",
    rel: "0",
    fs: "1",
    playsinline: "1",
    iv_load_policy: "3",
    cc_load_policy: "0",
  });

  return `https://www.youtube-nocookie.com/embed/${id}?${params.toString()}`;
}

function getPosterUrl(id: string) {
  return `https://i.ytimg.com/vi/${id}/maxresdefault.jpg`;
}

export function YouTubePlayerWithOverlay({
  youtubeUrl,
  title,
}: {
  youtubeUrl: string;
  title: string;
}) {
  const videoId = useMemo(() => getYoutubeId(youtubeUrl), [youtubeUrl]);
  const [playing, setPlaying] = useState(false);

  const poster = useMemo(
    () => (videoId ? getPosterUrl(videoId) : ""),
    [videoId]
  );

  return (
    <div className="relative w-full pt-[56.25%] rounded-[24px] overflow-hidden">
      {/* Poster + overlay */}
      {!playing && (
        <button
          type="button"
          onClick={() => setPlaying(true)}
          className="absolute inset-0 w-full h-full group"
          aria-label={`Play: ${title}`}
        >
          {/* Poster image */}
          <div
            className="absolute inset-0 bg-center bg-cover"
            style={{ backgroundImage: `url(${poster})` }}
          />

          {/* Dark gradient like Netflix */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-black/20" />

          {/* Play button */}
          <div className="absolute inset-0 flex items-center justify-center cursor-pointer">
            <div className="rounded-full bg-white/90 backdrop-blur-sm w-20 h-20 flex items-center justify-center shadow-lg transition-transform duration-200 group-hover:scale-105">
              {/* play icon */}
              <div className="ml-1 w-0 h-0 border-y-[14px] border-y-transparent border-l-[22px] border-l-black/80" />
            </div>
          </div>

          {/* Optional title bottom-left */}
          <div className="absolute left-5 bottom-4 text-white text-sm md:text-base font-medium drop-shadow">
            {title}
          </div>
        </button>
      )}

      {/* Iframe only after click */}
      {playing && (
        <iframe
          key={youtubeUrl}
          src={videoId ? getEmbedUrl(videoId, true) : ""}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="absolute inset-0 w-full h-full"
        />
      )}
    </div>
  );
}
