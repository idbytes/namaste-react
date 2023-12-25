import {CDN_RES_URL} from "../utils/constants";

const RestuarantCard = (props) => {
    const {resData} = props;
    const {
        name,
        cuisines,
        avgRating,
        costForTwo,
        sla,
        cloudinaryImageId
    } = resData;

    return (
        <div className="res-card">
            <img className="res-image" alt="res-logo" src={CDN_RES_URL + cloudinaryImageId}/>
            <h3>{name}</h3>
            <h4>{cuisines.join(", ")}</h4>
            <h5>{avgRating} stars</h5>
            <h5>{costForTwo}</h5>
            <h5>{sla.deliveryTime} minutes</h5>
        </div>
    )
}

export default RestuarantCard;