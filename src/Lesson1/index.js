import React, { Fragment,Component } from 'react';
import Controller from './Controller';

class Lesson1 extends Component {

    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         title: "?",
    //         food: ["拉麵","滷肉飯","水餃"],
    //         imgs:[
    //             "https://uc.udn.com.tw/photo/2019/12/11/realtime/7183211.jpg",
    //             "https://d3l76hx23vw40a.cloudfront.net/recipe/yqn093-027c.jpg",
    //             "https://foodpicks.tw/wp-content/uploads/2019-11-03_114250-696x406.jpg"
    //             ]
    //     }
    // }


    state = {
            title: null,
            food: ["拉麵","滷肉飯","水餃"],
            imgs:[
                "https://uc.udn.com.tw/photo/2019/12/11/realtime/7183211.jpg",
                "https://d3l76hx23vw40a.cloudfront.net/recipe/yqn093-027c.jpg",
                "https://foodpicks.tw/wp-content/uploads/2019-11-03_114250-696x406.jpg"
                ]
        
    };


    foodClick = () => {
        let numberOfListItem = this.state.imgs.length;
        let randomChildNumber =  Math.floor(Math.random()*numberOfListItem);
        this.setState(
                        {
                            title:randomChildNumber,
                        }
                     )
    };
  

    render() {
        return (
            <Fragment>
                <section id="lesson1">
                    <div class="container">
                        <div class="row">
                            <div class="col-lg-8 mx-auto">
                                <div class="col-lg-5 text-center">
                                    <h2 class="textss">Lesson 1</h2>
                                    <hr class="divider-title" />
                                </div>
                                <p class="china-font">隨機變更 標題和圖片</p>

                                <div class="row">
                                    <code class="bg-dark text-light">
                                        let images = [
                                        "https://uc.udn.com.tw/photo/2019/12/11/realtime/7183211.jpg",
                                        "https://d3l76hx23vw40a.cloudfront.net/recipe/yqn093-027c.jpg",
                                        "https://foodpicks.tw/wp-content/uploads/2019-11-03_114250-696x406.jpg"
                                        ];
                    
                                        <br/>
                                        <br/>

                                        &lt;input value="今天晚上吃什麼?"&gt;<br/>
                                        &lt;ul&gt;<br/>
                                            &lt;li&gt;拉麵&lt;/li&gt;<br/>
                                            &lt;li&gt;滷肉飯&lt;/li&gt;<br/>
                                            &lt;li&gt;水餃&lt;/li&gt;<br/>
                                        &lt;/ul&gt;
                                    </code>
                                </div>

                                
                                <br/>
                                    <Controller food={this.state.food} imgs={this.state.imgs} title={this.state.title} onClick={this.foodClick}/>
                            </div>
                        </div>
                    </div>
                </section>
            </Fragment >
        )

    }
}

export default Lesson1;