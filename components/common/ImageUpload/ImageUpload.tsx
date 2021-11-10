import React from 'react'
import { useState, useCallback, useRef, useEffect } from 'react';
import Modal from 'react-modal';
import ReactCrop from 'react-image-crop';
import styles from './ImageUpload.module.scss';
import 'react-image-crop/dist/ReactCrop.css';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  }
};

type Props = {
  imageUrl: string,
  onImageChange: Function,
  aspectRatio?: number,
}

const ImageUpload = ({ imageUrl, onImageChange, aspectRatio = 1 }: Props) => {
  var subtitle: HTMLHeadingElement | null;

  const imgRef = useRef<HTMLImageElement | null>(null);
  const previewCanvasRef = useRef<HTMLCanvasElement | null>(null);

  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [upImg, setUpImg] = useState();
  const [crop, setCrop] = useState<ReactCrop.Crop>({ unit: 'px', aspect: aspectRatio });
  const [completedCrop, setCompletedCrop] = useState(null);

  const [imageValue, setimageValue] = useState(imageUrl);

  useEffect(() => {
    if (!completedCrop || !previewCanvasRef.current || !imgRef.current) {
      return;
    }

    const image = imgRef.current;
    const canvas = previewCanvasRef.current;
    const crop = completedCrop;

    const scaleX = image.naturalWidth / image.width;
    const scaleY = image.naturalHeight / image.height;
    const ctx = canvas.getContext('2d');
    const pixelRatio = window.devicePixelRatio;

    canvas.width = crop.width * pixelRatio;
    canvas.height = crop.height * pixelRatio;

    ctx.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);
    ctx.imageSmoothingQuality = 'high';

    ctx.drawImage(
      image,
      crop.x * scaleX,
      crop.y * scaleY,
      crop.width * scaleX,
      crop.height * scaleY,
      0,
      0,
      crop.width,
      crop.height
    );

    const dataURL = canvas.toDataURL();
    const blobData = dataURItoBlob(dataURL);
    if (blobData !== null) {
      setimageValue(null);
      onImageChange(blobData);
    }

  }, [completedCrop]);

  const onSelectFile = (e) => {
    if (e.target.files && e.target.files.length > 0) {
      const reader = new FileReader();
      reader.addEventListener('load', () => {
        setUpImg(reader.result)
        openModal();
      });
      reader.readAsDataURL(e.target.files[0]);
    }
  };

  const openModal = () => {
    setModalIsOpen(true);
  }
  const closeModal = () => {
    setModalIsOpen(false);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = '#f00';
  }

  const onLoad = useCallback((img) => {
    imgRef.current = img;
  }, []);

  return (
    <div>
      <input type="file" accept="image/*" onChange={onSelectFile} />
      <button onClick={openModal}>Open modal</button>
      <div>
        {imageValue ? <img src={imageUrl} /> : <canvas
          ref={previewCanvasRef}
          style={{
            maxWidth: 300,
            maxHeight: 300
          }}
        />}
      </div>
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <h2 ref={_subtitle => (subtitle = _subtitle)}>Hello</h2>
        <button onClick={closeModal}>close</button>
        <div>drag the section you want saved</div>
        <div className={styles.cropWrapper}>
          <ReactCrop
            // maxWidth={200}
            src={upImg}
            onImageLoaded={onLoad}
            crop={crop}
            onChange={(c) => setCrop(c)}
            onComplete={(c) => setCompletedCrop(c)}
          />
        </div>
      </Modal>
    </div>
  )
}

export default ImageUpload

function dataURItoBlob(dataUrl: string) {
  var arr = dataUrl.split(',');
  if (!!arr[1]) {
    var mime = arr[0].match(/:(.*?);/)[1];
    var bstr = atob(arr[1]);
    var n = bstr.length;
    var u8arr = new Uint8Array(n);
    while (n--) {
      u8arr[n] = bstr.charCodeAt(n);
    }
    return new Blob([u8arr], { type: mime });
  }
  return null;
}

