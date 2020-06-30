import React from 'react';


export default ({ data, page, onClick, myRef, text, onchange , disableds, results}) => {

    let list = [];

    let html_list = '';

    let title_ = '測試完成';

    if(page < data.length){
        for (let i = 0; i < data[page].answers.length; i++) {
            list.push(
                <li className="list-group-item">
                    <div className="form-check">
                        <input className="form-check-input" type="radio" name={data[page].question} id={data[page].question} value={data[page].answers[i][1]}  onChange={onchange} />
                        <label className="form-check-label" for={data[page].question}>
                            {data[page].answers[i][0]}
                        </label>
                    </div>
                </li>
            )
        }
        
        html_list = list;
        title_ = data[page].question;
    }


    return (
        <div>
            <h3>{title_}</h3>

            <ul className="list-group">
                {html_list}
            </ul>
            <br/>
            <button className="btn btn-outline-secondary" type="button" onClick={onClick} ref={myRef}>{text}</button>
            <br/>
            {results[0]}
            <br/>
            {results[1]}
        </div>
    )
};