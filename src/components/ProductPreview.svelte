<script lang="ts">
    import type { FoodProduct } from "@lib/types/foodproduct.type";
    import Missing from "@components/icons/Missing.svelte";
    import Ellipse from "@components/icons/Ellipse.svelte";
    export let product: FoodProduct;
</script>

<details>
    <summary>
        { #if product.image }
            <img src={ product.image } alt={ product.name }>
        { :else }
            <img src="/assets/images/no_image.png" alt={ product.name }>
        { /if }
        <div>
            <header>
                <a href="https://world.openfoodfacts.org/product/{ product.code }"
                target="_blank">
                    { product.name }
                </a>
                <h2>
                    <span>Serving Size</span> 
                    { #if product.quantity }
                        { product.quantity + "g" }
                    { :else }
                        <span class="missing-value">
                            Missing quantity
                        </span>
                    { /if }
                </h2>
                <h2><span>Barcode</span> { product.code } (EAN / EAN-13)</h2>
            </header>
            <p>» Click to view available information</p>
        </div>
    </summary>
    <section>
        <div class="product-characteristics">
            <header>
                <h1>Product Characteristics</h1>
            </header>
            <ul>
                <li>
                    <span>Quantity</span> 
                    { #if product.quantity }
                        { product.quantity + "g" }
                    { :else }
                        <span class="missing-value">
                            <Missing width="24" height="24"/> 
                            Missing quantity
                        </span>
                    { /if }
                </li>
                <li>
                    Packaging 
                    { #if product.packaging }
                        <span>{ product.packaging }</span>
                    { :else }
                        <span class="missing-value">
                            <Missing width="24" height="24"/> 
                            Missing packaging
                        </span>
                    { /if }
                </li>
                <li>
                    Brands 
                    { #if product.brands }
                        <span>{ product.brands }</span>
                    { :else }
                        <span class="missing-value">
                            <Missing width="24" height="24"/> 
                            Missing brands
                        </span>
                    { /if }
                </li>
                <li>
                    Categories 
                    { #if product.categories }
                        <span>{ product.categories }</span>
                    { :else }
                        <span class="missing-value">
                            <Missing width="24" height="24"/> 
                            Missing categories
                        </span>
                    { /if }
                </li>
                <li>
                    Labels, Certifications, Awards 
                    { #if product.labels }
                        <span>{ product.labels }</span>
                    { :else }
                        <span class="missing-value">
                            <Missing width="24" height="24"/> 
                            Missing labels
                        </span>
                    { /if }
                </li>
                <li>
                    Product page of the official site of the producer 
                    { #if product.link }
                        <a href={ product.link } 
                        target="_blank">
                            { product.link }
                        </a>
                    { :else }
                        <span class="missing-value">
                            <Missing width="24" height="24"/> 
                            Missing link
                        </span>
                    { /if }
                </li>
                <li>
                    Stores 
                    { #if product.stores }
                        <span>{ product.stores }</span>
                    { :else }
                        <span class="missing-value">
                            <Missing width="24" height="24"/> 
                            Missing stores
                        </span>
                    { /if }
                </li>
                <li>
                    Countries where sold 
                    { #if product.countries }
                        <span>{ product.countries }</span>
                    { :else }
                        <span class="missing-value">
                            <Missing width="24" height="24"/> 
                            Missing countries
                        </span>
                    { /if }
                </li>
            </ul>
        </div>
        <div class="splitter">
            <div class="product-ingredients">
                <header>
                    <h1>Ingredients</h1>
                    <h2>Ingredients are listed in order of importance</h2>
                </header>
                <ul>
                    <li>
                        Ingredients list 
                        { #if product.ingredients }
                            <span>{ product.ingredients }</span>
                        { :else }
                            <span class="missing-value">
                                <Missing width="24" height="24"/> 
                                Missing ingredients
                            </span>
                        { /if }
                    </li>
                    <li>
                        Substances or products causing allergies or intolerances 
                        { #if product.allergens }
                            <span class="missing-value">
                                <Missing width="24" height="24"/> 
                                Missing substances/products
                            </span>
                        { :else }
                            <span>{ product.allergens }</span>
                        { /if }
                    </li>
                </ul>
            </div>
            <div class="nutrition-facts">
                <header>
                    <h1>Nutrition Facts</h1>
                </header>
                <ul>
                    <li class="nutriscore">
                        <span>NutriScore color nutrition grade</span>
                        <section>
                            <span class:score={ product.grade === "a" }>A</span>
                            <span class:score={ product.grade === "b" }>B</span>
                            <span class:score={ product.grade === "c" }>C</span>
                            <span class:score={ product.grade === "d" }>D</span>
                            <span class:score={ product.grade === "e" }>E</span>
                        </section>
                    </li>
                    <li class="nutrient-levels">
                        <span>Nutrient levels for 100g</span>
                        <section>
                            <p 
                            class:high={ product.fat === "high" }
                            class:moderate={ product.fat === "moderate" }
                            class:low={ product.fat === "low" }>
                                <Ellipse/>
                                <span>Fat</span> 
                                    in { product.fat ? product.fat : "unknown" } quantity
                            </p>
                            <p 
                            class:high={ product.saturated === "high" }
                            class:moderate={ product.saturated === "moderate" }
                            class:low={ product.saturated === "low" }>
                                <Ellipse/>
                                <span>Saturated Fat</span> in { product.saturated ? product.saturated : "unknown" } quantity
                            </p>
                            <p 
                            class:high={ product.sugars === "high" }
                            class:moderate={ product.sugars === "moderate" }
                            class:low={ product.sugars === "low" }>
                                <Ellipse/>
                                <span>Sugars</span> in { product.sugars ? product.sugars : "unknown" } quantity
                            </p>
                            <p 
                            class:high={ product.salt === "high" }
                            class:moderate={ product.salt === "moderate" }
                            class:low={ product.salt === "low" }>
                                <Ellipse/>
                                <span>Salt</span> in { product.salt ? product.salt : "unknown" } quantity
                            </p>
                        </section>
                    </li>
                </ul>
            </div>
        </div>
    </section>
</details>

<style lang="scss">
    details {
        & > summary {
            display: flex;
            max-width: 720px;
            height: 135px;
            padding: 5px;
            background-color: white;
            border: 2px solid #DFE1E5;
            border-radius: 4px;
            color: black;
            list-style: none;
            cursor: pointer;

            & > img {
                width: 100%;
                height: 100%;
                max-width: 143px;
                max-height: 121px;
                margin-right: 9px;
                object-fit: cover;
                background-color: #efefef;
                border-radius: 4px;
            }

            & > div {
                display: flex;
                flex-direction: column;
                width: 100%;
                overflow: hidden;

                & > header {
                    flex-grow: 1;
                }

                & > header > a {
                    display: block;
                    width: fit-content;
                    margin-bottom: 6.5px;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    white-space: nowrap;
                    font-size: 1.125rem; /* 18px */
                    line-height: 1.75rem; /* 28px */
                    transition-duration: 300ms;

                    &:hover {
                        color: #059669;
                        text-decoration-line: underline;
                    }
                }

                & > header > h2 {
                    font-size: 0.75rem; /* 12px */
                    line-height: 1rem; /* 16px */
                    margin: 3.5px 0;

                    & > span {
                        margin-right: 9px;
                        font-weight: 700;
                    }
                }

                & > p {
                    color: #94A3B8;
                    font-size: 0.75rem; /* 12px */
                    line-height: 1rem; /* 16px */
                    transition-duration: 300ms;
                    text-align: right;
                }
            }

            &:hover > div > p {
                color: #059669;
            }
        }

        & > section {
            margin-top: 9px;
            display: flex;
            max-width: 720px;
            height: fit-content;
            padding: 5px;
            background-color: white;
            border: 2px solid #DFE1E5;
            border-radius: 4px;
            color: black;

            & > div.splitter {
                width: 50%;
            }
        }

        &[open] summary ~ section {
            animation: drop 300ms ease-in-out;
        }

        @keyframes drop {
            0% { opacity: 0; transform: translateY(-10px) }
            100% { opacity: 1; transform: translateY(0) }
        }
    }

    .product-characteristics {
        width: 50%;

        & > header > h1 {
            font-size: 1.125rem; /* 18px */
            line-height: 1.75rem; /* 28px */
        }

        & > ul {
            font-size: 0.875rem; /* 14px */
            line-height: 1.25rem; /* 20px */
            margin-top: 13px;

            & > li {
                margin: 16px 0;
                font-weight: 700;
            }

            & > li > span, a {
                display: block;
                margin-left: 14px;
                font-weight: 400;

                & > :global(svg) {
                    display: inline;
                }
            }

            & > li > a {
                color: #3b82f6;
                
                &:hover {
                    text-decoration: underline;
                }
            }

            & > li:first-child {
                margin-top: 0;
                font-weight: 400;
                
                & > span {
                    display: inline;
                    margin-left: 0;
                    font-weight: 700;
                }
            }

            & > li:last-child {
                margin-bottom: 0;
            }
        }
    }

    .product-ingredients {
        & > header > h1 {
            font-size: 1.125rem; /* 18px */
            line-height: 1.75rem; /* 28px */
        }

        & > header > h2 {
            margin-top: 5px;
            font-size: 0.875rem; /* 14px */
            line-height: 1.25rem; /* 20px */
        }

        & > ul {
            margin-top: 13px;
            font-size: 0.875rem; /* 14px */
            line-height: 1.25rem; /* 20px */

            & > li {
                margin: 16px 0;
                font-weight: 700;
            }

            & > li > span {
                display: block;
                margin-left: 14px;
                font-weight: 400;

                & > :global(svg) {
                    display: inline;
                }
            }

            & > li:first-child {
                margin-top: 0;
            }

            & > li:last-child {
                margin-bottom: 0;
            }
        }
    }

    .nutrition-facts {
        margin-top: 32px;

        & > header > h1 {
            font-size: 1.125rem; /* 18px */
            line-height: 1.75rem; /* 28px */
        }

        & > ul {
            margin-top: 13px;
            font-size: 0.875rem; /* 14px */
            line-height: 1.25rem; /* 20px */

            & > li {
                margin: 20px 0;
            }

            & > li > span {
                font-weight: 700;
            }

            & > li:first-child {
                margin-top: 0;
            }

            & > li:last-child {
                margin-bottom: 0;
            }
        }
    }

    .nutriscore {
        & > section {
            display: flex;
            align-items: center;
            margin-top: 16px;
        }

        & > section > span {
            height: fit-content;
            color: rgba(255, 255, 255, 0.5);
            font-weight: 700;
            font-size: 3rem; /* 48px */
            line-height: 1;
            padding: 13px 13px;
            cursor: default;
            
            &:nth-child(1) {
                background-color: #065F46;
                padding: 13px 12px;
            }

            &:nth-child(2) {
                background-color: #10B981;
                padding: 13px 14px;
            }

            &:nth-child(3) {
                background-color: #FBBF24;
                padding: 13px 12px;
            }

            &:nth-child(4) {
                background-color: #D97706;
            }

            &:nth-child(5) {
                background-color: #DC2626;
                padding: 13px 16px;
            }

            &.score {
                padding: 26px 10px;
                color: rgba(255, 255, 255, 1);
                border: 4px solid white;
                border-radius: 999px;
            }
        }
    }

    .nutrient-levels {
        & > section {
            margin-top: 16px;

            & > p {
                display: flex;
                margin: 16px 0;
                fill: #4B5563;
                font-size: 0.875rem; /* 14px */
                line-height: 1.25rem; /* 20px */

                & > span {
                    font-weight: 700;
                    margin: 0 5px;
                }

                &:first-child {
                    margin-top: 0;
                }

                &:last-child {
                    margin-bottom: 0;
                }

                &.high {
                    fill: #DC2626;
                }

                &.moderate {
                    fill: #fbbf24;
                }

                &.low {
                    fill: #059669;
                }
            }
        }
    }

    .missing-value {
        color: #DC2626;
        font-weight: 400 !important;
        fill: #DC2626;

        & > :global(svg) {
            margin-right: -3px;
        }
    }
</style>