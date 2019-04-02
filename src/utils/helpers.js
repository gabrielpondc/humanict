
function formatNumber(n) {
  const str = n.toString()
  return str[1] ? str : `0${str}`
}

export function formatTime(date) {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()

  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  const t1 = [year, month, day].map(formatNumber).join('/')
  const t2 = [hour, minute, second].map(formatNumber).join(':')

  return `${t1} ${t2}`
}

export function formatDistance(meter) {
  var dst = '';
  if (parseInt(meter) || meter == 0) {
    if (meter > 999) {
      dst = (meter / 1000).toFixed(1) + ' km';
    } else {
      dst = meter + ' m';
    }
  }
  return dst;
}

export function formatDuration(second) {
  var min = Math.ceil(parseInt(second) / 60); // 总分钟数

  var h = 0;
  var m = 0;

  m = min % 60; // 对总分钟数以60取余，得到不够一小时的分钟数
  h = Math.floor(min / 60); // 除以3600，然后向下取证去掉不够一个小时的分钟数，得到小时

  var res = '';
  h > 0 && (res += h + ' Hour ');
  m > 0 && (res += m + ' min');

  return res || '<1Min';
}


/**
 * @description 获取站点名称（公交、地铁、高铁、动车、轻轨等...）
 */
export function formatStationName(name) {
  return name;
};

/**
 * 从公交数据的segments中，取出格式化（取出路线方向）后的公交路线数据
 */
export function formatTransports(segments) {
  const trps = []
  for (let j = 0, L = segments.length; j < L; j++) {
    const arr = []
    const segment = segments[j];

    if (segment.bus && segment.bus.buslines && segment.bus.buslines.length) { // 公交、地铁，每个片段里都可能有多种线路，所以提供的数据是一个数组
      let buslines = segment.bus.buslines;
      for (let i = 0, Li = buslines.length; i < Li; i++) {
        let name = buslines[i].name;
        arr.push(formatStationName(name));
      }

      arr.length && (trps.push(arr));
    } else if (segment.railway && segment.railway.name) { // 火车、高铁、动车，提供的数据是一个json对象，也就是只有一条线路
      trps.push([segment.railway.name]);
    }
  }

  return trps
}