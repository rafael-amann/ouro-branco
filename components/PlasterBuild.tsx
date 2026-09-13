"use client";

import { useEffect, useRef, useState, type CSSProperties } from "react";
import { ArrowDown, ArrowUp } from "lucide-react";
import styles from "./PlasterBuild.module.css";
import PlasterRoom from "./PlasterRoom";
import CeilingInterior from "./CeilingInterior";

const steps = [
  { title: "Estrutura metálica", detail: "O início de um acabamento preciso." },
  { title: "Placas de gesso", detail: "Cada peça encontra seu lugar." },
  { title: "Acabamento contínuo", detail: "As juntas desaparecem. A elegância aparece." },
  { title: "Iluminação e transformação", detail: "A luz revela o seu novo ambiente." },
  { title: "Por dentro do ambiente", detail: "Olhe para cima: o forro e a luz indireta em uma nova perspectiva." },
];

export default function PlasterBuild() {
  const [progress, setProgress] = useState(0);
  const [reduced, setReduced] = useState(false);
  const root = useRef<HTMLElement>(null);
  const step = progress < .16 ? 0 : progress < .496 ? 1 : progress < .656 ? 2 : progress < .8 ? 3 : 4;
  const approach = Math.max(0, Math.min(1, (progress - .8) / .2));
  const phase = (start: number, end: number) => Math.min(1, Math.max(0, (progress - start) / (end - start)));

  useEffect(() => {
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    let frame = 0;
    const measure = () => {
      frame = 0;
      if (!root.current || preference.matches) return;
      const rect = root.current.getBoundingClientRect();
      const travel = Math.max(1, rect.height - window.innerHeight);
      setProgress(Math.min(1, Math.max(0, -rect.top / travel)));
    };
    const schedule = () => { if (!frame) frame = requestAnimationFrame(measure); };
    const updatePreference = () => {
      setReduced(preference.matches);
      if (preference.matches) setProgress(1);
      else schedule();
    };
    updatePreference();
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);
    preference.addEventListener("change", updatePreference);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
      preference.removeEventListener("change", updatePreference);
    };
  }, []);

  const goTo = (index: number) => {
    const target = [0, 0.4, 0.62, 0.77, 1][index];
    if (reduced) { setProgress(target); return; }
    if (!root.current) return;
    const top = window.scrollY + root.current.getBoundingClientRect().top;
    const travel = Math.max(1, root.current.offsetHeight - window.innerHeight);
    window.scrollTo({ top: top + target * travel, behavior: "smooth" });
  };

  return (
    <section ref={root} className={styles.scrollSection} aria-label="Montagem do forro de gesso" data-reduced={reduced}>
    <div className={styles.sticky}>
    <div className={styles.intro}>
      <span>DO PROJETO AO ACABAMENTO</span>
      <h2>Seu forro, em cada detalhe</h2>
      <p><ArrowDown size={16} /> Desça para montar <span>·</span> <ArrowUp size={16} /> Suba para desmontar</p>
    </div>
    <div className={styles.card} style={{ "--progress": progress, "--structure": phase(0, 0.22), "--finish": phase(0.62, 0.78), "--light": phase(0.82, 1) } as CSSProperties}>
      <div className={styles.header}>
        <span className={styles.eyebrow}><i /> DO PROJETO À TRANSFORMAÇÃO</span>
        <span className={styles.tag}>{step === 4 ? "VISTA INTERNA" : "MONTAGEM 3D"}</span>
      </div>
      <div className={styles.viewport} role="img" aria-label={`Maquete 3D de um forro de gesso em construção: ${steps[step].title}`}>
        <div className={styles.cameraLayer} style={{ opacity: 1 - Math.min(1, approach * 2), transform: reduced ? undefined : `scale(${1 + approach * .45}) translateY(${approach * 8}%)` }}>
          <PlasterRoom progress={Math.min(1, progress / .8)} />
        </div>
        <div className={styles.cameraLayer} style={{ opacity: Math.min(1, approach * 2) }}>
          <CeilingInterior approach={reduced ? 1 : approach} />
        </div>
      </div>
      <div className={styles.caption}>
        <span className={styles.number}>0{step + 1}<small> / 05</small></span>
        <div><h3>{steps[step].title}</h3><p>{steps[step].detail}</p></div>
      </div>
      <div className={styles.controls}>
        <div className={styles.steps} aria-label="Etapas da construção">
          {steps.map((item, index) => (
            <button key={item.title} type="button" aria-label={`Ver etapa ${index + 1}: ${item.title}`} aria-pressed={step === index}
              className={index <= step ? styles.active : ""} onClick={() => goTo(index)} />
          ))}
        </div>
      </div>
    </div>
    </div>
    </section>
  );
}
