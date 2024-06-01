import { useState, useEffect } from "react";
function Content() {
    const [time, setTime] = useState(180);

    useEffect(() => {
        const timeId = setTimeout(() => {
            setTime(time- 1);
        },1000)
        return () => {
            clearInterval(timeId);
        }
    }, [time])


  return (
    <div>
        <h1>{time}</h1>
    </div>
  );
}

export default Content;
