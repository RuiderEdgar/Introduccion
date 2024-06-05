const apiKey = "EnG2ZmH89kv6HBQ4pCrj9ZrGoWci855A";

const peticion = fetch(
  `https://api.giphy.com/v1/gifs/trending?api_key=${apiKey}`
);

// peticion
//   .then((res)=> {
//     res.json().then(data => console.log(data))
//   })
//   .catch(console.warn)

peticion
  .then((res) => res.json())
  // .then(({data}) => console.log(data[0].images.original.url))
  .then(({ data }) => {
    const { url } = data[0].images.original;

    const img = document.createElement("img");
    img.src = url;

    document.body.append(img);
  })

  .catch(console.warn);
