import React from 'react';

function DailyAnime({ randAni }) {
  return (
    <daily>
        <div className='randani'>
          <h1>Today's Random Anime</h1>
          <div className='randcontent'>
            <a href={randAni.url} target="_blank" rel="noreferrer">
                <h3>{randAni.title}</h3>
                <figure>
                    <img src={randAni.image_url} alt="Anime"/>
                </figure>
            </a>
            <p>{randAni.synopsis}</p>
          </div>
        </div>
    </daily>
  )
}

export default DailyAnime;
