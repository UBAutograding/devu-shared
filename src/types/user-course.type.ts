import { User } from './user.types'

export type UserCourse = {
  id?: number
  userId: User
  courseId: number
  dropped?: boolean
  level?: string
  lectureSection?: string
  createdAt?: string
  updatedAt?: string
}
