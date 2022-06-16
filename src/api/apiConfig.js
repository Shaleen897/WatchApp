const apiConfig = {
    baseUrl: 'https://api.themoviedb.org/3/',
    apiKey: '399e3e7dd5d8e3fcf16aa868c65f87a4',
    originalImage: (imgPath) => `https://image.tmdb.org/t/p/original/${imgPath}`,
    w500Image: (imgPath) => `https://image.tmdb.org/t/p/w500/${imgPath}`
}

export default apiConfig;