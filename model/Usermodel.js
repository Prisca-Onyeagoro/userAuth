import { Schema, model, models } from 'mongoose';

const ownSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, 'provide a name'],
      unique: true,
    },
    email: {
      type: String,
      required: [true, 'provide a email'],
      unique: true,
    },
    school: {
      type: String,
      required: [true, 'provide your school name'],
    },
    password: {
      type: String,
      required: [true, 'provide a password'],
    },
  },
  { timestamps: true }
);

const own = models.own || model('own', ownSchema);

export default own;

// const UserSchema = new Schema({
//   email: String,
//   username: String,
//   password: String,
//   isVerified: {
//     type: Boolean,
//     default: false,
//   },
//   isAdmin: {
//     type: Boolean,
//     default: false,
//   },
//   forgotPasswordToken: String,
//   forgotPasswordTokenExpiry: Date,
//   verifyToken: String,
//   verifyTokenExpiry: Date,
// });

// const User = models.user || model('user', UserSchema);

// export default User;
