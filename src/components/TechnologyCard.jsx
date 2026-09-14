const TechnologyCard = ({ technology, onAdd, isAdded }) => {
  const {
    name,
    category,
    description,
    icon,
    rating,
    difficulty,
    badge,
  } = technology;


  const badgeStyles = {
    Popular: "border border-sky-100 bg-sky-50 text-sky-500",
    Powerful: "border border-violet-100 bg-violet-50 text-violet-500",
    Flexible: "border border-emerald-100 bg-emerald-50 text-emerald-500",
    Essential: "border border-blue-100 bg-blue-50 text-blue-500",
    Fast: "border border-orange-100 bg-orange-50 text-orange-500",
    NoSQL: "border border-green-100 bg-green-50 text-green-500",
    "Top SQL": "border border-indigo-100 bg-indigo-50 text-indigo-500",
    Modern: "border border-cyan-100 bg-cyan-50 text-cyan-500",
    Versatile: "border border-amber-100 bg-amber-50 text-amber-500",
    Trending: "border border-pink-100 bg-pink-50 text-pink-500",
    "Core Tool": "border border-red-100 bg-red-50 text-red-500",
    Containers: "border border-sky-100 bg-sky-50 text-sky-500",
  };


  return (
    <div
      className={`flex h-full flex-col rounded-2xl border p-5 shadow-sm transition ${
        isAdded
          ? "border-pink-300 bg-pink-50/20 ring-1 ring-pink-100"
          : "border-slate-200 bg-white"
      }`}
    >
      <div className="flex items-start justify-between">
        <img
          src={icon}
          alt={`${name} logo`}
          className="h-9 w-9 object-contain"
        />


        <span
          className={`rounded-full px-3 py-1 text-[11px] font-semibold ${
            badgeStyles[badge] ||
            "border border-slate-100 bg-slate-50 text-slate-500"
          }`}
        >
          {badge}
        </span>
      </div>


      <h3 className="mt-5 text-lg font-bold text-slate-900">{name}</h3>


      <p className="mt-2 flex-1 text-sm leading-6 text-slate-500">
        {description}
      </p>


      <div className="mt-5 flex items-center justify-between border-t border-slate-100 pt-4 text-xs text-slate-500">
        <span className="rounded bg-slate-50 px-2 py-1">{category}</span>
        <span>{difficulty}</span>
        <span className="whitespace-nowrap">
          <span className="text-amber-400">★</span> {rating}
        </span>
      </div>


      <button
        type="button"
        onClick={() => onAdd(technology)}
        disabled={isAdded}
        className={`mt-4 w-full rounded-lg py-3 text-sm font-medium transition ${
          isAdded
            ? "cursor-not-allowed bg-slate-200 text-slate-500"
            : "bg-slate-950 text-white hover:bg-slate-800"
        }`}
      >
        {isAdded ? "✓ Added to Stack" : "Add to Stack"}
      </button>
    </div>
  );
};


export default TechnologyCard;

