//async/await

// const getImagePromesa = () => new Promise(resolve=> resolve('https://aasdasadasd.com'))
// getImagePromesa().then(console.log)

const getImage = async () => {
  try {
    const apiKey = "EnG2ZmH89kv6HBQ4pCrj9ZrGoWci855A";
    const res = await fetch(
      `https://api.giphy.com/v1/gifs/trending?api_key=${apiKey}`
    );
    const { data } = await res.json();
    const { url } = data[0].images.original;
    const img = document.createElement("img");
    img.src = url;
    document.body.append(img);
  } catch (error) {
    console.log(error);
  }

  // const data = await res.json()
  // return data
};

getImage();

// getImage()
//   .then(({ data }) => {
//     const { url } = data[0].images.original;

//     const img = document.createElement("img");
//     img.src = url;

//     document.body.append(img);
//   })
//   .catch(console.warn);
