import { Project } from "@/lib/portfolio"
import AISystemVisual from "./AISystemVisual"

export default function ProjectVisual({ project }: { project: Project }) {
  const id = project.id
  return (
    <div className={`project-visual visual-${project.visual} ${id === "accident-hotspots" ? "visual-map" : ""}`} aria-hidden="true">
      <div className="visual-top"><span>{id === "ai-agribench" ? "AI-AGRIBENCH / MODEL EVALUATION" : project.visual === "agents" ? "AGANSWERS / DEPLOYED AGENTS" : project.visual === "multimodal" ? "MULTIMODAL ANNOTATION" : project.visual === "retrieval" ? "GRAPH-AUGMENTED RETRIEVAL" : id === "accident-hotspots" ? "GEOSPATIAL INTELLIGENCE" : project.visual === "vision" ? "PATTERN RECOGNITION" : project.visual === "language" ? "LANGUAGE → POSSIBILITY" : "FROM DATA TO DECISIONS"}</span><span>↗</span></div>
      {["agents", "multimodal", "retrieval"].includes(project.visual) ? <AISystemVisual mode={project.visual} /> : id === "accident-hotspots" ? (
        <svg viewBox="0 0 400 240" className="project-illustration map-illustration">
          <defs><pattern id="map-grid" width="25" height="25" patternUnits="userSpaceOnUse"><path d="M25 0H0V25" fill="none" stroke="currentColor" strokeOpacity=".12" /></pattern></defs>
          <rect width="400" height="240" fill="url(#map-grid)" />
          <g transform="translate(118,-3) rotate(-9 90 120)">
            <path d="M30 12H118V91L203 199 190 225 135 225 125 204 91 188 80 165 60 149 55 123 35 98 34 65 25 43Z" fill="#d6ddc8" stroke="#89977a" strokeWidth="1.1" />
            <path d="m51 25 5 66 43 66 43 37 28 13M36 65l54 3 53 93M61 106l39-13M84 149l50-19M126 198l35-36" fill="none" stroke="#a9b29a" strokeWidth="1" />
            {[[47,66],[55,88],[66,104],[78,120],[90,143],[107,164],[129,185],[149,201],[174,212],[67,65],[99,102],[116,143],[137,160],[46,42],[161,196]].map(([x,y],i)=><g key={i}><circle cx={x} cy={y} r={i%3===0 ? 12 : 7} fill="#d97142" opacity=".15"/><circle cx={x} cy={y} r={i%3===0 ? 3.4 : 2.3} fill="#bd532d"/></g>)}
          </g>
          <text x="26" y="166" fill="#65745a" fontSize="9" fontFamily="monospace">CALIFORNIA</text><text x="26" y="181" fill="#65745a" fontSize="8" fontFamily="monospace">36.7783° N</text>
          <path d="M86 171h33l26-21" fill="none" stroke="#89977a" strokeWidth=".7" />
        </svg>
      ) : id === "pneumonia-detection" ? (
        <svg viewBox="0 0 400 240" className="project-illustration vision-illustration">
          <g stroke="#e7dfd2" fill="none">
            <path d="M200 44v47m-4-47v46m8-46v46" strokeWidth="2" opacity=".5" />
            <path d="M185 78C168 45 117 88 108 138s-1 54 19 47 41-2 52-21 15-43 6-86Z" fill="#f0e5ce" fillOpacity=".04" strokeOpacity=".55" />
            <path d="M215 78C232 45 283 88 292 138s1 54-19 47-41-2-52-21-15-43-6-86Z" fill="#f0e5ce" fillOpacity=".04" strokeOpacity=".55" />
            {[0,1,2,3,4,5,6].map(i=><g key={i} opacity={.2+i*.045}><path d={`M187 ${88+i*12} Q ${154-i*3} ${76+i*13} ${128-i*2} ${103+i*11}`} /><path d={`M213 ${88+i*12} Q ${246+i*3} ${76+i*13} ${272+i*2} ${103+i*11}`} /></g>)}
            <path d="M199 90l-25 23-20 40m20-40-31-3m28 12 3 34m27-66 25 23 20 40m-20-40 31-3m-28 12-3 34" opacity=".4" strokeWidth="2" />
          </g>
          <g stroke="#cf9c68" strokeWidth="1.1" fill="none"><path d="M94 80V59h24m166 0h23v21M94 179v21h24m166 0h23v-21" /><rect x="224" y="121" width="46" height="38" strokeDasharray="3 3"/><path d="M270 130h54" /></g>
          <text x="293" y="123" fill="#cf9c68" fontSize="7" fontFamily="monospace">REGION OF</text><text x="293" y="134" fill="#cf9c68" fontSize="7" fontFamily="monospace">INTEREST</text>
          <path d="M81 211h237" stroke="#e7dfd2" strokeOpacity=".12" />
        </svg>
      ) : project.visual === "vision" ? (
        <svg viewBox="0 0 400 240" className="project-illustration apparel-illustration">
          {[0, 1, 2, 3, 4, 5].map((item) => {
            const x = 65 + (item % 3) * 94
            const y = 42 + Math.floor(item / 3) * 88
            return <g key={item} transform={`translate(${x} ${y})`}>
              <rect width="80" height="75" rx="3" fill="#e7dfd2" fillOpacity=".035" stroke="#e7dfd2" strokeOpacity=".15" />
              <path d="M26 17 15 25l8 12 7-4v26h25V33l7 4 8-12-12-8-10 5H36Z" transform="translate(-3 0)" fill={item % 2 ? "#aabeae" : "#d7b485"} fillOpacity=".2" stroke={item % 2 ? "#aabeae" : "#d7b485"} strokeWidth="1" />
              {item === 1 && <path d="M8 16V8h12m40 0h12v8M8 59v8h12m40 0h12v-8" fill="none" stroke="#cf9c68" strokeWidth="1.4" />}
            </g>
          })}
          <text x="66" y="224" fill="#b7c3b8" fontSize="7" fontFamily="monospace">{id === "warehouse-apparel-detection" ? "OBJECT DETECTION / APPAREL" : "IMAGE → FEATURES → CLASS"}</text>
        </svg>
      ) : project.visual === "language" ? (
        <div className="language-art"><span>“</span><p>language<br /><em>understood.</em></p><div className="token-line"><i /><i /><i /><i /><i /></div></div>
      ) : id === "python-learning-library" ? (
        <svg viewBox="0 0 400 240" className="project-illustration code-illustration">
          <rect x="54" y="33" width="292" height="175" rx="7" fill="#faf8f2" stroke="#cfc5b9" />
          <path d="M54 61h292" stroke="#e7e1d8" />
          <circle cx="68" cy="47" r="2.5" fill="#d1714c" /><circle cx="78" cy="47" r="2.5" fill="#d7cbbb" /><circle cx="88" cy="47" r="2.5" fill="#d7cbbb" />
          <text x="235" y="49" fill="#a09486" fontSize="7" fontFamily="monospace">a little Python.py</text>
          <g fontFamily="monospace" fontSize="10">
            <text x="74" y="86" fill="#b6a796">01</text><text x="101" y="86" fill="#b76547">import pandas as pd</text>
            <text x="74" y="110" fill="#b6a796">02</text><text x="101" y="110" fill="#8c9580"># Start with a question.</text>
            <text x="74" y="134" fill="#b6a796">03</text><text x="101" y="134" fill="#72665a">data = pd.read_csv(&quot;data.csv&quot;)</text>
            <text x="74" y="158" fill="#b6a796">04</text><text x="101" y="158" fill="#72665a">data.describe()</text>
            <text x="74" y="182" fill="#b6a796">05</text><path d="M102 173v12" stroke="#b76547" strokeWidth="2" />
          </g>
        </svg>
      ) : (
        <svg viewBox="0 0 400 240" className="project-illustration dashboard-illustration">
          <rect x="55" y="30" width="290" height="179" rx="7" fill="#faf8f2" stroke="#cfc5b9" />
          <path d="M55 57h290M99 57v152" stroke="#e7e1d8" />
          <circle cx="68" cy="44" r="2.5" fill="#d1714c"/><circle cx="78" cy="44" r="2.5" fill="#d7cbbb"/><circle cx="88" cy="44" r="2.5" fill="#d7cbbb"/>
          <rect x="66" y="72" width="22" height="5" rx="2" fill="#d7704d"/>{[91,108,125,142].map(y=><rect key={y} x="66" y={y} width="20" height="4" rx="2" fill="#dfd8ce"/>)}
          <text x="114" y="78" fill="#7e7165" fontSize="6.5" fontFamily="monospace">MODEL EXPLORER</text>
          {[0,1,2].map(i=><g key={i}><rect x={114+i*73} y="91" width="64" height="28" rx="3" fill={i===0?"#f0e0d2":"#f1eee7"}/><path d={`M${123+i*73} 101h20m-20 8h35`} stroke={i===0?"#c78058":"#cfc4b5"} strokeWidth="3"/></g>)}
          {[142,160,178].map(y=><path key={y} d={`M114 ${y}h210`} stroke="#e9e3d8" strokeWidth=".7"/>)}
          <path d="M119 178c18-2 21-23 41-20s20 15 39-1 22-5 38-19 21 13 39 0 28-13 44-11" fill="none" stroke="#c56c48" strokeWidth="2" />
          <path d="M119 185c31-2 40-10 61-6s30-10 49-9 39-13 49-12 29-3 42-12" fill="none" stroke="#bfb19b" strokeWidth="1.5" strokeDasharray="4 4" />
        </svg>
      )}
      <div className="visual-bottom"><span>{project.metric ? <><strong>{project.metric.value}</strong> {project.metric.label}</> : id === "aganswers-agents" ? "TOOL CALLING / LIVE CUSTOMER DATA" : id === "liver-disease-prediction" ? "EXPLORE. PREDICT. UNDERSTAND." : "BUILT WITH CURIOSITY"}</span><span className="visual-dot" /></div>
    </div>
  )
}
