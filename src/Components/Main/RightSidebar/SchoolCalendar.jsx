const SchoolCalendar = ({ calendarData }) => {
  return (
    <div className="rounded-l-xl bg-slate-50 p-1.5 mt-0.5 border-2 border-gray">
      <div className="flex justify-between items-center gap-x-1">
        <p className="text-sm font-medium">School Calendar</p>
        <button className="text-white flex gap-x-1 items-baseline rounded-md bg-slate-700 p-1 text-xs">
          <i className="fa-regular fa-calendar-days"></i>
          January 2024
          <i
            className="fa-solid fa-chevron-down"
            onClick={() => console.log('Calendar dropdown clicked')}
          ></i>
        </button>
      </div>
      <table className="w-full my-1">
        <thead>
          <tr className="text-center">
            <td className="text-xs font-medium text-red-500">SUN</td>
            <td className="text-xs font-medium">MON</td>
            <td className="text-xs font-medium">TUE</td>
            <td className="text-xs font-medium">WED</td>
            <td className="text-xs font-medium">THU</td>
            <td className="text-xs font-medium">FRI</td>
            <td className="text-xs font-medium">SAT</td>
          </tr>
          {calendarData.map((day, index) => {
            return (
              <tr key={index} className="text-center text-xs font-medium">
                <td>{day.su}</td>
                <td>{day.mo}</td>
                <td>{day.tu}</td>
                <td>{day.we}</td>
                <td>{day.th}</td>
                <td>{day.fr}</td>
                <td>{day.sa}</td>
              </tr>
            );
          })}
        </thead>
      </table>
    </div>
  );
};
export default SchoolCalendar;
