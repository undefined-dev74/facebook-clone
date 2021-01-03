import React from 'react';
import './Widgets.css';
const Widgets = () => {
  return (
    <div className="widgets">
      <iframe
        style={{ border: 'none', overflow: 'hidden' }}
        title="facebook cover"
        src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Ftechinsider%2F&tabs=timeline&width=340&height=500&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId"
        width="340"
        scrolling="no"
        frameBorder="0"
        allowFullScreen={true}
        allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
        height="100%"
        allowtransparency="true"
      ></iframe>
    </div>
  );
};

export default Widgets;
