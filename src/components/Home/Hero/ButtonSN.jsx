export const ButtonSN = ({ href, children }) => {
  return (
    <a href={href} target='_blank' rel="noreferrer"className="flex items-center justify-center w-16 h-16 font-medium bg-slate-900 bg-opacity-5 hover:bg-opacity-10 lg:h-14 lg:w-14 rounded-xl">
      {children}
    </a>
  );
};
