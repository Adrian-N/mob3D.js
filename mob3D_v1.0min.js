//mob3D.js V1.0 - Set the variables below, see examples if unsure
//Username e.g. Adrian-N
var username = "Adrian-N";
//Path to file e.g. /3D-Modelling/master/airplane.stl
var path = "/3D-Modelling/master/airplane.stl";
//Percent of browser width from 1 to 100, e.g. if you want 50% of client browser put 50
// Please remember GitHub 3D File Viewer minimum width is 420px
var width = 98;
//iFrame height in pixels, e.g. 200
var height = 200;

console.log("Username: "+username+" Path: "+path+" Height(px): "+height);var browserWidth=document.documentElement.clientWidth,iFrame=Math.ceil(width*(browserWidth/100));console.log("Web Browser Width(px): "+browserWidth+" iFrame width will be(px): "+iFrame);var a="<script src='https://embed.github.com/view/3d/",b=username,c=path,d="?height=",e=height,f="&width=",g=iFrame,h="'></",i="script>",output=a+b+c+d+e+f+g+h+i;console.log(output),document.write(output);

	

