import React from 'react';

export default ({ food, imgs, title, onClick }) => {

    let lists = [];

    for (let i = 0; i <= food.length - 1; i++) {
        lists.push(<li class="list-group-item">{food[i]}</li>)
    }

    return (
        <div>
            <div class="row">
                <h1 id="eat-title">{title == null ? "???":food[title]}</h1>
                <img src={imgs[title]} className={`rounded-circle ${title == null ? "invisible":"visible"}`} id="food-img" />
            </div>
            <div class="row">
                <button type="button" class="btn btn-sm btn-outline-primary" onClick={onClick}>今天晚上吃什麼?</button>
            </div>
            <hr/>
            <div class="row">
                <ul class="list-group list-group-horizontal">
                    {lists}
                </ul>
            </div>
        </div>
    )
};