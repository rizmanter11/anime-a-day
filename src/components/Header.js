import React from 'react';
import morningI from "./morning.jpg";
import afternoonI from "./afternoon.jpg";
import eveningI from "./evening.jpg";

export const useDate = () => {
	const locale = 'en';
	const [today, setDate] = React.useState(new Date()); // Save the current date to be able to trigger an update
  
	React.useEffect(() => {
		const timer = setInterval(() => { // Creates an interval which will update the current data every minute
		// This will trigger a rerender every component that uses the useDate hook.
		setDate(new Date());
	  }, 60 * 1000);
	  return () => {
		clearInterval(timer); // Return a funtion to clear the timer so that it will stop being called on unmount
	  }
	}, []);
  
	const day = today.toLocaleDateString(locale, { weekday: 'long' });
	const date = `${day}, ${today.getDate()} ${today.toLocaleDateString(locale, { month: 'long' })}\n\n`;
  
	const hour = today.getHours();

	const wish = `${(hour < 12 && 'Morning') || (hour < 17 && 'Afternoon') || 'Evening'}, `;
  
	const time = today.toLocaleTimeString(locale, { hour: 'numeric', hour12: true, minute: 'numeric' });
  
	return {
	  date,
	  time,
	  wish,
	};
};

function Header() {
  let { date, time, wish } = useDate();

  let backI = morningI;
  let isEvening = (wish === `Evening, `)? true: false;

  if(wish === `Afternoon, `){
	  backI = afternoonI;
  } else if(wish === `Evening, `){
	  backI = eveningI;
  }

  return (
    <header style={{
		backgroundImage: `url(${backI})`
	  }}>
    	<h1>
    	Good&nbsp;
		{wish}
		</h1>

		<div>
			<h3><strong className={isEvening ? 'eveningc':''}>{date}</strong>
			<br />
			{time}
			</h3>
		</div>
    </header>
  )
}

export default Header;
