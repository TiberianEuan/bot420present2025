gdjs.gameCode = {};
gdjs.gameCode.localVariables = [];
gdjs.gameCode.GDbotObjects2_1final = [];

gdjs.gameCode.GDceiling_9595armObjects2_1final = [];

gdjs.gameCode.GDbotObjects1= [];
gdjs.gameCode.GDbotObjects2= [];
gdjs.gameCode.GDbotObjects3= [];
gdjs.gameCode.GDbotObjects4= [];
gdjs.gameCode.GDbot_9595healthObjects1= [];
gdjs.gameCode.GDbot_9595healthObjects2= [];
gdjs.gameCode.GDbot_9595healthObjects3= [];
gdjs.gameCode.GDbot_9595healthObjects4= [];
gdjs.gameCode.GDyandere_9595sisObjects1= [];
gdjs.gameCode.GDyandere_9595sisObjects2= [];
gdjs.gameCode.GDyandere_9595sisObjects3= [];
gdjs.gameCode.GDyandere_9595sisObjects4= [];
gdjs.gameCode.GDtutorialObjects1= [];
gdjs.gameCode.GDtutorialObjects2= [];
gdjs.gameCode.GDtutorialObjects3= [];
gdjs.gameCode.GDtutorialObjects4= [];
gdjs.gameCode.GDceiling_9595armObjects1= [];
gdjs.gameCode.GDceiling_9595armObjects2= [];
gdjs.gameCode.GDceiling_9595armObjects3= [];
gdjs.gameCode.GDceiling_9595armObjects4= [];
gdjs.gameCode.GDdirtexpulsionObjects1= [];
gdjs.gameCode.GDdirtexpulsionObjects2= [];
gdjs.gameCode.GDdirtexpulsionObjects3= [];
gdjs.gameCode.GDdirtexpulsionObjects4= [];
gdjs.gameCode.GDactivemonstercounterObjects1= [];
gdjs.gameCode.GDactivemonstercounterObjects2= [];
gdjs.gameCode.GDactivemonstercounterObjects3= [];
gdjs.gameCode.GDactivemonstercounterObjects4= [];
gdjs.gameCode.GDtunnel_9595wallObjects1= [];
gdjs.gameCode.GDtunnel_9595wallObjects2= [];
gdjs.gameCode.GDtunnel_9595wallObjects3= [];
gdjs.gameCode.GDtunnel_9595wallObjects4= [];
gdjs.gameCode.GDplank_9595groundObjects1= [];
gdjs.gameCode.GDplank_9595groundObjects2= [];
gdjs.gameCode.GDplank_9595groundObjects3= [];
gdjs.gameCode.GDplank_9595groundObjects4= [];
gdjs.gameCode.GDcrt_9595nothingnessObjects1= [];
gdjs.gameCode.GDcrt_9595nothingnessObjects2= [];
gdjs.gameCode.GDcrt_9595nothingnessObjects3= [];
gdjs.gameCode.GDcrt_9595nothingnessObjects4= [];
gdjs.gameCode.GDsparksObjects1= [];
gdjs.gameCode.GDsparksObjects2= [];
gdjs.gameCode.GDsparksObjects3= [];
gdjs.gameCode.GDsparksObjects4= [];


gdjs.gameCode.mapOfGDgdjs_9546gameCode_9546GDsparksObjects1Objects = Hashtable.newFrom({"sparks": gdjs.gameCode.GDsparksObjects1});
gdjs.gameCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(17296132);
}
if (isConditionTrue_0) {
}

}


};gdjs.gameCode.eventsList1 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(17297300);
}
if (isConditionTrue_0) {
}

}


};gdjs.gameCode.eventsList2 = function(runtimeScene) {

{

/* Reuse gdjs.gameCode.GDbotObjects2 */

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.gameCode.GDbotObjects2.length;i<l;++i) {
    if ( gdjs.gameCode.GDbotObjects2[i].getBehavior("Health").IsDead((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.gameCode.GDbotObjects2[k] = gdjs.gameCode.GDbotObjects2[i];
        ++k;
    }
}
gdjs.gameCode.GDbotObjects2.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "dead", true);
}}

}


};gdjs.gameCode.eventsList3 = function(runtimeScene) {

{

gdjs.copyArray(gdjs.gameCode.GDbotObjects2, gdjs.gameCode.GDbotObjects3);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.gameCode.GDbotObjects3.length;i<l;++i) {
    if ( gdjs.gameCode.GDbotObjects3[i].getAnimationFrame() == 1 ) {
        isConditionTrue_0 = true;
        gdjs.gameCode.GDbotObjects3[k] = gdjs.gameCode.GDbotObjects3[i];
        ++k;
    }
}
gdjs.gameCode.GDbotObjects3.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "wood1.ogg", false, 25, 1);
}}

}


