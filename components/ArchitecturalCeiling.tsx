type Point = [number, number, number];
const project = ([x, y, z]: Point) => `${420 + (x - y) * 1.05},${350 + (x + y) * 0.42 - z * 0.95}`;
const points = (vertices: Point[]) => vertices.map(project).join(" ");
const phase = (p: number, a: number, b: number) => Math.max(0, Math.min(1, (p - a) / (b - a)));

function Block({ x, y, z, w, d, h, color = "#f9faf9" }: { x: number; y: number; z: number; w: number; d: number; h: number; color?: string }) {
  return <g stroke="#9da5a5" strokeWidth="0.65" strokeLinejoin="round">
    <polygon points={points([[x,y+d,z],[x+w,y+d,z],[x+w,y+d,z+h],[x,y+d,z+h]])} fill="#cbd1d0" />
    <polygon points={points([[x+w,y,z],[x+w,y+d,z],[x+w,y+d,z+h],[x+w,y,z+h]])} fill="#e0e4e2" />
    <polygon points={points([[x,y,z+h],[x+w,y,z+h],[x+w,y+d,z+h],[x,y+d,z+h]])} fill={color} />
  </g>;
}

export default function ArchitecturalCeiling({ progress }: { progress: number }) {
  const structure = phase(progress, 0, .24);
  const finish = phase(progress, .68, .88);
  const light = phase(progress, .88, 1);
  return <svg viewBox="0 0 1000 620" width="100%" height="100%" aria-hidden="true">
    <defs>
      <pattern id="architect-grid" width="28" height="28" patternUnits="userSpaceOnUse"><path d="M28 0H0V28" fill="none" stroke="#96b5c9" strokeWidth=".5" /></pattern>
      <radialGradient id="architect-shadow"><stop stopColor="#08121d" stopOpacity=".6" /><stop offset="1" stopColor="#08121d" stopOpacity="0" /></radialGradient>
    </defs>
    <rect width="1000" height="620" fill="url(#architect-grid)" opacity=".2" />
    <ellipse cx="480" cy="490" rx="320" ry="85" fill="url(#architect-shadow)" />
    <g>
      <Block x={-16} y={-16} z={-14} w={392} d={292} h={12} color="#e4e8e5" />
      <Block x={0} y={0} z={0} w={360} d={260} h={3} color="#f2f0e9" />
      {Array.from({length:5},(_,i)=><path key={i} d={`M${project([60+i*60,0,3])} L${project([60+i*60,260,3])}`} stroke="#c7c9c2" strokeWidth=".6" />)}
      <Block x={0} y={0} z={3} w={360} d={8} h={158} />
      <Block x={0} y={8} z={3} w={8} d={252} h={158} />
      <polygon points={points([[50,9,40],[175,9,40],[175,9,133],[50,9,133]])} fill="#dee8e5" stroke="#828e8b" strokeWidth="2" />
      <path d={`M${project([112,9,40])} L${project([112,9,133])}`} stroke="#828e8b" strokeWidth="2" />
      <Block x={38} y={36} z={3} w={140} d={53} h={20} color="#e5e3dc" />
      <Block x={38} y={36} z={23} w={140} d={12} h={20} color="#f5f3ed" />
      <Block x={55} y={112} z={3} w={108} d={58} h={19} color="#b8a585" />
      {[0,1,2,3].map(i=><path key={i} d={`M${project([20+i*100,20,164])} L${project([20+i*100,20,252-structure*78])}`} stroke="#a7aaa2" strokeWidth="1" strokeDasharray="4 4" />)}
      <g opacity={.45+structure*.55}>
        {[0,1,2,3,4].map(i=><Block key={i} x={16+i*79} y={12} z={174+(1-structure)*66} w={4} d={236} h={4} color="#a6b0ad" />)}
        {[0,1,2].map(i=><Block key={i} x={12} y={20+i*107} z={178+(1-structure)*66} w={334} d={4} h={3} color="#c4cecb" />)}
      </g>
      {Array.from({length:12},(_,i)=>{
        const assembled=phase(progress,.18+i*.031,.34+i*.031);
        const col=i%4, row=Math.floor(i/4);
        return <Block key={i} x={12+col*84+(col-1.5)*(1-assembled)*9} y={12+row*79+(row-1)*(1-assembled)*9} z={183+(1-assembled)*(80+row*9)} w={82} d={77} h={3} />;
      })}
      <g opacity={finish}>
        <Block x={10} y={10} z={186} w={338} d={240} h={2} color="#fdfcf6" />
        <Block x={8} y={8} z={189} w={342} d={12} h={6} />
        <Block x={8} y={238} z={189} w={342} d={12} h={6} />
        <Block x={8} y={20} z={189} w={12} d={218} h={6} />
        <Block x={338} y={20} z={189} w={12} d={218} h={6} />
      </g>
      <polygon points={points([[23,23,192],[334,23,192],[334,234,192],[23,234,192]])} fill="none" stroke="#d6af5c" strokeWidth="3" opacity={light} />
    </g>
    <g fill="none" stroke="#aac3d3" strokeWidth="1">
      <path d={`M${project([0,292,0])} L${project([360,292,0])} M${project([0,282,0])} L${project([0,302,0])} M${project([360,282,0])} L${project([360,302,0])}`} />
      <path d="M758 186h90v-36 M198 320H95v-35" strokeDasharray="3 4" />
    </g>
    <g fontFamily="inherit" fill="#d3e0e9" fontSize="13" letterSpacing="1">
      <text x="780" y="136">FORRO DE GESSO</text><text x="42" y="272">VISTA EM CORTE</text>
      <text x="285" y="579">ESTUDO VOLUMÉTRICO · SEM ESCALA</text>
    </g>
    <g transform="translate(885 515)" strokeWidth="1.5" fill="none"><path d="M0 0v-35 M0 0l30 14 M0 0l-24 17" stroke="#a3864d" /><g fill="#d3e0e9" stroke="none" fontSize="11"><text x="-4" y="-43">Z</text><text x="35" y="20">X</text><text x="-37" y="25">Y</text></g></g>
  </svg>;
}
