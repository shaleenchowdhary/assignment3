function StudentAttendance({ studentdata }) {
  return (
    <>
      <div className="bg-slate-50 rounded-lg flex flex-col">
        <div className="flex justify-between items-center bg-slate-300 rounded-lg shadow-md px-2 py-2">
          <div className="text-sm tablet:text-xl font-semibold">Attendance</div>
          <div className="flex text-xs tablet:text-lg ">
            <button className="tablet:px-3 px-1 bg-blue text-white rounded-md mr-2 border-gray border-2 shadow-md">
              Class <i className="fa-solid fa-chevron-down"></i>
            </button>
            <button className="tablet:px-3 px-1 bg-blue text-white rounded-md border-gray border-2 shadow-md">
              Month <i className="fa-solid fa-chevron-down"></i>
            </button>
            <div className="p-1 border-2 border-gray bg-white rounded-lg shadow-md tablet:ml-4 mx-1">
              <img
                src="https://s3-alpha-sig.figma.com/img/7cd7/c84e/2ba3cbcbbb27614486e8cd33d66284e6?Expires=1719187200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ZSegFsC7t3rFdkcVJRqUj-HR6TKMp2mS7spIIcToLRcZULQW7l21K2b-dr7ie18HJmHZWZfZAAh62RmqkaXFF6uU~JS3k1VGdymjUJOnT5FUBfcAZPDMqsG~rhYpBoA86T2Es1iw5NGPKB9sgKSINNsvyzKnufxU8SxmEnol2a1HKYv0kfaQDdnTWeclmkPWD3FvJ8VPGNHN~~BHFbfEFISm8m0Rfg98idlIkf16rFOhlKKThTks8fxUXo2aeIC6DdU3bK4vEH9rrQTpKx3mFORPi64BCRtsM0M5-pX5JG1jlpMGDsiDw~g4181kRgNv45OFzU9EODyw61ykCLSRXA__"
                alt=""
                className="w-5 h-5"
              />
            </div>
            <div className="p-1 border-2 border-gray bg-white rounded-lg shadow-md">
              <img
                src="https://s3-alpha-sig.figma.com/img/4f4e/293b/0efb2c221ad7cbaffe23f17b83af3ea4?Expires=1719187200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=hASm5xKsFjbAn7CrDiN3RFS0EOsHTahrM9grFVN9KwEfKtUeXkqih~11GFMgIY4SqFlJFmaJVxQ4eINak5Czj-wbyH6cmsvdo9xVVyv2LibNr7OPKE6ofNVp1cPYP71U5K5l4MqIUHfkL0A4DPczu1GVuC134awgx-CjdIgkcpy06acJ2o2Q7OhUgGMGB7EzImuWppcujMUlaxRvyzwjSQ7-V9jwKL0E1qHQsODLHML7vdRs35v6SdxEFJ005WXIulktnK-ags3WBW44guB4FuVTlXkPBotgE1oeso7DaiuDYdSF9UeFWn2INU-ZhSHqaQQBPilLcimYU35oawFyvQ__"
                alt=""
                className="w-5 h-5 "
              />
            </div>
          </div>
        </div>
        <div className="flex justify-between items-center px-2 py-2 tablet:text-lg text-xs font-medium text-center">
          <div className="">
            <i className="fa-solid fa-file-excel"></i> Excel Report
          </div>
          <div className="">
            <i className="fa-solid fa-file-lines"></i> PDF Report
          </div>
          <div className="">
            <i className="fa-solid fa-file-csv"></i> Student Attendance
          </div>
          <div>
            <button className="px-3 py-1 bg-blue text-white rounded-md mr-2 text-xs tablet:text-lg">
              Download
            </button>
          </div>
        </div>
        <div className="flex flex-col text-xs tablet:text-lg">
          <table>
            <thead>
              <tr className="text-center border bg-slate-100 font-bold text-xs tablet:text-lg">
                <td className="border-gray border">Sr no</td>
                <td className="border-gray border">Present</td>
                <td className="border-gray border">Absent</td>
                <td className="border-gray border">Halfday</td>
                <td className="border-gray border">Leave</td>
                <td className="border-gray border">Not done</td>
              </tr>
            </thead>
            <tbody>
              {studentdata.map((d, index) => {
                return (
                  <tr
                    key={index}
                    className="text-center border text-xs tablet:text-lg font-medium border-gray "
                  >
                    <td className="font-medium">{d.no}</td>
                    <td className="border">{d.present}</td>
                    <td className="border">{d.absent}</td>
                    <td className="border">{d.halfday}</td>
                    <td className="border">{d.leave}</td>
                    <td className="border">{d.notdone}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
        <div className="flex justify-between items-center text-sm tablet:text-lg p-2">
          <div className="flex justify-center gap-2 items-baseline">
            <i className="fa-solid fa-caret-left"></i>
            <button className="px-1 py-2 border-gray rounded-md border-2 font-semibold">
              1
            </button>
            <button className="px-1 py-2 border-gray rounded-md border-2 font-semibold">
              2
            </button>
            <button className="px-1 py-2 border-gray rounded-md border-2 font-semibold">
              3
            </button>
            <i className="fa-solid fa-caret-right"></i>
          </div>
          <div className="text-sm tablet:text-md font-bold">
            1 of 20 pages (12 items)
          </div>
        </div>
      </div>
    </>
  );
}
export default StudentAttendance;
