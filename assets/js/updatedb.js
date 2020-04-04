
  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyDkWJHxdBPTGRlNWvDmb9bX5et1Xkc00Wo",
    authDomain: "covidindia-641aa.firebaseapp.com",
    databaseURL: "https://covidindia-641aa.firebaseio.com",
    projectId: "covidindia-641aa",
    storageBucket: "covidindia-641aa.appspot.com",
    messagingSenderId: "775256551010",
    appId: "1:775256551010:web:5efce34090150a31ae2b3b",
    measurementId: "G-XSNT4LX0SD"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

  //----------------------------------------------------


var firebaseRef = firebase.database().ref();
var keralaInfectedRef = firebaseRef.child('kerala-total').child('infected');
var keralaDeathsRef = firebaseRef.child('kerala-total').child('deaths');
var keralaRecoveredRef = firebaseRef.child('kerala-total').child('recovered');
var keralaInfectedTodayRef = firebaseRef.child('kerala-total').child('infectedToday');

var indiaInfectedRef = firebaseRef.child('indiaTotal').child('infected');
var indiaDeathsRef = firebaseRef.child('indiaTotal').child('deaths');
var worldInfectedRef = firebaseRef.child('worldTotal').child('infected');
var worldDeathsRef = firebaseRef.child('worldTotal').child('deaths');

var distRef = firebaseRef.child('kerala-dist');
var dbUpdateTimeRef = firebaseRef.child('dbUpdateTime');
var updateMoment;


function updateRef(ref, id){

    ref.on('value', function(snapshot){
        //console.log(snapshot.val());
        document.getElementById(id).innerHTML = snapshot.val();
    });
}

updateRef(keralaInfectedRef, 'keralaInfected');
updateRef(keralaDeathsRef, 'keralaDeaths');
updateRef(keralaRecoveredRef, 'keralaRecovered');
updateRef(keralaInfectedTodayRef, 'keralaInfectedToday');

function dbUpdateKerala(){

    var dbKeralaInfected = document.getElementById("dbKeralaInfected").value.trim();
    if(dbKeralaInfected.length != 0){
        keralaInfectedRef.set(dbKeralaInfected);
        document.getElementById("dbKeralaInfected").value = '';
    }

    var dbKeralaDeaths = document.getElementById("dbKeralaDeaths").value.trim();
    if(dbKeralaDeaths.length != 0){
        keralaDeathsRef.set(dbKeralaDeaths);
        document.getElementById("dbKeralaDeaths").value = '';
    }

    var dbKeralaRecovered = document.getElementById("dbKeralaRecovered").value.trim();
    if(dbKeralaRecovered.length != 0){
        keralaRecoveredRef.set(dbKeralaRecovered);
        document.getElementById("dbKeralaRecovered").value = '';
    }

    var dbKeralaInfectedToday = document.getElementById("dbKeralaInfectedToday").value.trim();
    if(dbKeralaInfectedToday.length != 0){
        keralaInfectedTodayRef.set(dbKeralaInfectedToday);
        document.getElementById("dbKeralaInfectedToday").value = '';
    }

    updateMoment = moment().format('DD.MM.YYYY, h:mm a');
    dbUpdateTimeRef.set(updateMoment);

}


// world update below

updateRef(worldInfectedRef, 'worldInfected');
updateRef(worldDeathsRef, 'worldDeaths');

function dbUpdateWorld(){

    var dbWorldInfected = document.getElementById("dbWorldInfected").value.trim();
    if(dbWorldInfected.length != 0){
        worldInfectedRef.set(dbWorldInfected);
        document.getElementById("dbWorldInfected").value = '';
    }

    var dbWorldDeaths = document.getElementById("dbWorldDeaths").value.trim();
    if(dbWorldDeaths.length != 0){
        worldDeathsRef.set(dbWorldDeaths);
        document.getElementById("dbWorldDeaths").value = '';
    }

    updateMoment = moment().format('DD.MM.YYYY, h:mm a');
    dbUpdateTimeRef.set(updateMoment);
}


// India update below

updateRef(indiaInfectedRef, 'indiaInfected');
updateRef(indiaDeathsRef, 'indiaDeaths');

