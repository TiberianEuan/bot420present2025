gdjs.startupCode = {};
gdjs.startupCode.localVariables = [];
gdjs.startupCode.GDGDEVELOPObjects1= [];
gdjs.startupCode.GDGDEVELOPObjects2= [];
gdjs.startupCode.GDGDEVELOPObjects3= [];
gdjs.startupCode.GDGDEVELOPObjects4= [];
gdjs.startupCode.GDGDEVELOPObjects5= [];
gdjs.startupCode.GDGDEVELOPObjects6= [];
gdjs.startupCode.GDGDEVELOPObjects7= [];
gdjs.startupCode.GDplayObjects1= [];
gdjs.startupCode.GDplayObjects2= [];
gdjs.startupCode.GDplayObjects3= [];
gdjs.startupCode.GDplayObjects4= [];
gdjs.startupCode.GDplayObjects5= [];
gdjs.startupCode.GDplayObjects6= [];
gdjs.startupCode.GDplayObjects7= [];
gdjs.startupCode.GDtunnel_9595wallObjects1= [];
gdjs.startupCode.GDtunnel_9595wallObjects2= [];
gdjs.startupCode.GDtunnel_9595wallObjects3= [];
gdjs.startupCode.GDtunnel_9595wallObjects4= [];
gdjs.startupCode.GDtunnel_9595wallObjects5= [];
gdjs.startupCode.GDtunnel_9595wallObjects6= [];
gdjs.startupCode.GDtunnel_9595wallObjects7= [];
gdjs.startupCode.GDplank_9595groundObjects1= [];
gdjs.startupCode.GDplank_9595groundObjects2= [];
gdjs.startupCode.GDplank_9595groundObjects3= [];
gdjs.startupCode.GDplank_9595groundObjects4= [];
gdjs.startupCode.GDplank_9595groundObjects5= [];
gdjs.startupCode.GDplank_9595groundObjects6= [];
gdjs.startupCode.GDplank_9595groundObjects7= [];
gdjs.startupCode.GDcrt_9595nothingnessObjects1= [];
gdjs.startupCode.GDcrt_9595nothingnessObjects2= [];
gdjs.startupCode.GDcrt_9595nothingnessObjects3= [];
gdjs.startupCode.GDcrt_9595nothingnessObjects4= [];
gdjs.startupCode.GDcrt_9595nothingnessObjects5= [];
gdjs.startupCode.GDcrt_9595nothingnessObjects6= [];
gdjs.startupCode.GDcrt_9595nothingnessObjects7= [];
gdjs.startupCode.GDsparksObjects1= [];
gdjs.startupCode.GDsparksObjects2= [];
gdjs.startupCode.GDsparksObjects3= [];
gdjs.startupCode.GDsparksObjects4= [];
gdjs.startupCode.GDsparksObjects5= [];
gdjs.startupCode.GDsparksObjects6= [];
gdjs.startupCode.GDsparksObjects7= [];


gdjs.startupCode.asyncCallback17404188 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.startupCode.localVariables);
gdjs.copyArray(asyncObjectsList.getObjects("GDEVELOP"), gdjs.startupCode.GDGDEVELOPObjects7);

