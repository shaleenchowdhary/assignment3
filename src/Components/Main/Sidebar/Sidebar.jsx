import SidebarClose from './SidebarClose';
import SidebarOpen from './SidebarOpen';

const Sidebar = ({ sidebar }) => {
  return <>{sidebar ? <SidebarOpen></SidebarOpen> : ''}</>;
};
export default Sidebar;