function dbUpdateIndia(){

    var dbIndiaInfected = document.getElementById("dbIndiaInfected").value.trim();
    if(dbIndiaInfected.length != 0){
        indiaInfectedRef.set(dbIndiaInfected);
        document.getElementById("dbIndiaInfected").value = '';
    }

    var dbIndiaDeaths = document.getElementById("dbIndiaDeaths").value.trim();
    if(dbIndiaDeaths.length != 0){
        indiaDeathsRef.set(dbIndiaDeaths);
        document.getElementById("dbIndiaDeaths").value = '';
    }

    updateMoment = moment().format('DD.MM.YYYY, h:mm a');
    dbUpdateTimeRef.set(updateMoment);
}


//district update below

//district infected ref
var kasargodInfectedRef = firebaseRef.child('kerala-dist').child('kasargod').child('infected');
var kannurInfectedRef = firebaseRef.child('kerala-dist').child('kannur').child('infected');
var wayanadInfectedRef = firebaseRef.child('kerala-dist').child('wayanad').child('infected');
var kozhikodeInfectedRef = firebaseRef.child('kerala-dist').child('kozhikode').child('infected');
var malappuramInfectedRef = firebaseRef.child('kerala-dist').child('malappuram').child('infected');
var palakkadInfectedRef = firebaseRef.child('kerala-dist').child('palakkad').child('infected');
var thrissurInfectedRef = firebaseRef.child('kerala-dist').child('thrissur').child('infected');
var eranakulamInfectedRef = firebaseRef.child('kerala-dist').child('eranakulam').child('infected');
var kottayamInfectedRef = firebaseRef.child('kerala-dist').child('kottayam').child('infected');
var idukkiInfectedRef = firebaseRef.child('kerala-dist').child('idukki').child('infected');
var alappuzhaInfectedRef = firebaseRef.child('kerala-dist').child('alappuzha').child('infected');
var pathanamthittaInfectedRef = firebaseRef.child('kerala-dist').child('pathanamthitta').child('infected');
var kollamInfectedRef = firebaseRef.child('kerala-dist').child('kollam').child('infected');
var thiruvananthapuramInfectedRef = firebaseRef.child('kerala-dist').child('thiruvananthapuram').child('infected');

//district recovered ref
var kasargodRecoveredRef = firebaseRef.child('kerala-dist').child('kasargod').child('recovered');
var kannurRecoveredRef = firebaseRef.child('kerala-dist').child('kannur').child('recovered');
var wayanadRecoveredRef = firebaseRef.child('kerala-dist').child('wayanad').child('recovered');
var kozhikodeRecoveredRef = firebaseRef.child('kerala-dist').child('kozhikode').child('recovered');
var malappuramRecoveredRef = firebaseRef.child('kerala-dist').child('malappuram').child('recovered');
var palakkadRecoveredRef = firebaseRef.child('kerala-dist').child('palakkad').child('recovered');
var thrissurRecoveredRef = firebaseRef.child('kerala-dist').child('thrissur').child('recovered');
var eranakulamRecoveredRef = firebaseRef.child('kerala-dist').child('eranakulam').child('recovered');
var kottayamRecoveredRef = firebaseRef.child('kerala-dist').child('kottayam').child('recovered');
var idukkiRecoveredRef = firebaseRef.child('kerala-dist').child('idukki').child('recovered');
var alappuzhaRecoveredRef = firebaseRef.child('kerala-dist').child('alappuzha').child('recovered');
var pathanamthittaRecoveredRef = firebaseRef.child('kerala-dist').child('pathanamthitta').child('recovered');
var kollamRecoveredRef = firebaseRef.child('kerala-dist').child('kollam').child('recovered');
var thiruvananthapuramRecoveredRef = firebaseRef.child('kerala-dist').child('thiruvananthapuram').child('recovered');





// dist infected show
updateRef(kasargodInfectedRef, 'kasargodInfected');
updateRef(kannurInfectedRef, 'kannurInfected');
updateRef(wayanadInfectedRef, 'wayanadInfected');
updateRef(kozhikodeInfectedRef, 'kozhikodeInfected');
updateRef(malappuramInfectedRef, 'malappuramInfected');
updateRef(palakkadInfectedRef, 'palakkadInfected');
updateRef(thrissurInfectedRef, 'thrissurInfected');
updateRef(eranakulamInfectedRef, 'eranakulamInfected');
updateRef(kottayamInfectedRef, 'kottayamInfected');
updateRef(idukkiInfectedRef, 'idukkiInfected');
updateRef(alappuzhaInfectedRef, 'alappuzhaInfected');
updateRef(pathanamthittaInfectedRef, 'pathanamthittaInfected');
updateRef(kollamInfectedRef, 'kollamInfected');
updateRef(thiruvananthapuramInfectedRef, 'thiruvananthapuramInfected');

