// Request shape when loggin in as a developer (NOT IN PRODUCTION)
export type DevAuth = {
  email: string
  schoolId: string
}

// Shape of resposne when requesting JWT
export type Token = {
  accessToken: string
}

// Shape of provider options (when selecting login options)
export type AuthProvider = {
  name: string
  route: string
  description: string
  method: 'get' | 'post'
  body?: string[]
}

// Will be applied to middleware for use in authenticated endpoints
export type AccessToken = { userId: number; email: string } & JWTClaims
export type RefreshToken = { userId: number } & JWTClaims

type JWTClaims = {
  iat?: number
  exp?: number
  aud?: string[]
  iss?: string
  sub?: string
}
