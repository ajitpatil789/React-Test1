function calculateAverage(marks) {
  let sum = 0;
  for (let i = 0; i < marks.length; i++) {
    sum += Number(marks[i]);
  }
  return (sum / marks.length).toFixed(2);
}

const marks = [80, 75, 90, 85, 70, 95, 88];
console.log("Average:", calculateAverage(marks));
