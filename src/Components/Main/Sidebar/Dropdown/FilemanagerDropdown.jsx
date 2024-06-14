import { useState } from 'react';

const FilemanagerDropdown = () => {
  const [open, setOpen] = useState(false);
  const toggle = () => setOpen(!open);
  return (
    <>
      {open ? (
        <div className="my-1">
          <div className="text-xs font-medium bg-slate-50 rounded-md p-1 mb-0.5 flex justify-between items-center gap-x-1">
            <div>
              <i className="fa-solid fa-file mr-1"></i>
              File manager
            </div>
            <i onClick={toggle} className="fa-solid fa-caret-down"></i>
          </div>
          <div className="bg-slate-50 rounded-md p-1">
            <ul className="text-left text-xs font-normal">
              <li>
                <i className="fa-solid fa-chevron-right"></i> Calendar
                Information
              </li>
              <li>
                <i className="fa-solid fa-chevron-right"></i> Chat
              </li>
              <li>
                <i className="fa-solid fa-chevron-right"></i> Gallery
              </li>
              <li>
                <i className="fa-solid fa-chevron-right"></i> Documents
              </li>
            </ul>
          </div>
        </div>
      ) : (
        <div className="text-xs font-medium bg-slate-50 rounded-md p-1 mb-1 flex justify-between items-center gap-x-1">
          <div>
            <i className="fa-solid fa-file mr-1"></i>
            File manager
          </div>
          <i onClick={toggle} className="fa-solid fa-caret-down"></i>
        </div>
      )}
    </>
  );
};
export default FilemanagerDropdown;
