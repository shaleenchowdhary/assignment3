import NotificationOpen from './NotificationOpen';
const alerts = [
  {
    name: 'Himanshu Sharma',
    subject: 'Information Technology',
    content: '+11 Pending Assignments To Be Created',
  },
  {
    name: 'Himanshu Sharma',
    subject: 'Information Technology',
    content: '+11 Pending Assignments To Be Created',
  },
  {
    name: 'Himanshu Sharma',
    subject: 'Information Technology',
    content: '+11 Pending Assignments To Be Created',
  },
];

const Notification = ({ notification }) => {
  return (
    <>
      {notification ? (
        <NotificationOpen
          alerts={alerts}
          notification={notification}
        ></NotificationOpen>
      ) : (
        ''
      )}
    </>
  );
};
export default Notification;
