function createCounter() {
  let count = 0;
  return {
    increment() {
      count++;
      console.log(`Current count: ${count}`);
    },
    decrement() {
      count--;
      console.log(`Current count: ${count}`);
    },
    getCount() {
      return count;
    }
  };
}

const counterA = createCounter();
counterA.increment();
counterA.increment();
counterA.decrement();

const counterB = createCounter();
counterB.increment();
console.log(counterA.getCount());
console.log(counterB.getCount());
