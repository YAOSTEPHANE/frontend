import React from 'react';
import { FaShippingFast } from 'react-icons/fa';
import { BsFillCreditCardFill, BsCartCheck, BsClockHistory } from 'react-icons/bs';


const data = [
    {
      icon: <FaShippingFast size={30} color="#8cb4f5" />,
      heading: "Livraison gratuite",
      text: "Nous livrons gratuitement pour les produits spéciaux.",
    },
    {
      icon: <BsFillCreditCardFill size={30} color="#f7d272" />,
      heading: "Paiement Sécurisé",
      text: "Effectuez le paiement sécurisé de vos produits.",
    },
    {
      icon: <BsCartCheck size={30} color="#fa82ea" />,
      heading: "Produits de qualité",
      text: "Nous vendons des produits de marque approuvées.",
    },
    {
      icon: <BsClockHistory size={30} color="#82fa9e" />,
      heading: "24/7 Assistance client",
      text: "Obtenez un accessoire d'assistance des expertes.",
    },
  ];

const HomeInfoBox = () => {
    return <div className="infoboxes">
            {data.map((item, index) =>{
                const {icon, heading, text} = item 
                return (
                    <div key={index} className="infobox">
                        <div className="icon">{icon}</div>
                        <div className="heading">
                            <h4>{heading}</h4>
                            <p className="--text-sm">{text}</p>
                        </div>
                        </div>
                )
            })}
        </div>;
};

export default HomeInfoBox;
