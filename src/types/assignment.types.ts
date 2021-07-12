export type Assignment = {
  id?: number
  courseId?: number
  name?: string
  startDate?: Date
  dueDate?: Date
  endDate?: Date
  gradingType?: string
  categoryName?: string
  description?: string
  maxFileSize?: number
  maxSubmissions?: number
  disableHandins?: boolean
  createdAt?: string
  updatedAt?: string
}
