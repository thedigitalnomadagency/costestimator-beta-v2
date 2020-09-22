import tw, { styled } from 'twin.macro';

export const SearchWrapper = styled.div`
  ${tw`w-full mb-3 lg:mb-8`}

  input {
    ${tw`w-full px-8 py-3 rounded-full shadow focus:outline-none`}
  }
`;
