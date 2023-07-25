function calculator(a, b) {
  return new Promise((resolve, reject) => {
    const add = a + b;

    if (add > 10) {
      resolve("Addtion Done");
    } else {
      reject("Addition reject");
    }
  });
}

calculator(5, 2)
  .then((res) => {
    console.log(res);
  })
  .catch((error) => {
    console.log(error);
  });
