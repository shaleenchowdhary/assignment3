import logo from '../../assets/icons/logo.png';
import user from '../../assets/icons/user.png';

function Navbar({ toggleSidebar, toggleNotification }) {
  return (
    <>
      <nav className="w-full bg-slate-50 shadow-md px-2 flex items-center justify-between rounded-b-lg">
        <button onClick={toggleSidebar} className="fa-solid fa-bars"></button>
        <div className="flex items-center">
          <img src={logo} alt="Logo" className="w-16" />
          <span className="font-medium sm:text-sm text-xs">
            BDS International School
          </span>
        </div>
        <div className="hidden tablet:flex tablet:grow tablet:mx-8">
          <input
            type="text"
            placeholder="Search here..."
            className="w-full px-4 py-2 border-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
          />
        </div>
        <div className="flex items-center">
          <button onClick={toggleNotification} className="relative mx-3">
            <span className="absolute top-0 right-0 block h-2 w-2 rounded-full ring-2 ring-white bg-red-400"></span>
            <svg
              className="h-6 w-6 text-gray-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
              />
            </svg>
          </button>
          <div className="flex items-center gap-1">
            <img src={user} alt="User Profile" className="h-8 w-8" />
            <div className="font-normal text-xs text-gray-600">
              <div>Himanshu Sharma</div>
              <div>Admin</div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
