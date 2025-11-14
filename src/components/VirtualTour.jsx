import React, { useState } from 'react'
import { Pannellum } from 'react-pannellum'
import { X, Maximize2 } from 'lucide-react'
import 'pannellum/build/pannellum.css'

const VirtualTour = ({ tourUrl, carName, onClose }) => {
  const [isFullscreen, setIsFullscreen] = useState(false)

  const toggleFullscreen = () => {
    setIsFullscreen(!isFullscreen)
  }

  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: 'rgba(0, 0, 0, 0.95)',
        zIndex: 10000,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '20px'
      }}
      onClick={onClose}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          width: isFullscreen ? '100%' : 'min(1200px, 100%)',
          height: isFullscreen ? '100%' : 'min(700px, 90vh)',
          background: 'var(--bg-card)',
          borderRadius: isFullscreen ? '0' : '16px',
          overflow: 'hidden',
          position: 'relative',
          boxShadow: '0 20px 60px rgba(0,0,0,0.5)'
        }}
      >
        {/* Header */}
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          padding: '20px',
          background: 'linear-gradient(to bottom, rgba(0,0,0,0.7), transparent)',
          zIndex: 1,
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}>
          <div>
            <h2 style={{
              fontSize: '20px',
              fontWeight: '700',
              color: 'white',
              marginBottom: '4px'
            }}>
              360° Virtual Tour
            </h2>
            <p style={{
              fontSize: '14px',
              color: 'rgba(255,255,255,0.8)'
            }}>
              {carName}
            </p>
          </div>
          <div style={{ display: 'flex', gap: '12px' }}>
            <button
              onClick={toggleFullscreen}
              style={{
                width: '40px',
                height: '40px',
                borderRadius: '8px',
                border: 'none',
                background: 'rgba(255,255,255,0.2)',
                backdropFilter: 'blur(10px)',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                transition: 'all 0.2s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'rgba(255,255,255,0.3)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'rgba(255,255,255,0.2)'
              }}
            >
              <Maximize2 size={20} color="white" />
            </button>
            <button
              onClick={onClose}
              style={{
                width: '40px',
                height: '40px',
                borderRadius: '8px',
                border: 'none',
                background: 'rgba(255,255,255,0.2)',
                backdropFilter: 'blur(10px)',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                transition: 'all 0.2s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'rgba(255,255,255,0.3)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'rgba(255,255,255,0.2)'
              }}
            >
              <X size={20} color="white" />
            </button>
          </div>
        </div>

        {/* 360° Viewer */}
        <Pannellum
          width="100%"
          height="100%"
          image={tourUrl}
          pitch={10}
          yaw={180}
          hfov={110}
          autoLoad
          showZoomCtrl={true}
          mouseZoom={true}
          autoRotate={-2}
          compass={true}
          showControls={true}
          showFullscreenCtrl={false}
        >
          {/* You can add hotspots here in the future */}
        </Pannellum>

        {/* Instructions */}
        <div style={{
          position: 'absolute',
          bottom: '20px',
          left: '50%',
          transform: 'translateX(-50%)',
          padding: '12px 20px',
          background: 'rgba(0,0,0,0.7)',
          backdropFilter: 'blur(10px)',
          borderRadius: '8px',
          color: 'white',
          fontSize: '13px',
          whiteSpace: 'nowrap'
        }}>
          🖱️ Drag to look around • Scroll to zoom • Auto-rotating
        </div>
      </div>
    </div>
  )
}

export default VirtualTour
