import RightSidebar from './RightSidebar/RightSidebar';
import Sidebar from './Sidebar/Sidebar';
import Page from './Pages/Page';

const Main = ({ sidebar, notification }) => {
  return (
    <div className="flex">
      <Sidebar sidebar={sidebar}></Sidebar>
      <RightSidebar notification={notification}></RightSidebar>
      <Page></Page>
    </div>
  );
};
export default Main;
