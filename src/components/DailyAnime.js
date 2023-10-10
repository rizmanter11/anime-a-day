import React from 'react';

function DailyAnime({ randAni }) {
  console.log(randAni)
  return (
    <div className='randanibox'>
      {
        randAni.title != undefined &&
        <div className='randani'>
          <h1>Today's Random Anime</h1>
          <div className='randcontent'>
            <a href={randAni.url} target="_blank" rel="noreferrer">
                <h3>{randAni.title}</h3>
                <figure>
                    <img src={randAni.images.jpg.image_url} alt="Anime"/>
                </figure>
            </a>
            <p>{randAni.synopsis}</p>
          </div>
        </div>
      }
    </div>
  )
}

export default DailyAnime;
