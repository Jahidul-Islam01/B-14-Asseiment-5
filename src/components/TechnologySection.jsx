import Loading from "./Loading";
import TechnologyCard from "./TechnologyCard";
import StackPanel from "./StackPanel";


const TechnologySection = ({
  technologies,
  loading,
  stack,
  onAdd,
  onRemove,
  onRemoveAll,
}) => {
  return (
    <section
      id="technologies"
      className="bg-white pb-20 pt-10 md:pb-24 md:pt-14"
    >
      <div className="mx-auto max-w-[1180px] px-5">
        <div>
          <h2 className="text-3xl font-extrabold leading-tight text-slate-900 md:text-4xl">
            Explore the{" "}
            <span className="brand-gradient-text">Technologies</span>
          </h2>


          <p className="mt-2 text-sm leading-6 text-slate-500">
            Choose the tools you like and build a development stack for your
            next project.
          </p>
        </div>


        {loading ? (
          <Loading />
        ) : (
          <div className="mt-8 grid items-start gap-6 lg:grid-cols-[minmax(0,1fr)_270px]">
            <div className="order-2 grid min-w-0 grid-cols-1 gap-5 sm:grid-cols-2 lg:order-1 lg:grid-cols-3">
              {technologies.map((technology) => (
                <TechnologyCard
                  key={technology.id}
                  technology={technology}
                  onAdd={onAdd}
                  isAdded={stack.some(
                    (item) => item.id === technology.id
                  )}
                />
              ))}
            </div>


           
