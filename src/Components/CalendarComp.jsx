import { useState } from "react";
import Calendar from "react-calendar";
import "../App.css";

function App() {
  const [date, setDate] = useState(new Date());
  const [showTime, setShowTime] = useState(false);

  return (
    <div className="wrapper">
      <div>
        <Calendar
          onChange={setDate}
          value={date}
          onClickDay={() => setShowTime(true)}
        />
      </div>

      {date.length > 0 ? (
        <p>
          <span>Start:</span>
          {date[0].toDateString()}
          &nbsp; &nbsp;
          <span>End:</span>
          {date[1].toDateString()}
        </p>
      ) : (
        <p>
          <span>Default selected date:</span>
          {date.toDateString()}
        </p>
      )}
    </div>
  );
}

export default App;
