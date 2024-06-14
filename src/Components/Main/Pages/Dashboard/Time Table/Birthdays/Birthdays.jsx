const Birthdays = ({ today, upcoming }) => {
  return (
    <div className="flex flex-col bg-slate-50 rounded-lg p-2">
      <div className="flex justify-between items-center pb-2">
        <div className="font-medium">Today Birthdays</div>
        <div className="flex">
          <button className="px-2 py-1 rounded-md bg-slate-300 mr-1 text-xs">
            Student
          </button>
          <button className="px-2 py-1 rounded-md bg-slate-300 text-xs">
            Staff
          </button>
        </div>
      </div>
      <table className="text-center">
        <thead>
          <tr className="text-center border-b bg-slate-100">
            <td className="border-gray text-xs font-medium">Name</td>
            <td className="border-gray text-xs font-medium">Class</td>
            <td className="border-gray text-xs font-medium">Section</td>
            <td className="border-gray text-xs font-medium">Date of Birth</td>
            <td className="border-gray text-xs font-medium">Send message</td>
          </tr>
        </thead>
        <tbody>
          {upcoming.map((data, index) => {
            return (
              <tr key={index} className="text-xs border-b">
                <td>{data.name}</td>
                <td>{data.class}</td>
                <td>{data.section}</td>
                <td>{data.dob}</td>
                <td>
                  {data.contact} <i className="fa-solid fa-envelope"></i>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <div className="font-medium py-2">Upcoming Birthdays</div>
      <table className="text-center">
        <thead>
          <tr className="text-center border-b bg-slate-100">
            <td className="border-gray text-xs font-medium">Name</td>
            <td className="border-gray text-xs font-medium">Class</td>
            <td className="border-gray text-xs font-medium">Section</td>
            <td className="border-gray text-xs font-medium">Date of Birth</td>
            <td className="border-gray text-xs font-medium">Send message</td>
          </tr>
        </thead>
        <tbody>
          {today.map((data, index) => {
            return (
              <tr key={index} className="text-xs border-b">
                <td>{data.name}</td>
                <td>{data.class}</td>
                <td>{data.section}</td>
                <td>{data.dob}</td>
                <td>
                  {data.contact} <i className="fa-solid fa-envelope"></i>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
export default Birthdays;