{

/* Reuse gdjs.gameCode.GDbotObjects2 */

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.gameCode.GDbotObjects2.length;i<l;++i) {
    if ( gdjs.gameCode.GDbotObjects2[i].getAnimationFrame() == 3 ) {
        isConditionTrue_0 = true;
        gdjs.gameCode.GDbotObjects2[k] = gdjs.gameCode.GDbotObjects2[i];
        ++k;
    }
}
gdjs.gameCode.GDbotObjects2.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "wood2.ogg", false, 25, 1);
}}

}


};gdjs.gameCode.eventsList4 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(17303940);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("tutorial"), gdjs.gameCode.GDtutorialObjects1);
{for(var i = 0, len = gdjs.gameCode.GDtutorialObjects1.length ;i < len;++i) {
    gdjs.gameCode.GDtutorialObjects1[i].getBehavior("Text").setText("TAP ON BAD THINGS");
}
}}

}


};gdjs.gameCode.eventsList5 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("bot"), gdjs.gameCode.GDbotObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.gameCode.GDbotObjects2.length;i<l;++i) {
    if ( !(gdjs.gameCode.GDbotObjects2[i].getBehavior("Health").IsDamageCooldownActive((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined))) ) {
        isConditionTrue_0 = true;
        gdjs.gameCode.GDbotObjects2[k] = gdjs.gameCode.GDbotObjects2[i];
        ++k;
    }
}
gdjs.gameCode.GDbotObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.gameCode.GDbotObjects2 */
{for(var i = 0, len = gdjs.gameCode.GDbotObjects2.length ;i < len;++i) {
    gdjs.gameCode.GDbotObjects2[i].getBehavior("Flash").Stop((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}
{ //Subevents
gdjs.gameCode.eventsList0(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("bot"), gdjs.gameCode.GDbotObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.gameCode.GDbotObjects2.length;i<l;++i) {
    if ( gdjs.gameCode.GDbotObjects2[i].getBehavior("Health").IsDamageCooldownActive((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.gameCode.GDbotObjects2[k] = gdjs.gameCode.GDbotObjects2[i];
        ++k;
    }
}
gdjs.gameCode.GDbotObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.gameCode.GDbotObjects2 */
{for(var i = 0, len = gdjs.gameCode.GDbotObjects2.length ;i < len;++i) {
    gdjs.gameCode.GDbotObjects2[i].getBehavior("Flash").Flash(0, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}
{ //Subevents
gdjs.gameCode.eventsList1(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("bot"), gdjs.gameCode.GDbotObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.gameCode.GDbotObjects2.length;i<l;++i) {
    if ( gdjs.gameCode.GDbotObjects2[i].getVariableBoolean(gdjs.gameCode.GDbotObjects2[i].getVariables().getFromIndex(1), true, false) ) {
        isConditionTrue_0 = true;
        gdjs.gameCode.GDbotObjects2[k] = gdjs.gameCode.GDbotObjects2[i];
        ++k;
    }
}
gdjs.gameCode.GDbotObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.gameCode.GDbotObjects2 */
{for(var i = 0, len = gdjs.gameCode.GDbotObjects2.length ;i < len;++i) {
    gdjs.gameCode.GDbotObjects2[i].setX(gdjs.gameCode.GDbotObjects2[i].getX() + ((gdjs.gameCode.GDbotObjects2[i].getDistanceToPosition(gdjs.evtTools.camera.getCameraX(runtimeScene, "", 0), gdjs.evtTools.camera.getCameraY(runtimeScene, "", 0))) * 0.025));
}
}{gdjs.evtTools.camera.setCameraX(runtimeScene, gdjs.evtTools.camera.getCameraX(runtimeScene, "", 0) + (8), "", 0);
}}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("bot"), gdjs.gameCode.GDbotObjects2);
gdjs.copyArray(runtimeScene.getObjects("bot_health"), gdjs.gameCode.GDbot_9595healthObjects2);
{for(var i = 0, len = gdjs.gameCode.GDbot_9595healthObjects2.length ;i < len;++i) {
    gdjs.gameCode.GDbot_9595healthObjects2[i].SetValue((( gdjs.gameCode.GDbotObjects2.length === 0 ) ? 0 :gdjs.gameCode.GDbotObjects2[0].getBehavior("Health").Health((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined))), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.gameCode.GDbot_9595healthObjects2.length ;i < len;++i) {
    gdjs.gameCode.GDbot_9595healthObjects2[i].SetMaxValue((( gdjs.gameCode.GDbotObjects2.length === 0 ) ? 0 :gdjs.gameCode.GDbotObjects2[0].getBehavior("Health").MaxHealth((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined))), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("bot"), gdjs.gameCode.GDbotObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.gameCode.GDbotObjects2.length;i<l;++i) {
    if ( gdjs.gameCode.GDbotObjects2[i].getBehavior("Health").IsJustDamaged((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.gameCode.GDbotObjects2[k] = gdjs.gameCode.GDbotObjects2[i];
        ++k;
    }
}
gdjs.gameCode.GDbotObjects2.length = k;
if (isConditionTrue_0) {
{gdjs.evtsExt__CameraShake__ShakeCamera.func(runtimeScene, 0.75, 0, 0.65, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}{gdjs.evtTools.sound.playSound(runtimeScene, "bwomp.ogg", false, 75, 2);
}{gdjs.evtTools.sound.playSound(runtimeScene, "assets\\botthurt1.ogg", false, 100, 1);
}
{ //Subevents
gdjs.gameCode.eventsList2(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("bot"), gdjs.gameCode.GDbotObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.gameCode.GDbotObjects2.length;i<l;++i) {
    if ( gdjs.gameCode.GDbotObjects2[i].getAnimationFrame() != gdjs.gameCode.GDbotObjects2[i].getVariables().getFromIndex(2).getAsNumber() ) {
        isConditionTrue_0 = true;
        gdjs.gameCode.GDbotObjects2[k] = gdjs.gameCode.GDbotObjects2[i];
        ++k;
    }
}
gdjs.gameCode.GDbotObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.gameCode.GDbotObjects2 */
{for(var i = 0, len = gdjs.gameCode.GDbotObjects2.length ;i < len;++i) {
    gdjs.gameCode.GDbotObjects2[i].returnVariable(gdjs.gameCode.GDbotObjects2[i].getVariables().getFromIndex(2)).setString(gdjs.evtTools.common.toString((gdjs.gameCode.GDbotObjects2[i].getAnimationFrame())));
}
}
{ //Subevents
gdjs.gameCode.eventsList3(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.systemInfo.isMobile();
if (isConditionTrue_0) {

{ //Subevents
gdjs.gameCode.eventsList4(runtimeScene);} //End of subevents
}

}


};gdjs.gameCode.mapOfGDgdjs_9546gameCode_9546GDyandere_95959595sisObjects2Objects = Hashtable.newFrom({"yandere_sis": gdjs.gameCode.GDyandere_9595sisObjects2});
gdjs.gameCode.mapOfGDgdjs_9546gameCode_9546GDbotObjects2Objects = Hashtable.newFrom({"bot": gdjs.gameCode.GDbotObjects2});
gdjs.gameCode.eventsList6 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(17308812);
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSoundOnChannel(runtimeScene, "assets\\yandere_noise.ogg", 666, true, 25, 1);
}{runtimeScene.getScene().getVariables().getFromIndex(0).add(1);
}}

}


{

gdjs.copyArray(gdjs.gameCode.GDyandere_9595sisObjects2, gdjs.gameCode.GDyandere_9595sisObjects3);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.gameCode.GDyandere_9595sisObjects3.length;i<l;++i) {
    if ( gdjs.gameCode.GDyandere_9595sisObjects3[i].getBehavior("ButtonFSM").IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.gameCode.GDyandere_9595sisObjects3[k] = gdjs.gameCode.GDyandere_9595sisObjects3[i];
        ++k;
    }
}
gdjs.gameCode.GDyandere_9595sisObjects3.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.gameCode.GDyandere_9595sisObjects3 */
{for(var i = 0, len = gdjs.gameCode.GDyandere_9595sisObjects3.length ;i < len;++i) {
    gdjs.gameCode.GDyandere_9595sisObjects3[i].returnVariable(gdjs.gameCode.GDyandere_9595sisObjects3[i].getVariables().getFromIndex(1)).setBoolean(false);
}
}{gdjs.evtTools.sound.stopSoundOnChannel(runtimeScene, 666);
}{gdjs.evtTools.sound.playSound(runtimeScene, "bwomp.ogg", false, 75, 2);
}{gdjs.evtsExt__CameraShake__ShakeCamera.func(runtimeScene, 0.5, 0.01, 0.01, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}{for(var i = 0, len = gdjs.gameCode.GDyandere_9595sisObjects3.length ;i < len;++i) {
    gdjs.gameCode.GDyandere_9595sisObjects3[i].getBehavior("FlashColor").Flash(3, "255;0;0", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


{

/* Reuse gdjs.gameCode.GDbotObjects2 */
/* Reuse gdjs.gameCode.GDyandere_9595sisObjects2 */

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.gameCode.mapOfGDgdjs_9546gameCode_9546GDyandere_95959595sisObjects2Objects, gdjs.gameCode.mapOfGDgdjs_9546gameCode_9546GDbotObjects2Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
/* Reuse gdjs.gameCode.GDbotObjects2 */
/* Reuse gdjs.gameCode.GDyandere_9595sisObjects2 */
{for(var i = 0, len = gdjs.gameCode.GDyandere_9595sisObjects2.length ;i < len;++i) {
    gdjs.gameCode.GDyandere_9595sisObjects2[i].returnVariable(gdjs.gameCode.GDyandere_9595sisObjects2[i].getVariables().getFromIndex(1)).setBoolean(false);
}
}{for(var i = 0, len = gdjs.gameCode.GDbotObjects2.length ;i < len;++i) {
    gdjs.gameCode.GDbotObjects2[i].getBehavior("Health").Hit(1.5, true, true, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{gdjs.evtTools.sound.stopSoundOnChannel(runtimeScene, 666);
}}

}


};gdjs.gameCode.eventsList7 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(17313132);
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(0).sub(1);
}}

}


};gdjs.gameCode.eventsList8 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("yandere_sis"), gdjs.gameCode.GDyandere_9595sisObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.gameCode.GDyandere_9595sisObjects2.length;i<l;++i) {
    if ( gdjs.gameCode.GDyandere_9595sisObjects2[i].getTimerElapsedTimeInSecondsOrNaN("yandere") >= gdjs.gameCode.GDyandere_9595sisObjects2[i].getVariables().getFromIndex(0).getAsNumber() ) {
        isConditionTrue_0 = true;
        gdjs.gameCode.GDyandere_9595sisObjects2[k] = gdjs.gameCode.GDyandere_9595sisObjects2[i];
        ++k;
    }
}
gdjs.gameCode.GDyandere_9595sisObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.gameCode.GDyandere_9595sisObjects2.length;i<l;++i) {
    if ( gdjs.gameCode.GDyandere_9595sisObjects2[i].getVariableBoolean(gdjs.gameCode.GDyandere_9595sisObjects2[i].getVariables().getFromIndex(1), false, false) ) {
        isConditionTrue_0 = true;
        gdjs.gameCode.GDyandere_9595sisObjects2[k] = gdjs.gameCode.GDyandere_9595sisObjects2[i];
        ++k;
    }
}
gdjs.gameCode.GDyandere_9595sisObjects2.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.gameCode.GDyandere_9595sisObjects2 */
{for(var i = 0, len = gdjs.gameCode.GDyandere_9595sisObjects2.length ;i < len;++i) {
    gdjs.gameCode.GDyandere_9595sisObjects2[i].resetTimer("yandere");
}
}{for(var i = 0, len = gdjs.gameCode.GDyandere_9595sisObjects2.length ;i < len;++i) {
    gdjs.gameCode.GDyandere_9595sisObjects2[i].returnVariable(gdjs.gameCode.GDyandere_9595sisObjects2[i].getVariables().getFromIndex(0)).setNumber(gdjs.randomInRange(5, 25));
}
}{gdjs.evtTools.sound.playSound(runtimeScene, "assets\\giggling_fuck.ogg", false, 75, 1);
}{for(var i = 0, len = gdjs.gameCode.GDyandere_9595sisObjects2.length ;i < len;++i) {
    gdjs.gameCode.GDyandere_9595sisObjects2[i].returnVariable(gdjs.gameCode.GDyandere_9595sisObjects2[i].getVariables().getFromIndex(1)).setBoolean(true);
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "glitch") >= 0.5;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("yandere_sis"), gdjs.gameCode.GDyandere_9595sisObjects2);
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "glitch");
}{for(var i = 0, len = gdjs.gameCode.GDyandere_9595sisObjects2.length ;i < len;++i) {
    gdjs.gameCode.GDyandere_9595sisObjects2[i].getBehavior("Effect").setEffectDoubleParameter("glitch", "slices", gdjs.randomInRange(0, 20));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("yandere_sis"), gdjs.gameCode.GDyandere_9595sisObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.gameCode.GDyandere_9595sisObjects2.length;i<l;++i) {
    if ( gdjs.gameCode.GDyandere_9595sisObjects2[i].getVariableBoolean(gdjs.gameCode.GDyandere_9595sisObjects2[i].getVariables().getFromIndex(1), true, false) ) {
        isConditionTrue_0 = true;
        gdjs.gameCode.GDyandere_9595sisObjects2[k] = gdjs.gameCode.GDyandere_9595sisObjects2[i];
        ++k;
    }
}
gdjs.gameCode.GDyandere_9595sisObjects2.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("bot"), gdjs.gameCode.GDbotObjects2);
/* Reuse gdjs.gameCode.GDyandere_9595sisObjects2 */
{gdjs.evtTools.sound.setSoundOnChannelVolume(runtimeScene, 666, gdjs.evtTools.common.clamp(100 - ((( gdjs.gameCode.GDyandere_9595sisObjects2.length === 0 ) ? 0 :gdjs.gameCode.GDyandere_9595sisObjects2[0].getDistanceToObject((gdjs.gameCode.GDbotObjects2.length !== 0 ? gdjs.gameCode.GDbotObjects2[0] : null))) / 32), 0, 75));
}{for(var i = 0, len = gdjs.gameCode.GDyandere_9595sisObjects2.length ;i < len;++i) {
    gdjs.gameCode.GDyandere_9595sisObjects2[i].setX(gdjs.gameCode.GDyandere_9595sisObjects2[i].getX() + ((gdjs.gameCode.GDyandere_9595sisObjects2[i].getDistanceToPosition(gdjs.evtTools.camera.getCameraX(runtimeScene, "", 0), gdjs.evtTools.camera.getCameraY(runtimeScene, "", 0))) * gdjs.randomFloatInRange(0.01, 0.02)));
}
}
{ //Subevents
gdjs.gameCode.eventsList6(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("yandere_sis"), gdjs.gameCode.GDyandere_9595sisObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.gameCode.GDyandere_9595sisObjects2.length;i<l;++i) {
    if ( gdjs.gameCode.GDyandere_9595sisObjects2[i].getVariableBoolean(gdjs.gameCode.GDyandere_9595sisObjects2[i].getVariables().getFromIndex(1), false, false) ) {
        isConditionTrue_0 = true;
        gdjs.gameCode.GDyandere_9595sisObjects2[k] = gdjs.gameCode.GDyandere_9595sisObjects2[i];
        ++k;
    }
}
gdjs.gameCode.GDyandere_9595sisObjects2.length = k;
if (isConditionTrue_0) {

{ //Subevents
gdjs.gameCode.eventsList7(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("yandere_sis"), gdjs.gameCode.GDyandere_9595sisObjects1);
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "glitch");
}{for(var i = 0, len = gdjs.gameCode.GDyandere_9595sisObjects1.length ;i < len;++i) {
    gdjs.gameCode.GDyandere_9595sisObjects1[i].resetTimer("yandere");
}
}}

}


};gdjs.gameCode.mapOfGDgdjs_9546gameCode_9546GDceiling_95959595armObjects2Objects = Hashtable.newFrom({"ceiling_arm": gdjs.gameCode.GDceiling_9595armObjects2});
gdjs.gameCode.mapOfGDgdjs_9546gameCode_9546GDbotObjects2Objects = Hashtable.newFrom({"bot": gdjs.gameCode.GDbotObjects2});
gdjs.gameCode.asyncCallback17315900 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.gameCode.localVariables);
gdjs.copyArray(asyncObjectsList.getObjects("ceiling_arm"), gdjs.gameCode.GDceiling_9595armObjects3);

{for(var i = 0, len = gdjs.gameCode.GDceiling_9595armObjects3.length ;i < len;++i) {
    gdjs.gameCode.GDceiling_9595armObjects3[i].getBehavior("Tween").addObjectPositionYTween2("armburst", -(4), "elastic", 1, false);
}
}{gdjs.evtTools.runtimeScene.createObjectsFromExternalLayout(runtimeScene, "dirtexpulsion", (( gdjs.gameCode.GDceiling_9595armObjects3.length === 0 ) ? 0 :gdjs.gameCode.GDceiling_9595armObjects3[0].getPointX("")), (( gdjs.gameCode.GDceiling_9595armObjects3.length === 0 ) ? 0 :gdjs.gameCode.GDceiling_9595armObjects3[0].getPointY("")), 0);
}{gdjs.evtsExt__CameraShake__ShakeCamera.func(runtimeScene, 0.9, 0.2, 0.6, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}{gdjs.evtTools.sound.playSound(runtimeScene, "BØT_laugh_muffled.wav", false, 100, 1);
}gdjs.gameCode.localVariables.length = 0;
}
gdjs.gameCode.eventsList9 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.gameCode.localVariables);
for (const obj of gdjs.gameCode.GDceiling_9595armObjects2) asyncObjectsList.addObject("ceiling_arm", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.25), (runtimeScene) => (gdjs.gameCode.asyncCallback17315900(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.gameCode.mapOfGDgdjs_9546gameCode_9546GDceiling_95959595armObjects2Objects = Hashtable.newFrom({"ceiling_arm": gdjs.gameCode.GDceiling_9595armObjects2});
gdjs.gameCode.mapOfGDgdjs_9546gameCode_9546GDbotObjects2Objects = Hashtable.newFrom({"bot": gdjs.gameCode.GDbotObjects2});
gdjs.gameCode.mapOfGDgdjs_9546gameCode_9546GDceiling_95959595armObjects2Objects = Hashtable.newFrom({"ceiling_arm": gdjs.gameCode.GDceiling_9595armObjects2});
gdjs.gameCode.mapOfGDgdjs_9546gameCode_9546GDbotObjects2Objects = Hashtable.newFrom({"bot": gdjs.gameCode.GDbotObjects2});
gdjs.gameCode.mapOfEmptyGDceiling_9595armObjects = Hashtable.newFrom({"ceiling_arm": []});
gdjs.gameCode.mapOfGDgdjs_9546gameCode_9546GDceiling_95959595armObjects2Objects = Hashtable.newFrom({"ceiling_arm": gdjs.gameCode.GDceiling_9595armObjects2});
gdjs.gameCode.mapOfGDgdjs_9546gameCode_9546GDceiling_95959595armObjects1Objects = Hashtable.newFrom({"ceiling_arm": gdjs.gameCode.GDceiling_9595armObjects1});
gdjs.gameCode.mapOfGDgdjs_9546gameCode_9546GDceiling_95959595armObjects1Objects = Hashtable.newFrom({"ceiling_arm": gdjs.gameCode.GDceiling_9595armObjects1});
gdjs.gameCode.eventsList10 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("bot"), gdjs.gameCode.GDbotObjects2);
gdjs.copyArray(runtimeScene.getObjects("ceiling_arm"), gdjs.gameCode.GDceiling_9595armObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.distanceTest(gdjs.gameCode.mapOfGDgdjs_9546gameCode_9546GDceiling_95959595armObjects2Objects, gdjs.gameCode.mapOfGDgdjs_9546gameCode_9546GDbotObjects2Objects, 1200, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.gameCode.GDceiling_9595armObjects2.length;i<l;++i) {
    if ( gdjs.gameCode.GDceiling_9595armObjects2[i].getVariableBoolean(gdjs.gameCode.GDceiling_9595armObjects2[i].getVariables().getFromIndex(1), false, false) ) {
        isConditionTrue_0 = true;
        gdjs.gameCode.GDceiling_9595armObjects2[k] = gdjs.gameCode.GDceiling_9595armObjects2[i];
        ++k;
    }
}
gdjs.gameCode.GDceiling_9595armObjects2.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.gameCode.GDceiling_9595armObjects2 */
{runtimeScene.getScene().getVariables().getFromIndex(0).add(1);
}{for(var i = 0, len = gdjs.gameCode.GDceiling_9595armObjects2.length ;i < len;++i) {
    gdjs.gameCode.GDceiling_9595armObjects2[i].returnVariable(gdjs.gameCode.GDceiling_9595armObjects2[i].getVariables().getFromIndex(1)).setBoolean(true);
}
}{gdjs.evtTools.sound.playSound(runtimeScene, "dirtcollapse.wav", false, 90, 1);
}
{ //Subevents
gdjs.gameCode.eventsList9(runtimeScene);} //End of subevents
}

}


{

gdjs.gameCode.GDbotObjects2.length = 0;

gdjs.gameCode.GDceiling_9595armObjects2.length = 0;


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{gdjs.gameCode.GDbotObjects2_1final.length = 0;
gdjs.gameCode.GDceiling_9595armObjects2_1final.length = 0;
let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("ceiling_arm"), gdjs.gameCode.GDceiling_9595armObjects3);
for (var i = 0, k = 0, l = gdjs.gameCode.GDceiling_9595armObjects3.length;i<l;++i) {
    if ( gdjs.gameCode.GDceiling_9595armObjects3[i].getBehavior("ButtonFSM").IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_1 = true;
        gdjs.gameCode.GDceiling_9595armObjects3[k] = gdjs.gameCode.GDceiling_9595armObjects3[i];
        ++k;
    }
}
gdjs.gameCode.GDceiling_9595armObjects3.length = k;
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.gameCode.GDceiling_9595armObjects3.length; j < jLen ; ++j) {
        if ( gdjs.gameCode.GDceiling_9595armObjects2_1final.indexOf(gdjs.gameCode.GDceiling_9595armObjects3[j]) === -1 )
            gdjs.gameCode.GDceiling_9595armObjects2_1final.push(gdjs.gameCode.GDceiling_9595armObjects3[j]);
    }
}
}
{
gdjs.copyArray(runtimeScene.getObjects("bot"), gdjs.gameCode.GDbotObjects3);
gdjs.copyArray(runtimeScene.getObjects("ceiling_arm"), gdjs.gameCode.GDceiling_9595armObjects3);
for (var i = 0, k = 0, l = gdjs.gameCode.GDceiling_9595armObjects3.length;i<l;++i) {
    if ( gdjs.gameCode.GDceiling_9595armObjects3[i].getX() < (( gdjs.gameCode.GDbotObjects3.length === 0 ) ? 0 :gdjs.gameCode.GDbotObjects3[0].getPointX("")) - 500 ) {
        isConditionTrue_1 = true;
        gdjs.gameCode.GDceiling_9595armObjects3[k] = gdjs.gameCode.GDceiling_9595armObjects3[i];
        ++k;
    }
}
gdjs.gameCode.GDceiling_9595armObjects3.length = k;
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.gameCode.GDbotObjects3.length; j < jLen ; ++j) {
        if ( gdjs.gameCode.GDbotObjects2_1final.indexOf(gdjs.gameCode.GDbotObjects3[j]) === -1 )
            gdjs.gameCode.GDbotObjects2_1final.push(gdjs.gameCode.GDbotObjects3[j]);
    }
    for (let j = 0, jLen = gdjs.gameCode.GDceiling_9595armObjects3.length; j < jLen ; ++j) {
        if ( gdjs.gameCode.GDceiling_9595armObjects2_1final.indexOf(gdjs.gameCode.GDceiling_9595armObjects3[j]) === -1 )
            gdjs.gameCode.GDceiling_9595armObjects2_1final.push(gdjs.gameCode.GDceiling_9595armObjects3[j]);
    }
}
}
{
gdjs.copyArray(gdjs.gameCode.GDbotObjects2_1final, gdjs.gameCode.GDbotObjects2);
gdjs.copyArray(gdjs.gameCode.GDceiling_9595armObjects2_1final, gdjs.gameCode.GDceiling_9595armObjects2);
}
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.gameCode.GDceiling_9595armObjects2.length;i<l;++i) {
    if ( gdjs.gameCode.GDceiling_9595armObjects2[i].getBehavior("Animation").getAnimationName() != "ceiling_arm_ow" ) {
        isConditionTrue_0 = true;
        gdjs.gameCode.GDceiling_9595armObjects2[k] = gdjs.gameCode.GDceiling_9595armObjects2[i];
        ++k;
    }
}
gdjs.gameCode.GDceiling_9595armObjects2.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.gameCode.GDceiling_9595armObjects2 */
{runtimeScene.getScene().getVariables().getFromIndex(0).sub(1);
}{for(var i = 0, len = gdjs.gameCode.GDceiling_9595armObjects2.length ;i < len;++i) {
    gdjs.gameCode.GDceiling_9595armObjects2[i].getBehavior("ShakeObject_PositionAngle").ShakeObject_PositionAngle(1, 24, 0, 8, 0.08, false, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.gameCode.GDceiling_9595armObjects2.length ;i < len;++i) {
    gdjs.gameCode.GDceiling_9595armObjects2[i].activateBehavior("Sway", false);
}
}{for(var i = 0, len = gdjs.gameCode.GDceiling_9595armObjects2.length ;i < len;++i) {
    gdjs.gameCode.GDceiling_9595armObjects2[i].getBehavior("Animation").setAnimationName("ceiling_arm_ow");
}
}{for(var i = 0, len = gdjs.gameCode.GDceiling_9595armObjects2.length ;i < len;++i) {
    gdjs.gameCode.GDceiling_9595armObjects2[i].getBehavior("FlashColor").Flash(1, "255;0;0", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.gameCode.GDceiling_9595armObjects2.length ;i < len;++i) {
    gdjs.gameCode.GDceiling_9595armObjects2[i].getBehavior("Tween").addObjectPositionYTween2("armshrivel", -(512), "easeInQuad", 2, true);
}
}{for(var i = 0, len = gdjs.gameCode.GDceiling_9595armObjects2.length ;i < len;++i) {
    gdjs.gameCode.GDceiling_9595armObjects2[i].getBehavior("Tween").addObjectAngleTween2("armretractangle", 0, "linear", 0.75, false);
}
}{gdjs.evtTools.sound.playSound(runtimeScene, "crack2.ogg", false, 75, 1);
}{for(var i = 0, len = gdjs.gameCode.GDceiling_9595armObjects2.length ;i < len;++i) {
    gdjs.gameCode.GDceiling_9595armObjects2[i].getBehavior("Resizable").setWidth(256);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("bot"), gdjs.gameCode.GDbotObjects2);
gdjs.copyArray(runtimeScene.getObjects("ceiling_arm"), gdjs.gameCode.GDceiling_9595armObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.gameCode.mapOfGDgdjs_9546gameCode_9546GDceiling_95959595armObjects2Objects, gdjs.gameCode.mapOfGDgdjs_9546gameCode_9546GDbotObjects2Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.gameCode.GDceiling_9595armObjects2.length;i<l;++i) {
    if ( gdjs.gameCode.GDceiling_9595armObjects2[i].getBehavior("Animation").getAnimationName() != "ceiling_arm_ow" ) {
        isConditionTrue_0 = true;
        gdjs.gameCode.GDceiling_9595armObjects2[k] = gdjs.gameCode.GDceiling_9595armObjects2[i];
        ++k;
    }
}
gdjs.gameCode.GDceiling_9595armObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.gameCode.GDceiling_9595armObjects2.length;i<l;++i) {
    if ( gdjs.gameCode.GDceiling_9595armObjects2[i].getVariableBoolean(gdjs.gameCode.GDceiling_9595armObjects2[i].getVariables().getFromIndex(0), false, false) ) {
        isConditionTrue_0 = true;
        gdjs.gameCode.GDceiling_9595armObjects2[k] = gdjs.gameCode.GDceiling_9595armObjects2[i];
        ++k;
    }
}
gdjs.gameCode.GDceiling_9595armObjects2.length = k;
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.gameCode.GDbotObjects2 */
/* Reuse gdjs.gameCode.GDceiling_9595armObjects2 */
{for(var i = 0, len = gdjs.gameCode.GDceiling_9595armObjects2.length ;i < len;++i) {
    gdjs.gameCode.GDceiling_9595armObjects2[i].getBehavior("Animation").setAnimationName("ceiling_arm_fuckyou");
}
}{gdjs.evtTools.sound.playSoundOnChannel(runtimeScene, "scrape.wav", 90, false, 100, 1);
}{gdjs.evtsExt__CameraShake__ShakeCamera.func(runtimeScene, 0.5, 0, 0, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}{for(var i = 0, len = gdjs.gameCode.GDceiling_9595armObjects2.length ;i < len;++i) {
    gdjs.gameCode.GDceiling_9595armObjects2[i].returnVariable(gdjs.gameCode.GDceiling_9595armObjects2[i].getVariables().getFromIndex(0)).setBoolean(true);
}
}{for(var i = 0, len = gdjs.gameCode.GDbotObjects2.length ;i < len;++i) {
    gdjs.gameCode.GDbotObjects2[i].getBehavior("ShakeObject_PositionAngle").ShakeObject_PositionAngle(0.5, 4, 0, 0, 0.08, false, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("bot"), gdjs.gameCode.GDbotObjects2);
gdjs.copyArray(runtimeScene.getObjects("ceiling_arm"), gdjs.gameCode.GDceiling_9595armObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.gameCode.mapOfGDgdjs_9546gameCode_9546GDceiling_95959595armObjects2Objects, gdjs.gameCode.mapOfGDgdjs_9546gameCode_9546GDbotObjects2Objects, true, runtimeScene, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.gameCode.GDceiling_9595armObjects2.length;i<l;++i) {
    if ( gdjs.gameCode.GDceiling_9595armObjects2[i].getBehavior("Animation").getAnimationName() == "ceiling_arm_fuckyou" ) {
        isConditionTrue_0 = true;
        gdjs.gameCode.GDceiling_9595armObjects2[k] = gdjs.gameCode.GDceiling_9595armObjects2[i];
        ++k;
    }
}
gdjs.gameCode.GDceiling_9595armObjects2.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.gameCode.GDbotObjects2 */
/* Reuse gdjs.gameCode.GDceiling_9595armObjects2 */
{for(var i = 0, len = gdjs.gameCode.GDceiling_9595armObjects2.length ;i < len;++i) {
    gdjs.gameCode.GDceiling_9595armObjects2[i].getBehavior("Tween").addObjectPositionYTween2("armimdonehere", -(512), "easeInQuad", 1, true);
}
}{for(var i = 0, len = gdjs.gameCode.GDbotObjects2.length ;i < len;++i) {
    gdjs.gameCode.GDbotObjects2[i].getBehavior("Health").Hit(3, true, true, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.gameCode.GDceiling_9595armObjects2.length ;i < len;++i) {
    gdjs.gameCode.GDceiling_9595armObjects2[i].rotateTowardPosition((( gdjs.gameCode.GDbotObjects2.length === 0 ) ? 0 :gdjs.gameCode.GDbotObjects2[0].getPointX("head")), (( gdjs.gameCode.GDbotObjects2.length === 0 ) ? 0 :gdjs.gameCode.GDbotObjects2[0].getPointY("head")), 270, runtimeScene);
}
}{for(var i = 0, len = gdjs.gameCode.GDceiling_9595armObjects2.length ;i < len;++i) {
    gdjs.gameCode.GDceiling_9595armObjects2[i].getBehavior("Animation").setAnimationName("ceiling_arm_burst");
}
}{gdjs.evtTools.sound.stopSoundOnChannel(runtimeScene, 90);
}{runtimeScene.getScene().getVariables().getFromIndex(0).sub(1);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("ceiling_arm"), gdjs.gameCode.GDceiling_9595armObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.gameCode.GDceiling_9595armObjects2.length;i<l;++i) {
    if ( gdjs.gameCode.GDceiling_9595armObjects2[i].getZOrder() >= 2 ) {
        isConditionTrue_0 = true;
        gdjs.gameCode.GDceiling_9595armObjects2[k] = gdjs.gameCode.GDceiling_9595armObjects2[i];
        ++k;
    }
}
gdjs.gameCode.GDceiling_9595armObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.gameCode.GDceiling_9595armObjects2 */
{for(var i = 0, len = gdjs.gameCode.GDceiling_9595armObjects2.length ;i < len;++i) {
    gdjs.gameCode.GDceiling_9595armObjects2[i].setZOrder(1);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("bot"), gdjs.gameCode.GDbotObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.getSceneInstancesCount((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.gameCode.mapOfEmptyGDceiling_9595armObjects) < gdjs.evtTools.common.clamp((( gdjs.gameCode.GDbotObjects2.length === 0 ) ? 0 :gdjs.gameCode.GDbotObjects2[0].getPointX("")) / 10000 + 2, 2, 12);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.gameCode.GDbotObjects2.length;i<l;++i) {
    if ( gdjs.gameCode.GDbotObjects2[i].getX() > 3328 ) {
        isConditionTrue_0 = true;
        gdjs.gameCode.GDbotObjects2[k] = gdjs.gameCode.GDbotObjects2[i];
        ++k;
    }
}
gdjs.gameCode.GDbotObjects2.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.gameCode.GDbotObjects2 */
gdjs.gameCode.GDceiling_9595armObjects2.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.gameCode.mapOfGDgdjs_9546gameCode_9546GDceiling_95959595armObjects2Objects, (( gdjs.gameCode.GDbotObjects2.length === 0 ) ? 0 :gdjs.gameCode.GDbotObjects2[0].getPointX("")) + gdjs.randomInRange(900, 8000), -(381), "");
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("ceiling_arm"), gdjs.gameCode.GDceiling_9595armObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.gameCode.GDceiling_9595armObjects2.length;i<l;++i) {
    if ( gdjs.gameCode.GDceiling_9595armObjects2[i].getBehavior("Resizable").getHeight() != 512 ) {
        isConditionTrue_0 = true;
        gdjs.gameCode.GDceiling_9595armObjects2[k] = gdjs.gameCode.GDceiling_9595armObjects2[i];
        ++k;
    }
}
gdjs.gameCode.GDceiling_9595armObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.gameCode.GDceiling_9595armObjects2 */
{for(var i = 0, len = gdjs.gameCode.GDceiling_9595armObjects2.length ;i < len;++i) {
    gdjs.gameCode.GDceiling_9595armObjects2[i].getBehavior("Resizable").setHeight(512);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("ceiling_arm"), gdjs.gameCode.GDceiling_9595armObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.gameCode.GDceiling_9595armObjects2.length;i<l;++i) {
    if ( gdjs.gameCode.GDceiling_9595armObjects2[i].getBehavior("Resizable").getWidth() != 256 ) {
        isConditionTrue_0 = true;
        gdjs.gameCode.GDceiling_9595armObjects2[k] = gdjs.gameCode.GDceiling_9595armObjects2[i];
        ++k;
    }
}
gdjs.gameCode.GDceiling_9595armObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.gameCode.GDceiling_9595armObjects2 */
{for(var i = 0, len = gdjs.gameCode.GDceiling_9595armObjects2.length ;i < len;++i) {
    gdjs.gameCode.GDceiling_9595armObjects2[i].getBehavior("Resizable").setWidth(256);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("ceiling_arm"), gdjs.gameCode.GDceiling_9595armObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.gameCode.mapOfGDgdjs_9546gameCode_9546GDceiling_95959595armObjects1Objects, gdjs.gameCode.mapOfGDgdjs_9546gameCode_9546GDceiling_95959595armObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
/* Reuse gdjs.gameCode.GDceiling_9595armObjects1 */
{for(var i = 0, len = gdjs.gameCode.GDceiling_9595armObjects1.length ;i < len;++i) {
    gdjs.gameCode.GDceiling_9595armObjects1[i].deleteFromScene(runtimeScene);
}
}{runtimeScene.getScene().getVariables().getFromIndex(0).sub(1);
}}

}


};gdjs.gameCode.eventsList11 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(0).getAsNumber() > 1);
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.setMusicOnChannelVolume(runtimeScene, 194, gdjs.evtTools.common.clamp(gdjs.evtTools.sound.getMusicOnChannelVolume(runtimeScene, 194) + 5, 0, 100));
}{gdjs.evtTools.sound.setMusicOnChannelVolume(runtimeScene, 193, gdjs.evtTools.common.clamp(gdjs.evtTools.sound.getMusicOnChannelVolume(runtimeScene, 193) - 5, 0, 100));
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(0).getAsNumber() <= 1);
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.setMusicOnChannelVolume(runtimeScene, 194, gdjs.evtTools.common.clamp(gdjs.evtTools.sound.getMusicOnChannelVolume(runtimeScene, 194) - 1, 0, 100));
}{gdjs.evtTools.sound.setMusicOnChannelVolume(runtimeScene, 193, gdjs.evtTools.common.clamp(gdjs.evtTools.sound.getMusicOnChannelVolume(runtimeScene, 193) + 1, 0, 100));
}}

}


};gdjs.gameCode.eventsList12 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("activemonstercounter"), gdjs.gameCode.GDactivemonstercounterObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.gameCode.GDactivemonstercounterObjects2.length;i<l;++i) {
    if ( gdjs.gameCode.GDactivemonstercounterObjects2[i].getBehavior("Text").getText() != runtimeScene.getScene().getVariables().getFromIndex(0).getAsString() ) {
        isConditionTrue_0 = true;
        gdjs.gameCode.GDactivemonstercounterObjects2[k] = gdjs.gameCode.GDactivemonstercounterObjects2[i];
        ++k;
    }
}
gdjs.gameCode.GDactivemonstercounterObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.gameCode.GDactivemonstercounterObjects2 */
{for(var i = 0, len = gdjs.gameCode.GDactivemonstercounterObjects2.length ;i < len;++i) {
    gdjs.gameCode.GDactivemonstercounterObjects2[i].getBehavior("Text").setText(runtimeScene.getScene().getVariables().getFromIndex(0).getAsString());
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(0).getAsNumber() < 0);
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(0).add(1);
}}

}


};gdjs.gameCode.eventsList13 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("bot_health"), gdjs.gameCode.GDbot_9595healthObjects1);
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "ground_ketchup");
}{for(var i = 0, len = gdjs.gameCode.GDbot_9595healthObjects1.length ;i < len;++i) {
    gdjs.gameCode.GDbot_9595healthObjects1[i].getBehavior("Tween").addObjectPositionYTween2("health_desc", 55, "easeOutSine", 4, false);
}
}{gdjs.evtTools.sound.playMusicOnChannel(runtimeScene, "assets\\dusty_machinery_inactive.mp3", 193, true, 100, 1);
}{gdjs.evtTools.sound.playMusicOnChannel(runtimeScene, "assets\\dusty_machinery_active.mp3", 194, true, 0, 1);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "ground_ketchup") >= 1;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("plank_ground"), gdjs.gameCode.GDplank_9595groundObjects1);
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "ground_ketchup");
}{for(var i = 0, len = gdjs.gameCode.GDplank_9595groundObjects1.length ;i < len;++i) {
    gdjs.gameCode.GDplank_9595groundObjects1[i].getBehavior("Resizable").setWidth(gdjs.gameCode.GDplank_9595groundObjects1[i].getBehavior("Resizable").getWidth() + (1024));
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
if (isConditionTrue_0) {
gdjs.gameCode.GDsparksObjects1.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.gameCode.mapOfGDgdjs_9546gameCode_9546GDsparksObjects1Objects, gdjs.evtTools.input.getCursorX(runtimeScene, "", 0), gdjs.evtTools.input.getCursorY(runtimeScene, "", 0), "");
}}

}


