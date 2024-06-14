import { useState } from 'react';

const StudentDropdown = () => {
  const [open, setOpen] = useState(false);
  const toggle = () => setOpen(!open);
  return (
    <>
      {open ? (
        <div className="my-1">
          <div className="text-xs font-medium bg-slate-50 rounded-md p-1 flex mb-0.5 justify-between items-center gap-x-1">
            <div>
              <i className="fa-solid fa-graduation-cap mr-1"></i>
              Student
            </div>
            <i onClick={toggle} className="fa-solid fa-caret-down"></i>
          </div>
          <div className="bg-slate-50 rounded-md p-1">
            <ul className="text-left text-xs font-normal">
              <li>
                <i className="fa-solid fa-chevron-right"></i> All Students
              </li>
              <li>
                <i className="fa-solid fa-chevron-right"></i> Admission Form
              </li>
              <li>
                <i className="fa-solid fa-chevron-right"></i> Students
                Attendance
              </li>
              <li>
                <i className="fa-solid fa-chevron-right"></i> Student Promotion
              </li>
              <li>
                <i className="fa-solid fa-chevron-right"></i> Students Results
              </li>
              <li>
                <i className="fa-solid fa-chevron-right"></i> Student Leaves
              </li>
              <li>
                <i className="fa-solid fa-chevron-right"></i> Transfer
                Certificate
              </li>
              <li>
                <i className="fa-solid fa-chevron-right"></i> Character
                Certificate
              </li>
              <li>
                <i className="fa-solid fa-chevron-right"></i> Dropout
              </li>
              <li>
                <i className="fa-solid fa-chevron-right"></i> Assigned Roll No
              </li>
            </ul>
          </div>
        </div>
      ) : (
        <div className="text-xs font-medium bg-slate-50 rounded-md p-1 mb-1 flex justify-between items-center gap-x-1">
          <div>
            <i className="fa-solid fa-graduation-cap mr-1"></i>
            Student
          </div>
          <i onClick={toggle} className="fa-solid fa-caret-down"></i>
        </div>
      )}
    </>
  );
};
export default StudentDropdown;
