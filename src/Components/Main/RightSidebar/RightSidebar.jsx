import Notification from './Notification/Notification';

const RightSidebar = ({ notification }) => {
  return (
    <>
      <div className="bg-slate-50 shadow-md p-1 rounded-l-xl mt-3 max-w-fit absolute right-0 top-14 overflow-y-auto">
        <Notification notification={notification}></Notification>
      </div>
    </>
  );
};
export default RightSidebar;
