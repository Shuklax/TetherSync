
export function Card({icon: Icon, heading, content}) {
  return (
    <div>
      <div className="p-7 text-white bg-[#0b0b0b] h-44 w-auto rounded-2xl border-1 border-emerald-800 border-">
        <div id="card-icon" className="text-green-400 mb-3"><Icon className="w-8 h-8"/></div>
        <div id="card-heading" className="font-semibold my-1">{heading}</div>
        <div id="card-content" className="opacity-50 ">{content}</div>
      </div>
    </div>
  );
}


