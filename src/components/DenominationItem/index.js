import './index.css'

const DenominationItem = props => {
  const {denominationsList} = props
  const {value} = denominationsList
  ;<button type="button" className="button">
    {value}
  </button>
}

export default DenominationItem
