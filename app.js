function Account(ner, accNum, balance) {
  this.name = ner;
  this.account = accNum;
  this.balance = balance;

  this.nemeh = function (value) {
    this.balance += value;
    return this.balance;
  };

  this.hasah = function (value) {
    this.balance -= value;
  };
}

const user1 = new Account("Naraa", 1234567, 200000);
const user2 = new Account("Saraa", 987654, 100000);

console.log("User name: ", user1.name);
console.log("User balance: ", user1.balance);
user1.nemeh(50000);
console.log("User balance: ", user1.balance);
console.log("=============");
console.log("User name: ", user2.name);
console.log("User balance:", user2.balance);
user2.nemeh(50000);
console.log("User balance:", user2.balance);

const users = [user1, user2];

users.forEach((user) => {
  console.log(user.name);
});
