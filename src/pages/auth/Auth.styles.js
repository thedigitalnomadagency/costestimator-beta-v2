import tw, { styled } from 'twin.macro';

export default styled.div`
  ${tw`min-h-screen flex items-center justify-center bg-gray-100 py-12 px-4 sm:px-6 lg:px-8`}

  .container {
    ${tw`max-w-md w-full`}
  }

  .text {
    ${tw`mt-6 text-center text-3xl leading-9 font-extrabold text-gray-900`}
  }

  .form {
    ${tw`mt-8`}
  }

  .input-box {
    ${tw`rounded-md shadow-sm`}
  }

  .input-outer {
    ${tw`mt-3`}
  }

  .input {
    ${tw`appearance-none rounded relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:border-green-500 focus:z-10 sm:text-sm sm:leading-5`}
  }

  .submit-container {
    ${tw`mt-6`}
  }

  .submit-btn {
    ${tw`relative w-full flex justify-center py-2 px-4 border border-transparent text-sm leading-5 font-medium rounded-md text-white bg-green-600 hover:bg-green-500 focus:outline-none focus:border-green-700 active:bg-indigo-700 transition duration-150 ease-in-out`}
  }

  .icon-box {
    ${tw`absolute left-0 inset-y-0 flex items-center pl-3`}
  }

  .icon {
    ${tw`h-5 w-5 text-green-500 group-hover:text-green-400 transition ease-in-out duration-150`}
  }

  .link-container {
    ${tw`mt-6 flex items-center justify-end`}
  }

  .link {
    ${tw`font-medium text-green-600 hover:text-green-500 focus:outline-none focus:underline transition ease-in-out duration-150`}
  }
`;
