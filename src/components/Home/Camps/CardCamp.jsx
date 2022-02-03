export const CardCamp = (props) => {
  return (
    <div className={"flex-col col-span-2 border " + (props.disabled ? "border-gray-300 opacity-60" : "border-gray-200") + " shadow-xl dark:border-transparent dark:bg-stone-900 rounded-xl"}>
      <div className="relative flex items-center justify-center w-full bg-gray-200 rounded-b-none dark:bg-stone-700 rounded-xl h-60">
        <img src={props.logo} alt="" className="object-contain w-48 h-48" />
      </div>
      <div className="mx-4 my-6 mb-2">
        <div className="font-medium text-yellow-500">
          {props.tipo}
        </div>
        <dt className="text-xl font-bold leading-6 text-gray-900 dark:text-white">
          {props.nombre}
        </dt>
      </div>
      <div className="flex items-center w-full">
        <div className="flex items-start justify-start px-2 py-4 mx-4 -space-x-2 overflow-hidden">
          {
            props.lista.map((item, index) => <img key={index} className="inline-block object-cover w-10 h-10 rounded-full ring-2 ring-white" src={item} alt="" />)
          }
        </div>
        <div className="flex-col">
          <div className="font-medium text-black dark:text-gray-300">
            Equipo
          </div>
          <div className="text-gray-500">
            {props.lista.length} mentores
          </div>
        </div>
      </div>
      <div className="flex pb-6 mx-4 mt-2 mb-4 space-x-3 text-sm font-medium">
        <div className="flex flex-auto space-x-3">
          <a className={"flex items-center justify-center w-1/2 text-white bg-yellow-500 rounded-md " + (props.disabled ? "opacity-50 pointer-events-none" : "opacity-50 pointer-events-none") + " h-9"} type="submit" rel="noreferrer" target="_blank" href={props.inscripcion}>Inscríbete</a>
          <a className={"flex items-center justify-center w-1/2 border border-gray-300 rounded-md " + (props.disabled ? "opacity-50 pointer-events-none" : "") + " dark:text-gray-300 h-9"} type="button" href={props.informacion}>Información</a>
        </div>
      </div>
    </div>
  );
};
