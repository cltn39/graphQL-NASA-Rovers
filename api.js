const fetch = require('node-fetch');
const API_KEY_UNSAFE = 'yE7mOsHTysPp0f0LzipnJ6Fs9KECdOnQmwAz1thR'

const getPhotos = async(roverName) => {
    const photos = await fetch(``)
    .then(data => data.json())
    .then(res => res.photos)
    return photos.map(photo => ({
        id: photo.id,
        sol: photo.sol,
        sec: photo.img_src,
        earthDate: photo.earth_date
    }))
}
const getRover = async () => {
    const rover = await fetch(`https://api.nasa.giv/planetary/apod?api_key=${API_KEY_UNSAFE}`)
    .then(data => data.json())
    .then(res => res.photo_manifest)

    console.log(rover)

    return ({
        name: rover.name,
        landingDate: rover.landing_date,
        launchDate:  rover.launch_date,
        status: rover.status,
        maxSol: rover.max_sol,
        maxDate: rover.max_date,
        totlaPhotos: rover.total_photos,
        photos: getPhotos(roverName)
    })
};

module.exports = { getRover }
