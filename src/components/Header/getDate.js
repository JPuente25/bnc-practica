const weekDays = ['Domingo',
'LUNES',
'MARTES',
'MIERCOLES',
'JUEVES',
'VIERNES',
'SABADO']

const fillDate = (value) => (
   (value.length < 2) 
      ? `0${value}`
      : value
);

const getDate = () => {
   const date = new Date();
   const dayOfWeek = weekDays[date.getDay()];
   const day = fillDate(date.getDate().toString());
   const month = fillDate((date.getMonth() + 1).toString());
   const year = date.getFullYear().toString();
   const fullDate = `${dayOfWeek}, ${day}/${month}/${year}`;

   return { fullDate, year };
}

export { getDate };