# Node Server for Form Submission

This repository contains the Node server code used to handle form submissions from my personal portfolio page [kdshea.com](https://kdshea.com/). The server receives data from my consultation form and sends it to me as an email. This setup allows me to collect and process user input from my portfolio website.

## 🚀 How It Works

1. The server is built using Express, a fast and minimalist web framework for Node.js.
2. CORS middleware is used to enable Cross-Origin Resource Sharing, allowing requests from different domains.
3. The server utilizes the `dotenv` package to load environment variables from a `.env` file.
4. Nodemailer is used to send email notifications using the Gmail service.
5. When a form submission is received at the `/submit-form` endpoint, the server extracts the form data and sends it as an email to the specified recipient.
6. Success or failure messages are sent back as a response to the client.

## ⚙️ Configuration

Before running the server, make sure to set up the following environment variables in a `.env` file:

- `GMAIL_USER`: Your Gmail account username or email address.
- `PASSWORD`: The app password generated for your Gmail account.

**Note:** To generate an app password, follow these steps:

1. Go to your Gmail account settings.
2. Navigate to the "Security" section.
3. Find the "App Passwords" option.
4. Generate a new app password for your Node server.
5. Copy the generated password and use it as the `PASSWORD` environment variable.

## 🚀 Getting Started

1. Install the required dependencies by running `npm install`.
2. Set up the environment variables in a `.env` file.
3. Run the server using `node server.js`.
4. The server will start running on the specified port (referenced in `consts.js`).

## 📬 API Endpoint

The server exposes a single endpoint:

- `POST /submit-form`: Receives form data and sends it as an email to the specified recipient. The following fields are expected in the request body: `name`, `company`, `email`, `currentWebsite`, `helpWith`, `projectDetails`, `howDidYouHear`.

## 🪴 About Me
I'm a freelance full stack developer with a passion for crafting innovative web solutions. With expertise in both front-end and back-end technologies, I have successfully delivered a wide range of projects, including web applications, RESTful APIs, and database management. I continually strive to solve complex problems and provide efficient, user-friendly solutions.

## Contact

If you have any questions or would like to discuss potential opportunities, please feel free to reach out to me. You can contact me  through the following channels:

[![Portfolio](https://img.shields.io/badge/Portfolio-Green?style=for-the-badge&logo=ko-fi&logoColor=white)](https://kdshea.com/)

<a href="mailto:daishea@gmail.com"><img src="https://img.shields.io/badge/Gmail-D14836?style=for-the-badge&logo=gmail&logoColor=white" alt="Gmail"></a>

[![LinkedIn](https://img.shields.io/badge/LinkedIn-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/kdshea/)

[![Twitter](https://img.shields.io/badge/Twitter-1DA1F2?style=for-the-badge&logo=twitter&logoColor=white)](https://twitter.com/@kd_shea)

## Other Projects
Take a look at other projects that I have in my own portfolio:

**[Truffle Health Bill Upload](https://github.com/kdshea/Medical-Bill-Upload)**

**[Seeker App](https://github.com/kdshea/Seeker-Full-Stack)** 

**[Exploradex](https//github.com/kdshea/Exploradex-Server)** 

**[Coconut Club](https://github.com/kdshea/Coconut-Club-Site)**

**[Tetris Clone](https://github.com/kdshea/Tetris-Clone)**

**[Speed Pour 2016](https://github.com/kdshea/Speed-Pour-2016)**
