const products = [
  {
    price: 20,
    id: 1
  },
  {
    price: 40,
    id: 2
  },
  {
    price: 120,
    id: 3
  }
];

const total = products.reduce((acc, product) => {
  return (acc += product.price);
}, 0);

//console.log(products)

//console.log(total)

const amazon = {
  name: "AmazonBasics Apple Certified Lightning to USB Cable",
  price: 7.99,
  manufacter: "Amazon",
  reviews: [
    {
      user: "Pavel Nedved",
      comments: "It was really usefull, strongly recommended",
      rate: 4
    },
    { user: "Alvaro Trezeguet", comments: "It lasted 2 days", rate: 1 },
    { user: "David Recoba", comments: "Awesome", rate: 5 },
    { user: "Jose Romero", comments: "Good value for money", rate: 4 },
    { user: "Antonio Cano", comments: "It broked really fast", rate: 2 }
  ]
};

const average =
  amazon.reviews.reduce((acc, review) => {
    return (acc += review.rate);
  }, 0) / amazon.reviews.length;

//console.log(average)

const ages = [12, 45, 23, 67, 18, 30, 19, 5, 17, 15, 12, 13];

const morros = ages.filter(age => age < 18);

//console.log(morros)

const filteredProducts = products.filter(product => product.id !== 2);

//console.log(filteredProducts)

function getCount(str) {
  return str
    .replace(/ /g, "")
    .split("")
    .reduce((count, vowel) => {
      if (
        vowel === "a" ||
        vowel === "e" ||
        vowel === "i" ||
        vowel === "o" ||
        vowel === "u"
      )
        count++;
      return count;
    }, 0);
}

function getCount(str) {
  const vowels = str
    .replace(/ /g, "")
    .split("")
    .filter(vowel => ["a", "e", "i", "o", "u"].includes(vowel));
  return vowels.length;
}

const numbers = [22, 23, 99, 68, 1, 0, 9, 112, 223, 64, 18];

numbers.sort((a, b) => {
  console.log(a, b);
  return a - b;
});

console.log(numbers);
