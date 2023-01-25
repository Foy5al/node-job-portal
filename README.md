
# NodeJS job portal API

The "node-job-portal" API is a web-based API built using Node.js and MongoDB that allows developers to create and manage job portals. It provides a set of functionalities for creating and managing job postings, applying to jobs, and managing job applications. The API also includes functionality for managing user accounts, including registering and logging in. The API is designed using RESTful principles and utilizes popular npm packages such as Express, and Mongoose. The API is well-documented and has test cases written ensuring robustness and reliability. With this API, developers can easily create a job portal application that is fast, reliable, and secure. This API can be a great solution for companies or organizations that are looking to build a job portal, or for individuals looking to create a job portal as a side project.

## Tech Stack

**Server:** Node, Express, MongoDB, Mongoose


## Installation

Install my-project with npm

```bash
  npm install
  cd <my-project>
```
    
## Run Locally

Clone the project

```bash
  git clone https://github.com/Foy5al/node-job-portal.git
```

Go to the project directory

```bash
  cd node-job-portal
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm run start
  or
  npm run start-dev
  for run using nodemon
```


## API Reference

#### Get for all jobs or manager jobs

```http
  /jobs
  /manager/jobs
```
#### Get a single job or a job manager

```http
  /jobs/:id
  /manager/jobs/:id
```
#### Apply job

```http
  /jobs/:id/apply

```
| Type     | Description                |
| :------- | :------------------------- |
| `GET` | **Required**. Token that was given after login |
#### Check user

```http
  /user/me

```
| Type     | Description                |
| :------- | :------------------------- |
| `POST` | **Required**. Register |

#### login or register to job portal

```http
  /user/login
  /user/signup

```
#### Apply for job

```http
  /jobs/:id/apply

```




## Appendix

Demo check login user name and password 
```http
  "email": " admin@gmail.com",
  "password": "Admin123#"
```




## Demo

API demo link

https://node-job-portal-zeta.vercel.app/
## Authors

- [@foy5al](https://www.github.com/foy5al)


## Feedback

If you have any feedback, please reach out to us at https://dev-foysal.netlify.app/contact


