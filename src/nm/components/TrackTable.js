import React, { Component } from 'react';

export default class TrackTable extends Component {

    constructor (props) {
        super(props);
    }

    static defaultProps = {

    }

    static propTypes = {

    }

    state = {
      selectedSid: null
    }

    // componentWillReceiveProps(nextProp){
    //   if(this.state.selectedSid === null && nextProp.selectedPlayList.length > 0){
    //     this.handleClick(nextProp.selectedPlayList[0].id);
    //   }
    // }

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
                  <td>音乐标题</td>
                </tr>
              </thead>
              <tbody>
                {tracks.map(item => {
                  let selectedClass = "";
                  selectedClass = item.id === selectedSid ? "selected" : "";
                  return(
                    <tr key={item.id} onClick={() => this.handleClick(item.id)} className={selectedClass}>
                      <td>{item.name}</td>
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
