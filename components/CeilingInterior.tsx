export default function CeilingInterior({ approach }: { approach: number }) {
  const ease = approach * approach * (3 - 2 * approach);
  return <svg viewBox="0 0 1000 620" width="100%" height="100%" aria-hidden="true">
    <defs>
      <linearGradient id="interior-wall" x2="0" y2="1"><stop stopColor="#b9b8b0"/><stop offset="1" stopColor="#495564"/></linearGradient>
      <radialGradient id="interior-ceiling"><stop stopColor="#fffdf3"/><stop offset="1" stopColor="#d1cdc0"/></radialGradient>
      <linearGradient id="interior-soffit" x2="0" y2="1"><stop stopColor="#f9f4e6"/><stop offset="1" stopColor="#b8b5aa"/></linearGradient>
      <filter id="indirect-light" x="-40%" y="-60%" width="180%" height="220%"><feGaussianBlur stdDeviation="12"/></filter>
    </defs>
    <rect width="1000" height="620" fill="#243849"/>
    <g transform={`translate(500 270) scale(${.85 + ease * .15}) translate(-500 -270)`}>
      <path d="M0 80L190 330H810L1000 80V620H0Z" fill="url(#interior-wall)"/>
      <path d="M0 80L190 330V620H0Z" fill="#8a918f"/>
      <path d="M1000 80L810 330V620H1000Z" fill="#707f85"/>
      <path d="M0 80H1000L810 330H190Z" fill="url(#interior-soffit)"/>
      <path d="M80 95H920L770 288H230Z" fill="#706c60"/>
      <path d="M102 97H898L758 271H242Z" fill="url(#interior-ceiling)"/>
      <path d="M102 97H898L758 271H242Z" fill="none" stroke="#ffcd70" strokeWidth="18" filter="url(#indirect-light)" opacity={.5+ease*.5}/>
      <path d="M102 97H898L758 271H242Z" fill="none" stroke="#fff1bf" strokeWidth="3.5"/>
      <path d="M80 95L230 288H770L920 95M230 288V301H770V288" fill="none" stroke="#fcf6e5" strokeWidth="3"/>
      <path d="M190 334H810" stroke="#f4d89c" strokeWidth="4" opacity=".5"/>
      <path d="M275 435H490V620H275Z" fill="#546573" stroke="#9da8a6" strokeWidth="5"/>
      <path d="M382 435V620" stroke="#9da8a6" strokeWidth="3"/>
      <path d="M610 460H725V620H610Z" fill="#c2c0b5" opacity=".65"/>
      <path d="M190 330V620M810 330V620" stroke="#c7cbc0" opacity=".6"/>
    </g>
    <text x="500" y="580" textAnchor="middle" fill="#f3e1bb" fontSize="14" letterSpacing="2" fontFamily="inherit">VISTA INTERNA · SANCA COM LUZ INDIRETA</text>
  </svg>;
}
