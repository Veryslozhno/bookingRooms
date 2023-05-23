import React from "react";

const rooms = [
    {
        id: '001',
        image: '001.jpg',
        title: 'Заголовок',
        price: 'Цена',
        size: 'Размер',
        address: 'Адрес',
        info: 'Описание'
    }
]

function Cards() {

    const cards = rooms.map((room) =>
        <div key={room.id} className="card">
            <h3 className="card-title">{room.title}</h3>
            <img className="card-image" src={room.image} />
            <p className="card-price">{room.price}</p>
            <p className="card-size">{room.size}</p>
            <p className="card-address">{room.address}</p>
            <p className="card-info">{room.info}</p>
        </div>
    );

    return (
        <div className="Cards-container">
            {cards}
        </div>
    );
};


export default Cards;