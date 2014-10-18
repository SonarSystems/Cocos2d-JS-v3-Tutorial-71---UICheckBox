var folder = "";

if (!cc.sys.isNative)
{
    folder = "res/mediumRes/";
}

var res = {
    HelloWorld_png : folder + "HelloWorld.png",
    CloseNormal_png : folder + "CloseNormal.png",
    CloseSelected_png : folder+ "CloseSelected.png",
    CheckBoxActive_png : folder+ "check_box_active.png",
    CheckBoxActiveClicked_png : folder+ "check_box_active_press.png",
    CheckBoxActiveDisabled_png : folder+ "check_box_active_disable.png",
    CheckBoxNormal_png : folder+ "check_box_normal.png",
    CheckBoxNormalClicked_png : folder+ "check_box_normal_press.png",
    CheckBoxNormalDisabled_png : folder+ "check_box_normal_disable.png"
};

var g_resources = [];
for (var i in res) {
    g_resources.push(res[i]);
}