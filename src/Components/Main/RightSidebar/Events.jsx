const Events = ({ eventsdata }) => {
  return (
    <div className="rounded-l-xl bg-slate-50 p-1.5 mt-0.5 border-2 border-gray">
      <p className="text-md font-medium">Upcoming Events</p>
      {eventsdata.map((e, index) => {
        return (
          <div key={index} className="bg-slate-300 mt-1 p-1 px-2 rounded-lg">
            <div className="flex justify-between">
              <div className="inline text-sm font-medium">{e.event}</div>
              <div className="inline text-sm">{e.time}</div>
            </div>
            <div className="text-xs">* {e.classes}</div>
          </div>
        );
      })}
    </div>
  );
};
export default Events;
