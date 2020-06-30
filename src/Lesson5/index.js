import React, { Fragment, Component } from 'react';
import ReactPlayer from 'react-player';

class Lesson5 extends Component {

    constructor(props) {
        super(props);

        this.myRef = React.createRef();

        this.state = {
            player:'',
            currentPlay: 0,
            playList: [
                "4iVW7OhZ0p8",
                "MJnzEa0FSKk",
                "7NN4RlKspW0"
            ],
            playTime: [
                [57, 60],
                [79, 83],
                [76, 80]
            ]
        }
    }


    componentDidUpdate(e) {
        this.playVideo();
    }



    playVideo = () => {


    }

    playVideoReady = () => {

    }

    playVideoChange = () => {

    }


    render() {
        return (
            <Fragment>
                <section id="lesson3">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-8 mx-auto">
                                <div className="col-lg-5 text-center">
                                    <h2 className="textss">Lesson 5</h2>
                                    <hr className="divider-title" />
                                </div>

                                <p className="china-font">影片撥放器</p>
                                <ReactPlayer url='https://www.youtube.com/watch?v=ysz5S6PUM-U' />

                            </div>
                        </div>
                    </div>
                </section>
            </Fragment >
        )
    }
}

export default Lesson5;