// dist recovered show
updateRef(kasargodRecoveredRef, 'kasargodRecovered');
updateRef(kannurRecoveredRef, 'kannurRecovered');
updateRef(wayanadRecoveredRef, 'wayanadRecovered');
updateRef(kozhikodeRecoveredRef, 'kozhikodeRecovered');
updateRef(malappuramRecoveredRef, 'malappuramRecovered');
updateRef(palakkadRecoveredRef, 'palakkadRecovered');
updateRef(thrissurRecoveredRef, 'thrissurRecovered');
updateRef(eranakulamRecoveredRef, 'eranakulamRecovered');
updateRef(kottayamRecoveredRef, 'kottayamRecovered');
updateRef(idukkiRecoveredRef, 'idukkiRecovered');
updateRef(alappuzhaRecoveredRef, 'alappuzhaRecovered');
updateRef(pathanamthittaRecoveredRef, 'pathanamthittaRecovered');
updateRef(kollamRecoveredRef, 'kollamRecovered');
updateRef(thiruvananthapuramRecoveredRef, 'thiruvananthapuramRecovered');


function dbUpdateDistrict(){

    //update each dist infected
    var dbKasargodInfected = document.getElementById("dbKasargodInfected").value.trim();
    if(dbKasargodInfected.length != 0){
        kasargodInfectedRef.set(dbKasargodInfected)
        document.getElementById("dbKasargodInfected").value = '';
    }

    //update each dist Recovered
    var dbKasargodRecovered = document.getElementById("dbKasargodRecovered").value.trim();
    if(dbKasargodRecovered.length != 0){
        kasargodRecoveredRef.set(dbKasargodRecovered)
        document.getElementById("dbKasargodRecovered").value = '';
    }

    //update each dist infected
    var dbKannurInfected = document.getElementById("dbKannurInfected").value.trim();
    if(dbKannurInfected.length != 0){
        kannurInfectedRef.set(dbKannurInfected);
        document.getElementById("dbKannurInfected").value = '';
    }

    //update each dist Recovered
    var dbKannurRecovered = document.getElementById("dbKannurRecovered").value.trim();
    if(dbKannurRecovered.length != 0){
        kannurRecoveredRef.set(dbKannurRecovered);
        document.getElementById("dbKannurRecovered").value = '';
    }

    //update each dist infected
    var dbWayanadInfected = document.getElementById("dbWayanadInfected").value.trim();
    if(dbWayanadInfected.length != 0){
        wayanadInfectedRef.set(dbWayanadInfected);
        document.getElementById("dbWayanadInfected").value = '';
    }

    //update each dist Recovered
    var dbWayanadRecovered = document.getElementById("dbWayanadRecovered").value.trim();
    if(dbWayanadRecovered.length != 0){
        wayanadRecoveredRef.set(dbWayanadRecovered);
        document.getElementById("dbWayanadRecovered").value = '';
    }

    //update each dist infected
    var dbKozhikodeInfected = document.getElementById("dbKozhikodeInfected").value.trim();
    if(dbKozhikodeInfected.length != 0){
        kozhikodeInfectedRef.set(dbKozhikodeInfected)
        document.getElementById("dbKozhikodeInfected").value = '';
    }

    //update each dist Recovered
    var dbKozhikodeRecovered = document.getElementById("dbKozhikodeRecovered").value.trim();
    if(dbKozhikodeRecovered.length != 0){
        kozhikodeRecoveredRef.set(dbKozhikodeRecovered)
        document.getElementById("dbKozhikodeRecovered").value = '';
    }

    //update each dist infected
    var dbMalappuramInfected = document.getElementById("dbMalappuramInfected").value.trim();
    if(dbMalappuramInfected.length != 0){
        malappuramInfectedRef.set(dbMalappuramInfected)
        document.getElementById("dbMalappuramInfected").value = '';
    }

     //update each dist Recovered
     var dbMalappuramRecovered = document.getElementById("dbMalappuramRecovered").value.trim();
     if(dbMalappuramRecovered.length != 0){
         malappuramRecoveredRef.set(dbMalappuramRecovered)
         document.getElementById("dbMalappuramRecovered").value = '';
     }

    //update each dist infected
    var dbPalakkadInfected = document.getElementById("dbPalakkadInfected").value.trim();
    if(dbPalakkadInfected.length != 0){
        palakkadInfectedRef.set(dbPalakkadInfected)
        document.getElementById("dbPalakkadInfected").value = '';
    }

    //update each dist Recovered
    var dbPalakkadRecovered = document.getElementById("dbPalakkadRecovered").value.trim();
    if(dbPalakkadRecovered.length != 0){
        palakkadRecoveredRef.set(dbPalakkadRecovered)
        document.getElementById("dbPalakkadRecovered").value = '';
    }

    //update each dist infected
    var dbThrissurInfected = document.getElementById("dbThrissurInfected").value.trim();
    if(dbThrissurInfected.length != 0){
        thrissurInfectedRef.set(dbThrissurInfected)
        document.getElementById("dbThrissurInfected").value = '';
    }

    //update each dist Recovered
    var dbThrissurRecovered = document.getElementById("dbThrissurRecovered").value.trim();
    if(dbThrissurRecovered.length != 0){
        thrissurRecoveredRef.set(dbThrissurRecovered)
        document.getElementById("dbThrissurRecovered").value = '';
    }

    //update each dist infected
    var dbEranakulamInfected = document.getElementById("dbEranakulamInfected").value.trim();
    if(dbEranakulamInfected.length != 0){
        eranakulamInfectedRef.set(dbEranakulamInfected)
        document.getElementById("dbEranakulamInfected").value = '';
    }

    //update each dist Recovered
    var dbEranakulamRecovered = document.getElementById("dbEranakulamRecovered").value.trim();
    if(dbEranakulamRecovered.length != 0){
        eranakulamRecoveredRef.set(dbEranakulamRecovered)
        document.getElementById("dbEranakulamRecovered").value = '';
    }

    //update each dist infected
    var dbKottayamInfected = document.getElementById("dbKottayamInfected").value.trim();
    if(dbKottayamInfected.length != 0){
        kottayamInfectedRef.set(dbKottayamInfected)
        document.getElementById("dbKottayamInfected").value = '';
    }

    //update each dist Recovered
    var dbKottayamRecovered = document.getElementById("dbKottayamRecovered").value.trim();
    if(dbKottayamRecovered.length != 0){
        kottayamRecoveredRef.set(dbKottayamRecovered)
        document.getElementById("dbKottayamRecovered").value = '';
    }

    //update each dist infected
    var dbIdukkiInfected = document.getElementById("dbIdukkiInfected").value.trim();
    if(dbIdukkiInfected.length != 0){
        idukkiInfectedRef.set(dbIdukkiInfected);
        document.getElementById("dbIdukkiInfected").value = '';
    }

    //update each dist Recovered
    var dbIdukkiRecovered = document.getElementById("dbIdukkiRecovered").value.trim();
    if(dbIdukkiRecovered.length != 0){
        idukkiRecoveredRef.set(dbIdukkiRecovered);
        document.getElementById("dbIdukkiRecovered").value = '';
    }

    //update each dist infected
    var dbAlappuzhaInfected = document.getElementById("dbAlappuzhaInfected").value.trim();
    if(dbAlappuzhaInfected.length != 0){
        alappuzhaInfectedRef.set(dbAlappuzhaInfected);
        document.getElementById("dbAlappuzhaInfected").value = '';
    }

    //update each dist Recovered
    var dbAlappuzhaRecovered = document.getElementById("dbAlappuzhaRecovered").value.trim();
    if(dbAlappuzhaRecovered.length != 0){
        alappuzhaRecoveredRef.set(dbAlappuzhaRecovered);
        document.getElementById("dbAlappuzhaRecovered").value = '';
    }

    //update each dist infected
    var dbPathanamthittaInfected = document.getElementById("dbPathanamthittaInfected").value.trim();
    if(dbPathanamthittaInfected.length != 0){
        pathanamthittaInfectedRef.set(dbPathanamthittaInfected);
        document.getElementById("dbPathanamthittaInfected").value = '';
    }

    //update each dist Recovered
    var dbPathanamthittaRecovered = document.getElementById("dbPathanamthittaRecovered").value.trim();
    if(dbPathanamthittaRecovered.length != 0){
        pathanamthittaRecoveredRef.set(dbPathanamthittaRecovered);
        document.getElementById("dbPathanamthittaRecovered").value = '';
    }

    //update each dist infected
    var dbKollamInfected = document.getElementById("dbKollamInfected").value.trim();
    if(dbKollamInfected.length != 0){
        kollamInfectedRef.set(dbKollamInfected);
        document.getElementById("dbKollamInfected").value = '';
    }

    //update each dist Recovered
    var dbKollamRecovered = document.getElementById("dbKollamRecovered").value.trim();
    if(dbKollamRecovered.length != 0){
        kollamRecoveredRef.set(dbKollamRecovered);
        document.getElementById("dbKollamRecovered").value = '';
    }

    //update each dist infected
    var dbThiruvananthapuramInfected = document.getElementById("dbThiruvananthapuramInfected").value.trim();
    if(dbThiruvananthapuramInfected.length != 0){
        thiruvananthapuramInfectedRef.set(dbThiruvananthapuramInfected);
        document.getElementById("dbThiruvananthapuramInfected").value = '';
    }

    var dbThiruvananthapuramRecovered = document.getElementById("dbThiruvananthapuramRecovered").value.trim();
    if(dbThiruvananthapuramRecovered.length != 0){
        thiruvananthapuramRecoveredRef.set(dbThiruvananthapuramRecovered);
        document.getElementById("dbThiruvananthapuramRecovered").value = '';
    }

    updateMoment = moment().format('DD.MM.YYYY, h:mm a');
    dbUpdateTimeRef.set(updateMoment);
}

