// Request shape when loggin in as a developer (NOT IN PRODUCTION)
export type DevAuth = {
  email: string
  schoolId: string
}

// Shape of resposne when requesting JWT
export type TokenResponse = {
  accessToken: string
}

// Will be applied to middleware for use in authenticated endpoints
export type DeserializedRefreshToken = { id: number } & JWTClaims
export type DeserializedToken = { email: string } & JWTClaims

type JWTClaims = {
  iat: number
  exp: number
  aud: string[]
  iss: string
  sub: string
}

// Shape of provider options (when selecting login options)
export type AuthProvider = {
  name: string
  route: string
  description: string
  method: 'get' | 'post'
  body?: string[]
}
