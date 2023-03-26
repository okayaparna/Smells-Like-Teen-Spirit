const albums = 
[
    {
      "name": "Extended Pleasure Condoms",
      "brand": "Trojan",
      "cost": "$$",
      "features": "comfortable and durable, desensitizing lubricant, extends intercourse",
      "cover_image_url": "https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/81EMRiu45dL.jpg"
    },
    {
      "name": "Crown Condoms",
      "brand": "Okamoto",
      "cost": "$$",
      "features": "extremely thin yet strong, comfortable fit, good value",
      "cover_image_url": "https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/71uujolTj-L.jpg"
    },
    {
      "name": "Her Pleasure Condoms",
      "brand": "Trojan",
      "cost": "$$$",
      "features": "comfortable fit\nnatural feel\nroomy tip",
      "cover_image_url": "https://www.condomdepot.com/content/product/large/Trojan-Her-Pleasure-Ecstasy-Condom.jpg"
    },
    {
      "name": "Fire and Ice Condoms",
      "brand": "Trojan",
      "cost": "$$$",
      "features": "durable, warming and cooling lubricant, electronically tested",
      "cover_image_url": "https://i.pinimg.com/originals/a9/62/69/a96269ede1311a4f715f5fcb1a340558.jpg"
    },
    {
      "name": "Elite Extra Lubricated Condoms",
      "brand": "Skyn",
      "cost": "$$",
      "features": "extra lubrication, free of natural rubber latex, natural feeling",
      "cover_image_url": "https://cdn.shopify.com/s/files/1/0189/9806/products/skyn-extra-lube-new.jpg?v=1469825526"
    },
    {
      "name": "Flavour Wave Assorted Flavoured Condoms",
      "brand": "One",
      "cost": "$$",
      "features": "comfortable, great taste, ultra soft latex",
      "cover_image_url": "https://cdn.shopify.com/s/files/1/1025/2425/products/FlavorWaves_Banana_Split_1d833863-5664-409c-a7f9-fc3315cce09c_620x.jpg?v=1590264316"
    },
    {
      "name": "Tropical Flavoured Condoms",
      "brand": "Durex",
      "cost": "$$$",
      "features": "comfortable, tropical fruit taste, natural feel",
      "cover_image_url": "https://www.sayitwithacondom.com//media/catalog/product/cache/1/image/1200x1200/9df78eab33525d08d6e5fb8d27136e95/D/X/DX-B-85638.jpg"
    },
    {
      "name": "Ultra Ribbed Premium Lubricated Condoms",
      "brand": "Trojan",
      "cost": "$",
      "features": "ultra thin, comfortable, stimulating ribbed texture",
      "cover_image_url": "https://www.condomdepot.com/content/product/large/Trojan-Ultra-Ribbed-Lubricated.jpg"
    },
    {
      "name": "Invisible Ultra Thin Condoms",
      "brand": "Durex",
      "cost": "$$$",
      "features": "ultra thin, natural feel, enhances sensation",
      "cover_image_url": "https://www.condomdepot.com/content/product/large/Durex-Invisible-Condoms.jpg"
    },
    {
      "name": "Magnum Condoms",
      "brand": "Trojan",
      "cost": "$$",
      "features": "natural feel, comfortable fit, good sensation",
      "cover_image_url": "https://www.condomdepot.com/content/product/large/Trojan-Magnum-Lubricated-Condom.jpg"
    },
    {
      "name": "Ultra Sensitive Condomes",
      "brand": "LifeStyles",
      "cost": "$$$",
      "features": "extremely comfortable, thin yet durable, good for sensitive skin",
      "cover_image_url": "https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/71QU6+QM6wL._AC_UF894,1000_QL80_.jpg"
    },
    {
      "name": "Durex Extra Sensitive Condoms",
      "brand": "Durex",
      "cost": "$",
      "features": "thin yet sturdy, light, nonirritating lubricant, comfortable fit",
      "cover_image_url": "https://www.condomdepot.com/content/product/large/durex-extra-senstive-stimulating.jpg"
    }
  ]

  const albumsList = document.getElementById('albums-list')
  
  function renderAlbum(album) {
    // Create .album element
    const albumElement = document.createElement('div')
  
    albumElement.classList.add('album')
  
    console.log(albumElement)
    console.log(album.cover_image_url)
  
    // Create the inner HTML content
    const albumHTML = `
      <img src="${album.cover_image_url}">
      <ul>
        <li>Name: ${album.name}</li>
        <li>Brand: ${album.brand}</li>
        <li>Cost: ${album.cost}</li>
        <li>Features: ${album.features}</li>
      </ul>
    `
  
    // Set the inner HTML content of the albumElement
    albumElement.innerHTML = albumHTML
  
    // Add to the list #albums-list
    albumsList.appendChild(albumElement)
  }
  
  // Start App!
  albums.forEach(function(album) {
    // if (album.year_released < 2000) {
      renderAlbum(album)
    // }
  })
  
  