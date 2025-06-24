# Tutorials:

## The following folders contain tasks completed by following the tutorials:

nodejs
mongodb
express and express2
react/react-app

# Exercises

Application made by following MERN tutorial videos.  

# Project

Application made according to the given instructions for a project part of the course.  


# Other Files

- Learning diary can be found in the file learning_diary.pdf
- Video of website usage can be found in the file MyBooks_video.mp4

# Note:

Unfortunately, I could not deploy the website as it was shown in the last short tutorial, since the company has changed the policy and now creating a deployment requires putting credit card information. 

# HOW TO RUN THE APP LOCALLY

In order to run application locally:

•	Clone the repository with following command:

```bash
git clone https://github.com/jagosia/Full-Stack-Course-LUT.git
```

•	Open folder Full-Stack-Course-LUT/project  
•	Install dependencies in the current folder with following commands:

```bash
npm install
cd frontend
npm install
cd ..
```

•	Create an .env file in the project folder with following content:

```env
PORT=5000
MONGO_URI=mongodb+srv://gosia:gosia@library.5alnbwx.mongodb.net/?retryWrites=true&w=majority&appName=library
JWT_SECRET=supersecretkey
```

•	Run the app using following command:

```bash
npm run dev
```

•	Open the address  
http://localhost:3000

similarly to run exercises app follow these steps with the folder Full-Stack-Course-LUT/exercises with .env file content:

```env
NODE_ENV=development
PORT=5000
MONGO_URI=mongodb+srv://gosia:gosia@exercisescluster.8w81i2j.mongodb.net/exercises?retryWrites=true&w=majority&appName=ExercisesCluster
JWT_SECRET=abc123
```