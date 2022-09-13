import * as React from "react";

import BtnSimple from "components/buttons/simple/BtnSimple";
import TagHtml from "components/tag_html/TagHtml";
import MyAudio from "components/audio/MyAudio";

//
export interface CommonPgProps {}

//
function CommonPg({}: CommonPgProps) {
  //
  return (
    <div>
      <div>
        <BtnSimple
          onClick={() => {
            console.log(1);
          }}
        />
      </div>

      <div>
        <TagHtml Tag="span" attrs={{ className: "TagHtml" }} />
      </div>

      <div>
        <MyAudio />
      </div>
    </div>
  );
}

export default CommonPg;
