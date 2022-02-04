import { dataMethodology as methodology } from "../../../utils/data/methodology";
import { CardMethodology } from "./CardMethodology";

export const Methodology = () => {
  return (
    <div className="py-6">
      <div className="px-3.5 mx-auto max-w-7xl 2xl:max-w-8xl sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-lg font-bold tracking-wide uppercase text-pink-pantone-500">Metodología</h2>
          <p className="mt-2 text-[1.95rem] font-semibold leading-10 tracking-normal text-stone-800 dark:text-white">
            Innovando la educación virtual
          </p>
        </div>
        <div className="mt-10">
          <dl className="space-y-3 md:space-y-0 md:grid md:grid-cols-2 md:gap-6">
            {
              methodology.map(item => (
                <CardMethodology
                  key={item.id}
                  title={item.title}
                  description={item.description}
                >
                  {item.component}
                </CardMethodology>
              ))
            }
          </dl>
        </div>
      </div>
    </div>
  );
};
