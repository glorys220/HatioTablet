Ext.define('Hatiopia.view.blog.ImageGallery', {
	extend: 'Ext.Container',
    xtype: 'imageGallery',
    requires: [
        'Ext.Img',
    ],
    
    config:{
        cls: 'galleria',
        listeners:{
            painted: 'onPainted',
        },
        
        items:[
            {
                xtype: 'image',
                which: 'galleria_image',
        height: Ext.os.is.Phone ? '10em' : '30em',
            },
            {
                xtype:'panel',
                layout: 'hbox',
                style: 'border: 1px solid #D0D0D0;margin-top:5px',
                
                items: [
                    {
                        xtype:'button',
                        which: 'nav_left',
                        nav_direction: 1,
                        cls: 'galleria-image-nav-left',
                        style: 'border:0',
                        pressedCls: '',
                    },
                    {
                        //give it an xtype of list for the list component
                        xtype: 'list',
                        which: 'thumnail_list',
                        flex: 1,
                        padding: '0 0 0 0',
                        scrollable: {
                            direction: 'horizontal',
                            directionLock: true
                        },
                        selectedCls : 'gallery-image-selected',
                        pressedCls: '',
                        inline: {
                            wrap: false
                        },
                        //set the itemtpl to show the fields for the store
                        /*itemTpl: '<img src="{photo}" style="display: block; width: 40px; height: 40px; top: 0px; left: 0px; opacity: 0.6;">',*/
                        itemTpl: '<img src="{photo}">',
                    },
                    {
                        xtype:'button',
                        which: 'nav_right',
                        nav_direction: 2,
                        cls: 'galleria-image-nav-right',
                        pressedCls: '',
                        style: 'border:0',
                    }
                ]
            }
        ],
        
        store: null
    },
    
    galleria_image: null,
    thumnail_list: null,
    nav_left: null,
    nav_right: null,
    current_image_index: 0,
    
    initialize: function () {
        // Initialize parent.
        this.callParent(arguments);
        
        this.galleria_image = this.down('image[which=galleria_image]');
        this.thumnail_list = this.down('list[which=thumnail_list]');
        
        this.nav_left = this.down('button[which=nav_left]');
        this.nav_right = this.down('button[which=nav_right]');
        
        this.thumnail_list.on('itemtap', this.onChangeImage, this);
        this.nav_left.on('tap', this.onNavLeft, this);
        this.nav_right.on('tap', this.onNavRight, this);
    },
    
    onNavLeft: function(btn, e, eOpts){
        this.current_image_index--;
        if(this.current_image_index < 0)
            this.current_image_index = this.getStore().data.length-1;
            
        this.moveSelection(btn,e,eOpts);
    },
    
    onNavRight: function(btn, e, eOpts){
        this.current_image_index++;
        if(this.current_image_index > this.getStore().data.length-1)
            this.current_image_index = 0;
            
        this.moveSelection(btn,e,eOpts);
    },
    
    moveSelection: function(btn, e, eOpts) {
        var buttonRight = this.nav_right.element;
        var buttonLeft = this.nav_left.element;
        
        var currentImageItem = this.thumnail_list.getInnerItems()[0].element.dom.childNodes[this.current_image_index];
        var scrollPosition = this.thumnail_list.getScrollable().getScroller().position;
        var currentImageItemStartX = currentImageItem.offsetLeft-currentImageItem.offsetTop;
        var currentImageItemEndX = currentImageItemStartX+currentImageItem.offsetTop+currentImageItem.offsetWidth;
        
        var offsetLeftX_Left = buttonLeft.dom.offsetLeft+buttonLeft.dom.offsetWidth;
        var offsetLeftX_Right = buttonRight.dom.offsetLeft-buttonRight.dom.offsetWidth;
            
        if( currentImageItemEndX-scrollPosition.x > offsetLeftX_Right ){
            this.thumnail_list.getScrollable().getScroller().scrollTo((currentImageItemEndX-offsetLeftX_Right), scrollPosition.y, true);
        }
        else if(scrollPosition.x > currentImageItemStartX){
            this.thumnail_list.getScrollable().getScroller().scrollTo(scrollPosition.x-(scrollPosition.x - currentImageItemStartX),scrollPosition.y,true);
        }
        else if(scrollPosition.x > currentImageItemStartX){
            this.thumnail_list.getScrollable().getScroller().scrollTo(0,scrollPosition.y,true);
        }
        
        
        this.thumnail_list.select(this.current_image_index);
        this.galleria_image.setSrc(this.getStore().data[this.current_image_index].photo);
    },
    
    onChangeImage: function( view, index, target, record, e, eOpts ) {
        this.current_image_index = index;
        this.galleria_image.setSrc(record.data.photo);
    },
    
    onPainted: function( cmp, eOpts ){
        if(this.getStore() && this.thumnail_list && this.galleria_image){
            this.thumnail_list.setStore(this.getStore());
            
            if(this.getStore().data.length > 0){
                this.thumnail_list.select(0);
                this.galleria_image.setSrc(this.getStore().data[0].photo);
            }
        }
    }
});