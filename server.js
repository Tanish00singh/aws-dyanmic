const express = require("express");
const app = express();

// Middleware
app.use(express.urlencoded({ extended: true }));

// Fake user (for demo)
const USER = {
    username: "admin",
    password: "1234"
};

// Home Page
app.get("/", (req, res) => {
    res.send(`
    <h2>Login Page</h2>
    <form method="POST" action="/login">
      <input type="text" name="username" placeholder="Enter Username" required /><br/><br/>
      <input type="password" name="password" placeholder="Enter Password" required /><br/><br/>
      <button type="submit">Login</button>
    </form>
  `);
});

// Login Route
app.post("/login", (req, res) => {
    const { username, password } = req.body;

    if (username === USER.username && password === USER.password) {
        res.send(`
      <h2>Login Successful ✅</h2>
      <a href="/dashboard">Go to Dashboard</a>
    `);
    } else {
        res.send(`
      <h2>Invalid Credentials ❌</h2>
      <a href="/">Try Again</a>
    `);
    }
});

// Dashboard Route
app.get("/dashboard", (req, res) => {
    res.send(`
    <h1>Welcome to Dashboard 🚀</h1>
    <p>Your app is running on AWS Elastic Beanstalk</p>
  `);
});

// IMPORTANT: Port for Elastic Beanstalk
const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});