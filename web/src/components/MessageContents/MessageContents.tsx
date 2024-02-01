/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */

import { useState } from 'react'

const MessageContents = ({ height }) => {
  const [page, setPage] = useState('focused')
  const heightStyle = height ? { height } : {}

  return (
    <div className="message-contents" style={heightStyle}>
      <div className="message-pages-container">
        <div
          className={`msg-page-btn-cter ${page === 'focused' && 'active-btn'}`}
          onClick={() => {
            setPage('focused')
          }}
        >
          <button>Focused </button>
          <span></span>
        </div>
        <div
          className={`msg-page-btn-cter ${page === 'other' && 'active-btn'}`}
          onClick={() => {
            setPage('other')
          }}
        >
          <button>Other</button>
          <span></span>
        </div>
      </div>

      {/* {page === "focused" && <Focused height={height} ENDPOINT={ENDPOINT} />} */}
    </div>
  )
}

export default MessageContents
