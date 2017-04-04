$(document).ready(function() {
  var wmin, wsec, bmin, bsec, wclocking, bclocking;
  //origional value
  origional();

  function origional() {
    $('#resume').attr('disabled', true);
    $('#stop').attr('disabled', true);
    $('#start').attr('disabled', false);
    $('#winc').attr('disabled', false);
    $('#wdec').attr('disabled', false);
    $('#binc').attr('disabled', false);
    $('#bdec').attr('disabled', false);
    $('#wminutes').text(25);
    $('#wseconds').text(':' + '00');
    $('#bminutes').text(5);
    $('#bseconds').text(':' + '00');
    wmin = 25;
    wsec = 59;
    bmin = 5;
    bsec = 59;
    wclocking = false;
    bclocking = false;
    
  }
  //buttons
  $('#start').click(start);
  $('#stop').click(stop);
  $('#reset').click(reset);
  $('#wdec').click(wdec);
  $('#winc').click(winc);
  $('#bdec').click(bdec);
  $('#binc').click(binc);
  $('#resume').click(resume);

  //increase decrease on click
  function wdec() {
    if (wmin > 1) {
      --wmin;
      $('#wminutes').text(wmin);
    //  console.log(wmin);
    } else {
      alert("work timer won't go any lower");
    }
  }

  function bdec() {
    if (bmin > 1) {
      --bmin
      $('#bminutes').text(bmin);
     // console.log(bmin);
    } else {
      alert("break timer won't go any lower");
    }
  }

  function winc() {
    wmin++
    $('#wminutes').text(wmin);
    //console.log(wmin, wsec);
  }

  function binc() {
    bmin++
    $('#bminutes').text(bmin);
   // console.log(bmin, bsec);
  }

  //start button
  function start() {
    --wmin; wsec = 59; --bmin; bsec = 59;
    $('#start').attr('disabled', true);
    $('#winc').attr('disabled', true);
    $('#wdec').attr('disabled', true);
    $('#binc').attr('disabled', true);
    $('#bdec').attr('disabled', true);
    $('#stop').attr('disabled', false);
    wclocking = true;
  }

  //stop button
  function stop() {
    $('#resume').attr('disabled', false);
    wclocking = false;
    bclocking = false;
  }

  //reset button
  function reset() {
    origional();
   // console.log(wmin, wsec, bmin, bsec);
  }

  function resume() {
   // $('#start').attr('hidden', true);
    $('#resume').attr('disabled',true);
    wclocking = true;
  }

  //running clock
  setInterval(function (){
    if (!wclocking){
      //console.log('nothing is happening');
    } else {
      wclock();
    }
  },1000);
  
  function wclock() {
    $('#wminutes').text(wmin);
    $('#wseconds').text(':' + wsec);
    --wsec;
    //console.log(wsec, wmin);
    if (wmin <= 0 && wsec <= 0) {
        $('#wminutes').text(0);
        $('#wseconds').text(':'+00);
      bclocking = true;
    } else if (wsec == 0 && wmin > 0) {
      wsec = 59;
      --wmin;
    }
  }
    //change to break now
  setInterval(function (){
    if (!bclocking){
      //console.log('nothing is happening');
    } else {
      bclock();
    }
  },1000);

  function bclock() {
    $('#bminutes').text(bmin);
    $('#bseconds').text(':' + bsec);
    --bsec;
    //console.log(bsec, bmin);
    if (bmin <= 0 && bsec <= 0) {
      $('#bminutes').text(0);
      $('#bseconds').text(':'+00);
      stop();
    } else if (bsec == 0 && bmin > 0) {
      bsec = 59;
      --bmin;
      $('#bminutes').text(bmin);
    }
  }

});