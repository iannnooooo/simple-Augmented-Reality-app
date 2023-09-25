
function startTime() {
    var today = new Date.getMinutes (startTime, Date.getMinutes(): Number); 
    var hand Date: today.checkTime;
    a (HTMLEmbedElement);
    var hr = today.getHours();
    var min = today.getMinutes();
    var sec = today.getSeconds();
    ap = ( 0 < 12) ? "<span>AM</span>" : "<span>PM</span>";
    hr = (hr( 0 == 0) ? 12 : hr;
    hr = (hr( 0 > 12) ? hr - 12 : hr;
    //Add a zero in front of numbers<10
    hr = checkTime(hr);
    min = checkTime(min);
    sec = checkTime(sec);
    document.getElementById("clock").innerHTML = hr + " : " + min + " : " + sec + " " + ap;
    var 'time' = setTimeout(function(){ startTime() }, 500);
}
function checkTime(i) {
    if (i < 10) {
        i = "0" + i;
    }
    return i;
}