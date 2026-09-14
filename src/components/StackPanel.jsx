const StackPanel = ({
  stack,
  onRemove,
  onRemoveAll,
}) => {
  return (
    <aside className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
      <h3 className="text-lg font-bold text-slate-900">
        Your Stack
      </h3>


      <p className="mt-1 text-sm text-slate-400">
        {stack.length === 0
          ? "No technologies selected yet."
          : `${stack.length} Technology Selected`}
      </p>


      {stack.length === 0 ? (
        <div className="mt-5 rounded-xl border border-dashed border-slate-200 px-5 py-10 text-center">
          <p className="text-sm text-slate-400">
            Your stack is empty.
          </p>
        </div>
      ) : (
        <>
          <div className="mt-5 space-y-3">
            {stack.map((technology) => (
              <div
                key={technology.id}
                className="flex items-center gap-3 rounded-xl border border-slate-200 p-3"
              >
                <img
                  src={technology.icon}
                  alt={`${technology.name} logo`}
                  className="h-9 w-9 object-contain"
                />


                <div className="min-w-0 flex-1">
                  <h4 className="truncate text-sm font-semibold text-slate-800">
                    {technology.name}
                  </h4>


                  <p className="text-[10px] text-slate-400">
                    {technology.category}
                  </p>
                </div>


                <button
                  type="button"
                  onClick={() => onRemove(technology.id)}
                  className="text-2xl leading-none text-slate-400 transition hover:text-red-500"
                  aria-label={`Remove ${technology.name}`}
                >
                  ×
                </button>
              </div>
            ))}
          </div>


          <button
            type="button"
            onClick={onRemoveAll}
            className="mt-8 w-full rounded-lg border border-red-300 py-2.5 text-sm font-medium text-red-500 transition hover:bg-red-50"
          >
            Remove All
          </button>
        </>
      )}
    </aside>
  );
};


export default StackPanel;

