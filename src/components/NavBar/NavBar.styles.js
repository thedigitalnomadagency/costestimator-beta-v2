import tw, { styled } from 'twin.macro';

export const NavBarWrapper = styled.nav`
  ${tw`flex bg-black justify-between`}
  height:7%;

  .title-box {
    ${tw`ml-10 h-full flex flex-col justify-center`}
  }
  .title {
    ${tw`font-medium text-white uppercase`}
  }

  .links {
    ${tw`flex h-full`}
  }

  .link {
    ${tw`flex flex-col justify-center mr-6`}
  }

  .icon {
    ${tw`text-white text-lg w-5`}
  }

  .active {
    ${tw`border-b-2 border-red-700`}
  }
`;
