import Course from "../models/Course.js";

const createCourse = async (courseData) => {
  return await Course.create(courseData);
};

const getAllCourses = async () => {
  return await Course.find();
};

const getCourseById = async (courseId) => {
  return await Course.findOne({ courseid: courseId });
};

const updateCourse = async (courseId, courseDetails) => {
  const updatedVideo = await Course.findOneAndUpdate(
    { courseid: courseId, courseDetails, new: true, runValidators: true }

  );
  return updatedVideo;
};

const deleteCourse = async (courseId) => {
  return await Course.findOneAndRemove({ courseid: courseId });
};

export default {
  createCourse,
  getAllCourses,
  getCourseById,
  updateCourse,
  deleteCourse,
};
