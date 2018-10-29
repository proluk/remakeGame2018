import React, {Component} from 'react'
import Player from './Player'
import { NavLink } from 'react-router-dom'
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd-next'
import ItemInfo from './ItemInfo'
import {itemPictures} from './helpers/itemPictures'
import Popup from './Popup'

class Equipment extends Component {
    constructor(props) {
        super(props)
        this.state = {
            selectedItem: null,
            index: 0,
            blockSell: false,
            popupopen: false,
            error: false,
            errorMessage: '',
        }
    }
    onDragEnd = (res) => {
        if (res.destination == null){
            return
        }
        if (res.source.droppableId === 'items') {
            if ( res.destination.droppableId === 'attackItem' && this.props.player.items[res.source.index].class !== 'attack'){
                this.setState({
                    error: true,
                    errorMessage: 'You can only equip here item with class "Attack"'
                })
                return
            } else if (res.destination.droppableId === 'defenceItem' && this.props.player.items[res.source.index].class !== 'defence') {
                this.setState({
                    error: true,
                    errorMessage: 'You can only equip here item with class "Defence"'
                })
                return
            } else if (res.destination.droppableId === 'magicItem' && this.props.player.items[res.source.index].class !== 'magic') {
                this.setState({
                    error: true,
                    errorMessage: 'You can only equip here item with class "Magic"'
                })
                return
            }
        } 
        this.props.playerEquipmentUpdate(res);
    }
    showItemDetails = (el, index, blockSell) => {
        this.setState({
            selectedItem: el,
            index,
            blockSell
        })
    }
    closeItemDetails = () => {
        this.setState({
            selectedItem: null,
            index: 0,
            blockSell: false
        })
    }
    hidePopup = () => {
        this.setState({
            popupopen:false
        })
    }
    closeError = () => {
        this.setState({
            error: false,
        })
    }

    droppable = (name) => {
        return (
            <Droppable droppableId={name} direction="horizontal" >
            {(provided) => (
                <ul ref={provided.innerRef}{...provided.droppableProps} className="Equipment__section__Equiped__ul">
                    {provided.placeholder}
                    {this.props.player[name] &&
                        <Draggable draggableId={this.props.player[name].id} index={0} key={0}>
                        {provided => (
                            <li ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps} key={0}
                            className="Equipment__section__Equiped__ul__li">
                                <img src={itemPictures[this.props.player[name].item.icon]} />
                                <div onClick={() => this.showItemDetails(this.props.player[name],0,true)}
                                className="Equipment__section__Equiped__ul__li--info" >
                                i
                                </div>
                            </li>
                        )}
                        </Draggable>
                    }
                </ul>
            )}
            </Droppable>
        )
    }
    draggableItems = () => {
        let items = this.props.player.items.map( (el, index) => (
                <Draggable draggableId={el.id} index={index} key={index}>
                    {provided => (
                        <li ref={provided.innerRef}{...provided.draggableProps}{...provided.dragHandleProps}key={index}
                        className="Equipment__Items__ul__li">
                            <img src={itemPictures[el.item.icon]} />
                            <div className="Equipment__Items__ul__li--info" onClick={() => this.showItemDetails(el, index)}>i</div>
                        </li>
                    )}
                </Draggable>
            )
        )
        return items;
    }
    render = () => {
        return (
            <DragDropContext onDragEnd={this.onDragEnd}>
                <main className="Equipment">
                    <Droppable droppableId={'items'} direction="horizontal">
                        {(provided) => (
                                <ul ref={provided.innerRef}{...provided.droppableProps} className="Equipment__Items__ul">
                                    {this.draggableItems()} 
                                </ul>    
                        )}
                    </Droppable>
                    <section className="Equipment__section">
                        <div className="Equipment__section__Equiped">
                            {this.droppable('attackItem')}
                            <span className="Equipment__section__Equiped__span a">Attack</span>
                        </div>
                        <div className="Equipment__section__Equiped">
                            {this.droppable('defenceItem')}
                            <span className="Equipment__section__Equiped__span d">Defence</span>
                        </div>
                        <div className="Equipment__section__Equiped">
                            {this.droppable('magicItem')}
                            <span className="Equipment__section__Equiped__span m">Magic</span>
                        </div>
                    </section>
                    <Player {...this.props} allStats={true}/>
                    <section className="Equipment__section">
                        <article className="Equipment__section__article">
                        You can equip <span>3</span> items. One per action you can do while fighting. Rules are simple.
                        <span className="a">Attack</span> beats <span className="m">Magic</span>. 
                        <span className="m">Magic</span> beats <span className="d">Defence</span>.
                        <span className="d">Defence</span> beats <span className="a">Attack</span>. 
                        But also, when <span className="a">Attack</span> wins it Deals Damage.
                        When <span className="m">Magic</span> wins it Curses Enemy.
                        When <span className="d">Defence</span> wins it Removes Curses
                        or Gives Curses to Enemy when Player is <span>Curse Free</span>.
                        </article>
                    </section>
                    <nav  className="Equipment__nav">
                        <NavLink className="Equipment__nav__NavLink" to={'/game'}>Close Equipment</NavLink>
                    </nav>
                    <Popup open={this.state.selectedItem}>
                        <ItemInfo item={this.state.selectedItem}
                            close={this.closeItemDetails}
                            blockSell={this.state.blockSell}
                            sell={() => this.props.playerItemSell(this.state.index)} />
                    </Popup>

                    <Popup open={this.state.error} externalHide={this.closeError}>
                        {this.state.errorMessage}
                    </Popup>
                </main>
            </DragDropContext>
        )
    }
}

export default Equipment