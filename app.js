$(document).ready(function(){
    var Apikey = "AIzaSyB-GmKDp5Rr9RXDb53hn8Z4PU6jK1nYdi8";
    var video = "";

    $("#form").submit(function (event) {
        event.preventDefault()

        var search = $("#search").val()

        videoSearch(Apikey,search,12)
    })

    function videoSearch(key, search, maxResults){

        $("#videos").empty()

        $.get("https://www.googleapis.com/youtube/v3/search?key=" + key + "&type=video&part=snippet&maxResults=" + maxResults + "&q=" + search, function(data){

        //console.log(data);

        data.items.forEach(item =>{
            video = `<iframe
            width="400"
            height="310"
            src="https://www.youtube.com/embed/${item.id.videoId}" frameborder="0" allowfullscreen></iframe>`;

            
        $("#videos").append(video);
        })



        })
    }
})