import { GET_PRODUCTS, READ_PRODUCT, FILTER_PRODUCTS_BY_MERCHAND, FETCH_CATEGORIES, FILTER_BY_CATEGORY } from "../actions/types"

const initialStateProducts = {
  products: getAllProducts(JSON.parse(localStorage.getItem("products") || "[]")),
  categories: getProductsCategories(JSON.parse(localStorage.getItem("categories") || "[]")),
  filter: JSON.parse(localStorage.getItem("filtered") || "[]"),
  product: JSON.parse(localStorage.getItem("product") || "[]"),
  merchant: JSON.parse(localStorage.getItem("merchant") || "[]"),
  category: JSON.parse(localStorage.getItem("category") || "[]")
}
export default function (state = initialStateProducts, action) {
  switch (action.type) {
    case GET_PRODUCTS:
      return {
        ...state,
        products: getAllProducts(action.payload),
        filter: getAllProducts(action.payload)
      }
    case READ_PRODUCT:
      return {
        ...state,
        product: action.payload.item
      }

    case FETCH_CATEGORIES:
      return {
        ...state,
        categories: getProductsCategories(action.payload.categories)
      }
    case FILTER_BY_CATEGORY:
      return {
        ...state,
        category: action.payload.category,
        filter: action.payload.items
      }
    case FILTER_PRODUCTS_BY_MERCHAND:
      return {
        ...state,
        merchant: action.payload.merchant,
        filter: action.payload.items
      }
  }
  return state
}

function getProductsCategories(data) {
  return data.map(categories => {
    // console.log(categories)
    return {
      ...categories,
      category_id: categories.category_id
    }
  })
}

function getProduct(data) {
  return data.map(productItem => {
    return {
      name: productItem.name,
      identifier: productItem.identifier,
      image: productItem.presentationImage,
      backgroundImage: productItem.backgroundImage,
      price: 0,
      category_name: "test",
      category_id: productItem.category_id,
      merchant_id: productItem.merchant_id
    }
  })
}

function getAllProducts(data) {
  console.log("Product", data)
  return data
    .map(productItem => {
      return {
        name: productItem.name,
        identifier: productItem.identifier,
        image: productItem.presentationImage,
        backgroundImage: productItem.backgroundImage,
        price: productItem.productPrices[0].price,
        stock: 5,
        category_name: productItem.category.identifier,
        category_id: productItem.category_id,
        merchant_id: productItem.merchant_id
      }
    })
    .filter(item => {
      return item.image != null
    })
}
