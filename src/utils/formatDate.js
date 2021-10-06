function supplement(num) {
    return num.toString().padStart(2, 0)
}

function formatDate(timeStamp, showTime = false) {
  const date = new Date(+timeStamp);
  const time = `${date.getFullYear()}-${supplement(date.getMonth() + 1)}-${supplement(date.getDate())}`
  if(showTime) {
    return time + ` ${date.getHours()}:${supplement(date.getMinutes())}:${supplement(date.getSeconds())}`
  }
  return time;
}

export default formatDate;
