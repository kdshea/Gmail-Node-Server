import dotenv from 'dotenv'

dotenv.config()

const consts = {
  GMAIL_USER: process.env.GMAIL_USER,
  PASSWORD: process.env.PASSWORD,
  PORT: process.env.PORT || 3001,
}
// console.log('>>>>>>>> Environment variables defined as followed:')
// console.log(consts)

export default consts