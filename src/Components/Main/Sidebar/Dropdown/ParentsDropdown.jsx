import { useState } from 'react';

const ParentsDropdown = () => {
  const [open, setOpen] = useState(false);
  const toggle = () => setOpen(!open);
  return (
    <>
      {open ? (
        <div className="my-1">
          <div className="text-xs font-medium bg-slate-50 rounded-md p-1 mb-0.5 flex justify-between items-center gap-x-1">
            <div>
              <i className="fa-solid fa-hands-holding-child mr-1"></i>
              Parents
            </div>
            <i onClick={toggle} className="fa-solid fa-caret-down"></i>
          </div>
          <div className="bg-slate-50 rounded-md p-1">
            <ul className="text-left text-xs font-normal">
              <li>
                <i className="fa-solid fa-chevron-right"></i> All Parents
              </li>
              <li>
                <i className="fa-solid fa-chevron-right"></i> Add New Parents
              </li>
            </ul>
          </div>
        </div>
      ) : (
        <div className="text-xs font-medium bg-slate-50 rounded-md p-1 mb-1 flex justify-between items-center gap-x-1">
          <div>
            <i className="fa-solid fa-hands-holding-child mr-1"></i>
            Parents
          </div>
          <i onClick={toggle} className="fa-solid fa-caret-down"></i>
        </div>
      )}
    </>
  );
};
export default ParentsDropdown;
