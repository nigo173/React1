import React, { Fragment, Component } from 'react';

class Lesson4 extends Component {

    constructor(props) {
        super(props);

        this.canvas = React.createRef();

        this.state = {
            imgMain: new Image(),
            imgMountain: new Image(),
            imgEnemy: new Image(),
            currentImgX: 0,
            currentImgY: 0,
            mapArray: [0, 1, 1, 0, 0, 0, 3, 1, 2],
            defArray: [0, 0, 0, 0]
        }
    }

    componentDidMount() {
        this.updateCanvas();
    }

    componentDidUpdate(e) {
        console.log(e.code);

        this.updateCanvas();
    }

    updateCanvas() {
    
        let ctx = this.canvas.current.getContext('2d');
        let imgMain = this.state.imgMain;
        let imgMountain = this.state.imgMountain;
        let imgEnemy = this.state.imgEnemy;
        let currentImgX = this.state.currentImgX;
        let currentImgY = this.state.currentImgY;
        imgMain.src = './assets/img/canvas/spriteSheet.png';
        imgMountain.src = './assets/img/canvas/material.png';
        imgEnemy.src = './assets/img/canvas/Enemy.png';

        
        let r_currentImgX = this.state.defArray[0];
        let r_currentImgY = this.state.defArray[1];
        ctx.clearRect(r_currentImgX,r_currentImgY,50,50);

        imgMain.onload = function () {
            ctx.drawImage(imgMain, 0, 0, 80, 130, currentImgX, currentImgY, 50, 50);
        }

        let arr = this.state.mapArray;

        imgMountain.onload = function () {
            imgEnemy.onload = function () {
                for (let x in arr) {
                    if (arr[x] == 1) {
                        ctx.drawImage(imgMountain, 32, 65, 32, 32, x % 3 * 150, Math.floor(x / 3) * 200, 50, 50);
                        ctx.drawImage(imgMountain, 32, 65, 32, 32, x % 3 * 200, Math.floor(x / 3) * 200, 50, 50);
                        ctx.drawImage(imgMountain, 32, 65, 32, 32, x % 3 * 250, Math.floor(x / 3) * 200, 50, 50);

                        ctx.drawImage(imgMountain, 32, 65, 32, 32, x % 3 * 150, 105, 50, 50);
                        // ctx.drawImage(imgMountain,32,65,32,32,x%3*200,Math.floor(x/3)*200,50,50);
                    }
                    else if (arr[x] == 3) {
                        ctx.drawImage(imgEnemy, 7, 40, 104, 135, x % 3 * 200, 100, 50, 50);
                    }
                }
            }
        }

    }


    play = (e) => {
 
        let currentImgX = this.state.currentImgX;
        
        let currentImgY = this.state.currentImgY;

        let move = e.target.textContent;

        let moveX = 0;

        let moveY = 0;

        this.setState({
            defArray:[currentImgX,currentImgY,moveX,moveY]
        });

        switch (move) {
            case '上':
                moveX = currentImgX;
                if(currentImgY >= 1)
                    moveY = currentImgY - 34;
                break;
            case '下':
                moveX = currentImgX;
                if(currentImgY >= 0 && currentImgY < 100)
                    moveY = currentImgY + 34;
                else
                    moveY = currentImgY;
                break;
            case '左':
                if(currentImgX > 1)
                    moveX = currentImgX - 32;
                else
                    moveX = currentImgX;

                moveY = currentImgY;
                break;
            case '右':

                if(currentImgX >= 0 && currentImgX < 238)
                    moveX = currentImgX + 32;
                else
                    moveX = currentImgX;

                moveY = currentImgY;
                break;
            default:

                break
        }


        this.setState({
            currentImgX: moveX,
            currentImgY: moveY
        });
    }




    render() {
        return (
            <Fragment>
                <section id="lesson4">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-8 mx-auto">
                                <div className="col-lg-5 text-center">
                                    <h2 className="textss">Lesson 4</h2>
                                    <hr className="divider-title" />
                                </div>
                                <p className="china-font">RPG</p>
                                <p className="china-font">九宮格</p>

                            </div>

                            <div className="col-lg-8 mx-auto">

                            <canvas className="canvas" ref={this.canvas}></canvas>
                            </div>
                            <br />

                            <div className="col-lg-8 mx-auto">
                                <button type="button" onClick={this.play}>上</button>
                                <button type="button" onClick={this.play}>下</button>
                                <button type="button" onClick={this.play}>左</button>
                                <button type="button" onClick={this.play}>右</button>
                            </div>
                        </div>
                    </div>
                </section>
            </Fragment >
        )
    }
}

export default Lesson4;