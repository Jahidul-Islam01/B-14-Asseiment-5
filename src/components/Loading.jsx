const Loading = () => {
  return (
    <div className="flex min-h-[220px] items-center justify-center">
      <div className="text-center">
        <div className="mx-auto h-10 w-10 animate-spin rounded-full border-4 border-slate-200 border-t-pink-500"></div>


        <p className="mt-4 text-sm text-slate-500">
          Loading technologies...
        </p>
      </div>
    </div>
  );
};


export default Loading;

