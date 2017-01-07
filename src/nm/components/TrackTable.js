import React, { Component } from 'react';

export default class TrackTable extends Component {

    constructor (props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    static defaultProps = {

    }

    static propTypes = {

    }

    state = {
      selectedSid: null
    }

    componentWillReceiveProps(nextProp){
      if(this.state.selectedSid === null && nextProp.selectedPlayList !== null && nextProp.selectedPlayList.tracks.length > 0){
        this.handleClick(nextProp.selectedPlayList.tracks[0].id);
      }
    }

    componentDidMount()
    {

    }

    handleClick(id){
      if(id !== this.state.selectedSid){
        this.setState({
            selectedSid: id
        });
        this.props.onClick(id);
      }
    }

    render()
    {
        const tracks = this.props.selectedPlayList ? this.props.selectedPlayList.tracks : [];
        const selectedSid = this.state.selectedSid;
        return(
          <div className="nm-track-table">
            <table className="track-table">
              <thead>
                <tr>
                  <td>歌曲标题</td>
                  <td>时长</td>
                  <td>歌手</td>
                  <td>专辑</td>
                </tr>
              </thead>
              <tbody>
                {tracks.map(item => {
                  let selectedClass = "";
                  selectedClass = item.id === selectedSid ? "selected" : "";
                  return(
                    <tr key={item.id} onClick={() => this.handleClick(item.id)} className={selectedClass}>
                      <td>{item.name}</td>
                      <td>0{parseInt(item.duration/60000)}:{parseInt(item.duration/1000%60) >= 10 ? parseInt(item.duration/1000%60): "0"+ parseInt(item.duration/1000%60)}</td>
                      <td>{item.artists[0].name}</td>
                      <td>{item.album.name}</td>
                    </tr>
                  )
                })
                }
              </tbody>
            </table>
          </div>
        );
    }
}
