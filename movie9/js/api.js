//script untuk menangani proses response dari proses request api

function status(response) {
  if (response.status !== 200) {
    console.log("Error : " + response.status);
    //method reject() akan membuat blok catch terpanggil
    return Promise.reject (new Error (response.statusText));
  } else {
    // mengubah suatu objek menjadi Promise agar bisa "di-then-kan"
    return Promise.resolve(response);
  }
}

// blok kode untuk mem-parsing json menjadi array javascript
function json(response){
  return response.json();
}

// blok kode untuk meng-handle kesalahan di blok catch

function error(error){
  // parameter error berasal dari Promise.reject()
  console.log("Error : " + error);
}
