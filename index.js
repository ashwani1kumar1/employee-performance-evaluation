const employees = [
  { name: "Ashwani", tasksCompleted: 8, rating: 4.7 },
  { name: "Bill", tasksCompleted: 4, rating: 4.0 },
  { name: "Charles", tasksCompleted: 6, rating: 3.5 },
  { name: "Damodar", tasksCompleted: 10, rating: 4.9 },
  { name: "Evans", tasksCompleted: 7, rating: 2.8 }
];

const performancePriority = {
  "Excellent": 3,
  "Good": 2,
  "Needs Improvement": 1
};

const result = employees
  .filter(emp => emp.tasksCompleted > 5)
  .map(emp => {
    let performance = "";
    if (emp.rating > 4.5) performance = "Excellent";
    else if (emp.rating >= 3 && emp.rating <= 4.5) performance = "Good";
    else performance = "Needs Improvement";
    return { name: emp.name, performance };
  })
  .sort((a, b) => performancePriority[b.performance] - performancePriority[a.performance]);

console.log(result);

