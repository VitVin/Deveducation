var newset = new Set();
newset.add(21);
newset.add(48);
newset["delete"](21);
console.log(newset.has(48));