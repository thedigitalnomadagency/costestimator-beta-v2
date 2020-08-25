import tw, { styled } from 'twin.macro';

export const InputFieldWrapper = styled.div`
  ${tw`relative z-40 flex justify-center w-full h-auto mt-5`}

  .input-field {
    ${tw`w-6/12 px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none`}
  }
`;
