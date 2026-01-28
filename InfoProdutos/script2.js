import React from 'react';

export default function Product() {
    return (
        <div className="card">
            <div className="img-box">
                <img src="shoeling.jpg" alt="Hike Air Max" />
            </div>
            <div className="details">
                <h3>
                    Hike Air Max
                    <br />
                    <span>Men's Shoe</span>
                </h3>
                <h4>Product Details</h4>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam, voluptate.
                </p>
                <h4>Size</h4>
                <ul className="size">
                    <li>36</li>
                    <li>38</li>
                    <li>40</li>
                    <li>42</li>
                    <li>44</li>
                </ul>
                <div className="group">
                    <h2>
                        <sup>$</sup>199<small>.99</small>
                    </h2>
                    <a href="#">Buy Now</a>
                </div>
            </div>
        </div>
    );
}