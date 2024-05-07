// Backend Route Configuration
import express from "express";
import { createVideo, getAllCourses, getCourseById, deleteCourseById, updateCourseById } from "../controllers/course.js";

const router = express.Router();

// Create a new course
router.post("/", createVideo);

// Get all courses
router.get("/getAllCourses", getAllCourses); 

// Get one course by ID
router.get("/getOneCourseById/:id", getCourseById);

// Update one course by ID
router.put("/updateOneCourseById/:id", updateCourseById);

// Delete one course by ID
router.delete("/deleteOneCourseById/:id", deleteCourseById);


export default router;
