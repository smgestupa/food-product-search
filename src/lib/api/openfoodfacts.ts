export const searchByProduct = async (term: string) => {
    const req = await fetch(`https://world.openfoodfacts.org/cgi/search.pl?search_terms=${ term }&search_simple=1&json=1`);
    const res = await req.json();

    return { status: req.status, list: res.products, size: res.page_count };
}

export const searchByEAN = async (ean: string) => {
    const req = await fetch(`https://world.openfoodfacts.org/api/v0/product/${ ean }.json`);
    const res = await req.json();

    return { status: req.status, list: [res.product], size: res.product ? 1 : 0 };
}