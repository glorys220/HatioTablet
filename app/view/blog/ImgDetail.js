Ext.define('Hatiopia.view.blog.ImgDetail', {
    extend: 'Ext.Panel',
    xtype: 'imgdetail',

    config: {
        styleHtmlContent: true,
        scrollable: 'vertical',
		showAnimation : 'fadeIn',
		hideAnimation : 'fadeOut',
        tpl: [
            '<img src="{img}">'
        ]
    }
});