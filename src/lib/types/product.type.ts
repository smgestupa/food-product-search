export type Product = {
    code: string,
    image: string | undefined,
    name: string,
    quantity: string | undefined | null,
    brands: string | undefined,
    packaging: string | undefined,
    categories: string | undefined,
    labels: string | undefined,
    link: string | undefined,
    stores: string | undefined,
    countries: string,
    ingredients: string | undefined,
    allergens: string | undefined,
    grade: string | undefined,
    fat: string | undefined,
    salt: string | undefined,
    saturated: string | undefined,
    sugars: string | undefined
}