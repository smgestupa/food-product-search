<nav>
    <div>
        <a href="/">
            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" width="34" height="34" viewBox="0 0 1080 1080" xml:space="preserve">
            <rect x="0" y="0" width="100%" height="100%" fill="transparent"></rect>
            <g transform="matrix(1 0 0 1 540 540)" id="95cc4fb5-cd00-46cc-904f-36882a9ca7ce"  >
            <rect style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-dashoffset: 0; stroke-linejoin: miter; stroke-miterlimit: 4; fill: rgb(255,255,255); fill-opacity: 0; fill-rule: nonzero; opacity: 1;" vector-effect="non-scaling-stroke"  x="-540" y="-540" rx="0" ry="0" width="1080" height="1080" />
            </g>
            <g transform="matrix(0 0 0 0 0 0)" id="72f054c4-5976-4ebd-8bf5-ff3dbb765d81"  >
            </g>
            <g transform="matrix(26.45 0 0 26.45 540 540)"  >
            <path style="stroke: rgb(0,0,0); stroke-opacity: 0; stroke-width: 0; stroke-dasharray: none; stroke-linecap: butt; stroke-dashoffset: 0; stroke-linejoin: miter; stroke-miterlimit: 4; fill: rgb(255,229,0); fill-rule: nonzero; opacity: 1;" vector-effect="non-scaling-stroke"  transform=" translate(-19.58, -19.53)" d="M 10.0107 39.0535 C 7.13161 38.8487 5.62645 37.8109 4.85338 36.6592 C 5.00155 33.8554 5.43084 30.3632 6.63731 27.1939 C 7.32897 25.379 8.31054 23.736 9.51466 22.5283 C 10.8312 21.0887 12.0477 19.981 13.2734 19.0676 C 15.6928 17.2757 17.8153 16.4951 18.487 16.2205 C 19.1664 15.9584 20.3846 15.4657 21.8587 14.9171 C 23.3281 14.4139 25.1079 13.6857 26.6271 12.7954 C 29.7417 11.0923 32.3233 9.1704 32.3192 9.1697 C 32.3244 9.1704 29.5642 10.7002 26.3571 11.97 C 24.7389 12.6598 23.0856 13.1133 21.5424 13.4705 C 20.0238 13.8611 18.7412 14.2588 18.0349 14.532 C 16.7142 15.0834 8.80133 17.6154 4.75967 26.103 C 3.84546 28.2709 3.27209 30.5135 2.90078 32.6149 C 1.98715 32.0992 0.849796 31.1012 0.53998 29.2541 C 0 26.0359 0.300445 16.3791 9.05141 11.0147 C 17.803 5.65096 27.5736 6.723 32.2495 5.14988 C 36.9248 3.57675 38.7831 0 38.7831 0 C 38.7831 0 34.8867 36.4069 10.0107 39.0535 z" stroke-linecap="round" />
            </g>
            </svg>
            <h1 href="/">Food Product Search</h1>
        </a>
        <a id="github-icon"
        aria-label="GitHub"
        href="https://github.com/laazyCmd/food-product-search"
        target="_blank"
        rel="noreferrer">
            <svg xmlns="http://www.w3.org/2000/svg" class="ionicon" viewBox="0 0 512 512" width="26" height="26"><path d="M256 32C132.3 32 32 134.9 32 261.7c0 101.5 64.2 187.5 153.2 217.9a17.56 17.56 0 003.8.4c8.3 0 11.5-6.1 11.5-11.4 0-5.5-.2-19.9-.3-39.1a102.4 102.4 0 01-22.6 2.7c-43.1 0-52.9-33.5-52.9-33.5-10.2-26.5-24.9-33.6-24.9-33.6-19.5-13.7-.1-14.1 1.4-14.1h.1c22.5 2 34.3 23.8 34.3 23.8 11.2 19.6 26.2 25.1 39.6 25.1a63 63 0 0025.6-6c2-14.8 7.8-24.9 14.2-30.7-49.7-5.8-102-25.5-102-113.5 0-25.1 8.7-45.6 23-61.6-2.3-5.8-10-29.2 2.2-60.8a18.64 18.64 0 015-.5c8.1 0 26.4 3.1 56.6 24.1a208.21 208.21 0 01112.2 0c30.2-21 48.5-24.1 56.6-24.1a18.64 18.64 0 015 .5c12.2 31.6 4.5 55 2.2 60.8 14.3 16.1 23 36.6 23 61.6 0 88.2-52.4 107.6-102.3 113.3 8 7.1 15.2 21.1 15.2 42.5 0 30.7-.3 55.5-.3 63 0 5.4 3.1 11.5 11.4 11.5a19.35 19.35 0 004-.4C415.9 449.2 480 363.1 480 261.7 480 134.9 379.7 32 256 32z"/></svg>
        </a>
    </div>
</nav>

<style lang="scss">
    nav {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 60px;
        padding: 0 1rem;
        background-color: #059669;

        & > div {
            display: flex;
            align-items: center;
            justify-content: space-between;;
            width: 100%;
            max-width: 1550px;
        }

        & > div > a {
            display: flex;
            align-items: center;

            & > svg {
                margin-right: 10px;
            }

            & > h1 {
                font-size: 1.25rem; /* 20px */
                line-height: 1.75rem; /* 28px */
            }

            @media (max-width: 720px) {
                & > h1 {
                    font-size: 1.125rem; /* 18px */
                    line-height: 1.75rem; /* 28px */
                }
            }

            @media (max-width: 480px) {
                & > h1 {
                    font-size: 1rem; /* 16px */
                    line-height: 1.5rem; /* 24px */
                }
            }
        }
    }

    #github-icon {
        fill: #FFFFFF;
        opacity: 0.75;
        transition-duration: 300ms;

        &:hover {
            opacity: 1;
        }
    }
</style>