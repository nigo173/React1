import React, { Fragment, Component } from 'react';
import Controller from './Controller';

class Lesson2 extends Component {


    constructor(props) {
        super(props);
        this.state = {
            startDate: new Date(),
            dateList: [],
            title: ["尚未開學", "國定假日", "環境準備", "隨機性", "重複性", "條件判斷"],
            newDate: '2/21'
        }

    }

    changeDate = (e) => {
        this.setState({
            newDate: e.target.value
        })
    }

    showTable = () => {
        let str_ = this.state.newDate.split("/");
        let newDate = this.state.newDate.length > 2 ? str_ : '2/21'.split("/");
        this.state.startDate.setMonth(newDate[0] - 1, newDate[1]);
        this.state.startDate.setHours(0);
        this.state.startDate.setMinutes(0);
        this.state.startDate.setSeconds(0);
        this.forceUpdate();
    }


    render() {
        return (
            <Fragment>
                <section id="lesson2">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-8 mx-auto">
                                <div className="col-lg-5 text-center">
                                    <h2 className="textss">Lesson 2</h2>
                                    <hr className="divider-title" />
                                </div>

                                <p className="china-font">社團課程時間表</p>
                                <div className="input-group mb-3">
                                    <input type="text" value={this.state.newDate} className="form-control" onChange={this.changeDate.bind(this)} placeholder="輸入日期格式 2/21" />
                                    <div className="input-group-append">
                                        <button className="btn btn-outline-secondary" type="button" onClick={this.showTable}>輸入</button>
                                    </div>
                                </div>
                                <Controller startDate={this.state.startDate} title={this.state.title} />
                            </div>
                        </div>
                    </div>
                </section>
            </Fragment >
        )

    }
}

export default Lesson2;