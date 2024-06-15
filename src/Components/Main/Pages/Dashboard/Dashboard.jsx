import { useState } from 'react';
import StudentAttendance from './Student Attendance/StudentAttendance';
// import Time from './Time Table/Time';
// import ResultAnalysis from './Result Analysis/ResultAnalysis';

const studentdata = [
  {
    no: '1',
    month: 'April',
    present: '0.00%',
    absent: '0.00%',
    halfday: '0.00%',
    leave: '0.00%',
    notdone: '0.00%',
  },
  {
    no: '2',
    month: 'April',
    present: '0.00%',
    absent: '0.00%',
    halfday: '0.00%',
    leave: '0.00%',
    notdone: '0.00%',
  },
  {
    no: '3',
    month: 'April',
    present: '0.00%',
    absent: '0.00%',
    halfday: '0.00%',
    leave: '0.00%',
    notdone: '0.00%',
  },
  {
    no: '4',
    month: 'April',
    present: '0.00%',
    absent: '0.00%',
    halfday: '0.00%',
    leave: '0.00%',
    notdone: '0.00%',
  },
  {
    no: '5',
    month: 'April',
    present: '0.00%',
    absent: '0.00%',
    halfday: '0.00%',
    leave: '0.00%',
    notdone: '0.00%',
  },
  {
    no: '6',
    month: 'April',
    present: '0.00%',
    absent: '0.00%',
    halfday: '0.00%',
    leave: '0.00%',
    notdone: '0.00%',
  },
  {
    no: '7',
    month: 'April',
    present: '0.00%',
    absent: '0.00%',
    halfday: '0.00%',
    leave: '0.00%',
    notdone: '0.00%',
  },
  {
    no: '8',
    month: 'April',
    present: '0.00%',
    absent: '0.00%',
    halfday: '0.00%',
    leave: '0.00%',
    notdone: '0.00%',
  },
];

const Dashboard = () => {
  const [time, setTime] = useState(false);
  const [attendance, setAttendance] = useState(true);
  const [analysis, setAnalysis] = useState(false);
  return (
    <>
      <div className="text-left text-md font-medium tablet:text-xl text-sm">
        Dashboard
      </div>
      <div className="flex justify-between py-2 gap-x-1 tablet:text-lg text-xs text-center">
        <div
          onClick={() => setAttendance(!attendance)}
          className="px-2 py-1  bg-slate-50 rounded-md font-medium"
        >
          <i className="fa-solid fa-graduation-cap"></i> Student Attendance
        </div>
        <div
          onClick={() => setTime(!time)}
          className="px-2 py-1  bg-slate-50 rounded-md font-medium"
        >
          <i className="fa-solid fa-clock"></i> Time Table
        </div>
        <div
          onClick={() => setAnalysis(!analysis)}
          className="px-2 py-1  bg-slate-50 rounded-md font-medium"
        >
          <i className="fa-solid fa-square-poll-vertical"></i> Result Analysis
        </div>
      </div>
      <StudentAttendance studentdata={studentdata}></StudentAttendance>
      {/* {attendance ? (
        <StudentAttendance></StudentAttendance>
      ) : time ? (
        <Time></Time>
      ) : analysis ? (
        <ResultAnalysis></ResultAnalysis>
      ) : (
        <StudentAttendance></StudentAttendance>
      )} */}
    </>
  );
};
export default Dashboard;
