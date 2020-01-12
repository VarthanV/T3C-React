import React from "react";

export default function RenderHtml({ gist }) {
  return (
    <div>
      <p
        className="font-weight-nomral"
        dangerouslySetInnerHTML={{ __html: gist }}
      ></p>
    </div>
  );
}