{


gdjs.gameCode.eventsList5(runtimeScene);
}


{


gdjs.gameCode.eventsList8(runtimeScene);
}


{


gdjs.gameCode.eventsList10(runtimeScene);
}


{


gdjs.gameCode.eventsList11(runtimeScene);
}


{


gdjs.gameCode.eventsList12(runtimeScene);
}


};

gdjs.gameCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.gameCode.GDbotObjects1.length = 0;
gdjs.gameCode.GDbotObjects2.length = 0;
gdjs.gameCode.GDbotObjects3.length = 0;
gdjs.gameCode.GDbotObjects4.length = 0;
gdjs.gameCode.GDbot_9595healthObjects1.length = 0;
gdjs.gameCode.GDbot_9595healthObjects2.length = 0;
gdjs.gameCode.GDbot_9595healthObjects3.length = 0;
gdjs.gameCode.GDbot_9595healthObjects4.length = 0;
gdjs.gameCode.GDyandere_9595sisObjects1.length = 0;
gdjs.gameCode.GDyandere_9595sisObjects2.length = 0;
gdjs.gameCode.GDyandere_9595sisObjects3.length = 0;
gdjs.gameCode.GDyandere_9595sisObjects4.length = 0;
gdjs.gameCode.GDtutorialObjects1.length = 0;
gdjs.gameCode.GDtutorialObjects2.length = 0;
gdjs.gameCode.GDtutorialObjects3.length = 0;
gdjs.gameCode.GDtutorialObjects4.length = 0;
gdjs.gameCode.GDceiling_9595armObjects1.length = 0;
gdjs.gameCode.GDceiling_9595armObjects2.length = 0;
gdjs.gameCode.GDceiling_9595armObjects3.length = 0;
gdjs.gameCode.GDceiling_9595armObjects4.length = 0;
gdjs.gameCode.GDdirtexpulsionObjects1.length = 0;
gdjs.gameCode.GDdirtexpulsionObjects2.length = 0;
gdjs.gameCode.GDdirtexpulsionObjects3.length = 0;
gdjs.gameCode.GDdirtexpulsionObjects4.length = 0;
gdjs.gameCode.GDactivemonstercounterObjects1.length = 0;
gdjs.gameCode.GDactivemonstercounterObjects2.length = 0;
gdjs.gameCode.GDactivemonstercounterObjects3.length = 0;
gdjs.gameCode.GDactivemonstercounterObjects4.length = 0;
gdjs.gameCode.GDtunnel_9595wallObjects1.length = 0;
gdjs.gameCode.GDtunnel_9595wallObjects2.length = 0;
gdjs.gameCode.GDtunnel_9595wallObjects3.length = 0;
gdjs.gameCode.GDtunnel_9595wallObjects4.length = 0;
gdjs.gameCode.GDplank_9595groundObjects1.length = 0;
gdjs.gameCode.GDplank_9595groundObjects2.length = 0;
gdjs.gameCode.GDplank_9595groundObjects3.length = 0;
gdjs.gameCode.GDplank_9595groundObjects4.length = 0;
gdjs.gameCode.GDcrt_9595nothingnessObjects1.length = 0;
gdjs.gameCode.GDcrt_9595nothingnessObjects2.length = 0;
gdjs.gameCode.GDcrt_9595nothingnessObjects3.length = 0;
gdjs.gameCode.GDcrt_9595nothingnessObjects4.length = 0;
gdjs.gameCode.GDsparksObjects1.length = 0;
gdjs.gameCode.GDsparksObjects2.length = 0;
gdjs.gameCode.GDsparksObjects3.length = 0;
gdjs.gameCode.GDsparksObjects4.length = 0;

