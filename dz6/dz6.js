//1

const countProps = function (obj) {
  return Object.keys(obj).length;
};

console.log(countProps({}));
console.log(countProps({ name: "Mango", age: 2 }));
console.log(countProps({ mail: "poly@mail.com", isOnline: true, score: 500 }));

//2

const findBestEmployee = function (employees) {
  let maxTasks = 0;
  let bestEmployee = "";

  for (const employee in employees) {
    const tasksCompleted = employees[employee];
    if (tasksCompleted > maxTasks) {
      maxTasks = tasksCompleted;
      bestEmployee = employee;
    }
  }

  return bestEmployee;
};

console.log(
  findBestEmployee({
    ann: 29,
    david: 35,
    helen: 1,
    lorence: 99,
  })
);

console.log(
  findBestEmployee({
    poly: 12,
    mango: 17,
    ajax: 4,
  })
);

console.log(
  findBestEmployee({
    lux: 147,
    david: 21,
    kiwi: 19,
    chelsy: 38,
  })
);
