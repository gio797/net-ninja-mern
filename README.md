# net-ninja-MERN

MERN-Stack-Tutorial

1. Review of the project
2. Express App setup
3. Express Router & API Routes
4. MongoDB Atlas & Mongoose
5. Models & Schemas
6. Controllers
7. Making a React App
8. Fetching Data
   To remove CORS block:
   1 - npm i cors -- in backend;
   2 - use proxy -- during dev only:
   - put property in package.json of frontend -- "proxy": "http://localhost:4000" at a top.
   - in fetch use only: fetch("/api/workouts")
