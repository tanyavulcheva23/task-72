import React from "react";

function Tags({tags}){

return <div className="tags">
             {tags.map((tag) => {
                  return <div className="tag">{'#' + tag}</div>})}
      </div>


}

export default Tags