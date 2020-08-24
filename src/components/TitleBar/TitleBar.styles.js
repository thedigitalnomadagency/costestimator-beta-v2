import tw, { styled } from 'twin.macro';

export const TitleBarWrapper = styled.nav`
  ${tw`flex items-center h-12 bg-black`}

  .title {
    ${tw`ml-10 font-medium text-white uppercase`}
  }
`;
