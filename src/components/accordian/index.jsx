import React, {useState} from 'react'
import data from './data'
import './styles.scss'
//single selection
//multiple selection

const Accordian = () => {
    const [selected, setSelected] = useState(null)
    const [multiSelection, setMultiSelection] = useState(false)
    const [multiple, setMultiple] = useState([])

    function handleSingleSelection(getCurrentId){
        setSelected(getCurrentId === selected ? null : getCurrentId)
    }

    function handleMultiSelection(getCurrentId){
        let copyMultiple = [...multiple];
        const findIndexOfCurrentId = copyMultiple.indexOf(getCurrentId)

        if(findIndexOfCurrentId === -1) copyMultiple.push(getCurrentId);
        else copyMultiple.splice(findIndexOfCurrentId, 1)

        setMultiple(copyMultiple)
    }

  return <div className="wrapper">
    <button onClick={() => setMultiSelection(!multiSelection)}>Enable Multi Selection</button>
    <div className="accordian">
        {
            data && data.length > 0 ? 
            data.map(dataItem => 
                <div className="item">
                    <div onClick={ multiSelection ? ()  => handleMultiSelection(dataItem.id) : () => handleSingleSelection(dataItem.id)} className="title">
                        <h3>{dataItem.question}</h3>
                        <span>+</span>
                    </div>
                    {
                        selected === dataItem.id || multiple.indexOf(dataItem.id) !== -1 ? <div className='content'> {dataItem.answer} </div> : null
                    }
                </div>) : <div>No data found</div>
        }
    </div>
  </div>
}

export default Accordian