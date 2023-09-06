import mongoose from 'mongoose';

// const connect = async () => {
//   try {
//     await mongoose.connect(process.env.MONGO_URL);
//     console.log('connected to mongodb');
//   } catch (error) {
//     console.log(error.message);
//   }
// };

// export default connect;

const connect = async () => {
  try {
    const { connection } = await mongoose.connect(process.env.MONGO_URL);
    if (connection.readyState == 1) {
      return Promise.resolve(true);
    }
    console.log('connected to mongodb');
    //   ready state returns three values 1= connected, 0 = disconnected, 2=connecting 3= disconnecting
  } catch (error) {
    Promise.reject(error);
    console.log(error);
  }
};

export default connect;
