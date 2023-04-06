const users = [
  { name: "Erik", email: "erik@academlo.com" },
  { name: "Georg", email: "georg@academlo.com" },
  { name: "Andrea", email: "andrea@gmail.com" },
];

const email = "erik@academlo.com";
console.log(users[0].email !== email);

const user = (users, email) => {
  let newUsers = [];

  for (let i = 0; i < users.length; i++) {
    console.log(users[i]);
    if (users[i].email !== email) {
      newUsers.push(users[i].email);
    }
  }

  console.log(newUsers);
};

user(users, email);
