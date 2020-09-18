const users = [
  {
    id: 1,
    name: "izzat",
    email: "izzat@domain.com",
    password: "12345",
  },
  {
    id: 2,
    name: "aliff",
    email: "aliff@domain.com",
    password: "12345",
  },
];

const getUsers = () => users;

const getUserById = (id) => users.find((user) => user.id === id);

const getUserByEmail = (email) => users.find((user) => user.email === email);

const addUser = (user) => {
  user.id = users.length + 1;
  users.push(user);
};

module.exports = {
  getUsers,
  getUserByEmail,
  getUserById,
  addUser,
};
