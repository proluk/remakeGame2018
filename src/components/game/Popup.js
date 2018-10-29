import React, {Component} from 'react'
import posed, { PoseGroup } from 'react-pose'
import closeIcon from './icons/close-icon.png'

const PopupPosed = posed.div({
    enter: {
        y: 0,
        opacity: 1,
        delay: 300,
        transition: {
          y: { type: 'spring', stiffness: 1000, damping: 15 },
          default: { duration: 300 }
        }
      },
      exit: {
        y: 50,
        opacity: 0,
        transition: { duration: 150 }
      }
})

class Popup extends Component{
    constructor(props){
        super(props)
        this.state = {
            open: false
        }
    }

    componentDidMount = () => {
        if ( this.props.open ) {
            this.setState({
                open: true
            })
        }
    }

    componentDidUpdate = (prevProps) => {
        if(prevProps.open !== this.props.open ){
            this.setState({
                open: this.props.open
            })
        }
    }

    render = () => {
        return (
            <PoseGroup>
                {this.state.open && 
                    <PopupPosed key="popup" className="Popup">
                        {this.props.externalHide && 
                            <div className="Popup--close" onClick={() => this.setState({open:false}, this.props.externalHide())} >
                                <img src={closeIcon} />
                            </div>                        
                        }
                        {this.props.children}
                    </PopupPosed>
                }
            </PoseGroup>
        )
    }
}

export default Popup