gdjs.copyArray(runtimeScene.getObjects("play"), gdjs.startupCode.GDplayObjects7);
{for(var i = 0, len = gdjs.startupCode.GDGDEVELOPObjects7.length ;i < len;++i) {
    gdjs.startupCode.GDGDEVELOPObjects7[i].getBehavior("Tween").addObjectPositionYTween2("gdevelopgodownoutoftheway", 987, "easeOutQuad", 2, false);
}
}{for(var i = 0, len = gdjs.startupCode.GDGDEVELOPObjects7.length ;i < len;++i) {
    gdjs.startupCode.GDGDEVELOPObjects7[i].getBehavior("Tween").addObjectScaleTween3("gdevelopshrinks", 1, "linear", 2, false, true);
}
}{for(var i = 0, len = gdjs.startupCode.GDplayObjects7.length ;i < len;++i) {
    gdjs.startupCode.GDplayObjects7[i].getBehavior("Tween").addObjectPositionYTween2("playtime", 128, "easeOutQuart", 2, false);
}
}gdjs.startupCode.localVariables.length = 0;
}
gdjs.startupCode.eventsList0 = function(runtimeScene, asyncObjectsList) {

{


{
const parentAsyncObjectsList = asyncObjectsList;
{
const asyncObjectsList = gdjs.LongLivedObjectsList.from(parentAsyncObjectsList);
asyncObjectsList.backupLocalVariablesContainers(gdjs.startupCode.localVariables);
for (const obj of gdjs.startupCode.GDGDEVELOPObjects6) asyncObjectsList.addObject("GDEVELOP", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(3), (runtimeScene) => (gdjs.startupCode.asyncCallback17404188(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.startupCode.asyncCallback17403628 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.startupCode.localVariables);
gdjs.copyArray(asyncObjectsList.getObjects("GDEVELOP"), gdjs.startupCode.GDGDEVELOPObjects6);

{for(var i = 0, len = gdjs.startupCode.GDGDEVELOPObjects6.length ;i < len;++i) {
    gdjs.startupCode.GDGDEVELOPObjects6[i].getBehavior("Effect").setEffectDoubleParameter("glitch", "slices", 0);
}
}
{ //Subevents
gdjs.startupCode.eventsList0(runtimeScene, asyncObjectsList);} //End of subevents
gdjs.startupCode.localVariables.length = 0;
}
gdjs.startupCode.eventsList1 = function(runtimeScene, asyncObjectsList) {

{


{
const parentAsyncObjectsList = asyncObjectsList;
{
const asyncObjectsList = gdjs.LongLivedObjectsList.from(parentAsyncObjectsList);
asyncObjectsList.backupLocalVariablesContainers(gdjs.startupCode.localVariables);
for (const obj of gdjs.startupCode.GDGDEVELOPObjects5) asyncObjectsList.addObject("GDEVELOP", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.5), (runtimeScene) => (gdjs.startupCode.asyncCallback17403628(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.startupCode.asyncCallback17403700 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.startupCode.localVariables);
gdjs.copyArray(asyncObjectsList.getObjects("GDEVELOP"), gdjs.startupCode.GDGDEVELOPObjects5);

{for(var i = 0, len = gdjs.startupCode.GDGDEVELOPObjects5.length ;i < len;++i) {
    gdjs.startupCode.GDGDEVELOPObjects5[i].getBehavior("Effect").setEffectDoubleParameter("glitch", "slices", 2);
}
}
{ //Subevents
gdjs.startupCode.eventsList1(runtimeScene, asyncObjectsList);} //End of subevents
gdjs.startupCode.localVariables.length = 0;
}
gdjs.startupCode.eventsList2 = function(runtimeScene, asyncObjectsList) {

{


{
const parentAsyncObjectsList = asyncObjectsList;
{
const asyncObjectsList = gdjs.LongLivedObjectsList.from(parentAsyncObjectsList);
asyncObjectsList.backupLocalVariablesContainers(gdjs.startupCode.localVariables);
for (const obj of gdjs.startupCode.GDGDEVELOPObjects4) asyncObjectsList.addObject("GDEVELOP", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.5), (runtimeScene) => (gdjs.startupCode.asyncCallback17403700(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.startupCode.asyncCallback17402956 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.startupCode.localVariables);
gdjs.copyArray(asyncObjectsList.getObjects("GDEVELOP"), gdjs.startupCode.GDGDEVELOPObjects4);

{for(var i = 0, len = gdjs.startupCode.GDGDEVELOPObjects4.length ;i < len;++i) {
    gdjs.startupCode.GDGDEVELOPObjects4[i].getBehavior("Effect").setEffectDoubleParameter("glitch", "slices", 15);
}
}
{ //Subevents
gdjs.startupCode.eventsList2(runtimeScene, asyncObjectsList);} //End of subevents
gdjs.startupCode.localVariables.length = 0;
}
gdjs.startupCode.eventsList3 = function(runtimeScene, asyncObjectsList) {

{


{
const parentAsyncObjectsList = asyncObjectsList;
{
const asyncObjectsList = gdjs.LongLivedObjectsList.from(parentAsyncObjectsList);
asyncObjectsList.backupLocalVariablesContainers(gdjs.startupCode.localVariables);
for (const obj of gdjs.startupCode.GDGDEVELOPObjects3) asyncObjectsList.addObject("GDEVELOP", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1), (runtimeScene) => (gdjs.startupCode.asyncCallback17402956(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.startupCode.asyncCallback17402500 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.startupCode.localVariables);
gdjs.copyArray(asyncObjectsList.getObjects("GDEVELOP"), gdjs.startupCode.GDGDEVELOPObjects3);

{for(var i = 0, len = gdjs.startupCode.GDGDEVELOPObjects3.length ;i < len;++i) {
    gdjs.startupCode.GDGDEVELOPObjects3[i].getBehavior("Effect").setEffectDoubleParameter("glitch", "slices", 30);
}
}
{ //Subevents
gdjs.startupCode.eventsList3(runtimeScene, asyncObjectsList);} //End of subevents
gdjs.startupCode.localVariables.length = 0;
}
gdjs.startupCode.eventsList4 = function(runtimeScene, asyncObjectsList) {

{


{
const parentAsyncObjectsList = asyncObjectsList;
{
const asyncObjectsList = gdjs.LongLivedObjectsList.from(parentAsyncObjectsList);
asyncObjectsList.backupLocalVariablesContainers(gdjs.startupCode.localVariables);
for (const obj of gdjs.startupCode.GDGDEVELOPObjects2) asyncObjectsList.addObject("GDEVELOP", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1), (runtimeScene) => (gdjs.startupCode.asyncCallback17402500(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.startupCode.asyncCallback17402196 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.startupCode.localVariables);
gdjs.copyArray(runtimeScene.getObjects("GDEVELOP"), gdjs.startupCode.GDGDEVELOPObjects2);
{gdjs.evtTools.sound.playSound(runtimeScene, "radio_buzz2.ogg", false, 75, 1);
}{for(var i = 0, len = gdjs.startupCode.GDGDEVELOPObjects2.length ;i < len;++i) {
    gdjs.startupCode.GDGDEVELOPObjects2[i].getBehavior("Tween").addObjectPositionXTween2("gdevelopmoveintoframeplease", -(6), "easeInOutQuart", 4, false);
}
}
{ //Subevents
gdjs.startupCode.eventsList4(runtimeScene, asyncObjectsList);} //End of subevents
gdjs.startupCode.localVariables.length = 0;
}
gdjs.startupCode.eventsList5 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.startupCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1), (runtimeScene) => (gdjs.startupCode.asyncCallback17402196(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.startupCode.mapOfGDgdjs_9546startupCode_9546GDsparksObjects1Objects = Hashtable.newFrom({"sparks": gdjs.startupCode.GDsparksObjects1});
gdjs.startupCode.eventsList6 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("tunnel_wall"), gdjs.startupCode.GDtunnel_9595wallObjects1);
{for(var i = 0, len = gdjs.startupCode.GDtunnel_9595wallObjects1.length ;i < len;++i) {
    gdjs.startupCode.GDtunnel_9595wallObjects1[i].setXOffset(gdjs.startupCode.GDtunnel_9595wallObjects1[i].getXOffset() + (4));
}
}{for(var i = 0, len = gdjs.startupCode.GDtunnel_9595wallObjects1.length ;i < len;++i) {
    gdjs.startupCode.GDtunnel_9595wallObjects1[i].activateBehavior("HorizontalTiledSpriteParallax", false);
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {

{ //Subevents
gdjs.startupCode.eventsList5(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
if (isConditionTrue_0) {
gdjs.startupCode.GDsparksObjects1.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.startupCode.mapOfGDgdjs_9546startupCode_9546GDsparksObjects1Objects, gdjs.evtTools.input.getCursorX(runtimeScene, "", 0), gdjs.evtTools.input.getCursorY(runtimeScene, "", 0), "");
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("GDEVELOP"), gdjs.startupCode.GDGDEVELOPObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.startupCode.GDGDEVELOPObjects1.length;i<l;++i) {
    if ( gdjs.startupCode.GDGDEVELOPObjects1[i].getBehavior("ButtonFSM").IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.startupCode.GDGDEVELOPObjects1[k] = gdjs.startupCode.GDGDEVELOPObjects1[i];
        ++k;
    }
}
gdjs.startupCode.GDGDEVELOPObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.window.openURL("https://gdevelop.io", runtimeScene);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("play"), gdjs.startupCode.GDplayObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.startupCode.GDplayObjects1.length;i<l;++i) {
    if ( gdjs.startupCode.GDplayObjects1[i].getBehavior("ButtonFSM").IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.startupCode.GDplayObjects1[k] = gdjs.startupCode.GDplayObjects1[i];
        ++k;
    }
}
gdjs.startupCode.GDplayObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "game", false);
}}

}


};

gdjs.startupCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.startupCode.GDGDEVELOPObjects1.length = 0;
gdjs.startupCode.GDGDEVELOPObjects2.length = 0;
gdjs.startupCode.GDGDEVELOPObjects3.length = 0;
gdjs.startupCode.GDGDEVELOPObjects4.length = 0;
gdjs.startupCode.GDGDEVELOPObjects5.length = 0;
gdjs.startupCode.GDGDEVELOPObjects6.length = 0;
gdjs.startupCode.GDGDEVELOPObjects7.length = 0;
gdjs.startupCode.GDplayObjects1.length = 0;
gdjs.startupCode.GDplayObjects2.length = 0;
gdjs.startupCode.GDplayObjects3.length = 0;
gdjs.startupCode.GDplayObjects4.length = 0;
gdjs.startupCode.GDplayObjects5.length = 0;
gdjs.startupCode.GDplayObjects6.length = 0;
gdjs.startupCode.GDplayObjects7.length = 0;
gdjs.startupCode.GDtunnel_9595wallObjects1.length = 0;
gdjs.startupCode.GDtunnel_9595wallObjects2.length = 0;
gdjs.startupCode.GDtunnel_9595wallObjects3.length = 0;
gdjs.startupCode.GDtunnel_9595wallObjects4.length = 0;
gdjs.startupCode.GDtunnel_9595wallObjects5.length = 0;
gdjs.startupCode.GDtunnel_9595wallObjects6.length = 0;
gdjs.startupCode.GDtunnel_9595wallObjects7.length = 0;
gdjs.startupCode.GDplank_9595groundObjects1.length = 0;
gdjs.startupCode.GDplank_9595groundObjects2.length = 0;
gdjs.startupCode.GDplank_9595groundObjects3.length = 0;
gdjs.startupCode.GDplank_9595groundObjects4.length = 0;
gdjs.startupCode.GDplank_9595groundObjects5.length = 0;
gdjs.startupCode.GDplank_9595groundObjects6.length = 0;
gdjs.startupCode.GDplank_9595groundObjects7.length = 0;
gdjs.startupCode.GDcrt_9595nothingnessObjects1.length = 0;
gdjs.startupCode.GDcrt_9595nothingnessObjects2.length = 0;
gdjs.startupCode.GDcrt_9595nothingnessObjects3.length = 0;
gdjs.startupCode.GDcrt_9595nothingnessObjects4.length = 0;
gdjs.startupCode.GDcrt_9595nothingnessObjects5.length = 0;
gdjs.startupCode.GDcrt_9595nothingnessObjects6.length = 0;
gdjs.startupCode.GDcrt_9595nothingnessObjects7.length = 0;
gdjs.startupCode.GDsparksObjects1.length = 0;
gdjs.startupCode.GDsparksObjects2.length = 0;
gdjs.startupCode.GDsparksObjects3.length = 0;
gdjs.startupCode.GDsparksObjects4.length = 0;
gdjs.startupCode.GDsparksObjects5.length = 0;
gdjs.startupCode.GDsparksObjects6.length = 0;
gdjs.startupCode.GDsparksObjects7.length = 0;

gdjs.startupCode.eventsList6(runtimeScene);
gdjs.startupCode.GDGDEVELOPObjects1.length = 0;
gdjs.startupCode.GDGDEVELOPObjects2.length = 0;
gdjs.startupCode.GDGDEVELOPObjects3.length = 0;
gdjs.startupCode.GDGDEVELOPObjects4.length = 0;
gdjs.startupCode.GDGDEVELOPObjects5.length = 0;
gdjs.startupCode.GDGDEVELOPObjects6.length = 0;
gdjs.startupCode.GDGDEVELOPObjects7.length = 0;
gdjs.startupCode.GDplayObjects1.length = 0;
gdjs.startupCode.GDplayObjects2.length = 0;
gdjs.startupCode.GDplayObjects3.length = 0;
gdjs.startupCode.GDplayObjects4.length = 0;
gdjs.startupCode.GDplayObjects5.length = 0;
gdjs.startupCode.GDplayObjects6.length = 0;
gdjs.startupCode.GDplayObjects7.length = 0;
gdjs.startupCode.GDtunnel_9595wallObjects1.length = 0;
gdjs.startupCode.GDtunnel_9595wallObjects2.length = 0;
gdjs.startupCode.GDtunnel_9595wallObjects3.length = 0;
gdjs.startupCode.GDtunnel_9595wallObjects4.length = 0;
gdjs.startupCode.GDtunnel_9595wallObjects5.length = 0;
gdjs.startupCode.GDtunnel_9595wallObjects6.length = 0;
gdjs.startupCode.GDtunnel_9595wallObjects7.length = 0;
gdjs.startupCode.GDplank_9595groundObjects1.length = 0;
gdjs.startupCode.GDplank_9595groundObjects2.length = 0;
gdjs.startupCode.GDplank_9595groundObjects3.length = 0;
gdjs.startupCode.GDplank_9595groundObjects4.length = 0;
gdjs.startupCode.GDplank_9595groundObjects5.length = 0;
gdjs.startupCode.GDplank_9595groundObjects6.length = 0;
gdjs.startupCode.GDplank_9595groundObjects7.length = 0;
gdjs.startupCode.GDcrt_9595nothingnessObjects1.length = 0;
gdjs.startupCode.GDcrt_9595nothingnessObjects2.length = 0;
gdjs.startupCode.GDcrt_9595nothingnessObjects3.length = 0;
gdjs.startupCode.GDcrt_9595nothingnessObjects4.length = 0;
gdjs.startupCode.GDcrt_9595nothingnessObjects5.length = 0;
gdjs.startupCode.GDcrt_9595nothingnessObjects6.length = 0;
gdjs.startupCode.GDcrt_9595nothingnessObjects7.length = 0;
gdjs.startupCode.GDsparksObjects1.length = 0;
gdjs.startupCode.GDsparksObjects2.length = 0;
gdjs.startupCode.GDsparksObjects3.length = 0;
gdjs.startupCode.GDsparksObjects4.length = 0;
gdjs.startupCode.GDsparksObjects5.length = 0;
gdjs.startupCode.GDsparksObjects6.length = 0;
gdjs.startupCode.GDsparksObjects7.length = 0;


return;

}

gdjs['startupCode'] = gdjs.startupCode;
