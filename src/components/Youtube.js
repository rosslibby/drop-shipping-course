import { YoutubeDataAPI } from "youtube-v3-api";
const API_KEY = "AIzaSyCKj_EzJK_e5c4KPXfAGKKql-uhFtBWh18";

const api = new YoutubeDataAPI(API_KEY);

api.searchAll(API_KEY, "Chris Waller", 5).then(res => {
  console.log(res);
});
