import { createGlobalStyle } from "styled-components"

const GlobalTheme = createGlobalStyle`
    html{
        box-sizing:border-box;
        font-size:10px;
        scroll-behavior:smooth;
    }
    *, *:before,*:after{
        box-sizing:inherit;
    }
    body{
        font-size:100%;
    }
`

export default GlobalTheme
