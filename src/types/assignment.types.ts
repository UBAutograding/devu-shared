export type Assignment = {
  id?: number
  courseId?: number
  name?: string
  startDate?: string
  dueDate?: string
  endDate?: string
  gradingType?: string
  categoryName?: string
  description?: string
  maxFileSize?: number
  maxSubmissions?: number
  disableHandins?: boolean
  createdAt?: string
  updatedAt?: string
}


export type UserCourse = {
  id?: number
  userId: number
  courseId: number
  dropped?: boolean
  level?: GradingType
  lectureSection?: string
  createdAt?: string
  updatedAt?: string
}

// These roles are to be used by the front end to generate forms with labels for each level
export type GradingTypeDetail = {
  label: string
  value: string
}
export const gradingTypeDetails: GradingTypeDetail[] = [
  { label: 'Autograded - Code', value: 'code' },
  { label: 'Autograded - Not Code', value: 'non-code' },
  { label: 'Manually Graded', value: 'manual' },
]

// I was unable to find a way to remove the duplication here. I want to create a type based on the
// userCourseRoles.value to avoid having each value in 2 places. If anyone knows how to do this, please share!
export const gradingTypes = ['code', 'non-code', 'manual'] as const
export type GradingType = typeof gradingTypes[number]
