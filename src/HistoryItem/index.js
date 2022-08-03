import './index.css'

const HistoryItem = props => {
  const {details, onDelete} = props
  const {timeAccessed, logoUrl, title, domainUrl, id} = details

  const deleteItem = () => {
    onDelete(id)
  }
  return (
    <li className="history-item">
      <p className="history-time">{timeAccessed}</p>
      <div className="history-card">
        <img className="history-logo" src={logoUrl} alt="domain logo" />
        <div className="history-text">
          <p className="title">{title}</p>
          <p className="domain-url">{domainUrl}</p>
        </div>
        <button
          testid="delete"
          onClick={deleteItem}
          className="btn"
          type="button"
        >
          <img
            src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
            alt="delete"
          />
        </button>
      </div>
    </li>
  )
}

export default HistoryItem
