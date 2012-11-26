Ext.data.JsonP.Ext_chart_interactions_DelayedSync({"html_meta":{"author":null,"docauthor":null},"mixins":[],"code_type":"ext_define","inheritable":false,"uses":[],"html":"<div><pre class=\"hierarchy\"><h4>Hierarchy</h4><div class='subclass first-child'>Ext.Base<div class='subclass '><strong>Ext.chart.interactions.DelayedSync</strong></div></div><h4>Mixed into</h4><div class='dependency'><a href='#!/api/Ext.chart.interactions.PanZoom' rel='Ext.chart.interactions.PanZoom' class='docClass'>Ext.chart.interactions.PanZoom</a></div><div class='dependency'><a href='#!/api/Ext.chart.interactions.Rotate' rel='Ext.chart.interactions.Rotate' class='docClass'>Ext.chart.interactions.Rotate</a></div><h4>Files</h4><div class='dependency'><a href='source/DelayedSync.html#Ext-chart-interactions-DelayedSync' target='_blank'>DelayedSync.js</a></div></pre><div class='doc-contents'><p>This is a mixin for chart interactions which gives them basic support for synchronizing\nthe chart to the user's interaction after a configurable <a href=\"#!/api/Ext.chart.interactions.DelayedSync-cfg-syncDelay\" rel=\"Ext.chart.interactions.DelayedSync-cfg-syncDelay\" class=\"docClass\">delay</a>. This\nis useful for example in interactions which perform fast CSS3 transformation during the\ninteraction's gesture, but needs to perform a full synchronization to that transformation\nfor full quality after a delay.</p>\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-cfg'>Config options</h3><div class='subsection'><div id='cfg-syncDelay' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.chart.interactions.DelayedSync'>Ext.chart.interactions.DelayedSync</span><br/><a href='source/DelayedSync.html#Ext-chart-interactions-DelayedSync-cfg-syncDelay' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.chart.interactions.DelayedSync-cfg-syncDelay' class='name expandable'>syncDelay</a><span> : Number</span></div><div class='description'><div class='short'>Specifies a timeout in milliseconds between when the user finishes an interaction\ngesture and when the chart are sync...</div><div class='long'><p>Specifies a timeout in milliseconds between when the user finishes an interaction\ngesture and when the chart are synced and redrawn to match.</p>\n<p>Defaults to: <code>500</code></p></div></div></div><div id='cfg-syncWaitText' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.chart.interactions.DelayedSync'>Ext.chart.interactions.DelayedSync</span><br/><a href='source/DelayedSync.html#Ext-chart-interactions-DelayedSync-cfg-syncWaitText' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.chart.interactions.DelayedSync-cfg-syncWaitText' class='name expandable'>syncWaitText</a><span> : String</span></div><div class='description'><div class='short'>The text to be displayed while the chart is redrawing itself after the interaction sync. ...</div><div class='long'><p>The text to be displayed while the chart is redrawing itself after the interaction sync.</p>\n<p>Defaults to: <code>&quot;Rendering...&quot;</code></p></div></div></div></div></div></div></div>","subclasses":[],"component":false,"meta":{"author":["Jason Johnston <jason@sencha.com>"],"docauthor":["Jason Johnston <jason@sencha.com>"]},"mixedInto":["Ext.chart.interactions.PanZoom","Ext.chart.interactions.Rotate"],"aliases":{},"superclasses":["Ext.Base"],"parentMixins":[],"inheritdoc":null,"members":{"property":[],"css_var":[],"event":[],"css_mixin":[],"method":[],"cfg":[{"meta":{},"owner":"Ext.chart.interactions.DelayedSync","tagname":"cfg","name":"syncDelay","id":"cfg-syncDelay"},{"meta":{},"owner":"Ext.chart.interactions.DelayedSync","tagname":"cfg","name":"syncWaitText","id":"cfg-syncWaitText"}]},"tagname":"class","extends":"Ext.Base","name":"Ext.chart.interactions.DelayedSync","alternateClassNames":[],"requires":[],"files":[{"href":"DelayedSync.html#Ext-chart-interactions-DelayedSync","filename":"DelayedSync.js"}],"singleton":false,"id":"class-Ext.chart.interactions.DelayedSync","statics":{"property":[],"event":[],"css_var":[],"css_mixin":[],"method":[],"cfg":[]}});