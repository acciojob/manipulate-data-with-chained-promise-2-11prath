//your JS code here. If required.
const output = document.getElementById("output");

// Initial promise that resolves after 3 seconds with the array
function getArray() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([1, 2, 3, 4]);
    }, 3000);
  });
}

// Start chain immediately when page loads
getArray()
  .then((arr) => {
    // First transformation: filter even numbers
    return new Promise((resolve) => {
      setTimeout(() => {
        const evens = arr.filter((n) => n % 2 === 0);
        output.textContent = evens.join(","); // Show [2, 4]
        resolve(evens);
      }, 1000);
    });
  })
  .then((evens) => {
    // Second transformation: multiply by 2
    return new Promise((resolve) => {
      setTimeout(() => {
        const doubled = evens.map((n) => n * 2);
        output.textContent = doubled.join(","); // Show [4, 8]
        resolve(doubled);
      }, 2000);
    });
  })
  .catch((err) => {
    console.error(err);
  });
