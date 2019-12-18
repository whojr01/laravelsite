//
// https://developers.google.com/youtube/iframe_api_reference#Loading_a_Video_Player
//

<script type="text/javascript">
var tag = document.createElement('script');
tag.id = 'iframe-demo';
tag.src = 'https://www.youtube.com/iframe_api';
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

var player;
function onYouTubeIframeAPIReady() {
    player = new YT.Player('adventure-video-player', {
  //      events: {
  //          'onReady': onPlayerReady,
  //          'onStateChange': onPlayerStateChange
  //      }
    });
}

</script>