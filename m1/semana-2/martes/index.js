const suma = (a,b) => {
    const result = a + b;
    return result
  }
  
  const arr = [1,2,3,4,5]
  const obj = {
    name: "David",
    age: 30,
    parents: [
      {name: "susana", age: 42}, {name:"marcelino", age: 50}
      ],
    birthday: "10-08-1997",
    sayHay: function (){
      console.log("Hola morrooooos!")
    }
  }
  
  //console.log(obj.parents[0].name)
  
  const key = "parents"
  
  //console.log(obj[key][0].name)
  
  obj.pet = "panzer"
  
  delete obj.sayHay
  
  //console.log(obj)
  
  let david = {...obj, sayHi: "Holaa", other_key: "otra llavee"};
  
  obj.name = "foggy";
  
  const numbers = [...arr, 6,7,8,9]
  
  //console.log("sayHi" in obj)
  
  const keys = Object.values(david)
  
  //console.log(keys)
  
  /*for(let panchita in david){
    console.log(panchita)
  }*/
  
  const students = [
    { name: "Bob", age: 17 },
  
    { 
      name: "Susy", 
      age: 18,
      group: {
        id: "2",
        students_number: 30,
        teacher: [ {name:"el davic"} ]
      }  
    },
  
    { name: "Ted", age: 18 },
    { 
      name: "Sarah", 
      age: 20, 
      group: {
        id: "2",
        students_number: 30,
        teacher: [ {name:"el foggy"} ]
      } 
    },
    { name: "Bill", age: 19 }
  ];
  
  //console.log(students[1].group.teacher[0].name)
  
  
  const names = [
    "Bob", "Susy", "Ted",
    "Lilly", "Sarah", "Bill",
    "Thomas", "Barry", "Alex"
  ]
  
  //console.log(names[2][1])
  
  
  
  const index = Math.floor(Math.random() * (names.length -1))
  console.log(names[index])
  
  
  