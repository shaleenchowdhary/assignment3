import Classes from './AssignedClasses/Classes';
import TimeTable from './TimeTable/TimeTable';
import Assessments from './Assessments/Assessments';
import Birthdays from './Birthdays/Birthdays';
// import { Link } from 'react-router-dom';

const Tabledata = [
  {
    day: 'Mon',
    p1: 'Maths',
    p2: 'Maths',
    p3: 'Maths',
    p4: 'Maths',
    p5: 'Maths',
    p6: 'Maths',
    p7: 'Maths',
    p8: 'Maths',
  },
  {
    day: 'Tue',
    p1: 'Maths',
    p2: 'Maths',
    p3: 'Maths',
    p4: 'Maths',
    p5: 'Maths',
    p6: 'Maths',
    p7: 'Maths',
    p8: 'Maths',
  },
  {
    day: 'Wed',
    p1: 'English',
    p2: 'Maths',
    p3: 'Maths',
    p4: 'Maths',
    p5: 'Maths',
    p6: 'Maths',
    p7: 'Maths',
    p8: 'Maths',
  },
  {
    day: 'Thu',
    p1: 'Maths',
    p2: 'Maths',
    p3: 'Maths',
    p4: 'Maths',
    p5: 'Maths',
    p6: 'Maths',
    p7: 'Maths',
    p8: 'Maths',
  },

  {
    day: 'Fri',
    p1: 'Maths',
    p2: 'English',
    p3: 'Maths',
    p4: 'Maths',
    p5: 'Maths',
    p6: 'Maths',
    p7: 'Maths',
    p8: 'Maths',
  },

  {
    day: 'Sat',
    p1: 'English',
    p2: 'Maths',
    p3: 'Maths',
    p4: 'Maths',
    p5: 'Maths',
    p6: 'Maths',
    p7: 'Maths',
    p8: 'Maths',
  },
];

const classesData = [
  {
    id: '1',
    name: 'student',
    classAssigned: '8th',
    subject: 'Maths, Science',
    profile: 'Class Teacher',
  },
  {
    id: '2',
    name: 'student',
    classAssigned: '8th',
    subject: 'Maths, Science',
    profile: 'Class Teacher',
  },
  {
    id: '3',
    name: 'student',
    classAssigned: '8th',
    subject: 'Maths, Science',
    profile: 'Class Teacher',
  },
  {
    id: '4',
    name: 'student',
    classAssigned: '8th',
    subject: 'Maths, Science',
    profile: 'Class Teacher',
  },
  {
    id: '5',
    name: 'student',
    classAssigned: '8th',
    subject: 'Maths, Science',
    profile: 'Class Teacher',
  },
  {
    id: '6',
    name: 'student',
    classAssigned: '8th',
    subject: 'Maths, Science',
    profile: 'Class Teacher',
  },
];

const assessmentsData = [
  {
    assignedBy: 'Teacher',
    assignedDate: '06/13/2024',
    submissionDate: '06/13/2024',
    assessmentNo: '08',
  },
  {
    assignedBy: 'Teacher',
    assignedDate: '06/13/2024',
    submissionDate: '06/13/2024',
    assessmentNo: '08',
  },
  {
    assignedBy: 'Teacher',
    assignedDate: '06/13/2024',
    submissionDate: '06/13/2024',
    assessmentNo: '08',
  },
  {
    assignedBy: 'Teacher',
    assignedDate: '06/13/2024',
    submissionDate: '06/13/2024',
    assessmentNo: '08',
  },
];

const today = [
  {
    name: 'student',
    class: '8th',
    section: 'A',
    dob: '13/05/2013',
    contact: 'send',
  },
  {
    name: 'student',
    class: '8th',
    section: 'A',
    dob: '13/05/2013',
    contact: 'send',
  },
  {
    name: 'student',
    class: '8th',
    section: 'A',
    dob: '13/05/2013',
    contact: 'send',
  },
  {
    name: 'student',
    class: '8th',
    section: 'A',
    dob: '13/05/2013',
    contact: 'send',
  },
  {
    name: 'student',
    class: '8th',
    section: 'A',
    dob: '13/05/2013',
    contact: 'send',
  },
];
const upcoming = [
  {
    name: 'student',
    class: '8th',
    section: 'A',
    dob: '13/05/2013',
    contact: 'send',
  },
  {
    name: 'student',
    class: '8th',
    section: 'A',
    dob: '13/05/2013',
    contact: 'send',
  },
  {
    name: 'student',
    class: '8th',
    section: 'A',
    dob: '13/05/2013',
    contact: 'send',
  },
  {
    name: 'student',
    class: '8th',
    section: 'A',
    dob: '13/05/2013',
    contact: 'send',
  },
  {
    name: 'student',
    class: '8th',
    section: 'A',
    dob: '13/05/2013',
    contact: 'send',
  },
];

function Time() {
  return (
    <>
      {/* <div className="text-left text-md font-medium">Dashboard</div>
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
      </div> */}
      <div className="flex flex-col bg-slate-50 rounded-lg px-1 pb-1 ">
        <div className="flex justify-between items-center p-2">
          <div className="font-medium">Time Table</div>
          <button className="px-2 py-1 rounded-md bg-slate-300 text-xs">
            Select Class <i className="fa-solid fa-angle-down"></i>
          </button>
        </div>
        <TimeTable tabledata={Tabledata}></TimeTable>
      </div>
      <div className="flex flex-col bg-slate-50 rounded-lg p-4 my-2">
        <div className="mb-1 font-medium">Assigned Classes</div>
        <Classes classesData={classesData}></Classes>
        <div className="flex justify-between items-center">
          <div className="text-xs">Showing 1 to 11 of 200 entries</div>
          <div className="px-2 py-0 rounded-md text-lg">
            <i className="fa-solid fa-circle-chevron-left"></i>
            <i className="fa-solid fa-circle-chevron-right ml-4"></i>
          </div>
        </div>
      </div>
      <div className="flex flex-col bg-slate-50 rounded-lg p-2 mb-2">
        <div className="flex justify-between items-center pb-2">
          <div className="font-medium">Assessments</div>
          <div className="flex">
            <button className="px-2 py-1 rounded-md bg-slate-300 mr-1 text-xs">
              Subject <i className="fa-solid fa-angle-down"></i>
            </button>
            <button className="px-2 py-1 rounded-md bg-slate-300 text-xs">
              Class <i className="fa-solid fa-angle-down"></i>
            </button>
          </div>
        </div>
        <Assessments assessmentsData={assessmentsData}></Assessments>
      </div>
      <div>
        <Birthdays today={today} upcoming={upcoming}></Birthdays>
      </div>
    </>
  );
}
export default Time;
