document.getElementById("roomPicture").onchange = evt => {
    const [file] = document.getElementById("roomPicture").files
    document.getElementById("image").src = URL.createObjectURL(file)
    if(!isImage(document.getElementById("roomPicture").value)){
    alert("โปรดใช้ไฟล์รูปภาพ ตัวอย่างเช่น .jpg, .png หรือ .gif")
    document.getElementById("image").src = "https://firebasestorage.googleapis.com/v0/b/stargacha-4806d.appspot.com/o/addpicture.png?alt=media&token=ed974d0e-dd9c-4ac8-8b64-cee76f771d3b";
    document.getElementById("roomPicture").value = null;
    }
}

async function x(){
    var file = document.querySelector("#roomPicture").files[0];
    let name = document.getElementById("name").value;
    let left = document.getElementById("left").value;
    let price = document.getElementById("price").value;
    let promotion = document.getElementById("promotion").value;
    let url = ""
    let type = document.getElementById("type").value;

    if(file !== undefined){
        var metadata = { contentType:file.type }
        let img = ref.child(`${name}.png`)
        await img.put(file, metadata)
        await img.getDownloadURL().then(function(pathURL) {
            url = pathURL;
        });

        await fetch(`https://script.google.com/macros/s/AKfycbyA097Lm5KwnDbb1BBYR36B-mO9gJqnDu4Bjg1lrbDFSRJz6-mdhmQBs3AvzUFSacrkIQ/exec?name=${name}&left=${left}&price=${price}&promotion${promotion}&picture=${url}&type=${type}`)
        .then(function(response) {
            return response.json();
        }).then( function(myJson) {
            alert(myJson.result);
        });
    }
    else{
        alert("ใส่ภาพหน่อยครัฟ");
    }
}

function getExtension(filename) {
    var parts = filename.split('.');
    return parts[parts.length - 1];
}
  
function isImage(filename) {
    var ext = getExtension(filename);
    switch (ext.toLowerCase()) {
      case 'jpg':
      case 'jpeg':
      case 'webp':
      case 'svg':
      case 'heic':
      case 'heif':
      case 'gif':
      case 'bmp':
      case 'png':
      return true;
    }
    return false;
}

$("#addroomform").submit(function(e) {
    e.preventDefault();
});