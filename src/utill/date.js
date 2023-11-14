export const getStringDate = (date) => {
  //toISOString 검색
  return date.toISOString().slice(0, 10);
};
