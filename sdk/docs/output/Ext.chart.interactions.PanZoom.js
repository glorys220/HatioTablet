Ext.data.JsonP.Ext_chart_interactions_PanZoom({"html_meta":{"author":null,"docauthor":null},"mixins":["Ext.chart.interactions.DelayedSync"],"code_type":"ext_define","inheritable":false,"uses":[],"html":"<div><pre class=\"hierarchy\"><h4>Hierarchy</h4><div class='subclass first-child'>Ext.Base<div class='subclass '><a href='#!/api/Ext.chart.interactions.Abstract' rel='Ext.chart.interactions.Abstract' class='docClass'>Ext.chart.interactions.Abstract</a><div class='subclass '><strong>Ext.chart.interactions.PanZoom</strong></div></div></div><h4>Mixins</h4><div class='dependency'><a href='#!/api/Ext.chart.interactions.DelayedSync' rel='Ext.chart.interactions.DelayedSync' class='docClass'>Ext.chart.interactions.DelayedSync</a></div><h4>Inherited mixins</h4><div class='dependency'>Ext.mixin.Identifiable</div><div class='dependency'>Ext.mixin.Observable</div><h4>Files</h4><div class='dependency'><a href='source/PanZoom.html#Ext-chart-interactions-PanZoom' target='_blank'>PanZoom.js</a></div></pre><div class='doc-contents'><p>The PanZoom interaction allows the user to navigate the data for one or more chart\naxes by panning and/or zooming. Navigation can be limited to particular axes. Zooming is\nperformed by pinching on the chart or axis area; panning is performed by single-touch dragging.</p>\n\n<p>For devices which do not support multiple-touch events, zooming can not be done via pinch\ngestures; in this case the interaction will allow the user to perform both zooming and\npanning using the same single-touch drag gesture. Tapping the chart will switch between\nthe two modes, briefly displaying a graphical indicator\nshowing whether it is in zoom or pan mode.</p>\n\n<p>You can attach this interaction to a chart by including an entry in the chart's\n<a href=\"#!/api/Ext.chart.Chart-cfg-interactions\" rel=\"Ext.chart.Chart-cfg-interactions\" class=\"docClass\">interactions</a> config with the <code>panzoom</code> type:</p>\n\n<pre><code>new <a href=\"#!/api/Ext.chart.Chart\" rel=\"Ext.chart.Chart\" class=\"docClass\">Ext.chart.Chart</a>({\n    renderTo: Ext.getBody(),\n    width: 800,\n    height: 600,\n    store: store1,\n    axes: [ ...some axes options... ],\n    series: [ ...some series options... ],\n    interactions: [{\n        type: 'panzoom',\n        axes: {\n            left: {\n                maxZoom: 5,\n                startZoom: 2\n            },\n            bottom: {\n                maxZoom: 2\n            }\n        }\n    }]\n});\n</code></pre>\n\n<p>The configuration object for the <code>panzoom</code> interaction type should specify which axes\nwill be made navigable via the <code>axes</code> config. See the <a href=\"#!/api/Ext.chart.interactions.PanZoom-cfg-axes\" rel=\"Ext.chart.interactions.PanZoom-cfg-axes\" class=\"docClass\">axes</a> config documentation\nfor details on the allowed formats. If the <code>axes</code> config is not specified, it will default\nto making all axes navigable with the default axis options.</p>\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-cfg'>Config options</h3><div class='subsection'><div id='cfg-axes' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.chart.interactions.PanZoom'>Ext.chart.interactions.PanZoom</span><br/><a href='source/PanZoom.html#Ext-chart-interactions-PanZoom-cfg-axes' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.chart.interactions.PanZoom-cfg-axes' class='name expandable'>axes</a><span> : Object/Array</span></div><div class='description'><div class='short'>Specifies which axes should be made navigable. ...</div><div class='long'><p>Specifies which axes should be made navigable. The config value can take the following formats:</p>\n\n<ul>\n<li><p>An Object whose keys correspond to the <a href=\"#!/api/Ext.chart.axis.Axis-cfg-position\" rel=\"Ext.chart.axis.Axis-cfg-position\" class=\"docClass\">position</a> of each\naxis that should be made navigable. Each key's value can either be an Object with further\nconfiguration options for each axis or simply <code>true</code> for a default set of options.</p>\n\n<pre><code>{\n    type: 'panzoom',\n    axes: {\n        left: {\n            maxZoom: 5,\n            allowPan: false\n        },\n        bottom: true\n    }\n}\n</code></pre>\n\n<p>If using the full Object form, the following options can be specified for each axis:</p>\n\n<ul>\n<li>minZoom (Number) A minimum zoom level for the axis. Defaults to <code>1</code> which is its natural size.</li>\n<li>maxZoom (Number) A maximum zoom level for the axis. Defaults to <code>10</code>.</li>\n<li>startZoom (Number) A starting zoom level for the axis. Defaults to <code>1</code>.</li>\n<li>allowZoom (Boolean) Whether zooming is allowed for the axis. Defaults to <code>true</code>.</li>\n<li>allowPan (Boolean) Whether panning is allowed for the axis. Defaults to <code>true</code>.</li>\n<li>startPan (Boolean) A starting panning offset for the axis. Defaults to <code>0</code>.</li>\n</ul>\n</li>\n<li><p>An Array of strings, each one corresponding to the <a href=\"#!/api/Ext.chart.axis.Axis-cfg-position\" rel=\"Ext.chart.axis.Axis-cfg-position\" class=\"docClass\">position</a>\nof an axis that should be made navigable. The default options will be used for each named axis.</p>\n\n<pre><code>{\n    type: 'panzoom',\n    axes: ['left', 'bottom']\n}\n</code></pre></li>\n</ul>\n\n\n<p>If the <code>axes</code> config is not specified, it will default to making all axes navigable with the\ndefault axis options.</p>\n<p>Defaults to: <code>true</code></p></div></div></div><div id='cfg-chart' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.chart.interactions.Abstract' rel='Ext.chart.interactions.Abstract' class='defined-in docClass'>Ext.chart.interactions.Abstract</a><br/><a href='source/Abstract3.html#Ext-chart-interactions-Abstract-cfg-chart' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.chart.interactions.Abstract-cfg-chart' class='name expandable'>chart</a><span> : <a href=\"#!/api/Ext.chart.Chart\" rel=\"Ext.chart.Chart\" class=\"docClass\">Ext.chart.Chart</a></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<p>Defaults to: <code>false</code></p></div></div></div><div id='cfg-gesture' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.chart.interactions.Abstract' rel='Ext.chart.interactions.Abstract' class='defined-in docClass'>Ext.chart.interactions.Abstract</a><br/><a href='source/Abstract3.html#Ext-chart-interactions-Abstract-cfg-gesture' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.chart.interactions.Abstract-cfg-gesture' class='name expandable'>gesture</a><span> : String</span></div><div class='description'><div class='short'>Specifies which gesture type should be used for starting the interaction. ...</div><div class='long'><p>Specifies which gesture type should be used for starting the interaction.</p>\n<p>Defaults to: <code>&quot;tap&quot;</code></p></div></div></div><div id='cfg-overflowArrowOptions' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.chart.interactions.PanZoom'>Ext.chart.interactions.PanZoom</span><br/><a href='source/PanZoom.html#Ext-chart-interactions-PanZoom-cfg-overflowArrowOptions' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.chart.interactions.PanZoom-cfg-overflowArrowOptions' class='name expandable'>overflowArrowOptions</a><span> : Object</span></div><div class='description'><div class='short'>A set of optional overrides for the overflow arrow sprites' options. ...</div><div class='long'><p>A set of optional overrides for the overflow arrow sprites' options. Only relevant when\n<a href=\"#!/api/Ext.chart.interactions.PanZoom-cfg-showOverflowArrows\" rel=\"Ext.chart.interactions.PanZoom-cfg-showOverflowArrows\" class=\"docClass\">showOverflowArrows</a> is <code>true</code>.</p>\n</div></div></div><div id='cfg-showOverflowArrows' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.chart.interactions.PanZoom'>Ext.chart.interactions.PanZoom</span><br/><a href='source/PanZoom.html#Ext-chart-interactions-PanZoom-cfg-showOverflowArrows' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.chart.interactions.PanZoom-cfg-showOverflowArrows' class='name expandable'>showOverflowArrows</a><span> : Boolean</span></div><div class='description'><div class='short'>If true, arrows will be conditionally shown at either end of each axis to indicate that the\naxis is overflowing and c...</div><div class='long'><p>If <code>true</code>, arrows will be conditionally shown at either end of each axis to indicate that the\naxis is overflowing and can therefore be panned in that direction. Set this to <code>false</code> to\nprevent the arrows from being displayed.</p>\n<p>Defaults to: <code>true</code></p></div></div></div><div id='cfg-syncDelay' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.chart.interactions.DelayedSync' rel='Ext.chart.interactions.DelayedSync' class='defined-in docClass'>Ext.chart.interactions.DelayedSync</a><br/><a href='source/DelayedSync.html#Ext-chart-interactions-DelayedSync-cfg-syncDelay' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.chart.interactions.DelayedSync-cfg-syncDelay' class='name expandable'>syncDelay</a><span> : Number</span></div><div class='description'><div class='short'>Specifies a timeout in milliseconds between when the user finishes an interaction\ngesture and when the chart are sync...</div><div class='long'><p>Specifies a timeout in milliseconds between when the user finishes an interaction\ngesture and when the chart are synced and redrawn to match.</p>\n<p>Defaults to: <code>500</code></p></div></div></div><div id='cfg-syncWaitText' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.chart.interactions.DelayedSync' rel='Ext.chart.interactions.DelayedSync' class='defined-in docClass'>Ext.chart.interactions.DelayedSync</a><br/><a href='source/DelayedSync.html#Ext-chart-interactions-DelayedSync-cfg-syncWaitText' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.chart.interactions.DelayedSync-cfg-syncWaitText' class='name expandable'>syncWaitText</a><span> : String</span></div><div class='description'><div class='short'>The text to be displayed while the chart is redrawing itself after the interaction sync. ...</div><div class='long'><p>The text to be displayed while the chart is redrawing itself after the interaction sync.</p>\n<p>Defaults to: <code>&quot;Rendering...&quot;</code></p></div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-addChartListener' class='member first-child inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.chart.interactions.Abstract' rel='Ext.chart.interactions.Abstract' class='defined-in docClass'>Ext.chart.interactions.Abstract</a><br/><a href='source/Abstract3.html#Ext-chart-interactions-Abstract-method-addChartListener' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.chart.interactions.Abstract-method-addChartListener' class='name expandable'>addChartListener</a>( <span class='pre'>Object name, Object fn, Object scope, Object opts</span> )<strong class='protected signature'>protected</strong></div><div class='description'><div class='short'>Add an event listener to this interaction's chart. ...</div><div class='long'><p>Add an event listener to this interaction's chart. All ineteraction event listeners\nshould be attached using this method, since it adds logic for honoring event locks.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>name</span> : Object<div class='sub-desc'>\n</div></li><li><span class='pre'>fn</span> : Object<div class='sub-desc'>\n</div></li><li><span class='pre'>scope</span> : Object<div class='sub-desc'>\n</div></li><li><span class='pre'>opts</span> : Object<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-getItemForEvent' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.chart.interactions.Abstract' rel='Ext.chart.interactions.Abstract' class='defined-in docClass'>Ext.chart.interactions.Abstract</a><br/><a href='source/Abstract3.html#Ext-chart-interactions-Abstract-method-getItemForEvent' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.chart.interactions.Abstract-method-getItemForEvent' class='name expandable'>getItemForEvent</a>( <span class='pre'>Event e</span> ) : Object<strong class='protected signature'>protected</strong></div><div class='description'><div class='short'>Find and return a single series item corresponding to the given event,\nor null if no matching item is found. ...</div><div class='long'><p>Find and return a single series item corresponding to the given event,\nor null if no matching item is found.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>e</span> : Event<div class='sub-desc'>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Object</span><div class='sub-desc'><p>the item object or null if none found.</p>\n</div></li></ul></div></div></div><div id='method-getItemsForEvent' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.chart.interactions.Abstract' rel='Ext.chart.interactions.Abstract' class='defined-in docClass'>Ext.chart.interactions.Abstract</a><br/><a href='source/Abstract3.html#Ext-chart-interactions-Abstract-method-getItemsForEvent' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.chart.interactions.Abstract-method-getItemsForEvent' class='name expandable'>getItemsForEvent</a>( <span class='pre'>Event e</span> ) : Array<strong class='protected signature'>protected</strong></div><div class='description'><div class='short'>Find and return all series items corresponding to the given event. ...</div><div class='long'><p>Find and return all series items corresponding to the given event.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>e</span> : Event<div class='sub-desc'>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Array</span><div class='sub-desc'><p>array of matching item objects</p>\n</div></li></ul></div></div></div><div id='method-initialize' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.chart.interactions.Abstract' rel='Ext.chart.interactions.Abstract' class='defined-in docClass'>Ext.chart.interactions.Abstract</a><br/><a href='source/Abstract3.html#Ext-chart-interactions-Abstract-method-initialize' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.chart.interactions.Abstract-method-initialize' class='name expandable'>initialize</a>( <span class='pre'></span> )<strong class='protected signature'>protected</strong></div><div class='description'><div class='short'>A method to be implemented by subclasses where all event attachment should occur. ...</div><div class='long'><p>A method to be implemented by subclasses where all event attachment should occur.</p>\n</div></div></div><div id='method-onGesture' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.chart.interactions.Abstract' rel='Ext.chart.interactions.Abstract' class='defined-in docClass'>Ext.chart.interactions.Abstract</a><br/><a href='source/Abstract3.html#Ext-chart-interactions-Abstract-method-onGesture' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.chart.interactions.Abstract-method-onGesture' class='name expandable'>onGesture</a>( <span class='pre'></span> )<strong class='protected signature'>protected</strong></div><div class='description'><div class='short'>Placeholder method. ...</div><div class='long'><p>Placeholder method.</p>\n</div></div></div></div></div></div></div>","subclasses":[],"component":false,"meta":{"author":["Jason Johnston <jason@sencha.com>"],"docauthor":["Jason Johnston <jason@sencha.com>"]},"mixedInto":[],"aliases":{},"superclasses":["Ext.Base","Ext.chart.interactions.Abstract"],"parentMixins":["Ext.mixin.Identifiable","Ext.mixin.Observable"],"inheritdoc":null,"members":{"property":[],"css_var":[],"event":[],"css_mixin":[],"method":[{"meta":{"protected":true},"owner":"Ext.chart.interactions.Abstract","tagname":"method","name":"addChartListener","id":"method-addChartListener"},{"meta":{"protected":true},"owner":"Ext.chart.interactions.Abstract","tagname":"method","name":"getItemForEvent","id":"method-getItemForEvent"},{"meta":{"protected":true},"owner":"Ext.chart.interactions.Abstract","tagname":"method","name":"getItemsForEvent","id":"method-getItemsForEvent"},{"meta":{"protected":true},"owner":"Ext.chart.interactions.Abstract","tagname":"method","name":"initialize","id":"method-initialize"},{"meta":{"protected":true},"owner":"Ext.chart.interactions.Abstract","tagname":"method","name":"onGesture","id":"method-onGesture"}],"cfg":[{"meta":{},"owner":"Ext.chart.interactions.PanZoom","tagname":"cfg","name":"axes","id":"cfg-axes"},{"meta":{},"owner":"Ext.chart.interactions.Abstract","tagname":"cfg","name":"chart","id":"cfg-chart"},{"meta":{},"owner":"Ext.chart.interactions.Abstract","tagname":"cfg","name":"gesture","id":"cfg-gesture"},{"meta":{},"owner":"Ext.chart.interactions.PanZoom","tagname":"cfg","name":"overflowArrowOptions","id":"cfg-overflowArrowOptions"},{"meta":{},"owner":"Ext.chart.interactions.PanZoom","tagname":"cfg","name":"showOverflowArrows","id":"cfg-showOverflowArrows"},{"meta":{},"owner":"Ext.chart.interactions.DelayedSync","tagname":"cfg","name":"syncDelay","id":"cfg-syncDelay"},{"meta":{},"owner":"Ext.chart.interactions.DelayedSync","tagname":"cfg","name":"syncWaitText","id":"cfg-syncWaitText"}]},"tagname":"class","extends":"Ext.chart.interactions.Abstract","name":"Ext.chart.interactions.PanZoom","alternateClassNames":[],"requires":[],"files":[{"href":"PanZoom.html#Ext-chart-interactions-PanZoom","filename":"PanZoom.js"}],"singleton":false,"id":"class-Ext.chart.interactions.PanZoom","statics":{"property":[],"event":[],"css_var":[],"css_mixin":[],"method":[],"cfg":[]}});