
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
var chartKeralaInfectionRef = firebaseRef.child('charts').child('keralaInfection');

var kasargodRef = firebaseRef.child('kerala-dist').child('kasargod').child('infected');
var kannurRef = firebaseRef.child('kerala-dist').child('kannur').child('infected');
var wayanadRef = firebaseRef.child('kerala-dist').child('wayanad').child('infected');
var kozhikodeRef = firebaseRef.child('kerala-dist').child('kozhikode').child('infected');
var distRef = firebaseRef.child('kerala-dist');

var indiaInfectedRef = firebaseRef.child('indiaTotal').child('infected');
var indiaDeathRef = firebaseRef.child('indiaTotal').child('deaths');
var worldInfectedRef = firebaseRef.child('worldTotal').child('infected');
var worldDeathRef = firebaseRef.child('worldTotal').child('deaths');

var dbUpdateTimeRef = firebaseRef.child('dbUpdateTime');

var tableData = new Array();
var chartData = new Array();

var st = document.getElementById('todayView')
st.style.display = "none"

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


function getTableData(distRef){

    distRef.on('value', function(snapshot){
        snapshot.forEach(function(childSnap){
            var cKey = childSnap.key;
            var cValueInf = childSnap.child('infected').val();
            var cValueRec = childSnap.child('recovered').val();
            tableData.push({dist: cKey, inf: cValueInf, rec: cValueRec});
        });
        createDistrictTable(tableData);
    });
}


function createDistrictTable(tableData){

    for(let i = 0; i < tableData.length; i++){
        document.getElementById(tableData[i].dist + 'Inf').innerHTML = tableData[i].inf;
        document.getElementById(tableData[i].dist + 'Rec').innerHTML = tableData[i].rec;
    }
    sortTable();
}


function getChartData(ref){
    ref.on('value', function(snapshot){
        snapshot.forEach(function(childSnap){
             var childKey = childSnap.key;
             var childData = childSnap.val();
             //chartData.push({"x": moment(childKey, "DDMMYYYY").format('DD/MM/YYYY'), "y": childData});
             chartData.push({"x": childKey, "y": childData})
            })
            createChart(chartData);
        });

}


function createChart(chartData){

var timeFormat = 'DD/MM/YYYY';
const data = {
    // Labels should be Date objects
    datasets: [{
        fill: false,
        label: 'രോഗബാധിതർ',
        data: chartData,
        borderColor: '#fe8b36',
        backgroundColor: '#fe8b36',
        lineTension: 0,
    }]
}

const options = {
    type: 'line',
    data: data,
    options: {
        fill: false,
        responsive: true,
        scales: {
            xAxes: [{
                type: 'time',
                time:       {
                    format: timeFormat,
                    tooltipFormat: 'll',
                    unit: 'day'
                },
                display: true,
                scaleLabel: {
                    display: true,
                    labelString: "തിയതി",
                }
            }],
            yAxes: [{
                ticks: {
                    beginAtZero: true,
                },
                display: true,
                scaleLabel: {
                    display: true,
                    labelString: "രോഗികൾ",
                }
            }]
        }
    }   
}
var ctx = document.getElementById('chart').getContext('2d');
const chart = new Chart(ctx, options);
}

getChartData(chartKeralaInfectionRef);


// var now = moment("20032020", "DDMMYYYY"); 
// console.log(now.format('DD/MM/YYYY'));

function sortTable() {
    var table, rows, switching, i, x, y, shouldSwitch;
    table = document.getElementById("districtTable");
    switching = true;
    /*Make a loop that will continue until
    no switching has been done:*/
    while (switching) {
      //start by saying: no switching is done:
      switching = false;
      rows = table.rows;
      /*Loop through all table rows (except the
      first, which contains table headers):*/
      for (i = 1; i < (rows.length - 1); i++) {
        //start by saying there should be no switching:
        shouldSwitch = false;
        /*Get the two elements you want to compare,
        one from current row and one from the next:*/
        x = rows[i].getElementsByTagName("TD")[1];
        y = rows[i + 1].getElementsByTagName("TD")[1];
        //check if the two rows should switch place:
        if (Number(x.innerHTML) < Number(y.innerHTML)) {
          //if so, mark as a switch and break the loop:
          shouldSwitch = true;
          break;
        }
      }
      if (shouldSwitch) {
        /*If a switch has been marked, make the switch
        and mark that a switch has been done:*/
        rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
        switching = true;
      }
    }
  }

