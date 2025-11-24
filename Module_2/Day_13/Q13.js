const id = setInterval(() => {
  console.log("Loading...");
}, 1000);

setTimeout(() => {
  clearInterval(id);
  console.log("Loaded successfully!");
}, 5000);
