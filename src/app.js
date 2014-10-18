var HelloWorldLayer = cc.Layer.extend({
    sprite:null,
    ctor:function () {
        //////////////////////////////
        // 1. super init first
        this._super();

        /////////////////////////////
        // 2. add a menu item with "X" image, which is clicked to quit the program
        //    you may modify it.
        // ask the window size
        var size = cc.winSize;

        var sprite = new cc.Sprite.create(res.CloseNormal_png);
        sprite.setAnchorPoint(cc.p(0.5, 0.5));
        sprite.setPosition(cc.p(size.width / 2, size.height / 2));
        //this.addChild(sprite, 0);

        var checkBox = new ccui.CheckBox();
        checkBox.loadTextures(res.CheckBoxNormal_png, res.CheckBoxNormalClicked_png, res.CheckBoxActive_png);
        checkBox.x = size.width / 2;
        checkBox.y = size.height / 2;
        checkBox.addEventListener(this.selectedStateEvent, this);
        this.addChild(checkBox);

        return true;
    },

    selectedStateEvent: function(sender, type)
    {
        switch (type)
        {
            case ccui.CheckBox.EVENT_UNSELECTED:
                cc.log("Not selected");

                break;

            case ccui.CheckBox.EVENT_SELECTED:
                cc.log("Selected");

                break;
        }
    }
});

var HelloWorldScene = cc.Scene.extend({
    onEnter:function () {
        this._super();
        var layer = new HelloWorldLayer();
        this.addChild(layer);
    }
});

