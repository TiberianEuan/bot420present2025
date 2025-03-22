gdjs.settingsCode = {};
gdjs.settingsCode.localVariables = [];
gdjs.settingsCode.GDsettings_9595headerObjects1= [];
gdjs.settingsCode.GDsettings_9595headerObjects2= [];
gdjs.settingsCode.GDsettings_9595headerObjects3= [];
gdjs.settingsCode.GDmusicsliderObjects1= [];
gdjs.settingsCode.GDmusicsliderObjects2= [];
gdjs.settingsCode.GDmusicsliderObjects3= [];
gdjs.settingsCode.GDmusic_9595headerObjects1= [];
gdjs.settingsCode.GDmusic_9595headerObjects2= [];
gdjs.settingsCode.GDmusic_9595headerObjects3= [];
gdjs.settingsCode.GDmastersliderObjects1= [];
gdjs.settingsCode.GDmastersliderObjects2= [];
gdjs.settingsCode.GDmastersliderObjects3= [];
gdjs.settingsCode.GDmaster_9595headerObjects1= [];
gdjs.settingsCode.GDmaster_9595headerObjects2= [];
gdjs.settingsCode.GDmaster_9595headerObjects3= [];
gdjs.settingsCode.GDgobackObjects1= [];
gdjs.settingsCode.GDgobackObjects2= [];
gdjs.settingsCode.GDgobackObjects3= [];
gdjs.settingsCode.GDchangelogObjects1= [];
gdjs.settingsCode.GDchangelogObjects2= [];
gdjs.settingsCode.GDchangelogObjects3= [];
gdjs.settingsCode.GDtunnel_9595wallObjects1= [];
gdjs.settingsCode.GDtunnel_9595wallObjects2= [];
gdjs.settingsCode.GDtunnel_9595wallObjects3= [];
gdjs.settingsCode.GDplank_9595groundObjects1= [];
gdjs.settingsCode.GDplank_9595groundObjects2= [];
gdjs.settingsCode.GDplank_9595groundObjects3= [];
gdjs.settingsCode.GDcrt_9595nothingnessObjects1= [];
gdjs.settingsCode.GDcrt_9595nothingnessObjects2= [];
gdjs.settingsCode.GDcrt_9595nothingnessObjects3= [];
gdjs.settingsCode.GDsparksObjects1= [];
gdjs.settingsCode.GDsparksObjects2= [];
gdjs.settingsCode.GDsparksObjects3= [];


