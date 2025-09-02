const productos = 
[
    {name: "ASUS TUF Gaming A16 FA506NCR-HN006 AMD Ryzen 7", price: 599, stars: 4.5, reviews: 510, seller: 'PcComponentes', img:"https://thumb.pccomponentes.com/w-530-530/articles/1084/10848624/1163-asus-tuf-gaming-a15-fa506ncr-hn006-amd-ryzen-7-7435hs-16gb-512gb-ssd-rtx-3050-156.jpg"},

    {name: "XFX SWIFT AMD Radeon RX 6600", price: 599, stars: 4.6, reviews: 119, seller: 'PcComponentes', img:"https://thumb.pccomponentes.com/w-530-530/articles/1087/10871105/1742-msi-geforce-rtx-5070-ventus-2x-oc-12gb-gddr7-reflex-2-rtx-ai-dlss4.jpg"},

    {name:"PcCom Ready V2 AMD Ryzen 7 5800X / 32GB / 1TB SSD / RTX 5060 Ti 16GB", price: 1199, stars:4.7, reviews: 1459, seller: 'PcComponentes', img:"https://thumb.pccomponentes.com/w-530-530/articles/1087/10879991/1571-pccom-ready-amd-ryzen-7-5800x-32gb-1tb-ssd-rtx-5060-ti-16gb-v2-comprar.jpg"},

    {name:"AOC Q27G4XF 27'' LED Fast IPS QHD 180Hz", price: 170, stars: 4.6, reviews: 6053, seller: 'PcComponentes', img: "https://thumb.pccomponentes.com/w-530-530/articles/1084/10847588/1298-aoc-q27g4xf-27-led-fast-ips-qhd-180hz.jpg",},

    {name:"WD Black SN770 2TB Disco SSD 5150MB/S NVMe PCIe 4.0 M.2 Gen4 16GT/s", price: 118.99, stars: 4.5, reviews: 1872, seller: 'PcComponentes', img:"https://thumb.pccomponentes.com/w-530-530/articles/1006/10060348/1253-wd-black-sn770-2tb-disco-ssd-5150mb-s-nvme-pcie-40-m2-gen4-16gt-s-review.jpg"},

    {name:"Tempest Shake Silla Gaming con Reposapiés y Masaje Gris", price: 219, stars: 5, reviews: 135, seller: 'PcComponentes', img:"https://thumb.pccomponentes.com/w-530-530/articles/1079/10798108/1251-tempest-shake-silla-gaming-con-reposapies-y-masaje-gris.jpg",},

    {name:"Forgeon Captain RGB Auriculares con Micrófono Inalámbricos Gaming Negros", price: 59.99, stars: 4.5, reviews: 465, seller: 'PcComponentes', img:"https://thumb.pccomponentes.com/w-530-530/articles/1079/10792513/1121-forgeon-captain-rgb-auriculares-con-microfono-inalambricos-gaming-negros.jpg",},

    {name:"Samsung QE50Q60DAUXXH 43'' QLED UltraHD 4K Quantum HDR", price: 319, stars: 4.5, reviews: 345, seller: 'PcComponentes', img:"https://thumb.pccomponentes.com/w-530-530/articles/1084/10844424/1892-samsung-qe43q60dauxxh-43-qled-ultrahd-4k-quantum-hdr-05a1046c-cbf0-402f-ad47-38a08a5b54e4.jpg",},

    {name:"Xiaomi Redmi Note 14 Pro 4G 8/256GB Morado Aurora Libre", price: 219, stars: 4.6, reviews: 406, seller: 'PcComponentes', img:"https://thumb.pccomponentes.com/w-530-530/articles/1086/10867250/1480-xiaomi-redmi-note-14-pro-4g-8-256gb-morado-aurora-libre.jpg",},

    {name:"Original AirFeel 3000W Aire Acondicionado Portátil con Bomba de Calor 3000 Frigorías", price: 309.90, stars: 4.5, reviews: 213, seller: 'PcComponentes', img:"https://thumb.pccomponentes.com/w-530-530/articles/1081/10810243/1231-oirigial-airfeel-3000w-aire-acondicionado-portatil-con-bomba-de-calor-3000-frigorias-comprar.jpg"},
 
]

const sectionProductos = document.querySelector(".productos")

productos.forEach(producto => {
  const card = document.createElement("div");
  card.classList.add("card");

  card.innerHTML = `
    <img src="${producto.img}" alt="${producto.name}">
    <div class="card-body">
      <h3>${producto.name}</h3>
      <p class="price">${producto.price} €</p>
      <p>⭐ ${producto.stars} (${producto.reviews} reseñas)</p>
      <p class="reviews">Vendido por: ${producto.seller}</p>
    </div>
  `;

  sectionProductos.appendChild(card);
});

