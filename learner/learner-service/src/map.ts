import Enrollmentrouter from "./routes/enrollment-route";
import constants from "./utils/constants";


const requestMappings = (app: any) => {
  app.use(constants.API.PREFIX.concat("/enrollments"), Enrollmentrouter);
};



export default requestMappings;