gdjs.settingsCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("musicslider"), gdjs.settingsCode.GDmusicsliderObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.settingsCode.GDmusicsliderObjects2.length;i<l;++i) {
    if ( gdjs.settingsCode.GDmusicsliderObjects2[i].Value((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) != runtimeScene.getGame().getVariables().getFromIndex(1).getAsNumber() ) {
        isConditionTrue_0 = true;
        gdjs.settingsCode.GDmusicsliderObjects2[k] = gdjs.settingsCode.GDmusicsliderObjects2[i];
        ++k;
    }
}
gdjs.settingsCode.GDmusicsliderObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.settingsCode.GDmusicsliderObjects2 */
{runtimeScene.getGame().getVariables().getFromIndex(1).setNumber((( gdjs.settingsCode.GDmusicsliderObjects2.length === 0 ) ? 0 :gdjs.settingsCode.GDmusicsliderObjects2[0].Value((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined))));
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("masterslider"), gdjs.settingsCode.GDmastersliderObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.settingsCode.GDmastersliderObjects1.length;i<l;++i) {
    if ( gdjs.settingsCode.GDmastersliderObjects1[i].Value((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) != runtimeScene.getGame().getVariables().getFromIndex(2).getAsNumber() ) {
        isConditionTrue_0 = true;
        gdjs.settingsCode.GDmastersliderObjects1[k] = gdjs.settingsCode.GDmastersliderObjects1[i];
        ++k;
    }
}
gdjs.settingsCode.GDmastersliderObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.settingsCode.GDmastersliderObjects1 */
{runtimeScene.getGame().getVariables().getFromIndex(2).setNumber((( gdjs.settingsCode.GDmastersliderObjects1.length === 0 ) ? 0 :gdjs.settingsCode.GDmastersliderObjects1[0].Value((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined))));
}{gdjs.evtTools.sound.setGlobalVolume(runtimeScene, runtimeScene.getGame().getVariables().getFromIndex(2).getAsNumber());
}}

}


};gdjs.settingsCode.eventsList1 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("master_header"), gdjs.settingsCode.GDmaster_9595headerObjects1);
gdjs.copyArray(runtimeScene.getObjects("masterslider"), gdjs.settingsCode.GDmastersliderObjects1);
gdjs.copyArray(runtimeScene.getObjects("music_header"), gdjs.settingsCode.GDmusic_9595headerObjects1);
gdjs.copyArray(runtimeScene.getObjects("musicslider"), gdjs.settingsCode.GDmusicsliderObjects1);
gdjs.copyArray(runtimeScene.getObjects("settings_header"), gdjs.settingsCode.GDsettings_9595headerObjects1);
gdjs.copyArray(runtimeScene.getObjects("tunnel_wall"), gdjs.settingsCode.GDtunnel_9595wallObjects1);
{for(var i = 0, len = gdjs.settingsCode.GDtunnel_9595wallObjects1.length ;i < len;++i) {
    gdjs.settingsCode.GDtunnel_9595wallObjects1[i].activateBehavior("HorizontalTiledSpriteParallax", false);
}
}{for(var i = 0, len = gdjs.settingsCode.GDsettings_9595headerObjects1.length ;i < len;++i) {
    gdjs.settingsCode.GDsettings_9595headerObjects1[i].getBehavior("Tween").addObjectPositionXTween2("settingshi", 128, "easeOutSine", 1, false);
}
}{for(var i = 0, len = gdjs.settingsCode.GDmusic_9595headerObjects1.length ;i < len;++i) {
    gdjs.settingsCode.GDmusic_9595headerObjects1[i].getBehavior("Tween").addObjectPositionXTween2("musichi", 128, "easeOutSine", 1, false);
}
}{for(var i = 0, len = gdjs.settingsCode.GDmusicsliderObjects1.length ;i < len;++i) {
    gdjs.settingsCode.GDmusicsliderObjects1[i].getBehavior("Tween").addObjectPositionXTween2("musichi", 384, "easeOutSine", 1, false);
}
}{for(var i = 0, len = gdjs.settingsCode.GDmastersliderObjects1.length ;i < len;++i) {
    gdjs.settingsCode.GDmastersliderObjects1[i].getBehavior("Tween").addObjectPositionXTween2("musichi", 384, "easeOutSine", 1, false);
}
}{for(var i = 0, len = gdjs.settingsCode.GDmaster_9595headerObjects1.length ;i < len;++i) {
    gdjs.settingsCode.GDmaster_9595headerObjects1[i].getBehavior("Tween").addObjectPositionXTween2("musichi", 128, "easeOutSine", 1, false);
}
}{for(var i = 0, len = gdjs.settingsCode.GDmastersliderObjects1.length ;i < len;++i) {
    gdjs.settingsCode.GDmastersliderObjects1[i].SetValue(runtimeScene.getGame().getVariables().getFromIndex(2).getAsNumber(), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.settingsCode.GDmusicsliderObjects1.length ;i < len;++i) {
    gdjs.settingsCode.GDmusicsliderObjects1[i].SetValue(runtimeScene.getGame().getVariables().getFromIndex(1).getAsNumber(), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{gdjs.evtTools.sound.setGlobalVolume(runtimeScene, runtimeScene.getGame().getVariables().getFromIndex(2).getAsNumber());
}}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("tunnel_wall"), gdjs.settingsCode.GDtunnel_9595wallObjects1);
{for(var i = 0, len = gdjs.settingsCode.GDtunnel_9595wallObjects1.length ;i < len;++i) {
    gdjs.settingsCode.GDtunnel_9595wallObjects1[i].setXOffset(gdjs.settingsCode.GDtunnel_9595wallObjects1[i].getXOffset() + (1));
}
}
{ //Subevents
gdjs.settingsCode.eventsList0(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("goback"), gdjs.settingsCode.GDgobackObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.settingsCode.GDgobackObjects1.length;i<l;++i) {
    if ( gdjs.settingsCode.GDgobackObjects1[i].getBehavior("ButtonFSM").IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.settingsCode.GDgobackObjects1[k] = gdjs.settingsCode.GDgobackObjects1[i];
        ++k;
    }
}
gdjs.settingsCode.GDgobackObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.popScene(runtimeScene);
}}

}


};

