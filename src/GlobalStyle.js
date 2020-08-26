import tw from 'twin.macro';
import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  *{
    ${tw`box-border p-0 m-0 `}
  }

  body{
    font-family: 'Nunito', sans-serif;
  }
`;
