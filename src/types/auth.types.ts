export type SchoolAuth = {
  email: string
  schoolId: string
}

export type ApiAuth = {
  token: string
}

export type DeserializedRefreshToken = { id: number } & JWTClaims
export type DeserializedToken = { email: string } & JWTClaims

type JWTClaims = {
  iat: number
  exp: number
  aud: string[]
  iss: string
  sub: string
}

export type Provider = {
  name: string
  route: string
  description: string
  method: 'get' | 'post'
  body?: string[]
}
