import * as React from "react";

//
export interface MyAudioProps {}

//
function MyAudio({}: MyAudioProps) {
  //
  const refAudio = React.useRef<HTMLAudioElement>(null);
  const refHasPlayed = React.useRef(false);

  //
  React.useEffect(() => {
    const handlePointerdown = () => {
      !refHasPlayed.current && refAudio.current.play();
      window.removeEventListener("pointerdown", handlePointerdown);
    };
    window.addEventListener("pointerdown", handlePointerdown);
  }, []);

  //
  const handlePlayed = () => {
    refHasPlayed.current = true;
  };

  //
  return (
    <div>
      <audio ref={refAudio} controls autoPlay muted onPlay={handlePlayed}>
        {/* <source
          src="https://www.w3schools.com/html/horse.ogg"
          type="audio/ogg"
        /> */}
        <source
          src="https://interactive-examples.mdn.mozilla.net/media/cc0-audio/t-rex-roar.mp3"
          type="audio/mpeg"
        />
      </audio>
    </div>
  );
}

export default MyAudio;
