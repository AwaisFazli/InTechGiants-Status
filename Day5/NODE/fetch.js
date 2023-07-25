const apiUrl = "https://jsonplaceholder.typicode.com/posts";

// Function to fetch data from the API using promises
const fetchData = (url) => {
  return new Promise((resolve, reject) => {
    fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        resolve(data);
      })
      .catch((error) => {
        reject(error);
      });
  });
};

fetchData(apiUrl)
  .then((data) => {
    console.log("Fetched JSON data:", data);
  })
  .catch((error) => {
    console.error("Error fetching data:", error);
  });
