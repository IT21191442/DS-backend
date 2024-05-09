import Enrollment from '../model/enrollment-model';

class EnrollmentService {
  static async enrollUser(userId: string,courseId: string): Promise<any> {
    try {
      const enrollment = new Enrollment({
        userId,
        // userName,
        courseId,
        // courseName,
      });
      const savedEnrollment = await enrollment.save();
      return savedEnrollment;
    } catch (error) {
      throw new Error('Failed to enroll user in the course');
    }
  }

  static async getAllEnrollments(): Promise<any> {
    try {
      const enrollments = await Enrollment.find();
      return enrollments;
    } catch (error) {
      throw new Error('Failed to fetch enrollments');
    }
  }

  static async getEnrollmentProfiles(): Promise<any> {
    // Implement the logic to fetch enrollment profiles
    // You might need to add additional fields or perform data manipulation
    const enrollments = await Enrollment.find();
    return enrollments;
  }

  static async deleteEnrollmentDetails(enrollmentId: string): Promise<any> {
    try {
      const result = await Enrollment.findByIdAndDelete(enrollmentId)
      return result;
    } catch (error) {
      throw new Error('Failed to delete enrollment');
    }
  }
}

export default EnrollmentService;