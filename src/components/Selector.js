function Selector({data, setSelectedMadLib}) {
  // render
  const renderChoices = () => {
    return data.map((story, index) => {
      return <option key={index} value={index}>{story.title}</option>
    }
  )}

  return (
    <div id="div-selector">
      <span>Select Story: </span>
      <select onChange={(event)=>setSelectedMadLib(data[event.target.value])}>
        { renderChoices() }
      </select>
    </div>
  )
}

export default Selector