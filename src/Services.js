import React, { Fragment } from 'react';

export default () => {
    return (
        <Fragment>
            <section class="bg-light" id="service">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-8 mx-auto">
                            <div class="col-lg-5 text-center">
                                <h2>課程大綱內容</h2>
                                <hr class="divider-title" />
                            </div>
                            <p class="lead">
                                <h3>課程目標</h3>
                                <hr class="divider-sub-title" />
                                <ul class="list-group">
                                    <li class="list-group-item">學生透過此課程可培養：</li>
                                    <li class="list-group-item">(1)HTML5+CSS3+JavaScript Framework程式語言的整合知識</li>
                                    <li class="list-group-item">(2)新一代對話式介面開發能力(*視課程進度狀況)</li>
                                    <li class="list-group-item">(3)技術專題建構與實作能力。</li>
                                </ul>
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </Fragment>
    )
}