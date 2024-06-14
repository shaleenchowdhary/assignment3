import { Link, Routes, Route } from 'react-router-dom';
import Time from './Time Table/Time';

const Dashboard = () => {
  return (
    <>
      <div className="text-left text-md font-medium">Dashboard</div>
      <div className="flex justify-between py-2 gap-x-1">
        <Link className="px-2 py-1  bg-slate-50 rounded-sm text-sm font-medium">
          <i className="fa-solid fa-graduation-cap"></i> Student Attendance
        </Link>
        <Link className="px-2 py-1  bg-slate-50 rounded-sm text-sm font-medium">
          <i className="fa-solid fa-clock"></i> Time Table
        </Link>
        <Link className="px-2 py-1  bg-slate-50 rounded-sm text-sm font-medium">
          <i className="fa-solid fa-square-poll-vertical"></i> Result Analysis
        </Link>
      </div>
      <Routes>
        <Route path="/time-table" element={<Time></Time>}></Route>
        <Route path="/time-table" element={<Time></Time>}></Route>
        <Route path="/time-table" element={<Time></Time>}></Route>
      </Routes>
    </>
  );
};
export default Dashboard;
