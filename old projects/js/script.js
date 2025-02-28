class book {
  constructor(author, title, year) {
    this.author = author;
    this.title = title;
    this.year = year;
  }

  getSummary() {
    return `${this.author} = ${this.title} = ${this.year}`;
  }
}

const book1 = new book('John Doe', 'Wonderfull World', '2013');

console.log(book1.getSummary());
console.log(book1);

class Magazine extends book {
  constructor(title, author, year, month) {
    super(title, author, year);
    this.month = month;
  }
}

// to call a parent constructor use super();

const mag1 = new Magazine('Mag one', 'John Doe', '2018', 'Jan');












class User {
  constructor(userName, email, password) {
    this.userName = userName;
    this.email = email;
    this.password = password;
  }

  static countUsers() {
    console.log('There are 50 users');
  }

  register() {
    console.log(`${this.userName} is now registered`);
  }
}

let bob = new User('Bob', 'bob@email.com', '12345');

bob.register();
User.countUsers();


class Member extends User {
  constructor(userName, email, password, memberPackage) {
    super(userName, email, password);
    this.package = memberPackage;
  }

  getPackage() {
    console.log(`${this.userName} is subscribed to ${this.package}`)
  }
}

let mike =  new Member('Mike', 'mike@gmail.com', '12345', 'Standart');

mike.getPackage();