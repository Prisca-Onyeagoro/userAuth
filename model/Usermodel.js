import { Schema, model, models } from 'mongoose';

const ownerSchema = new Schema(
  {
    email: {
      type: String,
      required: [true, 'provide a email'],
      unique: true,
    },
    username: {
      type: String,
      required: [true, 'provide a username'],
      unique: true,
    },
    password: {
      type: String,
      required: [true, 'provide a password'],
    },
  },
  { timestamps: true }
);

const owner = models.owner || model('owner', ownerSchema);

export default owner;

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
