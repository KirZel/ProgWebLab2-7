import React, { useState } from 'react';


function Comp(props) {

    const [showMoreInfo, setShowMoreInfo] = useState(false);

    const handleShowMore = () => {
      setShowMoreInfo(!showMoreInfo);
    };

    let [BooksSelect, setBooks] = useState(props.authors[0].books);

    const BookChange = (event) => {  
        console.log(event);
        const options = props.authors[event.target.value].books.map((item,index) => {
            return <option>{item}</option>;
         });
        setBooks(options); 
      };
    
    const [CheckShip, setShip] = useState(false);

    const ShipShow = () => {
        setShip(true);
      };

    return (
        <section>
        <p>Вы можете проверить, есть ли в порту на данный момент какой-либотип корабля</p>
        <button onClick={handleShowMore}>Показать</button>
      
        {showMoreInfo && (
          <div className="more-info">
            <h3>Размер корабля</h3>
            <select onChange={BookChange}>
                {props.authors.map((item, index) => (
                    <option value={index}>
                        {item.author}
                    </option>
                ))}
            </select>

            <h3>Тип корабля</h3>
            <select>
                {BooksSelect.map((book, index) => (
                    <option>
                        {book}
                    </option>
                ))}
            </select>
            <div>
            <br></br>
            <button onClick={ShipShow}>Проверить</button>
            {CheckShip && (
                <div>
                    Такой корабль есть.
                </div>
            )}
            </div>
          </div>
        )}
      </section>
    );
};

export default Comp;