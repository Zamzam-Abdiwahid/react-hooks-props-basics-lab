import React from "react";

    function Links({ github, linkedin }) { // Destructure the 'github' and 'linkedin' props
    return (
        <div>
        <h3>Links</h3>
        {github && <a href={github} target="_blank" rel="noreferrer">{github}</a>}
        {linkedin && <a href={linkedin} target="_blank" rel="noreferrer">{linkedin}</a>}
        </div>
    );
    }

    export default Links;