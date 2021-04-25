const path = require('path');
require('dotenv').config({path: path.resolve(__dirname, '../.env')});

const bcrypt = require('bcrypt');
const prompt = require('prompt-sync')({sigint: true});
const MongoClient = require('mongodb').MongoClient;
const client = new MongoClient(process.env.MONGO_URL, {
  useUnifiedTopology: true,
});

client.connect(async function (err) {
  if (err) {
    console.error(err.message);
    return;
  }
  console.log('Connected successfully to server');

  const admins = client.db(process.env.DB_NAME).collection('admins');
  const email = prompt('enter email of the new admin : ');
  const name = prompt('enter the name of the new admin : ');
  const password = prompt('enter the password : ');
  const saltRounds = 8;

  try {
    const exist = await admins.findOne({email});

    if (exist != null) throw new Error('already exist');

    bcrypt.hash(password, saltRounds, async (err, hash) => {
      if (!err) {
        await admins.insertOne({
          email,
          name,
          password: hash,
        });
        console.log('admin created');

      } else {
        console.error(err.message);
      }

      client.close();
    });
  } catch (err) {
    console.log(err.message);
    client.close();
  }
});
