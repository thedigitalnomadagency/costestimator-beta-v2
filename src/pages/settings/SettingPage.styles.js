import tw, { styled } from 'twin.macro';
// ${tw``}
export const SettingsWrapper = styled.div`
  ${tw`container mx-auto mt-10`};

  .form {
    ${tw`w-full md:flex `};
  }

  .input-wrapper {
    ${tw`w-full md:w-1/2 px-3 mb-6 md:mb-0`}
  }
  .label {
    ${tw`block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2`}
  }
  .input {
    ${tw`appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white`}
  }
`;
