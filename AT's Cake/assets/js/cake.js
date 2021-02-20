const endpoint_url="http://51018011.p-web.local/api";

function getResepKering() {
  fetch(endpoint_url + "/resep/kuekering")
 .then(status)
 .then(json)
 .then(function(data) {
   var dataresepHTML = "";
   data.Resep.forEach(function(resep) {
     dataresepHTML += `
     <div class="">
       <a href="./detailresep.html?Resep_ID=${detail.Resep_ID}">
         <img class="imgkue" src="assets/img/${detail.Image}">
        </a>
     </div>
     <div>
       <div class="card h-300 inline">
         <div class="card-body">
           <img class="card-img image" src="assets/img/${resep.Image}" alt="">
         </div>
         <div class="card-header">
           <h4 class="text-center">${resep.Nama_Resep}</h4>
           <h6 class="text-center">Jenis Kue: ${resep.Jenis_Resep}</h6>
           <h6 class="text-center">Kisaran Harga: ${resep.Kisaran_Harga}</h6>
         </div>
         <div class="card-footer">
           <a href="${resep.Link}" class="btn btn-primary">Find Out More</a>
           <a href="detailresep.html" class="btn btn-primary">Detail Resep</a>
         </div>
       </div>
     </div>
     `;
     $("#section_title").html( "Kue Kering" );
   });

  document.getElementById("nama_kue").innerHTML = dataresepHTML;
  document.getElementById("section_title").innerHTML = sectiontitle;
    })

  .catch(error);
}

function getResepBasah() {
  fetch(endpoint_url + "/resep/kuebasah")
 .then(status)
 .then(json)
 .then(function(data) {
   var datakbasahHTML = "";
   data.Resep.forEach(function(re) {
     datakbasahHTML += `
       <div class="card h-300 inline">
         <div class="card-body">
           <img class="card-img image" src="assets/img/${re.Image}" alt="">
         </div>
         <div class="card-header">
           <h4 class="text-center">${re.Nama_Resep}</h4>
           <h6 class="text-center">Jenis Kue: ${re.Jenis_Resep}</h6>
           <h6 class="text-center">Kisaran Harga: ${re.Kisaran_Harga}</h6>
         </div>
         <div class="card-footer">
           <a href="${re.Link}" class="btn btn-primary">Find Out More</a>
         </div>
       </div>
     `;
     $("#section_title").html( "Kue Basah" );
   });

  document.getElementById("kue_basah").innerHTML = datakbasahHTML;
  document.getElementById("section_title").innerHTML = sectiontitle;
    })

  .catch(error);
}

function getResepUltah() {
  fetch(endpoint_url + "/resep/kueultah")
 .then(status)
 .then(json)
 .then(function(data) {
   var dataultahHTML = "";
   data.Resep.forEach(function(ku) {
     dataultahHTML += `
       <div class="card h-300 inline">
         <div class="card-body">
           <img class="card-img image" src="assets/img/${ku.Image}" alt="">
         </div>
         <div class="card-header">
           <h4 class="text-center">${ku.Nama_Resep}</h4>
           <h6 class="text-center">Jenis Kue: ${ku.Jenis_Resep}</h6>
           <h6 class="text-center">Kisaran Harga: ${ku.Kisaran_Harga}</h6>
         </div>
         <div class="card-footer">
           <a href="${ku.Link}" class="btn btn-primary">Find Out More</a>

         </div>
       </div>
     `;
     $("#section_title").html( "Kue Ultah" );
   });

  document.getElementById("kue_ultah").innerHTML = dataultahHTML;
  document.getElementById("section_title").innerHTML = sectiontitle;
    })

  .catch(error);
}

function getDetailResep(Resep_ID) {
  fetch(endpoint_url + "/details/detailresep"+"?Resep_ID=" + Resep_ID)
 .then(status)
 .then(json)
 .then(function(data) {
   var detailresepHTML = "";
   data.details.forEach(function(detail) {
     detailresepHTML += `
      <div class="">
        <a href="./detailresep.html?Resep_ID=${detail.Resep_ID}">
          <img class="imgkue" src="assets/img/${detail.Image}">
        </a>
        <div class="card inline">
          <table>
            <thead>
              <tr>
                <th>ID Resep</th>
                <td>${detail.Resep_ID}</td>
              </tr>
              <tr>
                <th>Nama Resep</th>
                <td>${detail.Nama_Resep}</td>
              </tr>
              <tr>
                <th>Bahan Utama</th>
                <td> ${detail.Bahan_Utama}</td>
              </tr>
              <tr>
                <th>Lama Memasak</th>
                <td> ${detail.Lama_Memasak}</td>
              </tr>
              <tr>
                <th>Sajian</th>
                <td> ${detail.Sajian}</td>
              </tr>
              <tr>
                <th>Suhu Penyajian</th>
                <td> ${detail.Suhu_Penyajian} Menit</td>
              </tr>
              <tr>
                <th>Negara Asal</th>
                <td> ${detail.Negara_Asal}</td>
              </tr>
              <tr>
                <th>Daerah Asal</th>
                <td>${detail.Daerah_Asal}</td>
              </tr>
            </thead>
            <tbody>
            </tbody>
          </table>
        </div>
     </div>
     `;
   });

  document.getElementById("detail_resep").innerHTML = detailresepHTML;
  document.getElementById("section_title").innerHTML = sectiontitle;
    })

  .catch(error);
}
