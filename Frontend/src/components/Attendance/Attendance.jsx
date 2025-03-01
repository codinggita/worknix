
import './Attendance.css'

function Attendance() {
  return (
    <div className="not-found-container">
      <div className="not-found-content">
        <div className="not-found-icon">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z" />
          </svg>
        </div>
        <h1>404</h1>
        <h2>Page Under Development</h2>
        <p>We're currently working on this section of the website.</p>
        <p>Please check back soon for updates!</p>
        <button onClick={() => window.history.back()}>Go Back</button>
      </div>
    </div>
  )
}

export default Attendance