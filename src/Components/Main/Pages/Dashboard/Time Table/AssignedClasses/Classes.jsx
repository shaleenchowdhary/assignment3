function Classes({ classesData }) {
  return (
    <table className="bg-slate-50 pt-2 overflow-x-scroll">
      <thead>
        <tr className="text-center bg-slate-100">
          <td className="border-gray text-xs font-medium border-2">ID</td>
          <td className="border-gray text-xs font-medium border-2">Name</td>
          <td className="border-gray text-xs font-medium border-2">Class</td>
          <td className="border-gray text-xs font-medium border-2">Subject</td>
          <td className="border-gray text-xs font-medium border-2">Profile</td>
        </tr>
      </thead>
      {classesData.map((c, index) => {
        return (
          <tbody key={index}>
            <tr className="text-center">
              <td className="border-gray text-xs font-medium border-2">
                {c.id}
              </td>
              <td className="border-gray border-2 text-xs font-medium">
                {c.name}
              </td>
              <td className="border-gray border-2 text-xs font-medium">
                {c.classAssigned}
              </td>
              <td className="border-gray border-2 text-xs font-medium">
                {c.subject}
              </td>
              <td className="border-gray border-2 text-xs font-medium">
                {c.profile}
              </td>
            </tr>
          </tbody>
        );
      })}
    </table>
  );
}
export default Classes;
