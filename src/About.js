import React, { Fragment } from 'react';

export default () => {

    return (
        <Fragment>
            <section id="about">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 mx-auto">
                            <div className="col-lg-5 text-center">
                                <h2 className="textss">關於我</h2>
                                <hr className="divider-title" />
                            </div>
                            <p className="china-font">Nigo <a className="d-block" href="mailto:contact@nigo@kimo.com"><i className="fa fa-envelope" aria-hidden="true"></i></a>
</p>
                            <p className="china-font">平時無聊喜歡寫code.</p>
                            <p className="china-font">也喜歡攝影</p>
                            <p className="china-font">最喜歡收集鞋款，George Cox 系列</p>

                        </div>
                    </div>
                </div>
            </section>
        </Fragment >
    )
}