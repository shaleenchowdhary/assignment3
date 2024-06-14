const Assessments = ({ assessmentsData }) => {
  return (
    <table className="bg-slate-50 pt-2 overflow-x-scroll text-center">
      <thead>
        <tr className="text-center border bg-slate-100">
          <td className="text-xs font-medium text-nowrap">Assigned By</td>
          <td className="text-xs font-medium text-nowrap">Assigned Date</td>
          <td className="text-xs font-medium text-nowrap">Submissiona Date</td>
          <td className="text-xs font-medium text-nowrap">Assignment no.</td>
        </tr>
      </thead>
      <tbody>
        {assessmentsData.map((a, index) => {
          return (
            <tr key={index}>
              <td className="text-xs font-medium text-nowrap">
                {a.assignedBy}
              </td>
              <td className="text-xs font-medium text-nowrap">
                {a.assignedDate}
              </td>
              <td className="text-xs font-medium text-nowrap">
                {a.submissionDate}
              </td>
              <td className="text-xs font-medium text-nowrap">
                {a.assessmentNo}
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};
export default Assessments;
