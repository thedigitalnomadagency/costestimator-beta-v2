import tw, { styled } from 'twin.macro';

export const InputFieldWrapper = styled.div`
  ${tw`mb-4`}

  .label {
    ${tw`block mb-2 text-base font-bold text-gray-700`}
  }

  .text-input {
    ${tw`w-full px-3 py-2 leading-tight text-gray-700 border border-black appearance-none focus:outline-none`}
  }
`;
