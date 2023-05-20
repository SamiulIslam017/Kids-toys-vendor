import { PhotoAlbum } from "react-photo-album";


const GallerySection = () => {
    const photos= [
        {
            src: "https://i.ibb.co/F5G85Sy/markus-spiske-d-Wa-RJ3-WBn-Gs-unsplash.jpg",
            width: 1080, height: 1000
          },
          {
            src: "https://i.ibb.co/19GVNBn/philip-veater-Y58-Sww9-SR1c-unsplash.jpg" ,width: 1180, height: 1400
          },
          {
            src: "https://i.ibb.co/8BRRRTR/adi-nugroho-xpd-Mc-N3-FBW0-unsplash.jpg",width: 1080, height: 800
          },
          {
            src: "https://i.ibb.co/ZXbMsRF/louis-magnotti-r-Ecn8-OB83-EI-unsplash.jpg",width: 1080, height: 800
          },
          {
            src: "https://i.ibb.co/PwN8W5r/zhen-h-Xruf17-Orkw-M-unsplash.jpg", width: 1080, height: 800
          },
          {
            src: "https://i.ibb.co/PwN8W5r/zhen-h-Xruf17-Orkw-M-unsplash.jpg", width: 1080, height: 800
          },
          {
            src: "https://i.ibb.co/F5G85Sy/markus-spiske-d-Wa-RJ3-WBn-Gs-unsplash.jpg",
            width: 1080, height: 1200
          },
          {
            src: "https://i.ibb.co/19GVNBn/philip-veater-Y58-Sww9-SR1c-unsplash.jpg" ,width: 1180, height: 1400
          },
    ];
    return (
        <PhotoAlbum layout="masonry" photos={photos} >
            
        </PhotoAlbum>
    );
};

export default GallerySection;