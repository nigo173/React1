import React from 'react';


export default ({ startDate, title }) => {

    let list_row = [];

    const oneDayMillseconds = 24 * 60 * 60 * 1000;


    for (let i = 0; i < title.length; i++)
    {
        let thisDate = new Date(startDate.getTime() + 7 * i * oneDayMillseconds);

        thisDate = thisDate.toLocaleDateString().slice(5);

        list_row.push(
            <tr>
                <th scope="row">{i + 1}</th>
                <td><em>{thisDate}</em></td>
                <td>{title[i]}</td>
            </tr>
        )
    }

    return (
        <div>
            <table class="table">
                <thead class="thead-dark">
                    <tr>
                        <th scope="col">場次</th>
                        <th scope="col">時間</th>
                        <th scope="col">主題</th>
                    </tr>
                </thead>
                <tbody>
                    {list_row}
                </tbody>
            </table>
        </div>
    )
};