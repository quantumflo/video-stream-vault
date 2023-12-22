const REACT_APP_YOUTUBE_API_KEY = process.env.REACT_APP_YOUTUBE_API_KEY;
export const MAINLOGOIMG = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTg9RQaSsMRiyK8MzG0HIttvLqlxnM44a6V_V8f0tH4otaU5NcoBmx6VTz0i73w2sFMeyA&usqp=CAU";
export const HAMBURGERIMG = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPm18L_L37fW_pi1VVymz7Ukq_SAf7R5E_jQ&usqp=CAU";
export const PROFILEIMG = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUWXln2vaxONq5KB-FB-TYVqXGthR53CqiuNHL_kYYFhXBP9U8LGdT2vNFqM7nmgBuk9Q&usqp=CAU";
export const YOUTUBE_API = "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=25&regionCode=US&key="+ REACT_APP_YOUTUBE_API_KEY;
export const YT_SUGGESTIONS_API = "http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=";
export const YT_SEARCH_API = "https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=";
// &key=${process.env.REACT_APP_YOUTUBE_API_KEY}