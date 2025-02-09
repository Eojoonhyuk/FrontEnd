import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const PopularArea = ({recommends}) => {
    const setting = {
        infinity: true,
        speed: 50,
        slidesToshow: 5,
        slidesToScroll: 1,
        autoplay: true,
        autoPlayspeed: 200,
        variableWidth: true,
        arrow: false,
    };

    let rank = 1;
    const topRecommends = recommends.sort((a,b) => a["clicked"] - b["clicked"]).slice(0, 10).map(item => ({
        rank: rank++,
        ...item,
    }));

    return(
        <div className="popular-box">
            <h2>Top 10</h2>
            <Slider className="popular-items" {...setting}>
                {topRecommends.map(item => (
                    <div key={item.korName} className="popular-item">
                        <div className="popularItemHead">
                            <div className="popularItemHead-num-name">
                                <div className="num">{item.rank}</div>
                                <p className="item-name">{item.korName}</p>
                            </div>
                        </div>
                        <div className="img-box">
                            <img className="img" alt="와인이미지" src={item.img}/>
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    );
}

export default PopularArea;