import { createGlobalStyle, css } from 'styled-components';

export default createGlobalStyle`${css`
  body {
    margin: 0;
    padding: 0;
    font-family: 'Roboto', sans-serif;
  }

  .container {
    display: flex;
    justify-content: center;
  }

  .loading,
  .not-found {
    color: gray;
    text-align: center;
  }

  .error {
    color: red;
    text-align: center;
  }
`}`;
