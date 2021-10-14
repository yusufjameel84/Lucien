import bcrypt from "bcryptjs"

const users = [
  {
    name: "Admin User",
    email: "admin@example.com",
    password: bcrypt.hashSync("123456", 10),
    isAdmin: true,
  },
  {
    name: "Yusuf",
    email: "yusuf@example.com",
    password: bcrypt.hashSync("123456", 10),
  },
  {
    name: "champ",
    email: "champ@example.com",
    password: bcrypt.hashSync("123456", 10),
  },
]

export default users
