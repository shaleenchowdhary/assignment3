import { Route, Routes } from 'react-router-dom';
import Dashboard from './Dashboard/Dashboard';
import Student from './Sutdent/Student';
import Teachers from './Teachers/Teachers';
import Parents from './Parents/Parents';
import Account from './Account/Account';
import Transport from './Transport/Transport';

const Page = () => {
  return (
    <div className="p-2 grow">
      <Routes>
        <Route path="/" element={<Dashboard></Dashboard>}></Route>
        <Route path="/student" element={<Student></Student>}></Route>
        <Route path="/teachers" element={<Teachers></Teachers>}></Route>
        <Route path="/parents" element={<Parents></Parents>}></Route>
        <Route path="/account" element={<Account></Account>}></Route>
        <Route path="/transport" element={<Transport></Transport>}></Route>
      </Routes>
    </div>
  );
};
export default Page;
