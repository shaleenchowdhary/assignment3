import { useState } from 'react';
import Navbar from './Header/Navbar';
import Main from './Main/Main';

const Screen = () => {
  const [sidebar, setSidebar] = useState(false);
  const toggleSidebar = () => setSidebar(!sidebar);

  const [notification, setNotification] = useState(false);
  const toggleNotification = () => setNotification(!notification);

  return (
    <>
      <Navbar
        toggleSidebar={toggleSidebar}
        toggleNotification={toggleNotification}
      ></Navbar>
      <Main sidebar={sidebar} notification={notification}></Main>
    </>
  );
};
export default Screen;
