import tw, { styled } from 'twin.macro';

export default styled.div`
  .message {
    ${tw` md:hidden`}
  }
  .app {
    ${tw`hidden md:grid md:grid-rows-2 xl:grid-cols-2  xl:grid-rows-1`}
    height: 100vh;
  }

  .config-link {
    ${tw` flex justify-between items-center`}
    width: 6.5rem
  }

  .icon {
    ${tw`h-5 w-5`}
  }

  .form-container {
    ${tw`bg-green-700`}
  }

  .title-wrapper {
    ${tw`flex justify-between py-5 px-5 text-white text-lg`}
  }

  .form-wrapper {
    ${tw`flex flex-col justify-center items-center px-24 py-2 lg:py-16`}
  }

  .price-wrapper {
    ${tw`flex justify-between items-center px-24 py-3`}
  }

  .amount-box {
    ${tw`flex flex-col items-center text-white w-32 h-32`}
  }

  .amount-box h3 {
    ${tw`text-lg`}
  }

  .amount-box h1 {
    ${tw`text-6xl`}
  }

  .divide {
    ${tw`h-1 bg-green-500 w-3/4`}
  }

  .input-box {
    ${tw`flex flex-col items-center text-green-500 w-auto h-32`}
  }

  .input-box h3 {
    ${tw`text-lg`}
  }

  .input {
    ${tw`w-32 h-16 mt-3 text-4xl p-2 outline-none`}
  }

  .controls-box {
    ${tw`flex flex-col items-center text-white w-auto h-32`}
  }

  .control-btn {
    ${tw`bg-green-500 py-1 w-10 mb-3 text-3xl font-extrabold outline-none`}
  }

  .summary-wrapper {
    ${tw`text-white`}
  }

  .summary-wrapper h1 {
    ${tw`mx-5 text-sm`}
  }

  .summary {
    ${tw`flex mt-3`}
  }

  .summary h1 {
    ${tw`mx-4`}
  }

  .price-btn {
    ${tw`outline-none border border-white text-white rounded w-48 font-bold py-2 uppercase tracking-wider`}
  }

  .footer {
    ${tw`flex justify-end px-10 text-green-500`}
  }
`;
