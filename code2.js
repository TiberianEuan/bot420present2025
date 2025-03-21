gdjs.deadCode = {};
gdjs.deadCode.localVariables = [];
gdjs.deadCode.GDdead_9595botObjects1= [];
gdjs.deadCode.GDdead_9595botObjects2= [];
gdjs.deadCode.GDdead_9595botObjects3= [];
gdjs.deadCode.GDsliceObjects1= [];
gdjs.deadCode.GDsliceObjects2= [];
gdjs.deadCode.GDsliceObjects3= [];
gdjs.deadCode.GDmain_9595menuObjects1= [];
gdjs.deadCode.GDmain_9595menuObjects2= [];
gdjs.deadCode.GDmain_9595menuObjects3= [];
gdjs.deadCode.GDretryObjects1= [];
gdjs.deadCode.GDretryObjects2= [];
gdjs.deadCode.GDretryObjects3= [];
gdjs.deadCode.GDkaboomObjects1= [];
gdjs.deadCode.GDkaboomObjects2= [];
gdjs.deadCode.GDkaboomObjects3= [];
gdjs.deadCode.GDSmokeObjects1= [];
gdjs.deadCode.GDSmokeObjects2= [];
gdjs.deadCode.GDSmokeObjects3= [];
gdjs.deadCode.GDtunnel_9595wallObjects1= [];
gdjs.deadCode.GDtunnel_9595wallObjects2= [];
gdjs.deadCode.GDtunnel_9595wallObjects3= [];
gdjs.deadCode.GDplank_9595groundObjects1= [];
gdjs.deadCode.GDplank_9595groundObjects2= [];
gdjs.deadCode.GDplank_9595groundObjects3= [];
gdjs.deadCode.GDcrt_9595nothingnessObjects1= [];
gdjs.deadCode.GDcrt_9595nothingnessObjects2= [];
gdjs.deadCode.GDcrt_9595nothingnessObjects3= [];
gdjs.deadCode.GDsparksObjects1= [];
gdjs.deadCode.GDsparksObjects2= [];
gdjs.deadCode.GDsparksObjects3= [];


