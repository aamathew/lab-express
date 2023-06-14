const artists = [
    {artists: 'Eminem', artist: true},
    {artists: 'LeBron James', artist: false},
    {artists: 'Michael Jackson', artist: true},
    {artists: 'Allen Iverson', artist: false}
];

module.exports = {
    getAll: function () {
       return artists;
    }
};