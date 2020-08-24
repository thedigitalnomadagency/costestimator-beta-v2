import tw, { styled } from 'twin.macro';

export const HomeWrapper = styled.div`
  ${tw`grid grid-rows-2 lg:grid-rows-1 lg:grid-cols-2`};
  height: 95vh;

  .form-area {
    ${tw`p-4 lg:p-12`}
  }

  .btn {
    ${tw`px-4 py-2 font-bold text-white bg-black outline-none hover:bg-gray-700`}
  }

  .map-area {
    ${tw`border`}
  }
`;
