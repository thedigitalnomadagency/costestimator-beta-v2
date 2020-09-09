import tw, { styled } from 'twin.macro';

export const MapWrapper = styled.div`
  ${tw`relative h-auto`}
  height: 93%;

  .form {
    ${tw`absolute z-10 flex flex-col items-center w-full p-4 `}
  }

  .results {
    ${tw`absolute bottom-0 z-20 w-auto md:h-auto p-8 mt-40 mb-5 ml-5 bg-white rounded-md md:top-0 max-h-screen`}
  }

  .text {
    ${tw`text-lg text-gray-700`}
  }
`;

export const mapTheme = [
  {
    featureType: 'administrative',
    elementType: 'labels.text.fill',
    stylers: [
      {
        color: '#444444',
      },
    ],
  },
  {
    featureType: 'landscape',
    elementType: 'all',
    stylers: [
      {
        color: '#f2f2f2',
      },
    ],
  },
  {
    featureType: 'poi',
    elementType: 'all',
    stylers: [
      {
        visibility: 'off',
      },
    ],
  },
  {
    featureType: 'road',
    elementType: 'all',
    stylers: [
      {
        saturation: -100,
      },
      {
        lightness: 45,
      },
    ],
  },
  {
    featureType: 'road.highway',
    elementType: 'all',
    stylers: [
      {
        visibility: 'simplified',
      },
    ],
  },
  {
    featureType: 'road.arterial',
    elementType: 'labels.icon',
    stylers: [
      {
        visibility: 'off',
      },
    ],
  },
  {
    featureType: 'transit',
    elementType: 'all',
    stylers: [
      {
        visibility: 'off',
      },
    ],
  },
  {
    featureType: 'water',
    elementType: 'all',
    stylers: [
      {
        color: '#46bcec',
      },
      {
        visibility: 'on',
      },
    ],
  },
];
