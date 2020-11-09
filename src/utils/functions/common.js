export const generateIds = ((arr, checkNested) => arr.map((obj, id) => {
  const checkNestedArrays = obj => Object.keys(obj).find(key => Array.isArray(obj[key]) && !Array.isArray(obj[key][0]) && typeof obj[key][0] === 'object')

  if (checkNested) {
    const index = checkNestedArrays(obj)
    if (index !== undefined) obj[index] = generateIds(obj[index])
  }

  return ({...obj, id})
}))

export const parseDate = (dateDirty) => {
  let dateBuilded = new Date(dateDirty), // * 1000
    day = dateBuilded.getDate(),
    month = dateBuilded.getMonth() + 1,
    year = dateBuilded.getFullYear();

  day = day < 10 ? `0${day}` : day;
  month = month < 10 ? `0${month}` : month;

  return `${day}/${month}/${year}`;
}