getTableData(distRef);  


// india update here on

updateRef(indiaInfectedRef, 'indiaInfected');
updateRef(indiaDeathRef, 'indiaDeaths');

// world stat update here on

updateRef(worldInfectedRef, 'worldInfected');
updateRef(worldDeathRef, 'worldDeaths');

shareButton.addEventListener('click', event => {
    if (navigator.share) {
      navigator.share({
        title: 'കോവിഡ് 19 തത്സമയവിവരം',
        url: 'https://covid19kerala.org',
        text: 'കോവിഡ്-19 മഹമാരിയെ കുറിച്ച്  മലയാളത്തിൽ തത്സമയ വിവരങ്ങൾ നൽകുന്ന വെബ്സൈറ്റ്. ലോക്ക്ഡൗണിനിടെ പുറത്തു പോകുമ്പോൾ ആവശ്യമായ സ്വയം സത്യവാങ്മൂലം ഡൗണ്ലോഡ് ചെയ്യാനുള്ള URL ഈ സൈറ്റിൽ ലഭ്യമാണ് .'
      }).then(() => {
        console.log('Thanks for sharing!');
      })
      .catch(console.error);
    } else {
      // fallback
    }
  });



  moment.tz.setDefault("Asia/Kolkata");
  var zone = "Asia/Kolkata";
  function updateTime(ref, id){

    ref.on('value', function(snapshot){
        var v = snapshot.val();
        document.getElementById(id).innerHTML = moment.tz(v, "DD.MM.YYYY h:mm a", zone).locale('ml').fromNow() + ' അപ്ഡേറ്റ് ചെയ്തു';
    });
  }

  updateTime(dbUpdateTimeRef, 'time');



//dist today 
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

var todaySwitch = firebaseRef.child('kerala-total').child('todaySwitch');

  function updateTodayRef(ref, id, dist){

    ref.on('value', function(snapshot){
        console.log(snapshot.val());
        if(snapshot.val() != 0){
          document.getElementById(id).innerHTML += dist + snapshot.val();
        }
        
    });
}

updateTodayRef(kasargodTodayRef, 'keralaTodayDist', ' കാസർഗോഡ് -');
updateTodayRef(kannurTodayRef, 'keralaTodayDist', ' കണ്ണൂർ -');
updateTodayRef(wayanadTodayRef, 'keralaTodayDist', ' വയനാട് -');
updateTodayRef(kozhikodeTodayRef, 'keralaTodayDist', ' കോഴിക്കോട് -');
updateTodayRef(malappuramTodayRef, 'keralaTodayDist', ' മലപ്പുറം -');
updateTodayRef(palakkadTodayRef, 'keralaTodayDist', ' പാലക്കാട്‌ - ');
updateTodayRef(thrissurTodayRef, 'keralaTodayDist', ' തൃശൂർ -');
updateTodayRef(eranakulamTodayRef, 'keralaTodayDist', ' എറണാകുളം -');
updateTodayRef(kottayamTodayRef, 'keralaTodayDist', ' കോട്ടയം -');
updateTodayRef(idukkiTodayRef, 'keralaTodayDist', ' ഇടുക്കി -');
updateTodayRef(alappuzhaTodayRef, 'keralaTodayDist', ' ആലപ്പുഴ -');
updateTodayRef(pathanamthittaTodayRef, 'keralaTodayDist', ' പത്തനംതിട്ട -');
updateTodayRef(kollamTodayRef, 'keralaTodayDist', '  കൊല്ലം -');
updateTodayRef(thiruvananthapuramTodayRef, 'keralaTodayDist', ' തിരുവനന്തപുരം -');

updateRef(keralaTodayRef, 'keralaTodayInf');


function updateTodayView(ref, id){

  ref.on('value', function(snapshot){
    var v = snapshot.val();
    var ele = document.getElementById(id);

    if(v == 'on'){
      ele.style.display = "block";
    } else {
      ele.style.display = "none";
    }
  });

}

updateTodayView(todaySwitch, 'todayView');

