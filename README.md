✅ 3. Zip the project (CRITICAL STEP)

⚠️ This is where most people fail.

❌ WRONG:

my-node-app.zip
 └── my-node-app/
     ├── server.js

✅ CORRECT:
Select files inside folder, then zip:

my-node-app.zip
 ├── server.js
 ├── package.json
 ├── node_modules/
☁️ PART 2 — Deploy Using AWS Elastic Beanstalk
✅ 4. Open Elastic Beanstalk
Go to: https://console.aws.amazon.com
In search bar → type:

👉 Elastic Beanstalk

Click:
👉 AWS Elastic Beanstalk
✅ 5. Create Application
Click:
👉 Create application
Fill:
Application name → my-node-app
Description → optional

Click:
👉 Next

✅ 6. Create Environment
Choose:

👉 Web server environment

Click:
👉 Next

✅ 7. Choose Platform
Platform:
👉 Node.js
Platform branch:
👉 Latest (e.g., Node.js 20)
Platform version:
👉 Auto selected

Click:
👉 Next

✅ 8. Application Code Upload
Choose:
👉 Upload your code
Click:
👉 Upload
Select:
👉 your my-node-app.zip

Click:
👉 Next

✅ 9. Configure Service Access (IMPORTANT)
Service role:
👉 Select existing OR create new

If new:
👉 AWS auto-creates role

EC2 key pair:
👉 Select existing OR create new

(Needed only if you want SSH access)

Click:
👉 Next

✅ 10. Set Instance Configuration
Instance type:
👉 t2.micro (Free tier)
Capacity:
👉 Single instance (for beginners)

Click:
👉 Next

✅ 11. Review & Create
Review all settings
Click:
👉 Submit
🚀 PART 3 — Deployment Process (What Happens Internally)

Elastic Beanstalk now automatically creates:

Amazon EC2 → runs your app
Elastic Load Balancer → (if scaling enabled)
Auto Scaling → adjusts instances
Amazon S3 → stores your zip
Amazon CloudWatch → logs & monitoring

⏳ Wait ~2–5 minutes

Status will change to:
👉 Green / Healthy

🌐 PART 4 — Access Your App
✅ 12. Open Application
Go to:
👉 Elastic Beanstalk Dashboard
Click your environment
Find:

👉 Domain URL
Example:

http://my-node-app-env.eba-xyz.ap-south-1.elasticbeanstalk.com
Click it
✅ 13. Test Application

You should see:

Login form
Try:
username: admin
password: 1234

✅ Output:

Login Successful
⚠️ COMMON ERRORS (READ THIS OR YOU’LL GET STUCK)
❌ 1. App not starting

Cause:

Missing start script

✅ Fix:

"scripts": {
  "start": "node server.js"
}
❌ 2. Wrong ZIP structure

Cause:

Folder inside zip

✅ Fix:
Zip files directly (not parent folder)

❌ 3. Port issue

Cause:
Hardcoded port like:

app.listen(3000)

✅ Fix:

process.env.PORT
❌ 4. Missing dependencies

Cause:
Forgot npm install

❌ 5. App crashes silently

👉 Go to:
Elastic Beanstalk → Logs → Request Logs

📁 FINAL PROJECT STRUCTURE (Correct)
my-node-app/
├── server.js
├── package.json
├── package-lock.json
└── node_modules/
🔥 Reality Check (Important Insight)

Elastic Beanstalk is:

Easy to start
BUT hides complexity

Behind the scenes you are still managing:

Servers
Scaling
Logs

👉 For production:

Use RDS for database
Use environment variables
Use Load Balancer
