import mongoose from "mongoose";

const courseSchema = new mongoose.Schema(
  {
    courseid: {
      type: String,
      required: true,
    },

    coursename: {
      type: String,
      required: true,
    },

    description: {
      type: String,
      required: true,
    },

    sections: {
      type: String,
      required: true,
    },

    references: {
      type: String,
      required: true,
    },

    price: {
      type: Number,
      required: true,
    },

    imgUrl: {
      type: String,
      required: true,
    },
    
    videoUrl: {
      type: String,
      required: true,
    },

  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Course", courseSchema);
