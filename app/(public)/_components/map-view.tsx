import React from "react";

export default function MapView() {
  return (
    <div>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3129.4012356540356!2d38.26112547553309!3d38.33969437184851!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x407633e6defff0f5%3A0x280bcc6c794b4e04!2sPeli%20Flower%20Cafe!5e0!3m2!1sen!2str!4v1700773915456!5m2!1sen!2str"
        width="600"
        height="450"
        className="w-full rounded-xl"
        loading="lazy"
      />
    </div>
  );
}
