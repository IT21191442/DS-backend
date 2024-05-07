import { Request, Response } from "express";
import HttpStatusCodes from "http-status-codes";
import CustomResponse from "../utils/responce";
import EnrollmentService from "../services/enrollment-service";

const CreateEnrollment = async (req: Request, res: Response) => {
  try {
    const { userId, userName, courseId, courseName } = req.body;
    console.log(userName+"gfhgj")

    const enrollment = await EnrollmentService.enrollUser(
      userId,
      userName,
      courseId,
      courseName
    );
    CustomResponse(
      res,
      true,
      HttpStatusCodes.CREATED,
      "Enrollment created successfully!",
      enrollment
    );
  } catch (error: unknown) {
    if (error instanceof Error) {
      CustomResponse(
        res,
        false,
        HttpStatusCodes.INTERNAL_SERVER_ERROR,
        "Failed to create enrollment",
        error.message
      );
    } else {
      // Handle other types of errors if needed
      console.error("An unknown error occurred:", error);
    }
  }
};

const GetAllEnrollments = async (req: Request, res: Response) => {
  try {
    const enrollments = await EnrollmentService.getAllEnrollments();
    CustomResponse(
      res,
      true,
      HttpStatusCodes.OK,
      "All enrollments fetched successfully!",
      enrollments
    );
  } catch (error: unknown) {
    if (error instanceof Error) {
      CustomResponse(
        res,
        false,
        HttpStatusCodes.INTERNAL_SERVER_ERROR,
        "Failed to fetch enrollments",
        error.message
      );
    } else {
      // Handle other types of errors if needed
      console.error("An unknown error occurred:", error);
    }
  }
};

const GetEnrollmentProfiles = async (req: Request, res: Response) => {
  try {
    const profiles = await EnrollmentService.getEnrollmentProfiles();
    CustomResponse(
      res,
      true,
      HttpStatusCodes.OK,
      "Enrollment profiles fetched successfully!",
      profiles
    );
  } catch (error: unknown) {
    if (error instanceof Error) {
      CustomResponse(
        res,
        false,
        HttpStatusCodes.INTERNAL_SERVER_ERROR,
        "Failed to fetch enrollment profiles",
        error.message
      );
    } else {
      // Handle other types of errors if needed
      console.error("An unknown error occurred:", error);
    }
  }
};

const DeleteEnrollmentDetails = async (req: Request, res: Response) => {
  try {
    const enrollmentId = req.params.enrollmentId;
    const result = await EnrollmentService.deleteEnrollmentDetails(enrollmentId);
    CustomResponse(
      res,
      true,
      HttpStatusCodes.OK,
      "Enrollment deleted successfully!",
      result
    );
  } catch (error: unknown) {
    if (error instanceof Error) {
      CustomResponse(
        res,
        false,
        HttpStatusCodes.INTERNAL_SERVER_ERROR,
        "Failed to delete enrollment",
        error.message
      );
    } else {
      // Handle other types of errors if needed
      console.error("An unknown error occurred:", error);
    }
  }
};

export { CreateEnrollment, GetAllEnrollments, GetEnrollmentProfiles, DeleteEnrollmentDetails };