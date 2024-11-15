import PropTypes from "prop-types";
import { useRef, useState } from "react";
import "./videowithpip.module.css";

const VideoWithPIP = ({ channel, isOpen, videoId, onClose }) => {
  const videoRef = useRef(null);
  const [isPIP, setIsPIP] = useState(false);

  // Función para activar PiP
  const enablePIP = async () => {
    try {
      if (videoRef.current && document.pictureInPictureEnabled) {
        await videoRef.current.requestPictureInPicture();
        setIsPIP(true);
      }
    } catch (error) {
      console.error("Error al activar PiP:", error);
    }
  };

  // Función para desactivar PiP
  const disablePIP = async () => {
    try {
      if (document.pictureInPictureElement) {
        await document.exitPictureInPicture();
        setIsPIP(false);
      }
    } catch (error) {
      console.error("Error al desactivar PiP:", error);
    }
  };

  // Alternar entre activar y desactivar PiP
  const togglePIP = async () => {
    if (isPIP) {
      await disablePIP();
    } else {
      await enablePIP();
    }
  };

  return (
    <div className="d-flex justify-content-center  mx-auto">
      {/* Modal para video */}
      {isOpen && (
        <div className="modal-video" role="dialog" aria-modal="true">
          <div className="modal-video-body">
            <div className="modal-video-inner">
              <div className="modal-video-movie-wrap">
                {channel === "youtube" ? (
                  <iframe
                    ref={videoRef}
                    width="100%"
                    height="100%"
                    src={`https://www.youtube.com/embed/${videoId}?autoplay=1&cc_load_policy=1&controls=1&disablekb=0&enablejsapi=0&fs=1&iv_load_policy=1&loop=0&rel=0&showinfo=1&start=0&wmode=transparent&theme=dark&mute=0`}
                    frameBorder="0"
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    aria-label="Video de YouTube"
                    style={{
                      width: "90vw",
                      height: "80vh",
                      marginInline: "auto",
                      marginBlock: "auto",
                    }}
                  ></iframe>
                ) : (
                  <video
                    ref={videoRef}
                    controls
                    width="100%"
                    height="100%"
                    src={videoId}
                  ></video>
                )}
              </div>
            </div>
            <button
              className="modal-video-close-btn"
              aria-label="Cerrar el modal"
              onClick={() => {
                onClose();
                disablePIP(); // Asegurarse de desactivar PiP al cerrar el modal
              }}
            ></button>
          </div>
        </div>
      )}

      {/* Botón para activar/desactivar Picture-in-Picture */}
      {channel !== "youtube" && (
        <button onClick={togglePIP}>
          {isPIP ? "Desactivar PiP" : "Activar PiP"}
        </button>
      )}
    </div>
  );
};

VideoWithPIP.propTypes = {
  channel: PropTypes.string.isRequired,
  isOpen: PropTypes.bool.isRequired,
  videoId: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default VideoWithPIP;
