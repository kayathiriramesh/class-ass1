var firstname=labels("label","for","first","FIRST NAME");
var br1=breaks("br");
var firstinput=inputs("input","type","text","id","first");
var br2=breaks("br");

var middlename=labels("label","for","middle","MIDDLE NAME");
var br3=breaks("br");
var middleinput=inputs("input","type","text","id","middle");
var br4=breaks("br");
var lastname=labels("label","for","last","LAST NAME");
var br5=breaks("br");
var lastinput=inputs("input","type","text","id","last");
var br6=breaks("br");
var phoneno=labels("label","for","phone","PHONE NUMBER");
var br7=breaks("br");
var phoneinput=inputs("input","type","number","id","phone");
var br8=breaks("br");


document.body.append(firstname,br1,firstinput,br2,middlename,br3,middleinput,br4,lastname,br5,lastinput,br6,phoneno,br7,phoneinput,br8);

function labels(tagname,attrname,attrvalue,content){
    var ele=document.createElement(tagname);
    ele.setAttribute(attrname,attrvalue);
    ele.innerHTML=content;
    return ele;
    }

    
    function inputs(tagname,attrname,attrvalue,attrname1,attrvalue1){
        var ele=document.createElement(tagname);
        ele.setAttribute(attrname,attrvalue);
        ele.setAttribute(attrname1,attrvalue1);
        return ele;
    }
    function breaks(tagname){
    var ele=document.createElement(tagname);
    return ele;
    }

    