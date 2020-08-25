import tw, { styled } from 'twin.macro';

export const SearchWrapper = styled.div`
  ${tw`w-full mb-3`}

  input {
    ${tw`w-full px-8 py-3 rounded-md shadow md:w-3/12 focus:outline-none`}
  }
`;