gdjs.settingsCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.settingsCode.GDsettings_9595headerObjects1.length = 0;
gdjs.settingsCode.GDsettings_9595headerObjects2.length = 0;
gdjs.settingsCode.GDsettings_9595headerObjects3.length = 0;
gdjs.settingsCode.GDmusicsliderObjects1.length = 0;
gdjs.settingsCode.GDmusicsliderObjects2.length = 0;
gdjs.settingsCode.GDmusicsliderObjects3.length = 0;
gdjs.settingsCode.GDmusic_9595headerObjects1.length = 0;
gdjs.settingsCode.GDmusic_9595headerObjects2.length = 0;
gdjs.settingsCode.GDmusic_9595headerObjects3.length = 0;
gdjs.settingsCode.GDmastersliderObjects1.length = 0;
gdjs.settingsCode.GDmastersliderObjects2.length = 0;
gdjs.settingsCode.GDmastersliderObjects3.length = 0;
gdjs.settingsCode.GDmaster_9595headerObjects1.length = 0;
gdjs.settingsCode.GDmaster_9595headerObjects2.length = 0;
gdjs.settingsCode.GDmaster_9595headerObjects3.length = 0;
gdjs.settingsCode.GDgobackObjects1.length = 0;
gdjs.settingsCode.GDgobackObjects2.length = 0;
gdjs.settingsCode.GDgobackObjects3.length = 0;
gdjs.settingsCode.GDchangelogObjects1.length = 0;
gdjs.settingsCode.GDchangelogObjects2.length = 0;
gdjs.settingsCode.GDchangelogObjects3.length = 0;
gdjs.settingsCode.GDtunnel_9595wallObjects1.length = 0;
gdjs.settingsCode.GDtunnel_9595wallObjects2.length = 0;
gdjs.settingsCode.GDtunnel_9595wallObjects3.length = 0;
gdjs.settingsCode.GDplank_9595groundObjects1.length = 0;
gdjs.settingsCode.GDplank_9595groundObjects2.length = 0;
gdjs.settingsCode.GDplank_9595groundObjects3.length = 0;
gdjs.settingsCode.GDcrt_9595nothingnessObjects1.length = 0;
gdjs.settingsCode.GDcrt_9595nothingnessObjects2.length = 0;
gdjs.settingsCode.GDcrt_9595nothingnessObjects3.length = 0;
gdjs.settingsCode.GDsparksObjects1.length = 0;
gdjs.settingsCode.GDsparksObjects2.length = 0;
gdjs.settingsCode.GDsparksObjects3.length = 0;

gdjs.settingsCode.eventsList1(runtimeScene);
gdjs.settingsCode.GDsettings_9595headerObjects1.length = 0;
gdjs.settingsCode.GDsettings_9595headerObjects2.length = 0;
gdjs.settingsCode.GDsettings_9595headerObjects3.length = 0;
gdjs.settingsCode.GDmusicsliderObjects1.length = 0;
gdjs.settingsCode.GDmusicsliderObjects2.length = 0;
gdjs.settingsCode.GDmusicsliderObjects3.length = 0;
gdjs.settingsCode.GDmusic_9595headerObjects1.length = 0;
gdjs.settingsCode.GDmusic_9595headerObjects2.length = 0;
gdjs.settingsCode.GDmusic_9595headerObjects3.length = 0;
gdjs.settingsCode.GDmastersliderObjects1.length = 0;
gdjs.settingsCode.GDmastersliderObjects2.length = 0;
gdjs.settingsCode.GDmastersliderObjects3.length = 0;
gdjs.settingsCode.GDmaster_9595headerObjects1.length = 0;
gdjs.settingsCode.GDmaster_9595headerObjects2.length = 0;
gdjs.settingsCode.GDmaster_9595headerObjects3.length = 0;
gdjs.settingsCode.GDgobackObjects1.length = 0;
gdjs.settingsCode.GDgobackObjects2.length = 0;
gdjs.settingsCode.GDgobackObjects3.length = 0;
gdjs.settingsCode.GDchangelogObjects1.length = 0;
gdjs.settingsCode.GDchangelogObjects2.length = 0;
gdjs.settingsCode.GDchangelogObjects3.length = 0;
gdjs.settingsCode.GDtunnel_9595wallObjects1.length = 0;
gdjs.settingsCode.GDtunnel_9595wallObjects2.length = 0;
gdjs.settingsCode.GDtunnel_9595wallObjects3.length = 0;
gdjs.settingsCode.GDplank_9595groundObjects1.length = 0;
gdjs.settingsCode.GDplank_9595groundObjects2.length = 0;
gdjs.settingsCode.GDplank_9595groundObjects3.length = 0;
gdjs.settingsCode.GDcrt_9595nothingnessObjects1.length = 0;
gdjs.settingsCode.GDcrt_9595nothingnessObjects2.length = 0;
gdjs.settingsCode.GDcrt_9595nothingnessObjects3.length = 0;
gdjs.settingsCode.GDsparksObjects1.length = 0;
gdjs.settingsCode.GDsparksObjects2.length = 0;
gdjs.settingsCode.GDsparksObjects3.length = 0;


return;

}

gdjs['settingsCode'] = gdjs.settingsCode;
