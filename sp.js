document.addEventListener('DOMContentLoaded', () => {
    const songs = [
        {
            title: 'Song 1',
            artist: 'Artist 1',
            src: 'path/to/song1.mp3',
            cover: 'path/to/cover1.jpg'
        },
        {
            title: 'Song 2',
            artist: 'Artist 2',
            src: 'path/to/song2.mp3',
            cover: 'path/to/cover2.jpg'
        },
        {
            title: 'Song 3',
            artist: 'Artist 3',
            src: 'path/to/song3.mp3',
            cover: 'path/to/cover3.jpg'
        }
    ];

    const audio = document.getElementById('audio');
    const cover = document.getElementById('cover');
    const title = document.getElementById('title');
    const artist = document.getElementById('artist');
    const songsList = document.getElementById('songs');

    function loadSong(song) {
        title.textContent = song.title;
        artist.textContent = song.artist;
        cover.src = song.cover;
        audio.src = song.src;
        audio.play();
    }

    songs.forEach((song, index) => {
        const li = document.createElement('li');
        li.textContent = `${song.title} - ${song.artist}`;
        li.addEventListener('click', () => loadSong(song));
        songsList.appendChild(li);
    });

    // Load the first song by default
    loadSong(songs[0]);
});
