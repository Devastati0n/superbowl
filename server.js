import express from 'express'
import dotenv from 'dotenv'
import mysql from 'mysql2'
import expressLayouts from 'express-ejs-layouts'



dotenv.config()
const app = express(); 

app.set('view engine', 'ejs'); 
app.set('layout', 'layouts/layout');  
app.use(expressLayouts);


const pool = mysql.createPool({
  host:'database-2.cvi4w82eqauk.us-east-1.rds.amazonaws.com', 
  user:'admin', 
  password:'EugeniaCooney1*', 
  database:'superbowl'
}).promise()



app.use((err, req, res, next) => {
  console.error(err.stack)
  res.status(500).send('Something broke')
})


app.listen(3000, () => {
  console.log('Server is running on port 3000')
})






/*
app.get('/', (req,res)=>{
  res.render('layout.ejs')

})
*/ 




/*
app.set('layout', 'layouts/layout'); 
app.use(expressLayouts); 
app.listen(process.env.PORT || 3000);
mongoose.connect(process.env.DATABASE_URL);
process.env.DATABASE_URL
*/ 



/*MYSQL VALIDATION 
1.passport 2.validate_password plugin for aws 3.mysql 
How to enable password authentication in MySQL?
cnf MySQL config file, and update the following line under the [mysqld] entry:
ALTER USER 'username'@'host' IDENTIFIED WITH mysql_native_password BY 'password';
Save the config file and restart the MySQL server.

*/ 




/*
models//public//stylesheets SHARED main css(alone)
//routes//views//partials(works with main)//layouts folder with 1 partial(this is main html)
//const router = express.Router() 
*/ 




/* ENV FILE
  host:'database-2.cvi4w82eqauk.us-east-1.rds.amazonaws.com', 
  user:'admin', 
  password:'EugeniaCooney1*', 
  database:'superbowl'

*/



/*
const pool = mysql.createPool({
  host: process.env.MYSQL_HOST, 
  user: process.env.MYSQL_USER, 
  password:process.env.MYSQL_PASSWORD, 
  database: process.env.MYSQL_DATABASE
  }).promise()


const db = mongoose.connection; 
  
db.on('error', error => console.error(error)); 
db.once('open', () => console.log('connected to mongoose')); 
*/







//---------------------------------------------------------






/* database knowledge Authentication

--a database is a logical container for data, while a database instance is 
a virtual hardware environment that hosts one or more databases


Unless this is a demo or prototype system, users should never be logged into the database. 
Your service layer should be accessing the database on behalf of your users. 
The service and admins are the only database logins that should exist and both of those 
classes of users should use pki auth. Password management is just one part of
why direct database access will go sideways quickly.

--differnt types of auth choices
https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/database-authentication.html

--SSL/TLS with Amazon RDS
https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/UsingWithRDS.SSL.html

*/






/* 

MYSQL_HOST='database-2.cvi4w82eqauk.us-east-1.rds.amazonaws.com' 
MYSQL_USER='admin' 
MYSQL_PASSWORD='EugeniaCooney1*'
MYSQL_DATABASE='superbowl'

  async function createNote(user){
  const [result] = await pool.query(`
  INSERT INTO football (user)
  VALUES (?)
`, [user])
  const id = result.insertId
  return getLogin(id)
}

const result = await createNote('Eugenia'); 

*/ 





/*
"start": "node server.js",
"devStart": "nodemon server.js"

npm init -y
npm i express ejs express-ejs-layouts
npm i --save-dev nodemon
npm i --save-dev dotenv
npm i mongoose
git init p
npm run devStart
npm i passport


git remote add origin https://github.com/Devastati0n/full.git
git remote set-url origin https://github.com/Devastati0n/superbowl.git
git remote -v

git branch -M main
git push -u origin main
npm i body-parser
npm i multer
npm uninstall -D package-name


Set-ExecutionPolicy –ExecutionPolicy RemoteSigned


git push heroku main    heroku logs --tail    git remote add origin https://github.com/Devastati0n/3.git   ping -n localhost   git commit -m "hello4"   
https://stackoverflow.com/questions/10204902/database-design-for-user-settings
MYSQL----
https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/CHAP_MySQL.html
https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/MySQL.Concepts.VersionMgmt.html
https://aws.amazon.com/architecture/databases/?cards-all.sort-by=item.additionalFields.sortDate&cards-all.sort-order=desc&awsf.content-type=*all&awsf.methodology=*all
https://12factor.net/config
https://www.npmjs.com/package/dotenv

*/ 















/*
--Amazon S3 // SDK NPM // npm install @aws-sdk/client-s3  
Amazon S3 stores data as objects within buckets. An object consists of a file and optionally 
any metadata that describes that file. To store an object in Amazon S3, you upload the file 
you want to store to a bucket. When you upload a file, you can set permissions on the object 
and any metadata.

Buckets are the containers for objects. You can have one or more buckets. For each bucket, 
you can control access to it (who can create, delete, and list objects in the bucket), 
view access logs for it and its objects, and choose the geographical region where Amazon S3 
will store the bucket and its contents.
*/ 













