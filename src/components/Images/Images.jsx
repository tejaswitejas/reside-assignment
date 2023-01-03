/* eslint-disable no-unused-vars */
import React, { useContext, useEffect, useState } from 'react';
import './Images.css';
import getImages from '../../services/marsRoverService';
import { LoaderIcon } from '../LoaderIcon/LoaderIcon';
import { ErrorMessage } from '../ErrorMessage/ErrorMessage';
import { AppContext } from '../../state/context/AppContext';
import { ACTIONS, STATE } from '../../state/constants/ContextConstants';

const NoImagesMessage = () => {
  const { data } = useContext(AppContext);
  if (data[STATE.LOADER]) return null;
  if (data[STATE.ERROR]) return null;
  if (data[STATE.IMAGES].length !== 0) return null;
  return <p>NO IMAGES AVAILABLE FOR THIS SELECTION</p>;
};

const Images = () => {
  // eslint-disable-next-line no-unsafe-optional-chaining
  const { data, dispatch } = useContext(AppContext);
  const [page, setPage] = useState(1);

  useEffect(() => {
    dispatch({ type: ACTIONS.SET_LOADER, payload: true });
    dispatch({ type: ACTIONS.SET_ERROR, payload: false });
    getImages(data.rover, data.camera, data.date_type, data.date, page)
      .then((res) => {
        if (res.success === true) {
          dispatch({
            type: ACTIONS.SET_IMAGES,
            payload: [...data[STATE.IMAGES], ...res.data.photos]
          });
        } else {
          dispatch({ type: ACTIONS.SET_ERROR, payload: true });
        }
        dispatch({ type: ACTIONS.SET_LOADER, payload: false });
      })
      .catch((err) => {
        dispatch({ type: ACTIONS.SET_LOADER, payload: false });
        dispatch({ type: ACTIONS.SET_ERROR, payload: true });
        dispatch({ type: ACTIONS.SET_ERROR_MESSAGE, payload: err.message });
        console.log(err);
      });
  }, [page]);

  const handleScroll = () => {
    if (
      window.innerHeight + document.documentElement.scrollTop + 1 >=
      document.documentElement.scrollHeight
    ) {
      setPage(page + 1);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  return (
    <div id="images-container">
      <div className="images-sub-container">
        <NoImagesMessage />
        {data[STATE.IMAGES]?.map((image) => {
          return <img src={image.img_src} className="image_dimensions" key={image.id} />;
        })}
      </div>
      {data[STATE.LOADER] && (
        <div className="loader-container">
          <LoaderIcon />
        </div>
      )}
      {data[STATE.ERROR] && <ErrorMessage errorMessage={data[STATE.ERROR_MESSAGE]} />}
    </div>
  );
};

export default Images;
