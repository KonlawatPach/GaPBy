export const products = async () => await fetch("https://script.google.com/macros/s/AKfycbzsRON0T0mYaZW-s2xTe-Jd6bjnQXmlpLw8_35fEgdNjEq1u8Q7k0LZGV9jOv0M673Pkw/exec")
.then(function(response) {
    return response.json();
}).then( function(myJson:any) {
    return myJson;
});