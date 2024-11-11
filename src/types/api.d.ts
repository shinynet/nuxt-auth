// ~/types/api.d.ts

declare global {
  interface ProductsResponse {
    products: Product[]
    total: number
    skip: number
    limit: number
  }

  interface LoginResponse extends User {
    accessToken: string
    refreshToken: string
  }

  interface Query {
    limit: number
    skip: number
  }
}

export {}