function updateTime(ref, id){

    ref.on('value', function(snapshot){
        var v = snapshot.val();
        document.getElementById(id).innerHTML = moment(v, "DD.MM.YYYY h:mm a").locale('ml').fromNow() + ' അപ്ഡേറ്റ് ചെയ്തു';
    });
}

updateTime(dbUpdateTimeRef, 'moment');


// const ml = moment('2020.01.01', 'YYYY.MM.DD').locale('ml')
// console.log(ml.fromNow());


//dist today inf
var kasargodTodayRef = firebaseRef.child('kerala-dist').child('kasargod').child('today');
var kannurTodayRef = firebaseRef.child('kerala-dist').child('kannur').child('today');
var wayanadTodayRef = firebaseRef.child('kerala-dist').child('wayanad').child('today');
var kozhikodeTodayRef = firebaseRef.child('kerala-dist').child('kozhikode').child('today');
var malappuramTodayRef = firebaseRef.child('kerala-dist').child('malappuram').child('today');
var palakkadTodayRef = firebaseRef.child('kerala-dist').child('palakkad').child('today');
var thrissurTodayRef = firebaseRef.child('kerala-dist').child('thrissur').child('today');
var eranakulamTodayRef = firebaseRef.child('kerala-dist').child('eranakulam').child('today');
var kottayamTodayRef = firebaseRef.child('kerala-dist').child('kottayam').child('today');
var idukkiTodayRef = firebaseRef.child('kerala-dist').child('idukki').child('today');
var alappuzhaTodayRef = firebaseRef.child('kerala-dist').child('alappuzha').child('today');
var pathanamthittaTodayRef = firebaseRef.child('kerala-dist').child('pathanamthitta').child('today');
var kollamTodayRef = firebaseRef.child('kerala-dist').child('kollam').child('today');
var thiruvananthapuramTodayRef = firebaseRef.child('kerala-dist').child('thiruvananthapuram').child('today');
var keralaTodayRef = firebaseRef.child('kerala-total').child('today');


