const NoticeBoard = ({ notices }) => {
  return (
    <div className="rounded-l-xl bg-slate-50 mt-0.5 border-2 border-gray p-1.5 max-w-fit">
      <div className="text-md max-w-fit">Notice</div>
      {notices.map((alert, index) => {
        return (
          <div className="text-xs p-1 py-2 w-1/2" key={index}>
            <div className="font-medium inline">{alert.heading}</div>
            <div className="w-full">{alert.content}</div>
          </div>
        );
      })}
    </div>
  );
};
export default NoticeBoard;