gdjs.gameCode.eventsList13(runtimeScene);
gdjs.gameCode.GDbotObjects1.length = 0;
gdjs.gameCode.GDbotObjects2.length = 0;
gdjs.gameCode.GDbotObjects3.length = 0;
gdjs.gameCode.GDbotObjects4.length = 0;
gdjs.gameCode.GDbot_9595healthObjects1.length = 0;
gdjs.gameCode.GDbot_9595healthObjects2.length = 0;
gdjs.gameCode.GDbot_9595healthObjects3.length = 0;
gdjs.gameCode.GDbot_9595healthObjects4.length = 0;
gdjs.gameCode.GDyandere_9595sisObjects1.length = 0;
gdjs.gameCode.GDyandere_9595sisObjects2.length = 0;
gdjs.gameCode.GDyandere_9595sisObjects3.length = 0;
gdjs.gameCode.GDyandere_9595sisObjects4.length = 0;
gdjs.gameCode.GDtutorialObjects1.length = 0;
gdjs.gameCode.GDtutorialObjects2.length = 0;
gdjs.gameCode.GDtutorialObjects3.length = 0;
gdjs.gameCode.GDtutorialObjects4.length = 0;
gdjs.gameCode.GDceiling_9595armObjects1.length = 0;
gdjs.gameCode.GDceiling_9595armObjects2.length = 0;
gdjs.gameCode.GDceiling_9595armObjects3.length = 0;
gdjs.gameCode.GDceiling_9595armObjects4.length = 0;
gdjs.gameCode.GDdirtexpulsionObjects1.length = 0;
gdjs.gameCode.GDdirtexpulsionObjects2.length = 0;
gdjs.gameCode.GDdirtexpulsionObjects3.length = 0;
gdjs.gameCode.GDdirtexpulsionObjects4.length = 0;
gdjs.gameCode.GDactivemonstercounterObjects1.length = 0;
gdjs.gameCode.GDactivemonstercounterObjects2.length = 0;
gdjs.gameCode.GDactivemonstercounterObjects3.length = 0;
gdjs.gameCode.GDactivemonstercounterObjects4.length = 0;
gdjs.gameCode.GDtunnel_9595wallObjects1.length = 0;
gdjs.gameCode.GDtunnel_9595wallObjects2.length = 0;
gdjs.gameCode.GDtunnel_9595wallObjects3.length = 0;
gdjs.gameCode.GDtunnel_9595wallObjects4.length = 0;
gdjs.gameCode.GDplank_9595groundObjects1.length = 0;
gdjs.gameCode.GDplank_9595groundObjects2.length = 0;
gdjs.gameCode.GDplank_9595groundObjects3.length = 0;
gdjs.gameCode.GDplank_9595groundObjects4.length = 0;
gdjs.gameCode.GDcrt_9595nothingnessObjects1.length = 0;
gdjs.gameCode.GDcrt_9595nothingnessObjects2.length = 0;
gdjs.gameCode.GDcrt_9595nothingnessObjects3.length = 0;
gdjs.gameCode.GDcrt_9595nothingnessObjects4.length = 0;
gdjs.gameCode.GDsparksObjects1.length = 0;
gdjs.gameCode.GDsparksObjects2.length = 0;
gdjs.gameCode.GDsparksObjects3.length = 0;
gdjs.gameCode.GDsparksObjects4.length = 0;


return;

}

gdjs['gameCode'] = gdjs.gameCode;
