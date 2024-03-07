function formatDateTime(dateTimeString) {
    const date = new Date(dateTimeString);
  
    const hours = date.getHours().toString().padStart(2, '0');
    const minutes = date.getMinutes().toString().padStart(2, '0');
    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0'); // Note: Month starts from 0, so we add 1
    const year = date.getFullYear();
  
    return `${hours}:${minutes} ${day}/${month}/${year}`;
  }
export default formatDateTime