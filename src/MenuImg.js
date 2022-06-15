import React from 'react';

export default function MenuImg({ foodId, sideId, drinkId }) {
  return (
    <div className="city">
      <img src={`castle-${foodId}.jpeg`} />
      <img src={`skyLine-${sideId}.jpeg`} />
      <img src={`waterfront-${drinkId}.jpeg`}/>
      {/* this component should take 3 props: waterfrontId, skylineId, and castlId */}
      {/* use these 3 ids in img tags load approriate images that live in the public directory */}
    </div>
  );
}