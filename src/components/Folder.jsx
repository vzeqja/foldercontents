import React, { Component } from 'react'

export default class Folder extends Component {

    constructor(props){
        super(props);
        this.state = {

            toggle: true,
            toggleStatus : "Hide"

        };

    }
    // componentDidMount(){
    //     this.toggle();
    // }

    toggle = () => {
        if(this.state.toggle){
            this.setState({toggle:false, toggleStatus:"Show"})
        }else{
            this.setState({toggle:true, toggleStatus:"Hide"})
        }
    }

    hideContents = () => {

        

    }   
    render() {

        const {toggleStatus, toggle} = this.state;

        return (
            <div>

                Home
                { toggle &&
                <ul>
                    <li>File1</li>
                    <li>File2</li>
                    <li>File3</li>
                </ul>
                }
                <br/>
                <button onClick={()=>this.toggle()}>{toggleStatus}</button>

            </div>
        )
    }
}
