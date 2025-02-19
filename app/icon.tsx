import { ImageResponse } from 'next/og'
 
// Route segment config
export const runtime = 'edge'
 
// Image metadata
export const size = {
  width: 32,
  height: 32,
}
 
// Image generation
export default function Icon() {
  return new ImageResponse(
    (
      // ImageResponse JSX element
      <div
        style={{
          fontSize: 24,
          background: 'transparent',
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fillRule="evenodd" clipRule="evenodd" d="M16 31C24.2843 31 31 24.2843 31 16C31 7.71573 24.2843 1 16 1C7.71573 1 1 7.71573 1 16C1 24.2843 7.71573 31 16 31ZM22.9646 20.6811L23.3124 20.1619L22.2739 19.4662L21.926 19.9855C20.6971 21.8201 18.6071 23.0257 16.2357 23.0257C13.8688 23.0257 11.7822 21.8246 10.5523 19.9958L10.2036 19.4772L9.16628 20.1747L9.51506 20.6934C10.9672 22.8527 13.4352 24.2757 16.2357 24.2757C19.0415 24.2757 21.5135 22.8474 22.9646 20.6811ZM14.1667 12.5833C14.1667 14.0101 13.0101 15.1667 11.5833 15.1667C10.1566 15.1667 9 14.0101 9 12.5833C9 11.1566 10.1566 10 11.5833 10C13.0101 10 14.1667 11.1566 14.1667 12.5833ZM20.8836 15.1667C22.3104 15.1667 23.467 14.0101 23.467 12.5833C23.467 11.1566 22.3104 10 20.8836 10C19.4569 10 18.3003 11.1566 18.3003 12.5833C18.3003 14.0101 19.4569 15.1667 20.8836 15.1667Z" fill="#EADA4D"/>
        </svg>
      </div>
    ),
    { ...size }
  )
}