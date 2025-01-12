import { defineQuery } from "next-sanity";


export const allproducts = defineQuery(`
    *[_type == "product"][0..3]{
    _id,
    name,
    description,
    price,
    discountPercentage,
    priceWithDiscount,
    rating,
    ratingCount,
    tags,
    sizes,
    "imageUrl": image.asset->url
    
    }
    `) 

    
export const fourproducts = defineQuery(`
    *[_type == "product"][0..3]{
    _id,
    name,
    description,
    price,
    discountPercentage,
    priceWithDiscount,
    rating,
    ratingCount,
    tags,
    sizes,
    "imageUrl": image.asset->url
    
    }
    `) 
    