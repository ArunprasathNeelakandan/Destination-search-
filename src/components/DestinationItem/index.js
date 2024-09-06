import './index.css'
const DestinationItem = (props) => {
    const {item} = props
    const {imgUrl,name} = item

    return(
        <li className="li">
            <img src={imgUrl} alt={name} className="img"/>
            <p>{name}</p>
        </li>
    )

}

export default DestinationItem
