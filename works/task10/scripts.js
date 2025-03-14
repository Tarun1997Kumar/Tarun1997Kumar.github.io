class Stack {
  constructor() {
    this.items = [];
  }
  push(element) {
    this.items.push(element);
    this.displayStack();
  }
  pop() {
    if (this.isEmpty()) {
      alert("Stack is empty");
      return;
    }
    this.items.pop();
    this.displayStack();
  }
  isEmpty() {
    return this.items.length === 0;
  }
  displayStack() {
    const stackContainer = document.getElementById("stack");
    stackContainer.innerHTML = "";
    for (const item of this.items) {
      const div = document.createElement("div");
      div.textContent = item;
      stackContainer.appendChild(div);
    }
  }
}
const stack = new Stack();
function pushToStack() {
  const inputElement = document.getElementById("inputElement");
  const value = inputElement.value;
  if (value) {
    stack.push(value);
    inputElement.value = "";
  }
}
function popFromStack() {
  stack.pop();
}
