function TimeTable({ tabledata }) {
  return (
    <table className="bg-slate-50">
      <thead>
        <tr className="text-center border bg-slate-100">
          <td className="border-gray text-xs font-medium border">Day</td>
          <td className="border-gray text-xs font-medium border">P1</td>
          <td className="border-gray text-xs font-medium border">P2</td>
          <td className="border-gray text-xs font-medium border">P3</td>
          <td className="border-gray text-xs font-medium border">P4</td>
          <td>-</td>
          <td className="border-gray text-xs font-medium border">P5</td>
          <td className="border-gray text-xs font-medium border">P6</td>
          <td className="border-gray text-xs font-medium border">P7</td>
          <td className="border-gray text-xs font-medium border">P8</td>
        </tr>
      </thead>
      <tbody>
        {tabledata.map((d, index) => {
          return (
            <tr key={index} className="text-center border">
              <td className="border-gray text-xs font-medium border">
                {d.day}
              </td>
              <td className="border-gray text-xs font-medium border">{d.p1}</td>
              <td className="border-gray text-xs font-medium border">{d.p2}</td>
              <td className="border-gray text-xs font-medium border">{d.p3}</td>
              <td className="border-gray text-xs font-medium border">{d.p4}</td>
              <td>-</td>
              <td className="border-gray text-xs font-medium border">{d.p5}</td>
              <td className="border-gray text-xs font-medium border">{d.p6}</td>
              <td className="border-gray text-xs font-medium border">{d.p7}</td>
              <td className="border-gray text-xs font-medium border">{d.p8}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
export default TimeTable;
