export default {
	/**
￼     * Add minutes to the current date
￼     * @param minutes 
￼     * @returns The new date object
￼     */
	addMinutes(minutes) {
		const date = new Date();
		date.setMinutes(date.getMinutes() + minutes);
		return date;
	},
	/**
￼     * Add days to the current date
￼     * @param minutes 
￼     * @returns The new date object
￼     */
	addDays(days) {
		const date = new Date();
		date.setDate(date.getDate() + days);
	},
	/**
￼     * Compare the difference between two dates
￼     * @param minutes 
￼     * @returns boolean (true if date has passed otherwise false)
￼     */
	expiredDate(compareDate, currentDate = new Date()) {
		let date1 = currentDate.getDate();
		let date2 = new Date(compareDate.getDate()).getDate();
		if (date1 > date2) {
			return true;
		} else {
			return false;
		}
	},
};