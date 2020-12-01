// ==UserScript==
// @name         incoming discord webhook 5
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  chat 5
// @author       incoming discord webhook
// @match        https://*.crownofthegods.com
// @grant        none
// ==/UserScript==

(function() {
    var poll2; //poll2data
    var dhx=0;
    var incprediction;
    var inccords;
    var outcords;
    var incname;
    var incatime;
    var tagname;
    var tcords;
    var scords;
    var sname;
    var tname;
    var tx;
    var ty;
    var sx;
    var sy;
    var pushinid=[];
    var atime;
    var stime;
    var iclaim;
    var itime;
    var iiclaim;
    var Discordmembers={
        luminoxus:"716608712873082881",
        lord_marty:"747244123668480100",
        dhruv:"182783045072322561",
        darthranger:"553666259049250818",
        arianna:"148193568408731650",
        vindu230:"382738520252481536",
        sashie1412:"730984286144036886",
        windfall:"520727816078098432",
        taelis:"343441273190875136",
        avatar:"105419370737475584",
        ownography:"521389666503622656",
        growl:"748941538679324702",
        marine:"marine",
        truedat:"240230657933049856",
        gomraz:"751534601524084737",
        priapus:"474013757857857547",
        splinter117:"365887090937954305",
        ftaff:"599184706126348298",
        emmabunny:"290816657876713473",
        gopackers:"714835859039584256",
        gatekeeper:"709495118754873447",
        bjay15:"bjay15",
        tremor:"377080479989628955",
        aftermath:"378416951988453376",
        avenge:"202117964441452546",
        diefaster:"338430229334720512",
        fripka:"751701076163428465",
        halifaxkid:"halifaxkid",
        hells:"hells",
        symbio:"422273170964348928",
        dhyasta:"602330266454851614",
        baloon:"baloon",
        cubstire:"259757202720423937",
        klass:"498943056578609162",
        unicron:"unicorn",
        atn:"198119335993016320",
        noxe:"257255425257242624",
        mde:"357473469568385025",
        trippy:"304181884357836800",
        foreheadbig	:"759091498225893417",
        arve:"279987964761604096",
        redsides:"redsides",
        hallcon:"346435136990085123",
        lazylion:"764050306261581837",
        rem	:"453273891453009922",
        zealeots:"318185014754017281",
        figgis:"297739608240816130",
        humbie:"757606501010505790",
        shizzy:"Shizzy",
        lordben:"lordben",
        zharomir:"765612113929961543",
        batman:"94716243004633088",
        eatin:"774424818706677760",
        thebeast01:"132724116007419904",
        zafar:"763555671685726238",
        bourrot:"bourrot",
        burningdead0:"673204530342658062",
        cientista:"297581930042359808",
        gators112358:"204016288580894721",
        wolf:"454898213665636373",
        axao:"axao",
        gropo:"179086059026644992",
        nerdgeekout:"498299303874265097",
        tlgger:"308406388005011458",
        arethousa:"413033725522083850",
        nonamenewbie:"764434893135937586",
        dragooon:"244595980979273729",
        scenarion:"780416128077398017",
        edahlbeck:"240666948730486786",
        viditvia:"536731269053284353",
        kingeo:"kingeo",
        guiw:"699992335576072334",
        mangoking:"143717017847857153",
        alphabr:"293024989740007435",
        bdsmgirl:"184042133618032641",
        bugsyglitchy:"750520386478800916",
        caesarsghost:"644208800919977984",
        gandalf72:"763916117248049242",
        popeye:"764185594166902816",
        wolfcain:"338134316057886720",
        madnomad:"763163288979767327",
        thebrain:"465510812350676992",
        shannus:"Shannus",
        vampyre:"179480050285019136",
        cybernoid:"345665610459381760",
        biker314:"Biker314",
        reefoo:"733198771856605204",
        narcolepsy:"642228850000134144",
        ladysera:"297868941974306818",
        queenbess:"queenbess",
        slik:"slik",
        camerlottoo:"344127673653526528",
        anitsirc:"Anitsirc",
        mercuryxs:"MercuryXS",
        pyello:"752431350652469308",
        whackamole:"178509092514562049",
        osbourne:"104660648260026368"
    };

    setTimeout(function() {
        (function(open) {
            XMLHttpRequest.prototype.open = function() {
                this.addEventListener("readystatechange", function() {
                    if(this.readyState==4) {
                        var url=this.responseURL;
                        if (url.indexOf('poll2.php')!=-1) {
                            poll2=JSON.parse(this.response);
//                            fdhx=poll2.AIC;
                            if(poll2.AIC != dhx){
                                dhx=poll2.AIC;
                                incomingdata();
                                console.log(dhx);
                            }
                        }
                    }
                }, false);
                open.apply(this, arguments);
            };
        })(XMLHttpRequest.prototype.open);
    },4000);

    function incomingdata(){
        jQuery.ajax({url: 'includes/getIO.php',type: 'POST',aysnc:false,
                     success: function(data) {
                         var indata=JSON.parse(data);
                         console.log(indata);
                         incomingdataq(indata);
                     }
                    });

    }

    const sleep = (milliseconds) => {
        return new Promise(resolve => setTimeout(resolve, milliseconds))
    }

    const incomingdataq = async (data) => {
        //    function incomingdataq(data){
        var y= data.inc;
        console.log(y);
        for (var i in y) {
            await sleep(500)
            var tempscords=y[i].axy.match(/\d+/g);
            var temptcords=y[i].txy.match(/\d+/g);
            scords="C"+tempscords[1]+" "+tempscords[2]+":"+tempscords[3];
            tcords="C"+temptcords[1]+" "+temptcords[2]+":"+temptcords[3];
            //scords=y[i].axy.substring(48,61);
            //tcords=y[i].txy.substring(48,61);
            tx=temptcords[2];
            ty=temptcords[3];
            sx=tempscords[2];
            sy=tempscords[3];
            iclaim=y[i].b;
            itime=y[i].art;
            var measure = tx.concat(ty,sx,sy,itime,iclaim);
            if(iclaim>0){
            iiclaim=" claim:"+iclaim+"%";
            }
            else{
            iiclaim=" ";
            }
            //tx=y[i].txy.substring(53,56);
            //ty=y[i].txy.substring(57,60);
            //sx=y[i].axy.substring(53,56);
            //sy=y[i].axy.substring(57,60);
            sname=y[i].apn;
            tname=y[i].tpn;
            atime=y[i].art;
            stime=y[i].spt;
            console.log(scords);
            console.log(tcords);
            console.log(tx);
            console.log(ty);
            console.log(sx);
            console.log(sy);
            console.log(sname);
            console.log(tname);

            if(pushinid.indexOf(measure) == -1){
                pushinid.push(measure);
                incomings();
            }
        }
    }

    function roundingto2(num) {
        return +(Math.round(num + "e+2")  + "e-2");
    }
    function twodigitnum(n){
        return n > 9 ? "" + n: "0" + n;
    }

    function incomings(){
        var speeeed=[];
        speeeed[0]=0;
        for (var i=1; i<201; i++){
            speeeed[i]=speeeed[i-1]+0.5;
        }
        //  separating all possible speeds for troop types
        var navyspeed = [];
        var scoutspeed = [];
        var cavspeed = [];
        var infspeed = [];
        var artspeed = [];
        var senspeed = [];
        var temp;
        for (i in speeeed) {
            temp=5/(1+speeeed[i]*1.0/100);
            navyspeed[i]= roundingto2(temp);
            temp=8/(1+speeeed[i]*1.0/100);
            scoutspeed[i]= roundingto2(temp);
            temp=10/(1+speeeed[i]*1.0/100);
            cavspeed[i]= roundingto2(temp);
            temp=20/(1+speeeed[i]*1.0/100);
            infspeed[i]= roundingto2(temp);
            temp=30/(1+speeeed[i]*1.0/100);
            artspeed[i]= roundingto2(temp);
            temp=40/(1+speeeed[i]*1.0/100);
            senspeed[i]= roundingto2(temp);
        }
        incname=tname.toLowerCase();
        tagname=Discordmembers[incname]
        var tcont=Math.floor(tx/100)+Math.floor(ty/100)*10;
        var scont=Math.floor(sx/100)+Math.floor(sy/100)*10;
        var dist=Math.sqrt((ty-sy)*(ty-sy)+(tx-sx)*(tx-sx));
        incatime=atime;
        var hdiff=atime.substring(0,2)-stime.substring(0,2);
        var mdiff=atime.substring(3,5)-stime.substring(3,5);
        var sdiff=atime.substring(6,8)-stime.substring(6,8);
        var d = new Date();
        var x = new Date();
        var arrivaltimemonth;
        var arrivaltimedate;
        if(atime.length===14){
            arrivaltimemonth=Number(atime.substring(9,11));//month
            arrivaltimedate=Number(atime.substring(12,14));//date
        }else{
            arrivaltimemonth=d.getMonth() +1;
            arrivaltimedate=d.getDate();
        }
        var time;
        if (hdiff>=0) {time=60*hdiff;}
        else {time=(24+hdiff)*60;}
        if((atime.length===14 || stime.length===14) && hdiff>0){
            time+=+1440;
            hdiff+=24;
        }
        time+=mdiff;
        time+=sdiff/60;
        var ispeed=roundingto2(time/dist);
        var nspeed=roundingto2((time-60)/dist);
        //adds time taken by troops to return home to arrival time and changed formats
        incprediction;

        // below will return -1 if calculated speed is not found inside the speed arrays and the correct index if it is found within the speed arrays
        var zns = navyspeed.indexOf(nspeed);
        var zss = scoutspeed.indexOf(ispeed);
        var zcs = cavspeed.indexOf(ispeed);
        var zis = infspeed.indexOf(ispeed);
        var zas = artspeed.indexOf(ispeed);
        var zsn = senspeed.indexOf(ispeed);
        // below use ispeed and above return values to get the correct incoming troop type
        if (tcont==scont) {
            if (ispeed>30) {
                if(zsn == -1){
                    incprediction="Tower?/Sen";
                }
                else
                {
                    incprediction="senator "+speeeed[zsn]+"%";
                }
            }
            if (ispeed>20 && ispeed<=30) {
                if(zsn == -1 && zas == -1){
                    incprediction="Tower?/Art/Sen";
                }
                if(zsn == -1 && zas != -1){
                    incprediction="Artillery "+speeeed[zas]+"%";
                }
                if(zsn != -1 && zas == -1){
                    incprediction="Senator "+speeeed[zsn]+"%";
                }
                if(zsn != -1 && zas != -1){
                    incprediction="Art "+speeeed[zas]+"%"+"/"+"Sen "+speeeed[zsn]+"%";
                }
            }
            if (ispeed==20){
                incprediction="Inf 0%/Art 50%/Sen 100%";
            }
            if (ispeed>=15 && ispeed<20) {
                if(zis == -1 && zas == -1){
                    incprediction="Tower?/Inf &above";
                }
                if(zis == -1 && zas != -1){
                    incprediction="Artillery "+speeeed[zas]+"%";
                }
                if(zis != -1 && zas == -1){
                    incprediction="Infantry "+speeeed[zis]+"%";
                }
                if(zis != -1 && zas != -1){
                    incprediction="Inf "+speeeed[zis]+"%"+"/"+"Art "+speeeed[zas]+"%";
                }
            }
            if (ispeed>=10 && ispeed<15) {
                if(zis == -1 && zcs == -1){
                    incprediction="Tower?/Cav &above";
                }
                if(zis == -1 && zcs != -1){
                    incprediction="Cav "+speeeed[zcs]+"%";
                }
                if(zis != -1 && zcs == -1){
                    incprediction="Inf "+speeeed[zis]+"%";
                }
                if(zis != -1 && zcs != -1){
                    incprediction="Cav "+speeeed[zcs]+"%"+"/"+"Inf "+speeeed[zis]+"%";
                }
            }
            if (ispeed>8 && ispeed<10) {
                if(zcs == -1){
                    incprediction="Tower?/Cav &above";
                }
                else{
                    incprediction="Cav "+speeeed[zcs]+"%";
                }
            }
            if (ispeed>5 && ispeed<=8){
                if(zss == -1 && zcs == -1){
                    incprediction="Tower?/Scout &above";
                }
                if(zss == -1 && zcs != -1){
                    incprediction="Cav "+speeeed[zcs]+"%";
                }
                if(zss != -1 && zcs == -1){
                    incprediction="Scout "+speeeed[zss]+"%";
                }
                if(zss != -1 && zcs != -1){
                    incprediction="Scout "+speeeed[zss]+"%"+"/"+"Cav "+speeeed[zcs]+"%";
                }
            }
            if (ispeed==5){
                incprediction="Navy 0%/Scout 60%/Cav 100%";
            }
            if (ispeed>=4 && ispeed<5) {
                if(zss == -1 && zns == -1){
                    incprediction="Tower?/scout &above";
                }
                if(zss == -1 && zns != -1){
                    incprediction="Navy "+speeeed[zns]+"%";
                }
                if(zss != -1 && zns == -1){
                    incprediction="Scout "+speeeed[zss]+"%";
                }
                if(zss != -1 && zns != -1){
                    incprediction="Navy "+speeeed[zns]+"%"+"/"+"Scout "+speeeed[zss]+"%";
                }
            }
            if (ispeed<4){
                if(zns == -1){
                    incprediction="Tower?/Navy &above";
                }
                else
                {
                    incprediction="Navy "+speeeed[zns]+"%";
                }
            }
        } else if ($(':nth-child(1)',this).html()) {
            incprediction="Portal";
        }
        else {
            if(zns != -1){incprediction="Navy "+speeeed[zns]+"%";}
            else{
                incprediction="Tower?/Navy";
            }
        }

        /*       if($(':nth-child(2)',this).text()=="Sieging"){
            incprediction="Sieging";
        }
        if($(':nth-child(2)',this).text()=="Internal Attack"){
            incprediction="Internal Attack";
        }*/

        sendMessage();
    }
    function sendMessage() {
        var request = new XMLHttpRequest();
        request.open("POST", "https://discord.com/api/webhooks/782201348329308180/jnFfOWNeWbXdPVstuCAwJARoT4OnWIy_v6Kojswyc1yKwpNfHTYQIkQeSPgDzuit50YU");

        request.setRequestHeader('Content-type', 'application/json');

        var params = {
            "username": "INCOMING",
            "avatar_url": "",
            "content": "<@"+tagname+"> has "+incprediction+" at "+incatime+" to "+tcords+" from "+scords+" "+sname+iiclaim
        }



        request.send(JSON.stringify(params));
    }
})();