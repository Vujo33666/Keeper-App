import React from "react";

function Footer(){

    const date=new Date();

    return(
        <footer>
            <p>Copyright &#169; {date.getFullYear()}. Created by Marko Vujnović using React & Firebase</p>
        </footer>
    );
}

export default Footer;