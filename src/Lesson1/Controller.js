import React from 'react';

export default ({ food, imgs, title, onClick }) => {

    let lists = [];

    for (let i = 0; i <= food.length - 1; i++) {
        lists.push(<li className="list-group-item">{food[i]}</li>)
    }

    return (
        <div>
            <div className="row">
                <h1 id="eat-title">{title == null ? "???":food[title]}</h1>
                <img src={imgs[title]} classNameName={`rounded-circle ${title == null ? "invisible":"visible"}`} id="food-img" />
            </div>
            <div className="row">
                <button type="button" className="btn btn-sm btn-outline-primary" onClick={onClick}>今天晚上吃什麼?</button>
            </div>
            <hr/>
            <div className="row">
                <ul className="list-group list-group-horizontal">
                    {lists}
                </ul>
            </div>
        </div>
    )
};