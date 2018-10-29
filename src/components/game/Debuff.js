import {icons} from './helpers/iconPictures'
import {debuffConnectedFunctions} from '../../actions/helpers/debuffHelper'

export const Debuff = (debuff) => {
    return (
        <div className="Debuff">
            <img src={icons[debuff.icon]} />
            <div className="Debuff__div">
                <span className="Debuff__div__span">{debuff.name}</span> {debuff.description}
            </div>
        </div>
    )
}