import type { CSSProperties } from "react";
import styles from "./PlasterRoom.module.css";

const phase = (p: number, a: number, b: number) => Math.min(1, Math.max(0, (p - a) / (b - a)));

export default function PlasterRoom({ progress }: { progress: number }) {
  return <div className={styles.viewport} aria-hidden="true" style={{ "--progress": progress, "--structure": phase(progress, 0, .22), "--finish": phase(progress, .62, .78), "--light": phase(progress, .82, 1) } as CSSProperties}>
    <div className={styles.halo} />
    <div className={styles.scene}>
      <div className={styles.floor} /><div className={styles.backWall} /><div className={styles.sideWall} />
      <div className={styles.window} /><div className={styles.rug} /><div className={styles.sofa} /><div className={styles.table} />
      <div className={styles.ceiling}>
        {[0,1,2,3,4].map(n=><div key={`rail-${n}`} className={styles.rail} style={{left:`${12+n*18}%`}} />)}
        {[0,1,2].map(n=><div key={`cross-${n}`} className={styles.crossRail} style={{top:`${14+n*34}%`}} />)}
        {Array.from({length:6},(_,n)=><div key={n} className={styles.panel} style={{"--piece":n,"--panel":phase(progress,.2+n*.055,.38+n*.055),left:`${3+(n%3)*31.5}%`,top:`${4+Math.floor(n/3)*46}%`} as CSSProperties} />)}
        <div className={styles.finish} /><div className={styles.trim} /><div className={styles.led} />
        {[0,1,2,3].map(n=><div key={n} className={styles.spot} style={{left:n%2?"83%":"13%",top:n<2?"15%":"80%"}} />)}
      </div>
    </div>
  </div>;
}
