import { ImageResponse } from 'next/og';
import { LOGO } from '@/config/common';

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = 'image/png';

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          display: 'flex',
          fontSize: 48,
          background: 'white',
          width: '100%',
          height: '100%',
          flexDirection: 'column',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'linear-gradient(135deg, #E8F0FE 0%, #FCE8E6 100%)',
            opacity: 0.8,
          }}
        />

        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            padding: '60px',
            position: 'relative',
            zIndex: 1,
            height: '100%',
          }}
        >
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              marginBottom: '40px',
            }}
          >
            <img
              src={LOGO}
              alt="GDSC Logo"
              style={{
                width: '120px',
                height: '120px',
                objectFit: 'contain',
              }}
            />
            <div
              style={{
                fontSize: '32px',
                color: '#1B66F6',
                padding: '12px 24px',
                background: 'rgba(255, 255, 255, 0.9)',
                borderRadius: '12px',
                boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                backdropFilter: 'blur(8px)',
                fontWeight: 'bold',
              }}
            >
              DSC NIT Rourkela
            </div>
          </div>

          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
              gap: '24px',
              textAlign: 'center',
            }}
          >
            <div
              style={{
                fontSize: '64px',
                fontWeight: 'bold',
                color: '#202124',
                lineHeight: 1.2,
                maxWidth: '900px',
              }}
            >
              Google Developer Groups
            </div>

            <div
              style={{
                fontSize: '36px',
                color: '#5F6368',
                maxWidth: '800px',
                lineHeight: 1.4,
              }}
            >
              NIT Rourkela
            </div>
          </div>

          <div
            style={{
              display: 'flex',
              justifyContent: 'flex-end',
              marginTop: 'auto',
            }}
          >
            <div
              style={{
                display: 'flex',
                gap: '8px',
                padding: '12px 24px',
                background: 'rgba(255, 255, 255, 0.9)',
                borderRadius: '12px',
                boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                backdropFilter: 'blur(8px)',
              }}
            >
              <div
                style={{
                  width: '24px',
                  height: '24px',
                  borderRadius: '50%',
                  background: '#4285F4',
                }}
              />
              <div
                style={{
                  width: '24px',
                  height: '24px',
                  borderRadius: '50%',
                  background: '#EA4335',
                }}
              />
              <div
                style={{
                  width: '24px',
                  height: '24px',
                  borderRadius: '50%',
                  background: '#FBBC05',
                }}
              />
              <div
                style={{
                  width: '24px',
                  height: '24px',
                  borderRadius: '50%',
                  background: '#34A853',
                }}
              />
            </div>
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
