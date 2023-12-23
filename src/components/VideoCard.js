

const VideoCard = ({info}) => {
const {snippet, statistics} = info;
const {channelTitle, title, thumbnails} = snippet;
  return (
    <div className=" m-4 w-80">
      <img className="rounded-lg max-w-110" src={thumbnails.medium.url} alt="thumbnail" />
      <ul>
        <li className="text-lg p-2 font-semibold line-clamp-2">{title}</li>
        <li className="text-sm px-2">{channelTitle}</li>
        {statistics && <li className="text-sm px-2">{statistics.viewCount} views</li>}
      </ul>
    </div>
  )
}

export default VideoCard