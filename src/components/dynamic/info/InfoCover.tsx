import React from "react";

export interface InfoCoverProps {
  id: string;
  cover?: string;
}

const InfoCover = (props: InfoCoverProps) => {
  return (
    /* Section: Album/Cover images, watch first episode button. */
    <section className="w-full h-[40vh] lg:h-[500px]" id="info-cover">
      {/* Cover image: i.e. full-spread image for anime. */}
      <div className="overflow-hidden h-full">
        <div
          className="banner h-full"
          style={{
            backgroundImage: `url(${props.cover})`,
            filter: "blur(0.25rem)",
          }}
        />
      </div>
    </section>
  );
};

export default InfoCover;
