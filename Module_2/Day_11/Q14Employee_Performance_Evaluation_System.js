function evaluateEmployees(employees) {
  const performanceOrder = { "Excellent": 3, "Good": 2, "Needs Improvement": 1 };

  return employees
    .filter(e => e.tasksCompleted > 5)
    .map(e => {
      let performance = "";
      if (e.rating > 4.5) performance = "Excellent";
      else if (e.rating >= 3) performance = "Good";
      else performance = "Needs Improvement";

      return { name: e.name, performance };
    })
    .sort((a, b) => performanceOrder[b.performance] - performanceOrder[a.performance]);
}

const employees = [
  { name: "Alice", tasksCompleted: 8, rating: 4.7 },
  { name: "Bob", tasksCompleted: 4, rating: 4.0 },
  { name: "Charlie", tasksCompleted: 6, rating: 3.5 },
  { name: "David", tasksCompleted: 10, rating: 4.9 },
  { name: "Eve", tasksCompleted: 7, rating: 2.8 }
];

console.log(evaluateEmployees(employees));
