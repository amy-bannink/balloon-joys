// import React, {useState} from "react";
// import ImageUploader from "react-images-upload";
//
// function Profile() {
//     const ProfilePic = props => {
//         const [pictures, setPictures] = useState([]);
//
//         const onDrop = picture => {
//             setPictures([...pictures, picture]);
//         };
//     }
//
//     return(
//         <div>
//         {/* profile image uploaden */}
//         <ImageUploader
//             {...props}
//             withIcon={true}
//             onChange={onDrop}
//             imgExtension={[".jpg", ".gif", ".png", ".gif"]}
//             maxFileSize={5242880}/>
//         {/* display username and email*/}
//         {/*display XP progress bar*/}
//         {/*display public challenge list*/}
//
//         </div>
//     )
// }
//
// export default Profile;


import React, {useState} from "react";
import ImageUploader from "react-images-upload";
import UserDetails from "./UserDetails";

    const ProfilePic = props => {
        const [pictures, setPictures] = useState([]);

        const onDrop = picture => {
            setPictures([...pictures, picture]);
        };


        return (
            <div>
                {/* profile image uploaden */}
                <ImageUploader
                    {...props}
                    withIcon={true}
                    onChange={onDrop}
                    imgExtension={[".jpg", ".gif", ".png", ".gif"]}
                    maxFileSize={5242880}/>
                {/* display username and email*/}
                <UserDetails/>
                {/*display XP progress bar*/}
                {/*display public challenge list*/}

            </div>
        )
    }
export default ProfilePic;