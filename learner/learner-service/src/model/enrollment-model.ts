//enroll
import mongoose, { Document, Schema } from 'mongoose';

interface IEnrollment extends Document {
  userId: mongoose.Types.ObjectId;
  userName: string;
  courseId: mongoose.Types.ObjectId;
  courseName: string;
}

const EnrollmentSchema = new Schema({
  userId: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  userName: {
    type: String,
    required: true,
  },
  courseId: {
    type: Schema.Types.ObjectId,
    ref: 'Course',
    required: true,
  },
  courseName: {
    type: String,
    required: true,
  },
});

const Enrollment = mongoose.model<IEnrollment>('Enrollment', EnrollmentSchema);

//export default Enrollment;
export default mongoose.model("Enrollment", EnrollmentSchema);

