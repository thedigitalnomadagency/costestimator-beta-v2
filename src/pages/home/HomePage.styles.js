import tw, { styled } from 'twin.macro';

export const HomeWrapper = styled.div`
  ${tw`relative grid`};
  height: 95vh;

  .results {
    ${tw`absolute bottom-0 z-50 w-56 h-40 p-4 m-2 bg-white rounded md:top-0`}
  }
`;
