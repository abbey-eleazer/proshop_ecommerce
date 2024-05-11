import bcrypt from 'bcryptjs'

const users = [
  {
    name: 'Admin User',
    email: 'admin@email.com',
    password: bcrypt.hashSync('123456', 10),
    isAdmin: true,
  },

  {
    name: 'Kwame LeBron',
    email: 'kwame@email.com',
    password: bcrypt.hashSync('123456', 10),
    isAdmin: false,
  },

  {
    name: 'Kofi Iverson',
    email: 'kofi@email.com',
    password: bcrypt.hashSync('123456', 10),
    isAdmin: false,
  },
]

export default users