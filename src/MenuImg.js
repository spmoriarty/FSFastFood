import React from 'react';

export default function MenuImg({ foodId, sideId, drinkId }) {
  return (
    <div className="city">
      <img src={`food-${foodId}.png`} />
      <img src={`side-${sideId}.png`} />
      <img src={`drink-${drinkId}.png`}/>
      {/* this component should take 3 props: waterfrontId, skylineId, and castlId */}
      {/* use these 3 ids in img tags load approriate images that live in the public directory */}
    </div>
  );
}