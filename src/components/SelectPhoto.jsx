import React from 'react';
import Navbar from './Navbar';

const SelectPhoto = () => {
  return (
    <div>
      <Navbar/>
      <div className="container">
        <div className="row">
          <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
            <div className="row">
              <div className="col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                <label htmlFor="albumName" className="form-label">Album Name</label>
                <input type="text" id="albumName" className="form-control" />
              </div>
              <div className="col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                <label htmlFor="albumId" className="form-label">Album id</label>
                <input type="text" id="albumId" className="form-control" />
              </div>
              <div className="col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                <label htmlFor="title" className="form-label">Title</label>
                <input type="text" id="title" className="form-control" />
              </div>
              <div className="col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                <label htmlFor="url" className="form-label">URL</label>
                <input type="text" id="url" className="form-control" />
              </div>
              <div className="col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                <label htmlFor="thumbnailUrl" className="form-label">Thumbnail URL</label>
                <input type="text" id="thumbnailUrl" className="form-control" />
              </div>
              <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <button className="btn btn-success">Add Photo</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SelectPhoto;
