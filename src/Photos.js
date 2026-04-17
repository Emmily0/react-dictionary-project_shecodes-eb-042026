import React from "react";
import "./Photos.css";

export default function Photos(props) {
    if (props.photos) {
        return (
            <section className="Photos">
                <div className="row g-3">
                {props.photos.slice(0, window.innerWidth < 768 ? 6 : 9).map(function(photo,index) {
                    return (
                        <div className="col-6 col-md-4" key={index}>
                           <a 
                           href={photo.src.original} 
                           target="_blank" 
                           rel="noreferrer" 
                           >
                            <img 
                            src={photo.src.landscape}
                            className= "img-fluid"
                            alt={photo.src.alt}
                            />
                           </a> 
                        </div>
                    )
                })}     
                </div>
            </section>
        );
    } else {
        return null;
    }
}