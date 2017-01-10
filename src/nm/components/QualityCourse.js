import React, { Component } from 'react';
import { Rate } from 'antd';

export default class QualityCourse extends Component {

    constructor (props) {
        super(props);
    }

    static defaultProps = {

    }

    static propTypes = {

    }

    state = {

    }

    componentDidMount(){
        $('.course-list .course-info .name').bind('click',function(e){
            console.log('name');
            e.stopPropagation();
        });
        $('.course-list .course-item').bind('click',function(e){
            console.log('course');
        })

    }

    render(){
        const courseLists = [1,2,3,4,5,6,7,8];

        return(
            <ul className="course-list">
                {courseLists.map((item,index) => {
                    return (
                        <li key={index} className="course-item">
                            <div className="course-info">
                                <div className="title">919经济学原理</div>
                                <div className="name"><span>南京大学 020204金融学</span></div>
                                <Rate disabled defaultValue={3} />
                            </div>
                            <div className="author-info">
                                <div className="author">
                                    <i className="icon"></i>
                                    <span className="name">李心怡学姐</span>
                                    <span className="purchase">20人最近购买</span>
                                </div>
                                <div className="honour">2016专业课第二</div>
                                <div className="lable-group">
                                    <span>专业课110+</span>
                                    <span>数学三130+</span>
                                    <span>英语80+</span>
                                    <span>政治70+</span>
                                </div>
                            </div>
                        </li>
                    );
                })}
            </ul>
        )

    }
}
