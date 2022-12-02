import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    /* http://meyerweb.com/eric/tools/css/reset/ 
    v2.0 | 20110126
    License: none (public domain)
    */

    html, body, div, span, applet, object, iframe,
    h1, h2, h3, h4, h5, h6, p, blockquote, pre,
    a, abbr, acronym, address, big, cite, code,
    del, dfn, em, img, ins, kbd, q, s, samp,
    small, strike, strong, sub, sup, tt, var,
    b, u, i, center,
    dl, dt, dd, ol, ul, li,
    fieldset, form, label, legend,
    table, caption, tbody, tfoot, thead, tr, th, td,
    article, aside, canvas, details, embed, 
    figure, figcaption, footer, header, hgroup, 
    menu, nav, output, ruby, section, summary,
    time, mark, audio, video {
        margin: 0;
        padding: 0;
        border: 0;
        font-size: 100%;
        font: inherit;
        vertical-align: baseline;
    }
    /* HTML5 display-role reset for older browsers */
    article, aside, details, figcaption, figure, 
    footer, header, hgroup, menu, nav, section {
        display: block;
    }
    body {
        line-height: 1;
    }
    ol, ul {
        list-style: none;
    }
    blockquote, q {
        quotes: none;
    }
    blockquote:before, blockquote:after,
    q:before, q:after {
        content: '';
        content: none;
    }
    table {
        border-collapse: collapse;
        border-spacing: 0;
    }

@import url('https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:wght@400;500;600&family=Inter:wght@400;500;600;700&family=Nunito:wght@700&family=Open+Sans:wght@400;500;600;700&family=Poppins:wght@400;500;600;700&display=swap');

:root {
    --primary: #ff577f;
    --primary-focus: #FF427F;
    --primary-negative: #59323f;
    --grey4: #121214;
    --grey3: #212529;
    --grey2: #343B41;
    --grey1: #868e96;
    --grey0: #F8F9FA;
    --white: #fff;
    --success: #3fe864;
    --negative: #e83f5b;

    --family: 'Inter', sans-serif;
    --title1: 1.125rem;
    --title2: 1rem;
    --title3: 0.875rem;
    --headline: 0.75rem;

    --bold: 700;
    --semibold: 600;
    --medium: 500;
    --regular: 400;
    --italic: italic;

    --radius: 4px;
    --box-shadow: 0px 4px 40px -10px rgba(0, 0, 0, 0.25);
}

body {
  background-color: var(--grey4);
  font-family: var(--family);
}

.toast {
  background-color: var(--grey2);
  font-size: var(--title3);
  font-weight: var(--bold);
  font-family: var(--family);
  color: var(--grey0);
}

.page-size {
  height: 100%;
}

.form-container {
  width: 30%;
  padding: 50px 0px;
}

@media (max-width: 975px) {
  .form-container{
    width: 40%;
  }
}

@media (max-width: 850px) {
  .form-container{
    width: 60%;
  }
}

@media (max-width: 450px) {
  .form-container{
    width: 90%;
  }
}

.form-container img {
  scale: 50%;
}

.form-header {
  width: 100%;
}

.form-header > img {
  scale: 100%;
}

.page-container {
  width: 60%;
  margin: 0 auto;
}

.flex {
    display: flex;
}
  
.items-center {
  align-items: center;
}

.items-start {
  align-items: flex-start;
}

.items-end {
  align-items: flex-end;
}

.justify-center {
  justify-content: center;
}

.justify-between {
  justify-content: space-between;
}

.justify-around {
  justify-content: space-around;
}

.justify-end {
  justify-content: flex-end;
}

.justify-start {
  justify-content: flex-start;
}

.flex-col {
  flex-direction: column;
}

.wrap {
  flex-wrap: wrap;
}
`

export default GlobalStyle