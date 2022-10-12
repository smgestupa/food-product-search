<script lang="ts">
    import { fade } from "svelte/transition";
    import Footer from "@semantics/Footer.svelte";
    import ProductSearch from "@components/ProductSearch.svelte";
    import ProductPreview from "@components/ProductPreview.svelte";
    import type { FoodProduct } from "@lib/types/foodproduct.type";
    import { searchByProduct, searchByEAN } from "@lib/api/openfoodfacts";
    import food from "@lib/lists/food.json";
    let productTerm: string = "",
        term: string = "", 
        products: FoodProduct[] = [],
        firstTime: boolean = true,
        loading: boolean = false,
        disableInput: boolean = false;

    const search = async () => {
        if (!productTerm.trim() || productTerm.trim() === term) return;
        if (firstTime) firstTime = false;
        
        products = [];
        term = productTerm.trim();
        loading = true;
        disableInput = true;

        const response = 
            /^[0-9]{13}$/.test(term)
            ? await searchByEAN(term)
            : await searchByProduct(term);

        if (response.status !== 200) console.error("Something went wrong with fetching data!");
        else if (response.size) extractData(response.list);
        loading = false;
        disableInput = false;
    }

    const extractData = (data: any[]) => {
        data.forEach(p => {
            const _quantity: string | undefined =
                p.quantity && /([\d]+)/.test(p.quantity)
                ? p.quantity.match(/([\d]+)/)[0]
                : p.serving_quantity;

            const _brands: string | undefined = 
                Array.isArray(p.brands) 
                ? p.brands.join(", ")
                : p.brands;

            const product: FoodProduct = {
                code: p._id || p.code,
                image: p.image_front_url,
                name: p.name || p.product_name,
                quantity: _quantity,
                brands: _brands,
                packaging: p.packaging || p.packagings?.join(", "),
                categories: p.categories,
                labels: p.labels?.replace(/(\/n)/, ""),
                link: p.link,
                stores: p.stores?.replace(/([,](\s+)?)/, ", "),
                countries: p.countries?.replace(/([,](\s+)?)/, ", "),
                ingredients: p.ingredients?.map(v => v.text).join(", "),
                allergens: p.allergens || p.ingredients_text_with_allergens,
                grade: p.ecoscore_grade,
                fat: p.nutrient_levels?.fat,
                salt: p.nutrient_levels?.salt,
                saturated: p.nutrient_levels?.saturated,
                sugars: p.nutrient_levels?.sugars,
            };

            products.push(product);
        });
    }

    const randomProduct = () => {
        productTerm = food[Math.floor(Math.random() * 189)];
        search();
    }
</script>

<section id="search">
    <header>
        <h1>Search food products with this generic search website.</h1>
        <h2>Huge thanks to <a href="https://world.openfoodfacts.org/" target="_blank" rel="noopener noreferrer">OpenFoodFacts</a> for their API</h2>
    </header>
    <div id="search-box">
        <ProductSearch bind:productTerm bind:disableInput/>
    </div>
    <div id="search-buttons">
        <button on:click={ search }>Search</button>
        <button on:click={ randomProduct }>Random product</button>
    </div>
</section>

