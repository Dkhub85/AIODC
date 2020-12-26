// ==UserScript==
// @name Cotg incoming attack on discord chat
// @namespace https://github.com/Dkhub85/AIODC
// @version 1.0.0
// @description Cotg incoming attack on discord chat
// @author Dhruv
// @match https://*.crownofthegods.com
// @include https://*.crownofthegods.com/?s=*
// @grant none
// @updateURL https://raw.githubusercontent.com/DKhub85/AIODC/main/aiodc.user.js
// @downloadURL https://raw.githubusercontent.com/DKhub85/AIODC/main/aiodc.user.js
// ==/UserScript==

(function() {
    var poll2; //poll2data
    var dhx=-1;
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
    var intype;
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
    var measure;
    var Discordmembers={
        dhruv:"182783045072322561"
    };

    setTimeout(function() {
        (function(open) {
            XMLHttpRequest.prototype.open = function() {
                this.addEventListener("readystatechange", function() {
                    if(this.readyState==4) {
                        var url=this.responseURL;
                        if (url.indexOf('poll2.php')!=-1) {
                            poll2=JSON.parse(this.response);
                            if(dhx<0){
                                dhx=poll2.AIC;
                                zincomingdata();
                            }
                            if(poll2.AIC != dhx && dhx>=0){
                                dhx=poll2.AIC;
                                incomingdata();
                            }
                        }
                    }
                }, false);
                open.apply(this, arguments);
            };
        })(XMLHttpRequest.prototype.open);
    },4000);

    function zincomingdata(){
        jQuery.ajax({url: 'includes/getIO.php',type: 'POST',aysnc:false,
                     success: function(data) {
                         var indata=JSON.parse(data);
                         zincomingdataq(indata);
                     }
                    });

    }
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
        var y= data.inc;
        for (var i in y) {
            await sleep(500)
            var tempscords=y[i].axy.match(/\d+/g);
            var temptcords=y[i].txy.match(/\d+/g);
            scords="C"+tempscords[1]+" "+tempscords[2]+":"+tempscords[3];
            tcords="C"+temptcords[1]+" "+temptcords[2]+":"+temptcords[3];
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
            sname=y[i].apn;
            tname=y[i].tpn;
            intype=y[i].ty;
            if(tname==null){
                tname="lawless";
            }
            atime=y[i].art;
            stime=y[i].spt;
            if(pushinid.indexOf(measure) == -1){
                pushinid.push(measure);
                incomings();
            }
        }
    }
    function zincomingdataq(data){
        var y= data.inc;
        for (var i in y) {
            var tempscords=y[i].axy.match(/\d+/g);
            var temptcords=y[i].txy.match(/\d+/g);
            scords="C"+tempscords[1]+" "+tempscords[2]+":"+tempscords[3];
            tcords="C"+temptcords[1]+" "+temptcords[2]+":"+temptcords[3];
            tx=temptcords[2];
            ty=temptcords[3];
            sx=tempscords[2];
            sy=tempscords[3];
            iclaim=y[i].b;
            itime=y[i].art;
            measure = tx.concat(ty,sx,sy,itime,iclaim);
            if(pushinid.indexOf(measure) == -1){
                pushinid.push(measure);
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
        } 
        else {
            if(zns != -1){incprediction="Navy "+speeeed[zns]+"%";}
            else{
                incprediction="Tower?/Navy";
            }
        }

        if (intype=="Portal") {
            incprediction="Portal";
        }
        if(intype=="Sieging"){
            var tempx=",Sieging"
            incprediction = incprediction.concat(tempx);
        }
        if(intype=="Internal Attack"){
            var tempy=",Internal Attack"
            incprediction = incprediction.concat(tempy);
        }

        sendMessage();
    }
    function sendMessage() {
        var request = new XMLHttpRequest();
        request.open("POST", "your discord webhook link here");

        request.setRequestHeader('Content-type', 'application/json');

        var params = {
            "username": "INCOMING",
            "avatar_url": "",
            "content": "<@"+tagname+"> has "+incprediction+" at "+incatime+" to "+tcords+" from "+scords+" "+sname+iiclaim
        }



        request.send(JSON.stringify(params));
    }
})();
