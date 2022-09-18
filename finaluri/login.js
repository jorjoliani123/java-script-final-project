document.getElementById("login").addEventListener("submit", function (event) {
  event.preventDefault();

  let checkbox = document.getElementById("saveuser");
  if (checkbox.checked) {
    let username = document.getElementById("username").value;
    Cookies.set("saveusername", username);
  } else {
    Cookies.remove("saveusername");
  }
  event.target.submit();
});

 let saveUsersUsername = Cookies.get("saveusername");

if (saveUsersUsername) {
  document.getElementById("username").value = saveUsersUsername;
  document.getElementById("saveuser").checked = true;
}

this keyword

let user = {
  name: "levani",
  printName: function () {
    console.log(this.name);
  },
};

let user2 = {
  name: "giorgi",
};

let user3 = {
  name: "anna",
};

let printUserName = user.printName.bind(user2);
printUserName();

user.printName.apply(user3, ["hello1", "hello2", "hello3"]); - this, []

function Person(fname, lname, age) {
  this.fname = fname;
  this.lname = lname;
  this.age = age;
  this.getAge = function () {
    console.log(`user age is ${this.age}`);
  };
}

let user = new Person("giorgi", "ragca", 25);
let user2 = new Person("levani", "tobian", 30);

user2.getAge();

class User {
  constructor(fname, lname, age) {
    this.fname = fname;
    this.lname = lname;
    this.age = age;
  }
}

let user3 = new User("anna", "ragac2", 18);
console.log(user3);

accordion
let accordion = document.querySelectorAll(".container");

for (let item of accordion) {
  item.addEventListener("click", function () {
    this.classList.toggle("active");
  });
}