gdjs.deadCode.mapOfGDgdjs_9546deadCode_9546GDkaboomObjects2Objects = Hashtable.newFrom({"kaboom": gdjs.deadCode.GDkaboomObjects2});
gdjs.deadCode.mapOfGDgdjs_9546deadCode_9546GDdead_95959595botObjects2Objects = Hashtable.newFrom({"dead_bot": gdjs.deadCode.GDdead_9595botObjects2});
gdjs.deadCode.mapOfGDgdjs_9546deadCode_9546GDsliceObjects2Objects = Hashtable.newFrom({"slice": gdjs.deadCode.GDsliceObjects2});
gdjs.deadCode.asyncCallback17140388 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.deadCode.localVariables);
{gdjs.evtTools.sound.playSoundOnChannel(runtimeScene, "retry.wav", 4, false, 100, 1);
}gdjs.deadCode.localVariables.length = 0;
}
gdjs.deadCode.eventsList0 = function(runtimeScene, asyncObjectsList) {

{


{
const parentAsyncObjectsList = asyncObjectsList;
{
const asyncObjectsList = gdjs.LongLivedObjectsList.from(parentAsyncObjectsList);
asyncObjectsList.backupLocalVariablesContainers(gdjs.deadCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1), (runtimeScene) => (gdjs.deadCode.asyncCallback17140388(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.deadCode.asyncCallback17132092 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.deadCode.localVariables);
gdjs.copyArray(asyncObjectsList.getObjects("dead_bot"), gdjs.deadCode.GDdead_9595botObjects2);

gdjs.copyArray(runtimeScene.getObjects("main_menu"), gdjs.deadCode.GDmain_9595menuObjects2);
gdjs.copyArray(runtimeScene.getObjects("retry"), gdjs.deadCode.GDretryObjects2);
gdjs.copyArray(runtimeScene.getObjects("slice"), gdjs.deadCode.GDsliceObjects2);
gdjs.deadCode.GDkaboomObjects2.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.deadCode.mapOfGDgdjs_9546deadCode_9546GDkaboomObjects2Objects, (( gdjs.deadCode.GDdead_9595botObjects2.length === 0 ) ? 0 :gdjs.deadCode.GDdead_9595botObjects2[0].getCenterXInScene()), (( gdjs.deadCode.GDdead_9595botObjects2.length === 0 ) ? 0 :gdjs.deadCode.GDdead_9595botObjects2[0].getCenterYInScene()), "");
}{for(var i = 0, len = gdjs.deadCode.GDkaboomObjects2.length ;i < len;++i) {
    gdjs.deadCode.GDkaboomObjects2[i].setCenterPositionInScene(gdjs.evtTools.camera.getCameraX(runtimeScene, "", 0),gdjs.evtTools.camera.getCameraY(runtimeScene, "", 0));
}
}{gdjs.evtTools.sound.playSound(runtimeScene, "assets\\esplode.wav", false, 80, 1);
}{gdjs.evtsExt__ObjectSlicer__SliceObjectIntoPieces.func(runtimeScene, gdjs.deadCode.mapOfGDgdjs_9546deadCode_9546GDdead_95959595botObjects2Objects, gdjs.deadCode.mapOfGDgdjs_9546deadCode_9546GDsliceObjects2Objects, 8, 8, true, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}{for(var i = 0, len = gdjs.deadCode.GDmain_9595menuObjects2.length ;i < len;++i) {
    gdjs.deadCode.GDmain_9595menuObjects2[i].getBehavior("Tween").addObjectPositionYTween2("menubuttonshow", 736, "easeInOutQuad", 4, false);
}
}{for(var i = 0, len = gdjs.deadCode.GDretryObjects2.length ;i < len;++i) {
    gdjs.deadCode.GDretryObjects2[i].getBehavior("Tween").addObjectPositionYTween2("retrybuttonshow", 96, "easeInOutQuad", 4, false);
}
}
{ //Subevents
gdjs.deadCode.eventsList0(runtimeScene, asyncObjectsList);} //End of subevents
gdjs.deadCode.localVariables.length = 0;
}
gdjs.deadCode.eventsList1 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.deadCode.localVariables);
for (const obj of gdjs.deadCode.GDdead_9595botObjects1) asyncObjectsList.addObject("dead_bot", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(8.75), (runtimeScene) => (gdjs.deadCode.asyncCallback17132092(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.deadCode.mapOfGDgdjs_9546deadCode_9546GDsparksObjects1Objects = Hashtable.newFrom({"sparks": gdjs.deadCode.GDsparksObjects1});
gdjs.deadCode.asyncCallback17135836 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.deadCode.localVariables);
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "startup", false);
}gdjs.deadCode.localVariables.length = 0;
}
gdjs.deadCode.eventsList2 = function(runtimeScene, asyncObjectsList) {

{


{
const parentAsyncObjectsList = asyncObjectsList;
{
const asyncObjectsList = gdjs.LongLivedObjectsList.from(parentAsyncObjectsList);
asyncObjectsList.backupLocalVariablesContainers(gdjs.deadCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(2), (runtimeScene) => (gdjs.deadCode.asyncCallback17135836(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.deadCode.asyncCallback17135012 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.deadCode.localVariables);
gdjs.copyArray(asyncObjectsList.getObjects("main_menu"), gdjs.deadCode.GDmain_9595menuObjects2);

{for(var i = 0, len = gdjs.deadCode.GDmain_9595menuObjects2.length ;i < len;++i) {
    gdjs.deadCode.GDmain_9595menuObjects2[i].activateBehavior("ButtonFSM", false);
}
}
{ //Subevents
gdjs.deadCode.eventsList2(runtimeScene, asyncObjectsList);} //End of subevents
gdjs.deadCode.localVariables.length = 0;
}
gdjs.deadCode.eventsList3 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.deadCode.localVariables);
for (const obj of gdjs.deadCode.GDmain_9595menuObjects1) asyncObjectsList.addObject("main_menu", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.25), (runtimeScene) => (gdjs.deadCode.asyncCallback17135012(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.deadCode.asyncCallback17137084 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.deadCode.localVariables);
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "game", false);
}gdjs.deadCode.localVariables.length = 0;
}
gdjs.deadCode.eventsList4 = function(runtimeScene, asyncObjectsList) {

{


{
const parentAsyncObjectsList = asyncObjectsList;
{
const asyncObjectsList = gdjs.LongLivedObjectsList.from(parentAsyncObjectsList);
asyncObjectsList.backupLocalVariablesContainers(gdjs.deadCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(2), (runtimeScene) => (gdjs.deadCode.asyncCallback17137084(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.deadCode.asyncCallback17136772 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.deadCode.localVariables);
gdjs.copyArray(asyncObjectsList.getObjects("retry"), gdjs.deadCode.GDretryObjects2);

{for(var i = 0, len = gdjs.deadCode.GDretryObjects2.length ;i < len;++i) {
    gdjs.deadCode.GDretryObjects2[i].activateBehavior("ButtonFSM", false);
}
}
{ //Subevents
gdjs.deadCode.eventsList4(runtimeScene, asyncObjectsList);} //End of subevents
gdjs.deadCode.localVariables.length = 0;
}
gdjs.deadCode.eventsList5 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.deadCode.localVariables);
for (const obj of gdjs.deadCode.GDretryObjects1) asyncObjectsList.addObject("retry", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.25), (runtimeScene) => (gdjs.deadCode.asyncCallback17136772(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.deadCode.mapOfEmptyGDdead_9595botObjects = Hashtable.newFrom({"dead_bot": []});
gdjs.deadCode.mapOfEmptyGDSmokeObjects = Hashtable.newFrom({"Smoke": []});
gdjs.deadCode.mapOfGDgdjs_9546deadCode_9546GDSmokeObjects1Objects = Hashtable.newFrom({"Smoke": gdjs.deadCode.GDSmokeObjects1});
gdjs.deadCode.eventsList6 = function(runtimeScene) {

{

/* Reuse gdjs.deadCode.GDdead_9595botObjects1 */

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.getSceneInstancesCount((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.deadCode.mapOfEmptyGDSmokeObjects) < ((gdjs.deadCode.GDdead_9595botObjects1.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.deadCode.GDdead_9595botObjects1[0].getVariables()).getFromIndex(0).getAsNumber() / 8;
if (isConditionTrue_0) {
/* Reuse gdjs.deadCode.GDdead_9595botObjects1 */
gdjs.deadCode.GDSmokeObjects1.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.deadCode.mapOfGDgdjs_9546deadCode_9546GDSmokeObjects1Objects, (( gdjs.deadCode.GDdead_9595botObjects1.length === 0 ) ? 0 :gdjs.deadCode.GDdead_9595botObjects1[0].getCenterXInScene()) + gdjs.randomInRange(-(50), 50), (( gdjs.deadCode.GDdead_9595botObjects1.length === 0 ) ? 0 :gdjs.deadCode.GDdead_9595botObjects1[0].getCenterYInScene()) + gdjs.randomInRange(-(50), 50), "");
}{for(var i = 0, len = gdjs.deadCode.GDSmokeObjects1.length ;i < len;++i) {
    gdjs.deadCode.GDSmokeObjects1[i].setAngle(gdjs.randomInRange(0, 359));
}
}}

}


};gdjs.deadCode.eventsList7 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("dead_bot"), gdjs.deadCode.GDdead_9595botObjects1);
{gdjs.evtTools.sound.playSound(runtimeScene, "bot_explodes_and_fucking_dies.wav", false, 100, 1);
}{gdjs.evtTools.sound.preloadSound(runtimeScene, "assets\\esplode.wav");
}{for(var i = 0, len = gdjs.deadCode.GDdead_9595botObjects1.length ;i < len;++i) {
    gdjs.deadCode.GDdead_9595botObjects1[i].getBehavior("Tween").addVariableTween3("botshakesmoreandmore", gdjs.deadCode.GDdead_9595botObjects1[i].getVariables().getFromIndex(0), 80, "linear", 8.75, false);
}
}
{ //Subevents
gdjs.deadCode.eventsList1(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("slice"), gdjs.deadCode.GDsliceObjects1);
{for(var i = 0, len = gdjs.deadCode.GDsliceObjects1.length ;i < len;++i) {
    gdjs.deadCode.GDsliceObjects1[i].getBehavior("BoidsMovement").AvoidPosition(gdjs.evtTools.camera.getCameraX(runtimeScene, "", 0), gdjs.evtTools.camera.getCameraY(runtimeScene, "", 0), 300, 80085, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
if (isConditionTrue_0) {
gdjs.deadCode.GDsparksObjects1.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.deadCode.mapOfGDgdjs_9546deadCode_9546GDsparksObjects1Objects, gdjs.evtTools.input.getCursorX(runtimeScene, "", 0), gdjs.evtTools.input.getCursorY(runtimeScene, "", 0), "");
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("main_menu"), gdjs.deadCode.GDmain_9595menuObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.deadCode.GDmain_9595menuObjects1.length;i<l;++i) {
    if ( gdjs.deadCode.GDmain_9595menuObjects1[i].getBehavior("ButtonFSM").IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.deadCode.GDmain_9595menuObjects1[k] = gdjs.deadCode.GDmain_9595menuObjects1[i];
        ++k;
    }
}
gdjs.deadCode.GDmain_9595menuObjects1.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("retry"), gdjs.deadCode.GDretryObjects1);
{gdjs.evtTools.sound.stopSoundOnChannel(runtimeScene, 4);
}{for(var i = 0, len = gdjs.deadCode.GDretryObjects1.length ;i < len;++i) {
    gdjs.deadCode.GDretryObjects1[i].activateBehavior("ButtonFSM", false);
}
}{gdjs.evtTools.sound.playSound(runtimeScene, "selected_and_timereversing.wav", false, 100, 1);
}
{ //Subevents
gdjs.deadCode.eventsList3(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("retry"), gdjs.deadCode.GDretryObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.deadCode.GDretryObjects1.length;i<l;++i) {
    if ( gdjs.deadCode.GDretryObjects1[i].getBehavior("ButtonFSM").IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.deadCode.GDretryObjects1[k] = gdjs.deadCode.GDretryObjects1[i];
        ++k;
    }
}
gdjs.deadCode.GDretryObjects1.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("main_menu"), gdjs.deadCode.GDmain_9595menuObjects1);
{gdjs.evtTools.sound.stopSoundOnChannel(runtimeScene, 4);
}{for(var i = 0, len = gdjs.deadCode.GDmain_9595menuObjects1.length ;i < len;++i) {
    gdjs.deadCode.GDmain_9595menuObjects1[i].activateBehavior("ButtonFSM", false);
}
}{gdjs.evtTools.sound.playSound(runtimeScene, "selected_and_timereversing.wav", false, 100, 1);
}
{ //Subevents
gdjs.deadCode.eventsList5(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.getSceneInstancesCount((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.deadCode.mapOfEmptyGDdead_9595botObjects) > 0;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("dead_bot"), gdjs.deadCode.GDdead_9595botObjects1);
{for(var i = 0, len = gdjs.deadCode.GDdead_9595botObjects1.length ;i < len;++i) {
    gdjs.deadCode.GDdead_9595botObjects1[i].getBehavior("ShakeObject_PositionAngle").ShakeObject_PositionAngle(0.01, gdjs.deadCode.GDdead_9595botObjects1[i].getVariables().getFromIndex(0).getAsNumber(), gdjs.deadCode.GDdead_9595botObjects1[i].getVariables().getFromIndex(0).getAsNumber(), gdjs.deadCode.GDdead_9595botObjects1[i].getVariables().getFromIndex(0).getAsNumber() / 8, 0.01, false, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}
{ //Subevents
gdjs.deadCode.eventsList6(runtimeScene);} //End of subevents
}

}


};

gdjs.deadCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.deadCode.GDdead_9595botObjects1.length = 0;
gdjs.deadCode.GDdead_9595botObjects2.length = 0;
gdjs.deadCode.GDdead_9595botObjects3.length = 0;
gdjs.deadCode.GDsliceObjects1.length = 0;
gdjs.deadCode.GDsliceObjects2.length = 0;
gdjs.deadCode.GDsliceObjects3.length = 0;
gdjs.deadCode.GDmain_9595menuObjects1.length = 0;
gdjs.deadCode.GDmain_9595menuObjects2.length = 0;
gdjs.deadCode.GDmain_9595menuObjects3.length = 0;
gdjs.deadCode.GDretryObjects1.length = 0;
gdjs.deadCode.GDretryObjects2.length = 0;
gdjs.deadCode.GDretryObjects3.length = 0;
gdjs.deadCode.GDkaboomObjects1.length = 0;
gdjs.deadCode.GDkaboomObjects2.length = 0;
gdjs.deadCode.GDkaboomObjects3.length = 0;
gdjs.deadCode.GDSmokeObjects1.length = 0;
gdjs.deadCode.GDSmokeObjects2.length = 0;
gdjs.deadCode.GDSmokeObjects3.length = 0;
gdjs.deadCode.GDtunnel_9595wallObjects1.length = 0;
gdjs.deadCode.GDtunnel_9595wallObjects2.length = 0;
gdjs.deadCode.GDtunnel_9595wallObjects3.length = 0;
gdjs.deadCode.GDplank_9595groundObjects1.length = 0;
gdjs.deadCode.GDplank_9595groundObjects2.length = 0;
gdjs.deadCode.GDplank_9595groundObjects3.length = 0;
gdjs.deadCode.GDcrt_9595nothingnessObjects1.length = 0;
gdjs.deadCode.GDcrt_9595nothingnessObjects2.length = 0;
gdjs.deadCode.GDcrt_9595nothingnessObjects3.length = 0;
gdjs.deadCode.GDsparksObjects1.length = 0;
gdjs.deadCode.GDsparksObjects2.length = 0;
gdjs.deadCode.GDsparksObjects3.length = 0;

gdjs.deadCode.eventsList7(runtimeScene);
gdjs.deadCode.GDdead_9595botObjects1.length = 0;
gdjs.deadCode.GDdead_9595botObjects2.length = 0;
gdjs.deadCode.GDdead_9595botObjects3.length = 0;
gdjs.deadCode.GDsliceObjects1.length = 0;
gdjs.deadCode.GDsliceObjects2.length = 0;
gdjs.deadCode.GDsliceObjects3.length = 0;
gdjs.deadCode.GDmain_9595menuObjects1.length = 0;
gdjs.deadCode.GDmain_9595menuObjects2.length = 0;
gdjs.deadCode.GDmain_9595menuObjects3.length = 0;
gdjs.deadCode.GDretryObjects1.length = 0;
gdjs.deadCode.GDretryObjects2.length = 0;
gdjs.deadCode.GDretryObjects3.length = 0;
gdjs.deadCode.GDkaboomObjects1.length = 0;
gdjs.deadCode.GDkaboomObjects2.length = 0;
gdjs.deadCode.GDkaboomObjects3.length = 0;
gdjs.deadCode.GDSmokeObjects1.length = 0;
gdjs.deadCode.GDSmokeObjects2.length = 0;
gdjs.deadCode.GDSmokeObjects3.length = 0;
gdjs.deadCode.GDtunnel_9595wallObjects1.length = 0;
gdjs.deadCode.GDtunnel_9595wallObjects2.length = 0;
gdjs.deadCode.GDtunnel_9595wallObjects3.length = 0;
gdjs.deadCode.GDplank_9595groundObjects1.length = 0;
gdjs.deadCode.GDplank_9595groundObjects2.length = 0;
gdjs.deadCode.GDplank_9595groundObjects3.length = 0;
gdjs.deadCode.GDcrt_9595nothingnessObjects1.length = 0;
gdjs.deadCode.GDcrt_9595nothingnessObjects2.length = 0;
gdjs.deadCode.GDcrt_9595nothingnessObjects3.length = 0;
gdjs.deadCode.GDsparksObjects1.length = 0;
gdjs.deadCode.GDsparksObjects2.length = 0;
gdjs.deadCode.GDsparksObjects3.length = 0;


return;

}

gdjs['deadCode'] = gdjs.deadCode;
