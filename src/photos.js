import React, { Component } from 'react';

export default class Photos extends React.Component {
  constructor(props) {
    super(props);

    this.toggleTab = this.toggleTab.bind(this);
  }

  toggleTab(section) {
    const { toggleDisplay } = this.props;
    toggleDisplay(section);
  }

  render() {
    const urlList = [
      'https://res.cloudinary.com/ac31624/image/upload/v1563579336/jon_bache/photos/IMG_20190704_085122.jpg',
      'https://res.cloudinary.com/ac31624/image/upload/v1563579336/jon_bache/photos/00100lPORTRAIT_00100_BURST20190705225543002_COVER.jpg'
    ];

    return (
      <>
        <PhotoItem url={'https://res.cloudinary.com/ac31624/image/upload/v1563579336/jon_bache/photos/IMG_20190704_085122.jpg'} />
        <PhotoItem url={'https://res.cloudinary.com/ac31624/image/upload/v1563579336/jon_bache/photos/00100lPORTRAIT_00100_BURST20190705225543002_COVER.jpg'} />
        <PhotoItem url={'https://res.cloudinary.com/ac31624/image/upload/v1563579336/jon_bache/photos/IMG_20190704_202446.jpg'} />
        <PhotoItem url={'https://res.cloudinary.com/ac31624/image/upload/v1563579336/jon_bache/photos/MVIMG_20190704_205351.jpg'} />
        <PhotoItem url={'https://res.cloudinary.com/ac31624/image/upload/v1563579336/jon_bache/photos/IMG_20190704_205301.jpg'} />
        <PhotoItem url={'https://res.cloudinary.com/ac31624/image/upload/v1563579336/jon_bache/photos/PhotoCollage_20190705_151222577.jpg'} />
        <PhotoItem url={'https://res.cloudinary.com/ac31624/image/upload/v1563579335/jon_bache/photos/FB_IMG_1562819793062.jpg'} />
        <PhotoItem url={'https://res.cloudinary.com/ac31624/image/upload/v1563579336/jon_bache/photos/IMG_20190705_194352.jpg'} />
        <PhotoItem url={'https://res.cloudinary.com/ac31624/image/upload/v1563579335/jon_bache/photos/IMG_20190706_140559.jpg'} />
        <PhotoItem url={'https://res.cloudinary.com/ac31624/image/upload/v1563579335/jon_bache/photos/IMG_20190706_002906.jpg'} />
        <PhotoItem url={'https://res.cloudinary.com/ac31624/image/upload/v1563579335/jon_bache/photos/IMG_20190706_030019.jpg'} />
        <PhotoItem url={'https://res.cloudinary.com/ac31624/image/upload/v1563579335/jon_bache/photos/IMG_20190707_142136.jpg'} />
        <PhotoItem url={'https://res.cloudinary.com/ac31624/image/upload/v1563579335/jon_bache/photos/IMG_20190707_143845.jpg'} />
        <PhotoItem url={'https://res.cloudinary.com/ac31624/image/upload/v1563579335/jon_bache/photos/IMG_20190709_125017.jpg'} />
        <PhotoItem url={'https://res.cloudinary.com/ac31624/image/upload/v1563579335/jon_bache/photos/IMG_20190708_225110.jpg'} />
        <PhotoItem url={'https://res.cloudinary.com/ac31624/image/upload/v1563579335/jon_bache/photos/IMG_20190708_033051.jpg'} />
        <PhotoItem url={'https://res.cloudinary.com/ac31624/image/upload/v1563579335/jon_bache/photos/IMG_20190709_010840.jpg'} />
        <PhotoItem url={'https://res.cloudinary.com/ac31624/image/upload/v1563579335/jon_bache/photos/IMG_20190709_002747.jpg'} />
      </>
    )
  }
}

export const PhotoItem = ({url}) => {
  return (
    <img alt="" className="photo-item" src={url} />
  );
}