

import express from 'express'
import CONSTS from './consts.js'
import cors from 'cors'
import dotenv from 'dotenv'
import nodeMailer from 'nodemailer'

async function startServer() {
  const app = express()

  dotenv.config()

  // Use middleware to allow CORS
  app.use(cors())

  app.use(express.json())

  app.use(express.urlencoded({ extended: true }))
  
  async function mainMail(name, company, email, cuurentWebsite, helpWith, projectDetails, howDidYouHear) {
    const transporter = await nodeMailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.PASSWORD,
      },
    })
    const mailOption = {
      from: process.env.GMAIL_USER,
      to: process.env.GMAIL_USER,
      subject: 'New Consultation',
      html: `You got a message from ${name}. <br />
      Company - ${company} <br />
      Email - ${email} <br />
      Current Website - ${cuurentWebsite} <br />
      Needs help with - ${helpWith} <br />
      Project details - ${projectDetails} <br />
      How they heard about you - ${howDidYouHear}`,
    }
    try {
      await transporter.sendMail(mailOption)
      return Promise.resolve('Message Sent Successfully!')
    } catch (error) {
      return Promise.reject(error)
    }
  }
  
  app.post('/submit-form', async (req, res) => {
    console.log(req.body)
    const { name, company, email, currentWebsite, helpWith, projectDetails, howDidYouHear } = req.body
    try {
      await mainMail(name, company, email, currentWebsite, helpWith, projectDetails, howDidYouHear)
      res.send('Message Successfully Sent!')
    } catch (error) {
      console.log(error)
      res.send('Message Could not be Sent')
    }
  })

  // ? MAKING AN END POINT TO SEE IF THE SERVER WORKS 
  app.use((request, response) => {
    return response.status(404).send('404 - required endpoint!')
  })

  app.listen(CONSTS.PORT, () => {
    console.log(`>>>>>>> Express server running on PORT ${CONSTS.PORT}`)
  })

}

startServer()