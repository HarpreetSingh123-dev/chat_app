const mongoose = require("mongoose");
const { isEmail } = require("validator");
const bcrypt = require("bcrypt");

const UserSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Cant be blank"],
    },

    email: {
      type: String,
      lowercase: true,
      unique: true,
      required: [true, "Cant be left blank"],
      index: true,
      validate: [isEmail, "Invalid Email"],
    },

    password: {
      type: String,
      required: [true, "Cant be left blank"],
    },

    pitcure: {
      type: String,
    },

    newMessages: {
      type: Object,
      default: {},
    },
    status: {
      type: String,
      default: "Online",
    },
  },
  { minimize: false }
);

UserSchema.pre("save", function (next) {
  const user = this;
  if (!user.isModified("password")) return next;

  bcrypt.genSalt(10, function (err, salt) {
    if (err) return next(err);

    bcrypt.hash(user.password, salt, function (err, hash) {
      if (err) return next(err);
      user.password = hash;
      next();
    });
  });
});

UserSchema.methods.toJSON = function () {
  const user = this;
  const userObject = user.toObject();
  delete userObject.password;
  return userObject;
};

UserSchema.statics.findByCredentials = async function (email, password) {
  const user = User.findOne({ email });
  if (!user) {
    throw new Error("Inavlid email or password");
  }

  const isMatch = bcrypt.compare(password, user.password);
  if (!isMatch) {
    throw new Error("Inavlid email or password");
  }

  return user;
};

const User = mongoose.model("ChatAppUser", UserSchema);

module.exports = User;
