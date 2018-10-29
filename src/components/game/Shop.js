import React, {Component} from 'react';
import ItemInfo from './ItemInfo'
import {itemPictures} from './helpers/itemPictures'
import Popup from './Popup'

class Shop extends Component {
    constructor(props){
        super(props)
        this.state = {
            item: null
        }
    }
    closeItemDetails = () => {
        this.setState({
            item:null
        })
    }
    openItemDetails = (item) => {
        this.setState({
            item,
        })
    }
    render = () => {
        return (
            <main className="Shop">
                <section>
                    {/* items in shop */}
                </section>
                {/* player */}
                <Popup open={this.state.item}>
                    {this.state.item &&
                        <ItemInfo item={this.state.item}
                            close={this.closeItemDetails}
                            blockSell={this.state.blockSell}
                            sell={() => this.props.playerItemSell(this.state.index)} />
                    }
                </Popup>
            </main>
        )
    }
}

export default Shop

