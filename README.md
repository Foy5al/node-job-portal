
# NodeJS job portal API

Job portal API. Where employers can post jobs and job seekers can apply within the deadline date. The employer also can track the applied list by making a request also use authorization and authentication for the login system.

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


