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
    },

    sections: {
      type: String,
    },

    references: {
      type: String,
    },

    price: {
      type: String,
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
