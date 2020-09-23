import tw, { styled } from 'twin.macro';
// ${tw``}
export const SettingsWrapper = styled.div`
  ${tw`container mx-auto mt-10`};

  .form {
    ${tw`hidden w-full md:flex md:mb-6`};
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

  .btn-wrapper {
    ${tw`px-3 flex justify-between`}
  }

  .btn {
    ${tw`bg-black text-white font-semibold  py-2 px-4 uppercase text-xs tracking-widest outline-none rounded`}
  }

  .btn-red {
    ${tw`bg-red-700`}
  }

  .config-wrapper {
    ${tw` mt-6 mx-4`}
  }

  .config {
    ${tw`flex justify-between border border-black mb-4 p-2 mx-2 rounded`}
  }

  .delete {
    ${tw`h-4 w-4 text-red-700 outline-none`}
  }

  .back {
    ${tw`mb-8 mx-4`}
  }

  .back-btn {
    ${tw`text-white bg-green-500 rounded font-bold py-2 px-4 `}
  }
`;
