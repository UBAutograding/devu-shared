export type UserCourse = {
  id?: number
  userId: number
  courseId: number
  dropped?: boolean
  level?: "student" | "ta" | "instructor"
  lectureSection?: string
  createdAt?: string
  updatedAt?: string
}
