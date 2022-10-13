export const convertDate = (dateString) => {
    let [date, time] = dateString.split('T');
    let [year, month, day] = date.split('-');
    let [hours, minutes, seconds] = time.split(':');
    let monthNames = [undefined, 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

    return `${day} ${monthNames[(Number(month))]} ${hours}:${minutes}`
};