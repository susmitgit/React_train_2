import React from "react";
import TodoCheckbox from "./TodoCheckbox";
function Main() {
  const person_fname = "Susmit";
  const person_lname = "Basu";
  let a = 21;
  let greet = "Good morning";

  if (a < 12) {
    greet = "Good Morning";
  } else if (a > 12 && a < 20) {
    greet = "Good afternoon";
  } else {
    greet = "Good night";
  }
  const styles = {
    color: "red",
    fontSize: 34
  };
  return (
    <main className="MainContainer">
      <h1>TODO for {person_fname + " " + person_lname}</h1>
      <h1>TODO for {`${person_fname} ${person_lname}`}</h1>
      <p>{`${greet}`}</p>
      <div style={styles}>
        <TodoCheckbox /> Work{" "}
      </div>
      <div>
        {" "}
        <TodoCheckbox /> Return home{" "}
      </div>
      <div>
        {" "}
        <TodoCheckbox /> Sleep{" "}
      </div>
    </main>
  );
}
export default Main;
