document.getElementById("uploadBtn").onchange = function () {
document.getElementById("uploadFile").value = this.files[0].name;
};
var canvas = new fabric.Canvas('c');
canvas.setWidth(1024);
canvas.setHeight(1024);
                                    
var canvasWrapper = document.getElementById('c');
var canvasWrapperWidth = canvasWrapper.clientWidth;
$(function () {
$(":file").change(function () {
if (this.files && this.files[0]) {
var reader = new FileReader();
reader.onload = imageIsLoaded;
reader.readAsDataURL(this.files[0]);
}
});
});
fabric.Image.fromURL('img/twibbon.png',function(img){
img.scaleToWidth(canvas.getWidth());
canvas.setOverlayImage(img, canvas.renderAll.bind(canvas));
});
function imageIsLoaded(e) {
fabric.Image.fromURL(e.target.result,function(img){
var aspectRatio = 1024/1024;
var factor = 1024 / img.width;
img.set({
scaleX: factor,
scaleY: factor 
});
canvas.add(img);
canvas.item(0).set({
borderColor: 'gray',
cornerColor: 'black',
cornerSize: 70,
borderScaleFactor: 10,
hasBorders: true,
                                                
rotatingPointOffset:200,
padding:60, 
transparentCorners: true
});
canvas.setActiveObject(canvas.item(0));
this.__canvases.push(canvas);
canvas.sendToBack(img);
});
};
$("#download").click(function(){
$("#c").get(0).toBlob(function(blob){
saveAs(blob, "myIMG.png");
});
});
