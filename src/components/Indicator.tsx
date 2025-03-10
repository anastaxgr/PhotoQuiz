interface IndicatorProp {
    index: number;
    total: number;
}
function Indicator({index,total} : IndicatorProp) {
  return (
    <div className="indicator">
        Ερώτηση {index} απο {total}
    </div>
  )
}

export default Indicator