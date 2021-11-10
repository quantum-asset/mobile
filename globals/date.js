export const options = {
  weekday: 'long',
  year: 'numeric',
  month: 'long',
  day: 'numeric',
};
export const parseDate = (str = '') => {
  const newDate = new Date(str);
  console.log('newDate', newDate);

  console.log('locale', newDate.toDateString('es-ES', options));
  return newDate.toDateString('es-ES', options);
};
