export type UserCourse = {
  id?: number
  userId: number
  courseId: number
  dropped?: boolean
  level?: UserCourseLevel
  lectureSection?: string
  createdAt?: string
  updatedAt?: string
}

// These roles are to be used by the front end to generate forms with labels for each level
export type UserCourseRole = {
  label: string
  value: string
}
export const userCourseRoles: UserCourseRole[] = [
  { label: 'Student', value: 'student' },
  { label: 'TA', value: 'ta' },
  { label: 'Instructor', value: 'instructor' },
]

// I was unable to find a way to remove the duplication here. I want to create a type based on the
// userCourseRoles.value to avoid having each value in 2 places. If anyone knows how to do this, please share!
export const userCourseLevels = ['student', 'ta', 'instructor'] as const
export type UserCourseLevel = typeof userCourseLevels[number]
