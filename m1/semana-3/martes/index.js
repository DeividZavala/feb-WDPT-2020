/**
 * Con puro replace
 **/

const str = "2h 40min";

const clean = str
  .replace("h", "")
  .replace("min", "")
  .split(" ");

const minutes = clean.reduce((acc, n, index) => {
  if (index === 0) return (acc += parseInt(n) * 60);
  return (acc += parseInt(n));
}, 0);

console.log(minutes);

/***
 * Con regex
 ***/

const str = "2h 40min";

const clean = str.replace(/min|h/g, "").split(" ");

const minutes = clean.reduce((acc, n, index) => {
  if (index === 0) return (acc += parseInt(n) * 60);
  return (acc += parseInt(n));
}, 0);

console.log(minutes);

/**
 * Teniendo el contexto el array original
 **/

const str = "2h 40min";

const clean = str
  .replace("h", "")
  .replace("min", "")
  .split(" ");

const minutes = clean.reduce((acc, n, index, originalArray) => {
  // checamos que sean vario valores para asegurar que usamos la hora
  // hay que agregar mas validaciones para otros casos
  if (index === 0 && originalArray.length > 1) return (acc += parseInt(n) * 60);
  return (acc += parseInt(n));
}, 0);

console.log(minutes);

const convertDuration = str => {
  const clean = str.replace(/min|h/g, "").split(" ");

  return clean.reduce((acc, n, index) => {
    if (index === 0) return (acc += parseInt(n) * 60);
    return (acc += parseInt(n));
  }, 0);
};

const movies = [
  {
    name: "007 otro dia para matar",
    duration: "2h 40min"
  },
  {
    name: "toy story 3",
    duration: "1h 36min"
  }
];

const newMovies = movies.map(m => {
  const duration = convertDuration(m.duration);
  return { ...m, duration: duration };
});

console.log(newMovies);
