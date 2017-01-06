import React, { Component } from 'react';
import ServiceClient from "../../base/service/ServiceClient";

import PlayList from "./PlayList";
import TrackTable from "./TrackTable";

export default class App extends Component {

    constructor (props) {
        super(props);
        this.handlePlayListClick = this.handlePlayListClick.bind(this);
    }

    static defaultProps = {

    }

    static propTypes = {

    }

    state = {
        playlists: [],
        selectedPlayList: []

    }

    async handlePlayListClick(id){
        console.log(id);
        const result = await ServiceClient.getInstance().getAsyncPlayListDetail(id);
        this.setState({
          selectedPlayList: result
        });
        //console.log(result);
    }

    async handleSongListClick(id){
        console.log(id);

    }

    async componentDidMount(){
        const result = await ServiceClient.getInstance().getAsyncUserPlayLists("357851968");
        //console.log(result);
        this.setState({
          playlists: result
        });
    }

    render()
    {
        const { playlists, selectedPlayList } = this.state;
        //console.log(playlists);
        return(
          <div className="nm-app">
            <header>
              <div className="logo"></div>
              <h1>网易云音乐</h1>
            </header>
            <main>
              <aside><PlayList playlists = { playlists } onClick={this.handlePlayListClick} /></aside>
              <section><TrackTable selectedPlayList = {selectedPlayList} onClick={this.handleSongListClick}  /></section>
            </main>
            <footer></footer>
          </div>
        );
    }
}
