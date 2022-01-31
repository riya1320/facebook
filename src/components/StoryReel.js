import React from 'react';
import Story from './Story';
import "./StoryReel.css";

function StoryReel() {
  return(
       <div className="storyReel">
           <Story
                image="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/2019-honda-civic-sedan-1558453497.jpg?crop=1xw:0.9997727789138833xh;center,top&resize=480:*"
                profileSrc="https://lh3.googleusercontent.com/p/AF1QipN2UxdSGFcXXqLAtRtoYr_xjeqAbdlJZPfaz-i-=s1280-p-no-v1"
                title="Riya Shah"
            />

            <Story
                image="https://lp-cms-production.imgix.net/features/2019/03/GettyImages-941491560-a597ace44bb3.jpg"
                profileSrc="https://www.morganstanley.com/content/dam/msdotcom/people/tiles/wided-sghaier.jpg.img.490.medium.jpg/1594912196352.jpg"
                title="Manju Razi"
            />

            <Story
                image="https://cdn.mos.cms.futurecdn.net/wtqqnkYDYi2ifsWZVW2MT4-320-80.jpg"
                profileSrc="https://photof8.com/wp-content/uploads/2016/10/FutureAst007-2.jpg"
                title="Keyur Soni"
            />

            <Story
                image="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/bicycle-driving-instruction-royalty-free-image-1630093652.jpg?crop=1.00xw:0.752xh;0,0.180xh&resize=1200:*"
                profileSrc="https://www.morganstanley.com/content/dam/msdotcom/people/tiles/miriam-faghihi.jpg.img.490.medium.jpg/1595876429967.jpg"
                title="Ranju Shah"
            />

            <Story
                image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeD9qb99Yf6mOdOPTauqbGxiOXX95S5nFdpg&usqp=CAU"
                profileSrc="https://pbs.twimg.com/profile_images/1339242927663370240/VoFRzC_X_400x400.jpg"
                title="Samyak Jaani"
            />

       </div>
  );
}

export default StoryReel;
