// ~/types/api.d.ts

declare global {
  interface ProductsResponse {
    products: Product[]
    total: number
    skip: number
    limit: number
  }

  interface CartsResponse {
    carts: Cart[]
    total: number
    skip: number
    limit: number
  }

  interface RefreshResponse {
    accessToken: string
    refreshToken: string
  }

  interface LoginResponse extends AuthUser, RefreshResponse {
  }

  interface PageQuery {
    limit?: number
    skip?: number
    search?: string
  }
}

export {}
