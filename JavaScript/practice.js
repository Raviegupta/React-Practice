// promises

const data = [
  {
    name: "ravi",
    profession: "software engineer",
  },
  {
    name: "viru",
    profession: "software engineer",
  },
];

const getData = () => {
  setTimeout(() => {
    let output = "";
    data.forEach((item, index) => {
      output += `<li>${item.name}</li>`;
    });
    document.body.innerHTML = output;
  }, 1000);
};

const insertData = (newData) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      data.push(newData);
      let err = false;
      if (!err) resolve();
      else reject("kuch gadbad h");
    }, 2000);
  });
};
// insertData({ name: "taher", profession: "software engineer" })
//   .then(getData)
//   .catch((err) => console.log(err));


// async await
async function start() {
    await insertData({ name: "taher", profession: "software engineer" })
    getData();
}
start();