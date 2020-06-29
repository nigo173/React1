import React, { Fragment } from 'react';

export default () => {

    return (
        <Fragment>
            <section id="about">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-8 mx-auto">
                            <div class="col-lg-5 text-center">
                                <h2 class="textss">關於我</h2>
                                <hr class="divider-title" />
                            </div>
                                <p class="china-font">Nigo <a class="d-block" href="mailto:contact@nigo@kimo.com"><i class="fa fa-envelope" aria-hidden="true"></i></a>
</p>
                                <p class="china-font">平時無聊喜歡寫code.</p>
                                <p class="china-font">也喜歡攝影</p>
                                <p class="china-font">最喜歡收集鞋款，George Cox 系列</p>

                                <div class="row about-margin">
                                    <div class="p-3 col col-sm-1 ps-color">PS.</div>
                                    <div class="col-md-auto"> </div>
                                    <div class="p-3 col col-sm-1 ae-color">AE.</div>
                                    <div class="col-md-auto"> </div>
                                    <div class="p-3 col col-sm-1 pr-color">PR.</div>
                                </div>

                                <div class="row">
                                    <div class="p-3 col col-sm-1 js-color">JS.</div>
                                    <div class="col-md-auto"> </div>
                                    <div class="p-3 col col-sm-1 java-color">Java.</div>
                                    <div class="col-md-auto"> </div>
                                    <div class="p-3 col col-sm-1 bg-primary text-white">C++.</div>
                                </div>

                                <div class="row about-margin">
                                    <div class="p-3 col col-sm-2 arduino-color">Arduino.</div>
                                    <div class="col-md-auto"> </div>
                                    <div class="p-3 col col-sm-3 php-color">PHP Framework.</div>
                                    <div class="col-md-auto"> </div>
                                    <div class="p-3 col col-sm-3 android-color">Android Studio.</div>
                                </div>
                        </div>
                    </div>
                </div>
            </section>
        </Fragment >
    )
}