import { Link } from 'react-router-dom';
import AccountDropdown from './Dropdown/AccountDropdown';
import ClassDropdown from './Dropdown/ClassDropdown';
import FilemanagerDropdown from './Dropdown/FilemanagerDropdown';
import LibraryDropdown from './Dropdown/LibraryDropdown';
import ParentsDropdown from './Dropdown/ParentsDropdown';
import StudentDropdown from './Dropdown/StudentDropdown';
import TeacherDropdown from './Dropdown/TeacherDropdown';
import TransportDropdown from './Dropdown/TransportDropdown';

function SidebarOpen() {
  return (
    <div className="bg-slate-50 shadow-md p-1 rounded-r-xl mt-3 max-w-fit absolute">
      <div className="rounded-xl bg-blue p-1.5 pointer">
        <Link to="/">
          <div className="text-xs tablet:text-md font-medium bg-slate-50 rounded-md p-1 mb-1 flex justify-start items-center gap-x-1">
            <i className="fa-solid fa-house"></i>
            Dashboard
          </div>
        </Link>

        <Link to="/student">
          <StudentDropdown></StudentDropdown>
        </Link>

        <Link to="/teachers">
          <TeacherDropdown></TeacherDropdown>
        </Link>

        <Link to="/parents">
          <ParentsDropdown></ParentsDropdown>
        </Link>

        <Link to="/account">
          <AccountDropdown></AccountDropdown>
        </Link>

        <Link to="transport">
          <TransportDropdown></TransportDropdown>
        </Link>
        <FilemanagerDropdown></FilemanagerDropdown>
        <LibraryDropdown></LibraryDropdown>
        <ClassDropdown></ClassDropdown>
        <div className="text-xs font-medium bg-slate-50 rounded-md p-1 mb-1 flex justify-start items-center gap-x-1">
          <i className="fa-solid fa-clipboard "></i>
          Exam
        </div>
        <div className="text-xs font-medium bg-slate-50 rounded-md p-1 px-1 mb-1 flex justify-start items-center gap-x-1">
          <i className="fa-regular fa-newspaper "></i>
          Notice
        </div>
        <div className="text-xs font-medium bg-slate-50 rounded-md p-1 px-1 flex justify-start items-center gap-x-1">
          <i className="fa-solid fa-message "></i>
          Message
        </div>
      </div>

      <div className="text-xs font-medium bg-red-300 rounded-md p-1 px-1 flex justify-center items-center mt-1 gap-x-1">
        Logout <i className="fa-solid fa-arrow-right-from-bracket"></i>
      </div>
    </div>
  );
}

export default SidebarOpen;
