"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./ForroAnimation.module.css";

export default function ForroAnimation() {
  const section = useRef<HTMLElement>(null);
  const video = useRef<HTMLVideoElement>(null);
  const target = useRef(0);
  const [progress, setProgress] = useState(0);
  const [reduced, setReduced] = useState(false);
  const [failed, setFailed] = useState(false);
  const seek = () => {
    const player = video.current;
    if (!player || !Number.isFinite(player.duration) || player.seeking) return;
    const time = target.current * Math.max(0, player.duration - .04);
    if (Math.abs(player.currentTime - time) > .04) player.currentTime = time;
  };

  useEffect(() => {
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    let frame = 0;
    const measure = () => {
      frame = 0;
      if (!section.current || preference.matches) return;
      const rect = section.current.getBoundingClientRect();
      const value = Math.min(1, Math.max(0, -rect.top / Math.max(1, rect.height - window.innerHeight)));
      target.current = value;
      setProgress(value);
      seek();
    };
    const schedule = () => { if (!frame) frame = requestAnimationFrame(measure); };
    const preferenceChanged = () => { setReduced(preference.matches); schedule(); };
    preferenceChanged();
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);
    preference.addEventListener("change", preferenceChanged);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
      preference.removeEventListener("change", preferenceChanged);
    };
  }, []);

  const moveTo = (value: number) => {
    target.current = value;
    setProgress(value);
    seek();
    if (!reduced && section.current) {
      const rect = section.current.getBoundingClientRect();
      window.scrollTo({ top: window.scrollY + rect.top + value * Math.max(1, rect.height - window.innerHeight), behavior: "instant" });
    }
  };

  return <section ref={section} aria-labelledby="forro-animation-title" className={`${styles.ambience} ${reduced ? "px-4 py-12" : "relative h-[260svh] px-4"}`}>
    <div className={`${styles.stage} ${reduced ? "relative mx-auto max-w-5xl" : "sticky top-0 mx-auto flex min-h-svh max-w-5xl flex-col justify-center gap-4 pb-6 pt-24"}`}>
      <svg className={styles.architecturalFrame} viewBox="0 0 1200 800" preserveAspectRatio="none" aria-hidden="true" focusable="false">
        <g fill="none" stroke="currentColor" strokeWidth="1" vectorEffect="non-scaling-stroke">
          <path d="M24 235V54H278 M40 209V70H250 M56 183V86H222" />
          <path d="M922 54H1176V235 M950 70H1160V209 M978 86H1144V183" />
          <path d="M24 565V746H278 M40 591V730H250 M56 617V714H222" />
          <path d="M922 746H1176V565 M950 730H1160V591 M978 714H1144V617" />
          <path d="M12 300V500 M1188 300V500" opacity=".35" />
        </g>
        <g fill="currentColor"><path d="M24 389l6 11-6 11-6-11Z M1176 389l6 11-6 11-6-11Z" /></g>
      </svg>
      <div className="mb-3 text-center">
        <div className={styles.ornament} aria-hidden="true"><span /><i /><span /></div>
        <h2 id="forro-animation-title" className="text-2xl font-bold text-[#f4ead6] md:text-4xl">Do primeiro encaixe ao acabamento</h2>
        <p className="mt-2 text-sm text-[#c6c1b6]">{reduced ? "Use a barra para acompanhar a montagem do forro." : "Desça para acompanhar a montagem. Suba para rever cada detalhe."}</p>
      </div>
      <div className="overflow-hidden rounded-2xl border border-[#bd9650]/40 bg-[#202223] shadow-[0_24px_70px_rgba(0,0,0,0.45),0_0_40px_rgba(195,141,43,0.08)]">
        <video ref={video} src={`${process.env.NEXT_PUBLIC_BASE_PATH || ""}/videos/forro-acabamento-final.mp4`} poster={`${process.env.NEXT_PUBLIC_BASE_PATH || ""}/images/forro-acabamento-final.png`} muted playsInline preload="auto" onLoadedMetadata={seek} onLoadedData={seek} onSeeked={seek} onError={() => setFailed(true)} aria-label="Animação do forro de gesso convencional: montagem, rejunte, secagem e molduras" className="block max-h-[60svh] w-full object-contain" />
        <div className="flex items-center gap-4 border-t border-[#bd9650]/20 bg-[#1b1d1e] px-5 py-4">
          <label htmlFor="forro-progress" className="shrink-0 text-sm text-amber-100">Montagem do forro</label>
          <input id="forro-progress" type="range" min="0" max="100" step="0.5" value={progress * 100} onChange={event => moveTo(Number(event.target.value) / 100)} className="min-w-0 flex-1 accent-[#c38d2b]" />
        </div>
        {failed && <p className="px-5 pb-4 text-sm text-white">Não foi possível carregar a animação. <a href={`${process.env.NEXT_PUBLIC_BASE_PATH || ""}/videos/forro-acabamento-final.mp4`} className="underline">Abrir vídeo</a></p>}
      </div>
    </div>
  </section>;
}