updateRef(kasargodTodayRef, 'kasargodToday');
updateRef(kannurTodayRef, 'kannurToday');
updateRef(wayanadTodayRef, 'wayanadToday');
updateRef(kozhikodeTodayRef, 'kozhikodeToday');
updateRef(malappuramTodayRef, 'malappuramToday');
updateRef(palakkadTodayRef, 'palakkadToday');
updateRef(thrissurTodayRef, 'thrissurToday');
updateRef(eranakulamTodayRef, 'eranakulamToday');
updateRef(kottayamTodayRef, 'kottayamToday');
updateRef(idukkiTodayRef, 'idukkiToday');
updateRef(alappuzhaTodayRef, 'alappuzhaToday');
updateRef(pathanamthittaTodayRef, 'pathanamthittaToday');
updateRef(kollamTodayRef, 'kollamToday');
updateRef(thiruvananthapuramTodayRef, 'thiruvananthapuramToday');
updateRef(keralaTodayRef, 'keralaToday');



function dbUpdateToday(){

    var dbKeralaToday = document.getElementById("dbKeralaToday").value.trim();
    if(dbKeralaToday.length != 0){
        keralaTodayRef.set(dbKeralaToday);
        document.getElementById("dbKeralaToday").value = '';
    }


    var dbKasargodToday = document.getElementById("dbKasargodToday").value.trim();
    if(dbKasargodToday.length != 0){
        kasargodTodayRef.set(dbKasargodToday);
        document.getElementById("dbKasargodToday").value = '';
    }

    var dbKannurToday = document.getElementById("dbKannurToday").value.trim();
    if(dbKannurToday.length != 0){
        kannurTodayRef.set(dbKannurToday);
        document.getElementById("dbKannurToday").value = '';
    }

    var dbWayanadToday = document.getElementById("dbWayanadToday").value.trim();
    if(dbWayanadToday.length != 0){
        wayanadTodayRef.set(dbWayanadToday);
        document.getElementById("dbWayanadToday").value = '';
    }

    var dbKozhikodeToday = document.getElementById("dbKozhikodeToday").value.trim();
    if(dbKozhikodeToday.length != 0){
        kozhikodeTodayRef.set(dbKozhikodeToday);
        document.getElementById("dbKozhikodeToday").value = '';
    }

    var dbMalappuramToday = document.getElementById("dbMalappuramToday").value.trim();
    if(dbMalappuramToday.length != 0){
        malappuramTodayRef.set(dbMalappuramToday);
        document.getElementById("dbMalappuramToday").value = '';
    }

    var dbPalakkadToday = document.getElementById("dbPalakkadToday").value.trim();
    if(dbPalakkadToday.length != 0){
        palakkadTodayRef.set(dbPalakkadToday);
        document.getElementById("dbPalakkadToday").value = '';
    }

    var dbThrissurToday = document.getElementById("dbThrissurToday").value.trim();
    if(dbThrissurToday.length != 0){
        thrissurTodayRef.set(dbThrissurToday);
        document.getElementById("dbThrissurToday").value = '';
    }

    var dbEranakulamToday = document.getElementById("dbEranakulamToday").value.trim();
    if(dbEranakulamToday.length != 0){
        eranakulamTodayRef.set(dbEranakulamToday);
        document.getElementById("dbEranakulamToday").value = '';
    }

    var dbKottayamToday = document.getElementById("dbKottayamToday").value.trim();
    if(dbKottayamToday.length != 0){
        kottayamTodayRef.set(dbKottayamToday);
        document.getElementById("dbKottayamToday").value = '';
    }

    var dbIdukkiToday = document.getElementById("dbIdukkiToday").value.trim();
    if(dbIdukkiToday.length != 0){
        idukkiTodayRef.set(dbIdukkiToday);
        document.getElementById("dbIdukkiToday").value = '';
    }

    var dbAlappuzhaToday = document.getElementById("dbAlappuzhaToday").value.trim();
    if(dbAlappuzhaToday.length != 0){
        alappuzhaTodayRef.set(dbAlappuzhaToday);
        document.getElementById("dbAlappuzhaToday").value = '';
    }

    var dbPathanamthittaToday = document.getElementById("dbPathanamthittaToday").value.trim();
    if(dbPathanamthittaToday.length != 0){
        pathanamthittaTodayRef.set(dbPathanamthittaToday);
        document.getElementById("dbPathanamthittaToday").value = '';
    }

    var dbKollamToday = document.getElementById("dbKollamToday").value.trim();
    if(dbKollamToday.length != 0){
        kollamTodayRef.set(dbKollamToday);
        document.getElementById("dbKollamToday").value = '';
    }

    var dbThiruvananthapuramToday = document.getElementById("dbThiruvananthapuramToday").value.trim();
    if(dbThiruvananthapuramToday.length != 0){
        thiruvananthapuramTodayRef.set(dbThiruvananthapuramToday);
        document.getElementById("dbThiruvananthapuramToday").value = '';
    }

}
//-------------------------

var todaySwitch = firebaseRef.child('kerala-total').child('todaySwitch');

updateRef(todaySwitch, 'toggleText');

toggleButton.addEventListener('click', event => {
    var state;
    todaySwitch.on('value', function(snapshot){
        state = snapshot.val();
    });

    if(state == 'on'){
        todaySwitch.set('off');
    } else {
        todaySwitch.set('on');
    }

});


