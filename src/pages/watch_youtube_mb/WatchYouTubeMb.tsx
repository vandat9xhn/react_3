import * as React from "react";

import "./WatchYouTubeMb.scss";

const RATIO = 1.78;

//
export interface WatchYouTubeMbProps {}

//
function WatchYouTubeMb({}: WatchYouTubeMbProps) {
  //
  const [paddingTop, setPaddingTop] = React.useState(innerWidth / RATIO);

  //
  const refScrollY = React.useRef(0);
  const refClicked = React.useRef(true);

  //
  React.useEffect(() => {
    handleLoadMetadata();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // ----

  const handleLoadMetadata = () => {
    setTimeout(() => {
      refScrollY.current = scrollY;
      setPaddingTop(innerWidth);
      window.addEventListener("scroll", handleScroll);
    }, 250);
  };

  const handleScroll = () => {
    if (refClicked.current) {
      refClicked.current = false;
      refScrollY.current = scrollY;
      return;
    }

    const scrollYChange = scrollY - refScrollY.current;
    refScrollY.current = scrollY;

    // refScrollY.current = scrollY;
    // console.log(scrollYChange);

    setPaddingTop((paddingTop) => {
      let new_paddingTop = paddingTop;
      const is_scroll_up = scrollYChange < 0;
      console.log(is_scroll_up);

      if (is_scroll_up && scrollY <= innerWidth - innerWidth / RATIO) {
        new_paddingTop -= scrollYChange;
      } else if (!is_scroll_up && paddingTop > innerWidth / RATIO) {
        new_paddingTop -= scrollYChange;
      }

      if (new_paddingTop >= innerWidth) {
        new_paddingTop = innerWidth;
      } else if (new_paddingTop <= innerWidth / RATIO) {
        new_paddingTop = innerWidth / RATIO;
      }

      return new_paddingTop;
    });
  };

  const handleTouch = () => {
    refClicked.current = true;
    setPaddingTop(innerWidth);
  };

  //
  return (
    <div className="WatchYouTubeMb">
      <div className="WatchYouTubeMb_header">Header</div>

      <div className="WatchYouTubeMb_main" onClick={handleTouch}>
        <div className="WatchYouTubeMb_main_contain">
          <div style={{ paddingTop: `${paddingTop}px` }}></div>

          <div
            className="WatchYouTubeMb_video"
            style={{ width: innerWidth, height: innerWidth }}
          >
            {/* <video
              className="WatchYouTubeMb_src"
              onLoadedMetadata={handleLoadMetadata}
            >
              <source src="https://www.youtube.com/embed/w2j_RyfUVEI" />
            </video> */}
          </div>
        </div>
      </div>

      <div style={{ height: `${paddingTop}px` }}></div>

      <div className="WatchYouTubeMb_list">
        <div>List videos</div>

        <div>
          {"Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo, soluta veniam. Veritatis velit accusamus similique provident, enim voluptas earum, commodi impedit porro doloremque cupiditate cumque placeat! Consequuntur in corrupti aperiam."
            .split("")
            .map((item, ix) => (
              <div key={ix}>{item}</div>
            ))}
        </div>
      </div>
    </div>
  );
}

export default WatchYouTubeMb;
