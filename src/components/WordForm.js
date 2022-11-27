function WordForm({words, updateMadLibWord}) {
  // render

  //(event) => {return updateMadLibWord(index, event.target.value)}

  const renderInputs = () => {
    return words.map((word, index) => { 
      return <input 
        key={word.key} 
        type="text" 
        placeholder={word.label} 
        onChange={(event)=> {return updateMadLibWord(index, event.target.value)}}
        />
    })}
  
  return (
    <div id="div-words">
      { renderInputs() }
    </div>
  )
}

export default WordForm
