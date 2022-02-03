export const CardMethodology = ({ title, description, children }) => {
  return (
    <div className="flex bg-stone-100 bg-opacity-70 shadow-lg shadow-stone-200/40 dark:bg-white dark:bg-opacity-5 dark:shadow dark:shadow-white/5 py-8 md:py-10 px-4 md:px-8 rounded-xl flex-col items-center md:items-start justify-center space-y-5">
      <div className="flex-shrink-0">
        <div className="flex items-center justify-center text-4xl text-white bg-pink-pantone-500 rounded-lg w-16 h-16">
          { children }
        </div>
      </div>
      <div className="text-center md:text-left space-y-3">
        <dt className="text-[1.35rem] font-semibold leading-6 text-stone-800 dark:text-white">
          { title }
        </dt>
        <dd className="text-base md:text-lg dark:text-stone-400 text-gray-500 leading-[1.4rem]">
          { description }
        </dd>
      </div>
    </div>
  );
};
