const mongoose = require('mongoose');

const connect = async () => {
  try {
    await mongoose.connect(process.env.DB_URL);
    console.log('DB is online 🔌');
  } catch (error) {
    console.log('DB is down 😵‍💫', error);
  }
};

module.exports = { connect };
