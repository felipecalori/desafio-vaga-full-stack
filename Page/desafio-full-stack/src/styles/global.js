import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
}

:root{
    --background: #000000;
    --color-primary: #FF577F;
    --color-primary-focus: #FF427F;
    --color-primary-negative: #59323F;
    --grey-0: #F8F9FA;
    --grey-1: #868E96;
    --grey-2: #343B41;
    --grey-3: #212529;
    --grey-4: #121214;
    --sucess: #3FE864;
    --negative: #E83F5B;
}

body{
    background: var(--background);
    color: var(--grey-0);
}

body,input,button{
    font-family: 'Inter';
    font-size: 1rem;
}

h1,h2,h3,h4,h5,h6{
    font-family: 'Inter';
    font-weight: 700;
}

button{
    cursor: pointer;
}

a{
    text-decoration: none;
}
`;
