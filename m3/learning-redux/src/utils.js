export const normalizeData = (data) =>
  data.reduce((acc, todo) => ({ ...acc, [todo.id]: todo }), {});

export const denormalizeData = (data) => Object.values(data);

// {"1": {id:1,body:"test"}, "2": {id:2, body:"otro todo"}} ==> Object.values() ==> [{id:1,body:"test"}, {id:2, body:"otro todo"}]

// [{id:1,body:"test"}, {id:2, body:"otro todo"}] ==> normalizeData() ==> {"1": {id:1,body:"test"}, "2": {id:2, body:"otro todo"}}

// antes
// data = [{ id: 1, body: "una todo" }, { id: 1, body: "una todo" }, { id: 1, body: "una todo" }];

// [...data, newTodo] [newTodo, ...data]
// despues
// data = {
//   1: { id: 1, body: "una todo" },
// };

// {...data, "1": newTodo}
