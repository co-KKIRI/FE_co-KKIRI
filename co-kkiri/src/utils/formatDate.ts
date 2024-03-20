/**
 * 주어진 날짜 문자열을 기반으로 날짜를 포맷팅합니다. 선택적으로 시간 정보도 포함할 수 있습니다.
 * 날짜는 "YYYY.MM.DD" 형식으로 반환되며, 시간 정보를 포함할 경우 "YYYY.MM.DD HH:MM" 형식으로 반환됩니다.
 *
 * @param {string} createdAt - 포맷팅할 날짜의 문자열입니다.
 * @param {boolean} [withTime=false] - 반환되는 날짜 문자열에 시간 정보를 포함할지 여부를 결정합니다.
 *                                     true일 경우 시간을 포함하여 반환하며,
 *                                     false일 경우 또는 생략했을 때는 날짜만 반환합니다.
 * @returns {string} 포맷팅된 날짜 문자열입니다.
 */
export const formatDate = (createdAt: string, withTime: boolean = false): string => {
  const date = new Date(createdAt);
  const year = date.getUTCFullYear();
  const month = date.getUTCMonth() + 1;
  const day = date.getUTCDate();
  let formattedDate = `${year}.${month}.${day}`;

  if (withTime) {
    const hours = date.getUTCHours().toString().padStart(2, "0");
    const minutes = date.getUTCMinutes().toString().padStart(2, "0");
    formattedDate += ` ${hours}:${minutes}`;
  }

  return formattedDate;
};

/**
 * 주어진 날짜로부터 현재까지의 경과 시간을 계산하여, 그 결과를 문자열 메시지로 반환합니다.
 * 경과 시간은 분 단위, 시간 단위, 혹은 날짜와 시간 포맷(선택적으로 시간 포함)으로 표현됩니다.
 *
 * @param {string} createdDate - 경과 시간을 계산할 기준이 되는 날짜 문자열입니다.
 * @param {boolean} [withTime=false] - 반환되는 날짜 포맷에 시간을 포함할지 여부를 결정합니다.
 *                                     true일 경우, 시간을 포함하여 반환하며,
 *                                     false일 경우 또는 생략했을 때는 날짜만 반환합니다.
 * @returns {string} 경과 시간에 따라 다음 중 하나의 형식으로 반환됩니다:
 *                   - 2분 미만인 경우: "1분 전"
 *                   - 1시간 미만인 경우: "X분 전" (X는 경과 분)
 *                   - 24시간 미만인 경우: "X시간 전" (X는 경과 시간)
 *                   - 24시간 이상인 경우: 날짜 포맷 (`withTime` 매개변수에 따라 시간 포함 여부 결정)
 */
export const createTimePassedMessage = (createdDate: string, withTime: boolean = false) => {
  const now = Number(new Date());
  const targetDate = Number(new Date(createdDate));
  const timeDiff = now - targetDate;

  const SECOND_IN_MILLISECOND = 1000;
  const MINUTE_IN_SECOND = 60;
  const HOUR_IN_MINUTE = 60;

  const MINUTE_IN_MILLISECOND = MINUTE_IN_SECOND * SECOND_IN_MILLISECOND;
  const HOUR_IN_MILLISECOND = HOUR_IN_MINUTE * MINUTE_IN_MILLISECOND;

  const diffMinutes = Math.trunc(timeDiff / MINUTE_IN_MILLISECOND);
  const diffHours = Math.trunc(timeDiff / HOUR_IN_MILLISECOND);

  if (diffMinutes < 2) {
    return "1분 전";
  }
  if (diffMinutes <= 59) {
    return `${diffMinutes}분 전`;
  }
  if (diffMinutes >= 60 && diffHours < 2) {
    return "1시간 전";
  }
  if (diffHours <= 23) {
    return `${diffHours}시간 전`;
  }

  if (diffHours >= 24 && withTime) {
    return formatDate(createdDate, true);
  }
  if (diffHours >= 24 && !withTime) {
    return formatDate(createdDate, false);
  }
};