<section id="results">
    { #if !firstTime }
        { #if loading }
            <div id="results-loading" in:fade={{ duration: 300 }}>
                <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" style="shape-rendering: auto;" width="200" height="200" viewBox="0 0 100 100" preserveAspectRatio="none">
                    <rect x="17.5" y="30" width="15" height="40" fill="#ffe500">
                    <animate attributeName="y" repeatCount="indefinite" dur="1s" calcMode="spline" keyTimes="0;0.5;1" values="18;30;30" keySplines="0 0.5 0.5 1;0 0.5 0.5 1" begin="-0.2s"></animate>
                    <animate attributeName="height" repeatCount="indefinite" dur="1s" calcMode="spline" keyTimes="0;0.5;1" values="64;40;40" keySplines="0 0.5 0.5 1;0 0.5 0.5 1" begin="-0.2s"></animate>
                    </rect>
                    <rect x="42.5" y="30" width="15" height="40" fill="#059669">
                    <animate attributeName="y" repeatCount="indefinite" dur="1s" calcMode="spline" keyTimes="0;0.5;1" values="20.999999999999996;30;30" keySplines="0 0.5 0.5 1;0 0.5 0.5 1" begin="-0.1s"></animate>
                    <animate attributeName="height" repeatCount="indefinite" dur="1s" calcMode="spline" keyTimes="0;0.5;1" values="58.00000000000001;40;40" keySplines="0 0.5 0.5 1;0 0.5 0.5 1" begin="-0.1s"></animate>
                    </rect>
                    <rect x="67.5" y="30" width="15" height="40" fill="#ffffff">
                    <animate attributeName="y" repeatCount="indefinite" dur="1s" calcMode="spline" keyTimes="0;0.5;1" values="20.999999999999996;30;30" keySplines="0 0.5 0.5 1;0 0.5 0.5 1"></animate>
                    <animate attributeName="height" repeatCount="indefinite" dur="1s" calcMode="spline" keyTimes="0;0.5;1" values="58.00000000000001;40;40" keySplines="0 0.5 0.5 1;0 0.5 0.5 1"></animate>
                    </rect>
                </svg>
            </div>
        { :else if products.length === 0 }
            <div id="results-none" in:fade={{ duration: 300 }}>
                <svg xmlns="http://www.w3.org/2000/svg" class="ionicon" viewBox="0 0 512 512" width="118" height="118"><path d="M448 256c0-106-86-192-192-192S64 150 64 256s86 192 192 192 192-86 192-192z" fill="none" stroke="currentColor" stroke-miterlimit="10" stroke-width="32"/><path d="M250.26 166.05L256 288l5.73-121.95a5.74 5.74 0 00-5.79-6h0a5.74 5.74 0 00-5.68 6z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"/><path d="M256 367.91a20 20 0 1120-20 20 20 0 01-20 20z"/></svg>
                <p>No results found using the term <span>{ term }</span></p>
            </div>
        { :else }
            <div id="results-show" in:fade={{ duration: 300 }}>
                { #each products as p }
                    <span>
                        <ProductPreview product={ p }/>
                    </span>
                { /each }
            </div>
        { /if }
    { /if }
</section>

<Footer/>

<style lang="scss">
    #search {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        text-align: center;
        margin-top: 102px;
        padding: 0 1rem;

        & > header {
            display: flex;
            flex-direction: column;

            & > h1 {
                max-width: 908px;
                font-weight: 800;
                font-size: 3rem; /* 48px */
                line-height: 1;
            }

            & > h2 {
                margin-top: 18px;
                color: #94A3B8;
                font-size: 1.25rem; /* 20px */
                line-height: 1.75rem; /* 28px */
            }

            & > h2 > a {
                color: #059669;
                font-weight: 600;
                transition-duration: 300ms;

                &:hover {
                    color: #50b695;
                }
            }

            @media (max-width: 720px) {
                & > h1 {
                    font-size: 2.25rem; /* 36px */
                    line-height: 2.5rem; /* 40px */
                }

                & > h2 {
                    font-size: 1.125rem; /* 18px */
                    line-height: 1.75rem; /* 28px */
                }
            }

            @media (max-width: 480px) {
                & > h1 {
                    font-size: 1.875rem; /* 30px */
                    line-height: 2.25rem; /* 36px */
                }

                & > h2 {
                    margin-top: 9px;
                    font-size: 1rem; /* 16px */
                    line-height: 1.5rem; /* 24px */
                }
            }
        }
    }

    #search-box {
        display: flex;
        justify-content: center;
        width: 100%;
        margin-top: 50px;
        padding: 0 10px;
    }

    #search-buttons {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        margin-top: 26px;

        & > button {
            width: 100%;
            max-width: 139px;
            height: 42px;
            color: black;
            background-color: #f8f9fa;
            border-radius: 4px;
            margin: 0 7.5px;
            font-size: 0.875rem; /* 14px */
            line-height: 1.25rem; /* 20px */
            transition-duration: 300ms;

            &:hover {
                background-color: #d2d9df;
            }
        }
    }

    #results {
        display: flex;
        flex-direction: column;
        flex-grow: 1;
        width: 100%;
        height: 100%;
        padding: 4rem 10px; 
    }

    #results-loading {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin: auto;
    }

    #results-none {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin: auto;

        & > svg {
            color: red;
            fill: red;
        }

        & > p {
            margin-top: 16px;
            color: #94A3B8;
            font-size: 1.125rem; /* 18px */
            line-height: 1.75rem; /* 28px */

            & > span {
                color: white;
                font-weight: 600;
            }
        }
    }

    #results-show {
        & > span {
            display: block;
            max-width: 720px;
            margin: 0 auto;
            margin-top: 18px;

            &:first-child {
                margin-top: 0;
            }
        }
    }
</style>