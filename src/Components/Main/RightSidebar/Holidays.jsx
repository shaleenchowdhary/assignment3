const Holidays = ({ holidaysdata }) => {
  return (
    <div className="rounded-l-xl bg-slate-50 p-1.5 mt-0.5 border-2 border-gray">
      <p className="text-md font-medium">Holidays</p>
      {holidaysdata.map((e, index) => {
        return (
          <div key={index} className="bg-slate-300 mt-1 p-1 px-2 rounded-lg">
            <div className="text-xs">
              <i className="fa-regular fa-face-smile"></i> {e.content}
            </div>
          </div>
        );
      })}
    </div>
  );
};
export default Holidays;
