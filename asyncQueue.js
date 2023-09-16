class AsyncQueue {
  #queue;
  #running;
  constructor() {
    this.#queue = [];
    this.#running = false;
  }

  async enqueue(fn) {
    this.#queue.push(fn);
    if (!this.#running) {
      await this.#processQueue();
    }
  }

  async #processQueue() {
    if (this.#queue.length) {
      this.#running = true;
      const fn = this.#queue.shift();
      try {
        await fn();
      } catch (error) {
        console.error("An error occured", error);
      }
      this.#running = false;
      await this.#processQueue();
    }
  }
}

const queue = new AsyncQueue();

function simulateAsyncTask(delay, message) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (message === "task 2") {
        reject("Error in task 2");
      } else {
        console.log(message);
        resolve();
      }
    }, delay);
  });
}
async function task1() {
  await simulateAsyncTask(1000, "task 1");
}

async function task2() {
  await simulateAsyncTask(500, "task 2");
}

async function task3() {
  await simulateAsyncTask(100, "task 3");
}
queue.enqueue(task1);
queue.enqueue(task2);
queue.enqueue(task3);

/* 
The purpose of an async queue, like the one implemented in the code examples provided, 
is to manage and control the execution of asynchronous tasks in a sequential and orderly manner.
 Here's why you might use such a queue:

1. **Orderly Execution**: It ensures that asynchronous tasks are executed in the order they are added to the queue. 
    This is important when the order of execution matters, such as when dealing with dependencies or maintaining a specific sequence of operations.

2. **Preventing Concurrency Issues**: It prevents concurrency issues by allowing only one task to run at a time. 
    This can help avoid race conditions or conflicts that might occur when multiple asynchronous tasks run simultaneously.

3. **Resource Management**: It can be used to manage limited resources. For example, if you have a pool of connections, 
    you can use an async queue to ensure that connections are acquired and released in an orderly fashion.

4. **Error Handling**: It provides a centralized place to handle errors that may occur during the execution of asynchronous tasks. 
    In the provided code, errors are caught and logged within the `processQueue` method.

5. **Control Flow**: It allows you to have fine-grained control over the flow of asynchronous operations. 
    You can decide when to start processing the next task, pause the queue, or implement other custom logic.

6. **Throttling and Rate Limiting**: An async queue can be used to implement throttling or rate limiting by controlling how quickly tasks are processed,
     which can be useful when interacting with external APIs or services.

Overall, an async queue is a useful tool for managing the complexity of asynchronous programming in JavaScript and 
ensuring that tasks are executed in a predictable and controlled manner, 
which can be especially important in applications with complex asynchronous workflows.

*/
