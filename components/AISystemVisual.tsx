import { ProjectVisual } from "@/lib/portfolio"

export default function AISystemVisual({ mode }: { mode: ProjectVisual }) {
  if (mode === "agents") {
    return (
      <svg viewBox="0 0 400 240" className="project-illustration" aria-hidden="true">
        <g fill="none" stroke="#91a58c" strokeWidth="1">
          <path d="M119 128h30m92 0h30M317 93V61H201v32" />
          <path d="m143 124 6 4-6 4m122-8 6 4-6 4m-74-41 4 6 4-6" />
        </g>
        <rect x="25" y="96" width="94" height="64" rx="6" fill="#f6f7ef" stroke="#bdc7b2" />
        <rect x="149" y="96" width="92" height="64" rx="6" fill="#3a4b3b" />
        <rect x="271" y="96" width="104" height="64" rx="6" fill="#f6f7ef" stroke="#bdc7b2" />
        <rect x="231" y="39" width="128" height="32" rx="4" fill="#d8dfcf" />
        <g fontFamily="monospace" textAnchor="middle">
          <text x="72" y="124" fontSize="9" fill="#596750">A request</text>
          <text x="72" y="139" fontSize="6.5" fill="#76836c">NATURAL LANGUAGE</text>
          <text x="195" y="124" fontSize="10" fill="#f4f0e4">LLM agent</text>
          <text x="195" y="139" fontSize="6.5" fill="#c5d0bb">n8n / TOOL CALLING</text>
          <text x="323" y="124" fontSize="9" fill="#596750">Live data</text>
          <text x="323" y="139" fontSize="6.5" fill="#76836c">SUPABASE / POSTGRES</text>
          <text x="295" y="58" fontSize="7" fill="#596750">JOHN DEERE APIs</text>
          <text x="199" y="197" fontSize="7" fill="#76836c">REQUEST → TOOLS → OPERATIONAL DATA</text>
        </g>
      </svg>
    )
  }
  if (mode === "multimodal") {
    return (
      <svg viewBox="0 0 400 240" className="project-illustration" aria-hidden="true">
        <g stroke="#a6bca2" fill="none">
          <path d="M97 118h33m84-57h25v118h-25m25-61h32" strokeOpacity=".5" />
          <rect x="31" y="82" width="66" height="72" rx="4" strokeOpacity=".4" />
          <path d="M47 133c-9-24 4-37 35-36-1 29-12 42-35 36Z" fill="#a6bca2" fillOpacity=".14" />
          <path d="m48 136 23-29m-12 13-1-11m1 12 14-2" />
          {[42,100,158].map((y,i)=><g key={y}>
            <rect x="139" y={y} width="75" height="37" rx="4" strokeOpacity=".3" fill="#a6bca2" fillOpacity={.03+i*.03} />
            <path d={`M152 ${y+13}h38m-38 10h25`} strokeOpacity=".6" />
          </g>)}
          <path d="M131 60v120m0-62h8m-8-58h8m-8 120h8" strokeOpacity=".5" />
          <rect x="271" y="89" width="100" height="58" rx="5" stroke="#cf9c68" />
          <path d="m310 107 7 7 13-15" stroke="#cf9c68" strokeWidth="1.5" />
        </g>
        <g fontFamily="monospace" textAnchor="middle" fill="#c8d1c2">
          <text x="64" y="173" fontSize="6.5">IMAGE INPUT</text>
          <text x="176" y="217" fontSize="6.5">VLM OUTPUTS</text>
          <text x="321" y="132" fontSize="7.5" fill="#d4ac79">CONSENSUS</text>
          <text x="321" y="174" fontSize="6.5">EXPERT VALIDATION</text>
        </g>
      </svg>
    )
  }
  return (
    <svg viewBox="0 0 400 240" className="project-illustration" aria-hidden="true">
      <g fill="none" stroke="#aa9788" strokeWidth="1">
        <path d="M104 120h29V64h34m-34 56v51h34m80-107h25v56h26m-51 51h25v-51" />
        <rect x="28" y="98" width="76" height="44" rx="5" fill="#faf8f2" />
        <rect x="167" y="41" width="80" height="46" rx="5" fill="#faf8f2" />
        <rect x="167" y="135" width="80" height="64" rx="5" fill="#faf8f2" />
        <rect x="298" y="95" width="76" height="50" rx="5" fill="#c27352" stroke="#c27352" />
        <path d="m190 162 17-12 18 15-18 17-17-20m17-12v32" />
      </g>
      <g fill="#b36e50">{[[190,162],[207,150],[225,165],[207,182]].map(([x,y])=><circle key={x+"-"+y} cx={x} cy={y} r="3"/>)}</g>
      <g fontFamily="monospace" textAnchor="middle" fill="#7c6b5a">
        <text x="66" y="124" fontSize="9">Query</text>
        <text x="207" y="59" fontSize="9">FAISS</text><text x="207" y="74" fontSize="6">VECTOR RETRIEVAL</text>
        <text x="207" y="215" fontSize="6.5">ENTITY GRAPH</text>
        <text x="336" y="116" fontSize="10" fill="#fff8e9">GPT</text><text x="336" y="132" fontSize="6" fill="#fff8e9">GROUNDED ANSWER</text>
      </g>
    </svg>
  )
}
