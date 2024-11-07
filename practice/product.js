const products = [
    {
      id: 2345,
      productImg: "./img/122.png",
      name: "watch",
      brandName: "Swatch",
      price: 220,
      inStock: true,
      colors: ["yellow", "orange"],
    },
    {
      id: 233,
      productImg: "./img/122.png",
      name: "LAPTOP",
      brandName: "Apple",
      price: 11230,
      inStock: true,
      colors: ["black"],
    },
    {
      id: 1234,
      productImg: "./img/122.png",
      name: "mobile",
      brandName: "Samsung",
      price: 333,
      inStock: false,
      colors: ["white", "black"],
    },
  ];
  // for (let i = 0; i < products.length; i++) {
  //   let product = products[i];
  //   console.log(
  //     `
  //     <img src=${product.img} id=${product.id}/>
  //        <h1> ${product.name}</h1> will cost you ${product.price}€
  //         is from ${product.brandName}
  //         Now availble for sell :`,
  //     product.inStock ? "yes" : "no",
  //     `
  //     `,
  //     product.colors.length > 1 ? product.colors : "ONE color now",
  //     `
  //      -----------------------`
  //   );
  // }
  const userNamesArrayThatNeededForDB = ["Nancy", "Ali", "Olga"];
  let names = userNamesArrayThatNeededForDB; // Refrence
  //names[0] = "Hadi";
  console.log(names);
  const userInfoThatUsedinDB = {
    userName: "Samer",
    age: 22,
    colors: ["red", "pink"],
  };
  let userObj = userInfoThatUsedinDB; // Refrence
  userObj.age = 55;
  console.log(userInfoThatUsedinDB);
  const newUserInfo = [...userNamesArrayThatNeededForDB]; // clone
  console.log(newUserInfo);
  newUserInfo.push("SomeOne");
  console.log(newUserInfo);
  const newObj = { ...userInfoThatUsedinDB }; // clone
  console.log(newObj);
  newObj.colors[0] = "Yellow";
  console.log(userInfoThatUsedinDB);
  // deep clone