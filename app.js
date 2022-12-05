console.log("Let's get this party started!");
async function getGif(search){
    let res = await axios.get(`https://api.giphy.com/v1/gifs/search?api_key=0MUHmgFNg4i5KqLjkPmt51is0qgKO9Bu&q=${search}&limit=1&offset=0&rating=pg-13&lang=en`);
    let term = res.data.data
    console.log(res)
  console.log(term[0].images.downsized.url);

  $('.gifs').append(`<div style = "background-image: url( ${term[0].images.original.url} ); background-size: cover; height: 300px; width: 300px; display: inline-block;"></div> `)
}

$('.button').on('click', function(e){
    e.preventDefault(); 
    getGif($('.searchBar').val())
})

$('.remove').on('click', ()=> $('.gifs').empty())