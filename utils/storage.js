const getBookedTimes = () => {
	const existingData = localStorage.getItem('formData');
	return existingData ? JSON.parse(existingData) : [];
  };

  export const isTimeBooked = (doctor, date, time) => {
	const bookedTimes = getBookedTimes();
	return bookedTimes.some(
	  (booking) =>
		booking.doctor === doctor &&
		new Date(booking.selectedDate).toDateString() === date.toDateString() &&
		booking.selectedTime === time
	);
  };
