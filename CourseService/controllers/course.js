import courseService from "../services/course-service.js";

// Create a new course
export const createVideo = async (req, res, next) => {
  const createVedio = req.body;
  try {
    const createdData = courseService.createCourse(createVedio);

    res.status(201).json({
      success: true,
      message: "Course created successfully",
      data: createdData,
    });
  } catch (error) {
    console.log(error);
    res.status(500);
    next(error);
  }
};

// Get all courses
export const getAllCourses = async (req, res, next) => {
  try {
    const videos = await courseService.getAllCourses();

    if (videos.length === 0) {
      res.status(404);
      return next(new Error("No courses found"));
    }

    res.status(200).json({
      success: true,
      count: videos.length,
      videos,
    });
  } catch (error) {
    console.log(error);
    res.status(500);
    next(error);
  }
};

// Get one course by ID
export const getCourseById = async (req, res, next) => {
  try {
    const courseId = req.params.id; // Using courseid instead of _id

    const video = await courseService.getCourseById(courseId);

    if (!video) {
      res.status(404);
      return next(new Error("Course not found"));
    }

    res.status(200).json({
      success: true,
      video,
    });
  } catch (error) {
    console.log(error);
    res.status(500);
    next(error);
  }
};

export const updateCourseById = async (req, res, next) => {
  try {
    const courseId = req.params.id;
    const updateCourseData = req.body;

    const video = await courseService.updateCourse(courseId, updateCourseData);
    if (!video) {
      res.status(404);
      return next(new Error("Course not found"));
    }

    res.status(200).json({
      success: true,
      message: "Course updated successfully",
      video: video,
    });
  } catch (error) {
    console.log(error);
    res.status(500);
    next(error);
  }
};

// Delete one course by ID
export const deleteCourseById = async (req, res, next) => {
  try {
    const courseId = req.params.id;

    const video = await courseService.deleteCourse(courseId);

    if (!video) {
      res.status(404);
      return next(new Error("Course not found"));
    }

    res.status(200).json({
      success: true,
      message: "Course deleted successfully",
    });
  } catch (error) {
    console.log(error);
    res.status(500);
    next(error);
  }
};
