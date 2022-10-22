<script lang="ts">
    export let productTerm: string = "", disableInput: boolean = false;
</script>

<div class:disabled={ disableInput }>
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#9AA0A6" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-search"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
    <input type="text" 
    placeholder="Search products here"
    bind:value={ productTerm }
    disabled={ disableInput }>
</div>

<style lang="scss">
    div {
        display: flex;
        align-items: center;
        width: 100%;
        max-width: 720px;
        height: 44px;
        padding: 0 1rem;
        background-color: white;
        border: 2px solid #DFE1E5;
        border-radius: 24px;
        transition-duration: 300ms;

        & > svg {
            margin-right: 13px;
            transition-duration: 300ms;
        }

        & > input {
            width: 100%;
            height: 100%;
            outline: none;
            background-color: transparent;
            color: black;
            font-size: 0.875rem; /* 14px */
            line-height: 1.25rem; /* 20px */

            &::placeholder {
                color: #9AA0A6;
            }
        }

        &:hover, &:focus-within {
            border-color: #059669;

            & > svg {
                stroke: #059669;
            }
        }

        &.disabled {
            cursor: no-drop;

            & > svg, input {
                cursor: no-drop;
            }
        }
    }
</style>