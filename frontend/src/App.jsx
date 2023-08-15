import React from 'react';
import { useState } from 'react';

import './App.scss';

import HomeRoute from 'routes/HomeRoute';
import PhotoDetailsModal from 'routes/PhotoDetailsModal';
import useApplicationData from './hooks/useApplicationData';

const App = () => {

  const {
    state,
    data,
    updateToFavPhotoIds,
    setPhotoSelected,
    onClosePhotoDetailsModal
  } = useApplicationData();


  return (
    <div className="App">
      <HomeRoute
        photos={state.photoData}
        topics={data.topics}
        favorites={state.favorites}
        clickedPhoto={state.clickedPhoto}
        toggleFavorite={updateToFavPhotoIds}
        toggleNotification={state.isNotificationActive}
        toggleModal={setPhotoSelected}
      />
      {state.clickedPhoto.length > 0 && (
        <PhotoDetailsModal
          clickedPhoto={state.clickedPhoto}
          toggleModal={onClosePhotoDetailsModal}
          favorites={state.favorites}
          toggleFavorite={updateToFavPhotoIds}
        />
      )}
    </div>
  );

};


export default App;
