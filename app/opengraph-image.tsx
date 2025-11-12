import { ImageResponse } from 'next/og';
import { personalInfo } from '@/lib/config';

// Image metadata
export const alt = `Portfolio - ${personalInfo.name}`;
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = 'image/png';

// Image generation
export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 128,
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
          fontFamily: 'system-ui, sans-serif',
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginBottom: '20px',
          }}
        >
          <div
            style={{
              width: '120px',
              height: '120px',
              borderRadius: '24px',
              background: 'rgba(255, 255, 255, 0.2)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '80px',
              fontWeight: 'bold',
              marginRight: '40px',
            }}
          >
            P
          </div>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            <div style={{ fontSize: '80px', fontWeight: 'bold' }}>
              {personalInfo.name}
            </div>
            <div
              style={{
                fontSize: '40px',
                opacity: 0.9,
                fontWeight: '400',
              }}
            >
              {personalInfo.title}
            </div>
          </div>
        </div>
        <div
          style={{
            fontSize: '28px',
            opacity: 0.8,
            marginTop: '20px',
          }}
        >
          Building exceptional digital experiences
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}

