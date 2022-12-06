import React from "react";

function Tags({tags}){

return <div className="tags">
             {tags.map((tagName) => {
                  return <div className="tag">{'#' + tagName}</div>})}
      </div>


}

export default Tags