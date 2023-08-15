import React from "react";

import "../styles/PhotoList.scss";
import PhotoListItem from "./PhotoListItem";


const PhotoList = (props) => {
  const photoListItemsArray = props.photos.map((photo) => {
    const selected = props.favorites.includes(photo.id);
    //isFavorites(id) function should be here and this comp. shouldn't know state

    return <PhotoListItem
      key={Number(photo.id)}
      photo={photo}
      toggleFavorite={() => props.toggleFavorite(photo.id)}
      selected={selected}
      clickedPhoto={props.clickedPhoto}
      toggleModal={() => props.toggleModal(photo.id)}
    />;
  });

  return (
    <ul className="photo-list">
      {photoListItemsArray}
    </ul>
  );
};

export default PhotoList;
