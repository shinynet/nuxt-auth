// ~/types/index.d.ts

declare global {
  interface User {
    id: number
    username: string
    firstName: string
    lastName: string
    email: string
    gender: string
    image: string
  }

  interface Product {
    id: number
    title: string
    description: string
    category: string
    price: number
    discountPercentage: number
    rating: number
    stock: number
    tags: string[]
    brand?: string
    sku: string
    weight: number
    dimensions: {
      width: number
      height: number
      depth: number
    }
    warrantyInformation: string
    shippingInformation: string
    availabilityStatus: 'In Stock' | 'Low Stock' | 'Out of Stock'
    reviews: {
      rating: number
      comment: string
      date: string
      reviewerName: string
      reviewerEmail: string
    }[]
    returnPolicy: string
    minimumOrderQuantity: number
    meta: {
      createdAt: string
      updatedAt: string
      barcode: string
      qrCode: string
    }
    images: string[]
    thumbnail: string
  }

  interface Category {
    name: string
    slug: string
    url: string
  }

  interface ProductSort {
    label: string
    sortBy: 'price' | 'rating'
    order: 'asc' | 'desc'
  }

  interface Cart {
    id: number
  }
}

export {}
