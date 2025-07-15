import Courses from "@/components/templates/index/Course"
import connectToDB from "../../utils/db";

export default async function Home() {
  connectToDB()
  const courses = await coursesModel.find({})

  return <Courses  />;
}
