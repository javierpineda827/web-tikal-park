import { useState } from "react";
import PropTypes from "prop-types";

import VideoWithPIP from "./VideoWithPIP";
import Modal from "./Modal";

export default function VideoPopup({
  vdocls,
  style2,
  style3,
  style4,
  style5,
  notext,
  url_video = null,
  textButton,
}) {
  const [isOpen, setOpen] = useState(false);
  return (
    <>
      <a onClick={() => setOpen(true)} className={`${vdocls ? vdocls : ""}`}>
        {style2 ? (
          <>
            <img src="/imgs/page/activities/video.svg" alt="Travila" />

            {notext ? "" : "Video Clips"}
          </>
        ) : null}

        {style3 ? (
          <>
            <img src="/imgs/page/homepage5/play.svg" alt="Travila" />
            ¿Quieres describirlo?
          </>
        ) : null}
        {style4 ? (
          <>
            <img
              className="mr-0"
              src="/imgs/page/activities/btn-video.png"
              alt="Travila"
            />
          </>
        ) : null}
        {style5 ? (
          <>
            <img src="/imgs/page/homepage10/play.png" alt="Travila" />
            {textButton && textButton}
          </>
        ) : null}
      </a>

      <Modal isOpen={isOpen} onClose={() => setOpen(false)}>
        <VideoWithPIP
          channel="youtube"
          isOpen={isOpen}
          videoId={url_video ? url_video : "U5htblOxNHQ"}
          onClose={() => setOpen(false)}
        />
      </Modal>
    </>
  );
}

// Definición de PropTypes
VideoPopup.propTypes = {
  vdocls: PropTypes.string,
  style2: PropTypes.bool,
  style3: PropTypes.bool,
  style4: PropTypes.bool,
  style5: PropTypes.bool,
  notext: PropTypes.bool,
  url_video: PropTypes.string,
  textButton: PropTypes.string,
};
