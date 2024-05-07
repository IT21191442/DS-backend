import { Router } from "express";
import UserMiddleware from "../middleware/user-middleware";
import {
  CreateEnrollment,
  GetAllEnrollments,
  GetEnrollmentProfiles,
  DeleteEnrollmentDetails
} from "../controller/enrollment-controller";
import constants from "../utils/constants";

const EnrollmentRouter = Router();

EnrollmentRouter.post("/create", CreateEnrollment);

EnrollmentRouter.get(
  "/getOneEnrollment/:enrollmentId",
  // UserMiddleware.authorize([
  //   constants.USER.ROLES.ADMIN,
  //   constants.USER.ROLES.USER,
  // ]),
  GetEnrollmentProfiles
);

EnrollmentRouter.get(
  "/getAllEnrollment",
  //UserMiddleware.authorize([constants.USER.ROLES.USER]),
  GetAllEnrollments
);

EnrollmentRouter.delete(
  "/deleteEnrollment/:enrollmentId",
  //UserMiddleware.authorize([constants.USER.ROLES.ADMIN]),
  DeleteEnrollmentDetails
);

export default EnrollmentRouter;
