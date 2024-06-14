import Events from '../Events';
import SchoolCalendar from '../SchoolCalendar';
import Holidays from '../Holidays';

const calendarData = [
  {
    su: '29',
    mo: '5',
    tu: '12',
    we: '19',
    th: '26',
    fr: '26',
    sa: '26',
  },
  {
    su: '29',
    mo: '5',
    tu: '12',
    we: '19',
    th: '26',
    fr: '26',
    sa: '26',
  },
  {
    su: '29',
    mo: '5',
    tu: '12',
    we: '19',
    th: '26',
    fr: '26',
    sa: '26',
  },
  {
    su: '29',
    mo: '5',
    tu: '12',
    we: '19',
    th: '26',
    fr: '26',
    sa: '26',
  },
  {
    su: '29',
    mo: '5',
    tu: '12',
    we: '19',
    th: '26',
    fr: '26',
    sa: '26',
  },
];

const eventsdata = [
  {
    event: 'Pool Party',
    classes: 'for class 1st to 8th',
    time: '10:00 am',
  },
  {
    event: 'Sports Day',
    classes: 'for class 1st to 8th',
    time: '10:00 am',
  },
  {
    event: 'Annual Day',
    classes: 'for class 1st to 8th',
    time: '10:00 am',
  },
];

const holidays = [
  { content: 'PTM will be held on 5 May 2024' },
  {
    content: 'There will be a holiday on 8 Oct 2024',
  },
  {
    content: 'There will be a holiday on 8 Oct 2024',
  },
  {
    content: 'There will be a holiday on 8 Oct 2024',
  },
];

// const notices = [
//   {
//     heading: 'Event',
//     content:
//       'Today All the student of class 1st to 8th come to Auditorium at 12:00.',
//   },
//   {
//     heading: 'Exam Schedule',
//     content: 'From 13 April to 20 April the Exam will be start.',
//   },
//   {
//     heading: 'Holiday',
//     content: 'Tomorrow will be a Holiday on the occasion of Holi.',
//   },
// ];

const NotificationOpen = ({ alerts }) => {
  return (
    <>
      {alerts ? (
        <div className="rounded-l-xl bg-sky-600 p-1.5 overflow-y-scroll h-32">
          <div className="text-white px-2 text-sm font-medium">Alerts</div>
          {alerts.map((alert, index) => {
            return (
              <div
                className="text-xs text-white font-medium p-1 py-2 flex"
                key={index}
              >
                <div>
                  <i className="fa-solid fa-triangle-exclamation mr-1"></i>
                </div>
                <div>
                  <div className="flex justify-between">
                    <div className="inline">{alert.name}</div>
                    <div className="inline">06/13/2024</div>
                  </div>
                  <div>{alert.subject}</div>
                  <div>{alert.content}</div>
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        <div className="rounded-l-xl bg-sky-600 p-1.5">
          <div className="text-white px-2 text-sm">No New Notifications</div>
        </div>
      )}
      <SchoolCalendar calendarData={calendarData}></SchoolCalendar>
      <Events eventsdata={eventsdata}></Events>
      <Holidays holidaysdata={holidays}></Holidays>
    </>
  );
};
export default NotificationOpen;
