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
            //console.log('name');
            location.href = "https://www.baidu.com/s?ie=utf-8&f=8&rsv_bp=1&rsv_idx=1&tn=baidu&wd=%E5%8D%97%E4%BA%AC%E5%A4%A7%E5%AD%A6%20020204%E9%87%91%E8%9E%8D%E5%AD%A6&oq=919%E7%BB%8F%E6%B5%8E%E5%AD%A6%E5%8E%9F%E7%90%86&rsv_pq=83f1c116000033c7&rsv_t=e4db7M9YIpsMPf%2FS3OQzUXiRR%2FSjTY77aabbbgJaA1NlXYSZMmaQRredLVc&rqlang=cn&rsv_enter=1&inputT=822&rsv_sug3=2&rsv_sug2=0&rsv_sug4=823";
            e.stopPropagation();
        });
        $('.course-list .course-item').bind('click',function(e){
            //console.log('course');
            location.href = "https://www.baidu.com/s?ie=utf-8&f=8&rsv_bp=0&rsv_idx=1&tn=baidu&wd=919%E7%BB%8F%E6%B5%8E%E5%AD%A6%E5%8E%9F%E7%90%86&rsv_pq=bdd8e0d900004365&rsv_t=2f37DoC0OqWj%2FK7RXqFPV2SkZgt13opuTIeR6CFLjTea7D4nMtIdnBVsCD4&rqlang=cn&rsv_enter=1&rsv_sug3=1&rsv_sug1=1&rsv_sug7=100&rsv_sug2=0&inputT=860&rsv_sug4=860";
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
