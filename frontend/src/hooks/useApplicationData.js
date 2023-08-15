import { useEffect, useState } from 'react';

import photos from 'mocks/photos';
import topics from 'mocks/topics';


const useApplicationData = () => {

  const [favorites, setFavorites] = useState([]);
  const [clickedPhoto, setClickedPhoto] = useState([]);
  const [photoData, setPhotoData] = useState([]);
  const [topicData, setTopicData ] = useState([]);

  //The updateToFavPhotoIds action can be used to set the favourite photos.
  //if a photo user is trying to fav. is already a fav, then remove it from the array
  //since it is being unfavorited. else, make it a favorite
  const updateToFavPhotoIds = (id) => {
    if (favorites.includes(id)) {
      const result = favorites.filter(item => item !== id);
      setFavorites(result);
    } else {
      setFavorites([...favorites, id]);
    }
  };

  //this controls modal open/close. clickedPhoto state tells whether photo is
  //currently open in modal or not. 
  //when photo is being viewed in modal, the photo will be in clickedPhoto array
  //when modal is closed, the photo is removed from the array.
  const setPhotoSelected = (id) => {
    if (clickedPhoto.length > 0) {
      setClickedPhoto([]);
    } else {
      // const result = photoListItemsArray.filter(photo => photo.id === id);
      const result = photoData.filter(photo => photo.id === id);
      setClickedPhoto(result);
    }
  };

  //when close button on modal is clicked, clear clickedPhoto array.
  const onClosePhotoDetailsModal = () => {
    setClickedPhoto([]);
  };

  //if favorites state has at least 1 photo, then show notification.
  const isNotificationActive = favorites.length > 0;

  //get photo from API
  useEffect(() => {
    fetch('/api/photos')
      .then(response => response.json())
      .then(data => {
        setPhotoData([...data]);
      });
  }, []);

  //get topic data from API
  useEffect(() => {
    fetch('/api/topics')
      .then(response => response.json())
      .then(data => {
        setTopicData([...data]);
      });
  }, []);



  const state = {
    favorites,
    clickedPhoto,
    isNotificationActive,
    photoData,
    topicData
  };

  const data = {
    photos,
    topics
  };

  return {
    state,
    data,
    updateToFavPhotoIds,
    setPhotoSelected,
    onClosePhotoDetailsModal,
  };
};

export default useApplicationData;
