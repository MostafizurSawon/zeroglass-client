import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import SingleExplore from '../SingleExplore/SingleExplore';
import './Explore.css';

const Explore = () => {
    const [explores, setExplores] = useState([]);
    useEffect(() => {
        fetch('https://safe-citadel-17989.herokuapp.com/products')
            .then(res => res.json())
            .then(data => setExplores(data))

    }, [])

    return (
        <div>
            <div className="py-5 explore container">
                <h2 className="pt-4">Oculus Optics</h2>
                <p className="pb-5">A selection of essential, tailored sunglasses that allow you to  transition. See our newest collection.</p>

                <Row xs={1} md={3} className="g-2">
                    {
                        explores.map(explore => <SingleExplore
                            key={explore._id}
                            explore={explore}
                        ></SingleExplore>)
                    }


                </Row>
            </div>

        </div>
    );
};

export default Explore;