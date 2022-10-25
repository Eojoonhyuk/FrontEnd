import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark, faComment, faStar, faHouse, faLocationDot, faClock, faPhone } from '@fortawesome/free-solid-svg-icons';
import './Modal.scss';

const Modal = (props) => {
    const handleXbuttonClick = () => {
        props.setModal(false);
    }

    const shopExplain = [
        {id: 1, icon:faLocationDot, content: "주소"},
        {id: 2, icon:faClock, content: "영업시간"},
        {id: 3, icon:faPhone, content: "전화번호"},
    ]
    
    return(
        <div className = "modal-shop">
            <img className="modal-shop-img" alt="자세히보기창"/>
            <div className="modal-shop-content">
                <div className="modal-shop-header">
                    <div className='modal-shop-itemName'><span>가게이름</span></div>
                    <div className='modal-shop-itemScore'><FontAwesomeIcon className="shop-score" icon={faStar}/>4.97/5</div>
                </div>
                <div className="modal-shop-middle">
                    {shopExplain.map((item)=>(
                        <div className="modal-shop-explain" key={item.id}><FontAwesomeIcon icon={item.icon}></FontAwesomeIcon>{item.content}</div>
                    ))}
                    <div className="modal-shop-explain"><FontAwesomeIcon icon={faHouse}></FontAwesomeIcon><a href="/">홈페이지</a></div>
                </div>
                <div className="modal-shop-bottom">
                    <div className="modal-shop-review"><FontAwesomeIcon icon={faComment}/>방문자 리뷰</div>
                    <form className="modal-shop-CommentInsert">
                        <input className="modal-shop-inputNames"
                            placeholder='이름'
                            />
                        <input className='modal-shop-inputContents' 
                            placeholder="댓글"
                        />
                        <button type='submit'>
                            <FontAwesomeIcon icon={faComment}/>
                        </button>
                    </form>
                    <div className='maodal-shop-comment'>
                        <div className='modal-shop-commentBox'>
                            <div className='modal-shop-commentName'></div>
                            <div className='modal-shop-commentContent'></div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="xButton" onClick={handleXbuttonClick}>
                <FontAwesomeIcon icon={faXmark}/>
            </div>
        </div>
    );
}

export default Modal;