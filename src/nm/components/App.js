import React, { Component } from 'react';
import ServiceClient from "../../base/service/ServiceClient";

import PlayList from "./PlayList";

export default class App extends Component {

    constructor (props) {
        super(props);
    }

    static defaultProps = {

    }

    static propTypes = {

    }

    state = {
        playlists: []
    }

    async componentDidMount(){
        const result = await ServiceClient.getInstance().getAsyncUserPlayLists("357851968");
        console.log(result);
        this.setState({
          playlists: result
        });
    }

    // componentDidMount()
    // {
    //   //then里的res是resolve
    //   ServiceClient.getInstance().getUserPlayLists("357851968").then(res => {
    //     //console.log(res);
    //     return "then";
    //   }).catch( error =>{
    //     console.log(error);
    //   }).then( res =>{
    //     console.log(res);
    //   })
    // }

    render()
    {
        const { playlists } = this.state;
        console.log(playlists);
        return(
          <div className="nm-app">
            <header>
              <div className="logo"></div>
              <h1>网易云音乐</h1>
            </header>
            <main>
              <aside><PlayList playlists = { playlists } /></aside>
              <section></section>
            </main>
            <footer></footer>
          </div>
        );
    }
}
