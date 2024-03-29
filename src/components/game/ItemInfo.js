import React, {Component} from 'react'
import swordIcon from './icons/sword-icon.png'
import shieldIcon from './icons/shield-icon.png'
import moneyIcon from './icons/money-icon.png'
import heartIcon from './icons/heart-icon.png'
import {itemPictures} from './helpers/itemPictures'

import {icons} from './helpers/iconPictures'

const bonusToIconMap = {
    attack: swordIcon,
    defence: shieldIcon,
    maxHealth: heartIcon,
    price: moneyIcon,
}

const strengthColor = {
    'Weak' : '#000',
    'Regular' : '#ffcc00',
    'Well done' : '#cc2c34',
    'Masterpiece' : '#ffb2f5',
    'Legendary' : '#31FFFF',
}

class ItemInfo extends Component {
    render = () => {
        if (this.props.item && this.props.item.debuffs) {
            var debuffs = this.props.item.debuffs.map( (el, i) => {
                return (
                    <li key={i} className="ItemInfo__ul__li">
                        <img src={icons[el.icon]} />
                        <div className="ItemInfo__ul__li__div">
                            <span className="ItemInfo__ul__li__div__span">{el.name}</span> {el.description}
                        </div>
                    </li>
                )
            });
        }
        return (
            <div style={{height:'100%'}}>
            {this.props.item &&
            <section className="ItemInfo">
                <header className="ItemInfo__header">
                    <span style={{color: strengthColor[this.props.item.strength.name] }}>{this.props.item.strength.name}</span> {this.props.item.item.name}
                </header>
                <figure className="ItemInfo__figure">
                    <img src={itemPictures[this.props.item.item.icon]}  className="ItemInfo__figure__img"/>
                </figure>
                <span className="ItemInfo__span">
                    {this.props.item.class}
                </span>
                
                <ul className="ItemInfo__ul">
                    {this.listBonuses(this.props.item)}
                    {debuffs}
                </ul>
                

                <nav className="ItemInfo__nav">
                    <ul className="ItemInfo__nav__ul">
                        <li className="ItemInfo__nav__ul__li">
                            <div onClick={() => this.props.close()}>Close</div>
                        </li>
                        <li className="ItemInfo__nav__ul__li">
                            {this.props.blockSell ?
                            'cannot sell equiped item ' :
                            <div onClick={() => this.props.sell()}>Sell</div>}
                        </li>
                    </ul>
                </nav>    
            </section>}                
        </div>
        )
    }

    listBonuses = (item) => {
        let bonuses = []
        if (item.item.bonus) {
            for ( const bonus in item.item.bonus ) {
                bonuses.push(this.prepareBonus(bonus, item.item.bonus[bonus]))
            }
        }
        console.log(bonuses)
        return bonuses;
    }

    prepareBonus = (bonusName, bonuseValue) => {
        return (
            <li key={bonusName} className="ItemInfo__ul__li">
                <img src={bonusToIconMap[bonusName]}/>  {bonuseValue}
            </li>
        )
    }
}

export default ItemInfo