import React, { Fragment } from 'react';

export default () => {
    return (
        <Fragment>
            <section className="bg-light" id="service">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 mx-auto">
                            <div className="col-lg-5 text-center">
                                <h2>課程大綱內容</h2>
                                <hr className="divider-title" />
                            </div>
                            <p className="lead">
                                <h3>課程目標</h3>
                                <hr className="divider-sub-title" />
                                <ul className="list-group">
                                    <li className="list-group-item">學生透過此課程可培養：</li>
                                    <li className="list-group-item">(1)HTML5+CSS3+JavaScript Framework程式語言的整合知識</li>
                                    <li className="list-group-item">(2)新一代對話式介面開發能力(*視課程進度狀況)</li>
                                    <li className="list-group-item">(3)技術專題建構與實作能力。</li>
                                </ul>
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </Fragment>
    )
}