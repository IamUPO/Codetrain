import express from 'express';

import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    avatar: {
      type: String,
      default: "",
      trim: true, 
    },
    fullName: {
      type: String,
      required: true,
      trim: true,
    },
    userName: {
      type: String,
      required: true,
      unique: true,
      trim: true, 
    },
    email: {
      type: String,
      required: false, 
      unique: true, 
      lowercase: true, 
      trim: true,
    },
    password: {
      type: String,
      required: false, 
      minlength: 6,
    },
    bio: {
      type: String,
      default: "",
      trim: true, 
      maxlength: 160,
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
    lastLgin: {
      type: Date,
      default: Date.now,
    },
    
  },
  { timestamps: true }
);

const User = mongoose.model("User", userSchema);

export default User;
