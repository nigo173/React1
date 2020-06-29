import React, { Fragment, Component } from 'react';
import Controller from './Controller';

class Lesson3 extends Component {

    constructor(props) {
        super(props);

        this.myRef = React.createRef();

        this.state = {
            page: 0,
            btnText: '開始',
            data: [
                {
                    question: "你現在對今年非常樂觀？",
                    answers: [
                        ["是的", 2],
                        ["不是", 3],
                        ["不知道", 4]
                    ]
                },
                {
                    question: "你覺得自己是不是越來越不可靠了？",
                    answers: [
                        ["是的", 3],
                        ["不是", 4],
                        ["一般", 5]
                    ]
                },
                {
                    question: "想到新的一年來到，就非常開心？",
                    answers: [
                        ["是的", 4],
                        ["不是", 5],
                        ["還好", 6]
                    ]
                },
                {
                    question: "如果給你五百萬要你離開很愛的戀人，你會？",
                    answers: [
                        ["好的", 5],
                        ["都可以", 6],
                        ["不要", 7]
                    ]
                },
                {
                    question: "過去一年裡，你有沒有受到很大的打擊？",
                    answers: [
                        ["有的", 6],
                        ["沒有", 7],
                        ["還在承受著呢", 8]
                    ]
                },
                {
                    question: "你喜歡下面哪一個形容天氣的詞？",
                    answers: [
                        ["風和日麗", 7],
                        ["豔陽高照", 8],
                        ["秋高氣爽", 6]
                    ]
                },
                {
                    question: "你覺得自己的愛情一直是比較不一般的？",
                    answers: [
                        ["是的", 8],
                        ["不是", 9],
                        ["不知道", 10]
                    ]
                }
            ],
            finalAnswers:{
                "A": ["愛情有點酸", "在今年，你的愛情有一些酸哦，不過還好，不苦，而且有時候雖然酸，酸中也帶了絲甜。即使你會與喜歡的人沒有緣分走到一起，但是你們彼此能祝福對方。心中有些酸，是因為你看得開。現在對愛情真的看得淡了，不會強求，也不渴望什麼轟轟烈烈，甜甜蜜蜜，只希望過了這陣酸，會有甜頭來。"],
                "B": ["愛情超級甜", "在今年裡，你的愛情超級甜蜜哦，真的有如蜜糖一樣甜，不時撒一把狗糧，能讓旁邊的人都覺得發膩哦。當然啦，你這麼幸運，遇到甜蜜的愛情，也是因為你是一個溫暖的人啊，值得這麼好的愛情，也值得別人好好疼愛你。你也會加倍珍惜，好好回饋對方，這樣才是愛情的正確打開方式。"],
                "C": ["愛情有苦有甜", "你在今年的愛情，一定是有苦也有甜的，其實這才是正常的感情，或者說普通的感情。有的人一直甜蜜，他們是幸運兒。而你是普通人，感情中會有甜蜜的時候，也會有爭吵矛盾，會有淚水，會有痛苦。但是學會理智經營感情，在甜的時候好好享受，在苦的時候及時審視，愛情才能持久。"],
                "D": ["愛情平淡沒滋味", "今年裡，你的愛情沒有啥滋味，可能你根本就遇不到愛情，繼續又單身一整年，這樣也好，你可以忙於賺錢。也可能你的愛情就是有如一碗平平淡淡的白開水，沒有什麼滋味，但是沒有它又不行。或者是缺少了一些刺激，但是誰的愛情能一直轟轟烈烈呢？平淡如水，細水長流，未嘗不是一件好事。"]
            },
            num: 0,
            count: 0,
            allSores: [
                "老虎",
                "孔雀",
                "無尾熊",
                "貓頭鷹",
                "變色龍"
            ],
            disableds: 'disabled',
            results:[]
        }
    }



    showNext = () => {

        if (this.state.page > this.state.data.length-1) {
            this.setState({
                page: 0,
                btnText: '開始',
                num: 0,
                count: 0,
                results:[]
            })
        } else {

            let number = this.state.page < this.state.data.length ? 1 + this.state.page : this.state.data.length + 1;

            let counts = parseInt(this.state.count);
            counts += parseInt(this.state.num);

            let text_ = (this.state.page >= this.state.data.length-1) ? '重新開始' : '下一個';


            if (counts > 30 && counts <= 35) {
                this.state.results.push('性格 : '+this.state.allSores[4]);
                this.state.results.push(this.state.finalAnswers.A);
            } else if (counts > 30 && counts < 36) {
                this.state.results.push('性格 : '+this.state.allSores[3]);
                this.state.results.push(this.state.finalAnswers.B);
            } else if (counts > 35 && counts < 41) {
                this.state.results.push('性格 : '+this.state.allSores[2]);
                this.state.results.push(this.state.finalAnswers.C);
            } else if (counts > 40 && counts < 51) {
                this.state.results.push('性格 : '+this.state.allSores[1]);
                this.state.results.push(this.state.finalAnswers.D);
            } else if (counts > 50 && counts < 56) {
                this.state.results.push('性格 : '+this.state.allSores[0]);
                this.state.results.push(this.state.finalAnswers.D);
            } else if(counts > 3 &&  counts < 29 && this.state.page >= this.state.data.length-1){
                this.state.results.push('未完整測試');
                this.state.results.push('');
            }
            
            this.setState({
                page: number,
                btnText: text_,
                num: 0,
                count: counts
            })
        }
    }

    getTotal = (e) => {

        this.setState({ num: e.target.value })

        // if (this.state.data.length == this.state.count) {
        //     this.setState({ count: parseInt(this.state.count) + parseInt(e.target.value) })
        // }

        // if (e.target.value > 1) {
        //this.setState({disableds:''})
        //  let object = this.myRef.current;
        //  object.ariaDisabled = 'disabled';
        // object.disabled = "";

        // document.getElementById("myInput").setAttribute("disabled", "disabled");

        // }

    }


    render() {
        return (
            <Fragment>
                <section id="lesson3">
                    <div class="container">
                        <div class="row">
                            <div class="col-lg-8 mx-auto">
                                <div class="col-lg-5 text-center">
                                    <h2 class="textss">Lesson 3</h2>
                                    <hr class="divider-title" />
                                </div>

                                <p class="china-font">心理測試</p>
                                <p class="china-font">你的愛情是什麼滋味?</p>
                                <Controller data={this.state.data} page={this.state.page} onClick={this.showNext.bind(this)} text={this.state.btnText} myRef={this.myRef} count={this.state.count} onchange={this.getTotal.bind(this)} disableds={this.state.disableds} results={this.state.results} />
                            </div>
                        </div>
                    </div>
                </section>
            </Fragment >
        )
    }
}

export default Lesson3;