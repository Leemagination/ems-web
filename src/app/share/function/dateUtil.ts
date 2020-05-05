export function formatDate(timestamp = Date.now(), format = 'yyyy-MM-dd HH:mm:ss') {//将时间格式化为'yyyy-MM-dd HH:mm:ss'
  if (isNaN(timestamp)) {
    return '';
  }

  if (format.length < 4 || 'yyyy-MM-dd HH:mm:ss'.indexOf(format) !== 0) {
    return '';
  }

  const date = new Date(Number(timestamp));

  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();
  const hour = date.getHours();
  const minute = date.getMinutes();
  const second = date.getSeconds();

  return format.replace('yyyy', String(year))
    .replace('MM', month > 9 ? String(month) : `0${month}`)
    .replace('dd', day > 9 ? String(day) : `0${day}`)
    .replace('HH', hour > 9 ? String(hour) : `0${hour}`)
    .replace('mm', minute > 9 ? String(minute) : `0${minute}`)
    .replace('ss', second > 9 ? String(second) : `0${second}`);
}

