let a_list = [];
let b_list = [1, 2, "hey", 3];

console.log(b_list[0]);
console.log(b_list[1]);
console.log(b_list[2]);
console.log(b_list[3]);

b_list.push("헤이");
console.log(b_list);
console.log(b_list.length);

let a_dict = {};
let b_dict = { name: "Bob", age: 21 };

console.log(b_dict["name"]);
console.log(b_dict["age"]);

b_dict["height"] = 100;
console.log(b_dict);

names = [
  { name: "Bob", age: 20 },
  { name: "Carry", age: 28 },
];

console.log(names[0]["name"]);
console.log(names[1]["name"]);

new_name = { name: "John", age: 7 };
names.push(new_name);
console.log(names);
