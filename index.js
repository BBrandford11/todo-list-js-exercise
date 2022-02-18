// Arrays to keep track of each task's state
// const taskTitles = [];
// const taskComplete = [];
// const taskDecriptions = [];

function newTask(title, description) {
  const task = {
    title: title,
    description: description,
    complete: false,
    logState: function () {
      console.log(
        `${this.title} has${this.complete ? " " : " not "}been completed`
      );
    },
    completeTask: function () {
      this.complete = true;
    },
  };
  return task;
}

const task1 = newTask(
  "Clean Cat Litter",
  "Take all the 💩 out of the litter box"
);
const task2 = newTask("Do Laundry", "😨");
const tasks = [task1, task2];

task1.logState();
task1.completeTask();
task1.logState();
