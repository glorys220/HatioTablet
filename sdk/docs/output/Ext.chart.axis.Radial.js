Ext.data.JsonP.Ext_chart_axis_Radial({"html_meta":{},"mixins":[],"code_type":"ext_define","inheritable":false,"uses":[],"html":"<div><pre class=\"hierarchy\"><h4>Hierarchy</h4><div class='subclass first-child'>Ext.Base<div class='subclass '><a href='#!/api/Ext.chart.axis.Abstract' rel='Ext.chart.axis.Abstract' class='docClass'>Ext.chart.axis.Abstract</a><div class='subclass '><strong>Ext.chart.axis.Radial</strong></div></div></div><h4>Files</h4><div class='dependency'><a href='source/Radial.html#Ext-chart-axis-Radial' target='_blank'>Radial.js</a></div></pre><div class='doc-contents'><p>Radial Axis is the axis to be used with a Radar Series. The Radial axis\nis a circular display of numerical data by steps, with the number of circles\nequivalent to the defined number of <code>steps</code>. Given the maximum data value,\nthe axis will compute step values depending on the number of defined <code>steps</code>.</p>\n\n<p>A possible configuration for this axis would look like:</p>\n\n<pre><code> axes: [{\n     steps: 5,\n     type: 'Radial',\n     position: 'radial',\n     label: {\n         display: 'none'\n     }\n }]\n</code></pre>\n</div><div class='members'><div class='members-section'><h3 class='members-title icon-cfg'>Config options</h3><div class='subsection'><div class='definedBy'>Defined By</div><h4 class='members-subtitle'>Required Config options</h3><div id='cfg-steps' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.chart.axis.Radial'>Ext.chart.axis.Radial</span><br/><a href='source/Radial.html#Ext-chart-axis-Radial-cfg-steps' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.chart.axis.Radial-cfg-steps' class='name not-expandable'>steps</a><span> : Number</span><strong class='required signature'>required</strong></div><div class='description'><div class='short'><p>the number of steps to add to the radial axis.</p>\n</div><div class='long'><p>the number of steps to add to the radial axis.</p>\n</div></div></div></div><div class='subsection'><div class='definedBy'>Defined By</div><h4 class='members-subtitle'>Optional Config options</h3><div id='cfg-fields' class='member first-child inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.chart.axis.Abstract' rel='Ext.chart.axis.Abstract' class='defined-in docClass'>Ext.chart.axis.Abstract</a><br/><a href='source/Abstract2.html#Ext-chart-axis-Abstract-cfg-fields' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.chart.axis.Abstract-cfg-fields' class='name expandable'>fields</a><span> : Array</span></div><div class='description'><div class='short'>An array containing the names of the record fields which should be mapped along the axis. ...</div><div class='long'><p>An array containing the names of the record fields which should be mapped along the axis.</p>\n<p>Defaults to: <code>[]</code></p></div></div></div><div id='cfg-grid' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.chart.axis.Abstract' rel='Ext.chart.axis.Abstract' class='defined-in docClass'>Ext.chart.axis.Abstract</a><br/><a href='source/Abstract2.html#Ext-chart-axis-Abstract-cfg-grid' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.chart.axis.Abstract-cfg-grid' class='name expandable'>grid</a><span> : Object</span></div><div class='description'><div class='short'>The grid configuration object for the Axis style. ...</div><div class='long'><p>The grid configuration object for the Axis style. Can contain <code>stroke</code> or <code>fill</code> attributes.\nAlso may contain an <code>odd</code> or <code>even</code> property in which you only style things on odd or even rows.\nFor example:</p>\n\n<pre><code>              grid {\n                odd: {\n                  stroke: '#555';\n                }\n                even: {\n                  stroke: '#ccc';\n                }\n              }\n</code></pre>\n<p>Defaults to: <code>null</code></p></div></div></div><div id='cfg-label' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.chart.axis.Abstract' rel='Ext.chart.axis.Abstract' class='defined-in docClass'>Ext.chart.axis.Abstract</a><br/><a href='source/Abstract2.html#Ext-chart-axis-Abstract-cfg-label' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.chart.axis.Abstract-cfg-label' class='name expandable'>label</a><span> : Object</span></div><div class='description'><div class='short'>The label configuration object for the Axis. ...</div><div class='long'><p>The label configuration object for the Axis. This object may include style attributes\nlike <code>spacing</code>, <code>padding</code>, <code>font</code>, and a <code>renderer</code> function that receives a string or number and\nreturns a new string with the modified values.</p>\n<p>Defaults to: <code>null</code></p></div></div></div><div id='cfg-labelTitle' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.chart.axis.Abstract' rel='Ext.chart.axis.Abstract' class='defined-in docClass'>Ext.chart.axis.Abstract</a><br/><a href='source/Abstract2.html#Ext-chart-axis-Abstract-cfg-labelTitle' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.chart.axis.Abstract-cfg-labelTitle' class='name expandable'>labelTitle</a><span> : String</span></div><div class='description'><div class='short'>The title for the axis. ...</div><div class='long'><p>The title for the axis.</p>\n<p>Defaults to: <code>null</code></p></div></div></div><div id='cfg-length' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.chart.axis.Abstract' rel='Ext.chart.axis.Abstract' class='defined-in docClass'>Ext.chart.axis.Abstract</a><br/><a href='source/Abstract2.html#Ext-chart-axis-Abstract-cfg-length' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.chart.axis.Abstract-cfg-length' class='name expandable'>length</a><span> : Number</span></div><div class='description'><div class='short'>Offset axis position. ...</div><div class='long'><p>Offset axis position. Default's 0.</p>\n<p>Defaults to: <code>0</code></p></div></div></div><div id='cfg-maximum' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.chart.axis.Radial'>Ext.chart.axis.Radial</span><br/><a href='source/Radial.html#Ext-chart-axis-Radial-cfg-maximum' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.chart.axis.Radial-cfg-maximum' class='name expandable'>maximum</a><span> : Number</span></div><div class='description'><div class='short'>(optional) the maximum value to be displayed in the axis. ...</div><div class='long'><p>(optional) the maximum value to be displayed in the axis.</p>\n<p>Defaults to: <code>false</code></p></div></div></div><div id='cfg-position' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.chart.axis.Abstract' rel='Ext.chart.axis.Abstract' class='defined-in docClass'>Ext.chart.axis.Abstract</a><br/><a href='source/Abstract2.html#Ext-chart-axis-Abstract-cfg-position' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.chart.axis.Abstract-cfg-position' class='name expandable'>position</a><span> : String</span></div><div class='description'><div class='short'>Where to set the axis. ...</div><div class='long'><p>Where to set the axis. Available options are <code>left</code>, <code>bottom</code>, <code>right</code>, <code>top</code>. Default's <code>bottom</code>.</p>\n<p>Defaults to: <code>&quot;bottom&quot;</code></p></div></div></div><div id='cfg-rotation' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.chart.axis.Radial'>Ext.chart.axis.Radial</span><br/><a href='source/Radial.html#Ext-chart-axis-Radial-cfg-rotation' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.chart.axis.Radial-cfg-rotation' class='name expandable'>rotation</a><span> : Number</span></div><div class='description'><div class='short'>The angle in degrees at which the first pie slice should start. ...</div><div class='long'><p>The angle in degrees at which the first pie slice should start.</p>\n<p>Defaults to: <code>0</code></p></div></div></div><div id='cfg-width' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.chart.axis.Abstract' rel='Ext.chart.axis.Abstract' class='defined-in docClass'>Ext.chart.axis.Abstract</a><br/><a href='source/Abstract2.html#Ext-chart-axis-Abstract-cfg-width' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.chart.axis.Abstract-cfg-width' class='name expandable'>width</a><span> : Number</span></div><div class='description'><div class='short'>Offset axis width. ...</div><div class='long'><p>Offset axis width. Default's 0.</p>\n<p>Defaults to: <code>0</code></p></div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-drawAxis' class='member first-child inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.chart.axis.Abstract' rel='Ext.chart.axis.Abstract' class='defined-in docClass'>Ext.chart.axis.Abstract</a><br/><a href='source/Abstract2.html#Ext-chart-axis-Abstract-method-drawAxis' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.chart.axis.Abstract-method-drawAxis' class='name expandable'>drawAxis</a>( <span class='pre'></span> )</div><div class='description'><div class='short'>Draws/Updates the axis into the canvas. ...</div><div class='long'><p>Draws/Updates the axis into the canvas.</p>\n</div></div></div><div id='method-getSurface' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.chart.axis.Abstract' rel='Ext.chart.axis.Abstract' class='defined-in docClass'>Ext.chart.axis.Abstract</a><br/><a href='source/Abstract2.html#Ext-chart-axis-Abstract-method-getSurface' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.chart.axis.Abstract-method-getSurface' class='name expandable'>getSurface</a>( <span class='pre'></span> ) : <a href=\"#!/api/Ext.draw.Surface\" rel=\"Ext.draw.Surface\" class=\"docClass\">Ext.draw.Surface</a></div><div class='description'><div class='short'>Get the Ext.draw.Surface instance for this axis. ...</div><div class='long'><p>Get the <a href=\"#!/api/Ext.draw.Surface\" rel=\"Ext.draw.Surface\" class=\"docClass\">Ext.draw.Surface</a> instance for this axis.</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Ext.draw.Surface\" rel=\"Ext.draw.Surface\" class=\"docClass\">Ext.draw.Surface</a></span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-hideLabels' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.chart.axis.Abstract' rel='Ext.chart.axis.Abstract' class='defined-in docClass'>Ext.chart.axis.Abstract</a><br/><a href='source/Abstract2.html#Ext-chart-axis-Abstract-method-hideLabels' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.chart.axis.Abstract-method-hideLabels' class='name expandable'>hideLabels</a>( <span class='pre'></span> )</div><div class='description'><div class='short'>Hides all axis labels. ...</div><div class='long'><p>Hides all axis labels.</p>\n</div></div></div><div id='method-renderFrame' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.chart.axis.Abstract' rel='Ext.chart.axis.Abstract' class='defined-in docClass'>Ext.chart.axis.Abstract</a><br/><a href='source/Abstract2.html#Ext-chart-axis-Abstract-method-renderFrame' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.chart.axis.Abstract-method-renderFrame' class='name expandable'>renderFrame</a>( <span class='pre'></span> )</div><div class='description'><div class='short'>Invokes renderFrame on this axis's surface(s) ...</div><div class='long'><p>Invokes renderFrame on this axis's surface(s)</p>\n</div></div></div><div id='method-reset' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.chart.axis.Abstract' rel='Ext.chart.axis.Abstract' class='defined-in docClass'>Ext.chart.axis.Abstract</a><br/><a href='source/Abstract2.html#Ext-chart-axis-Abstract-method-reset' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.chart.axis.Abstract-method-reset' class='name expandable'>reset</a>( <span class='pre'></span> )<strong class='private signature'>private</strong></div><div class='description'><div class='short'>Reset the axis to its original state, before any user interaction. ...</div><div class='long'><p>Reset the axis to its original state, before any user interaction.</p>\n</div></div></div><div id='method-updateSurfaceBox' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.chart.axis.Abstract' rel='Ext.chart.axis.Abstract' class='defined-in docClass'>Ext.chart.axis.Abstract</a><br/><a href='source/Abstract2.html#Ext-chart-axis-Abstract-method-updateSurfaceBox' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.chart.axis.Abstract-method-updateSurfaceBox' class='name expandable'>updateSurfaceBox</a>( <span class='pre'></span> )<strong class='private signature'>private</strong></div><div class='description'><div class='short'>update the position/size of the axis surface. ...</div><div class='long'><p>update the position/size of the axis surface. By default we set it to the\nfull chart size; subclasses can change this for custom clipping size.</p>\n</div></div></div></div></div></div></div>","subclasses":[],"component":false,"meta":{},"mixedInto":[],"aliases":{},"superclasses":["Ext.Base","Ext.chart.axis.Abstract"],"parentMixins":[],"inheritdoc":null,"members":{"property":[],"css_var":[],"event":[],"css_mixin":[],"method":[{"meta":{},"owner":"Ext.chart.axis.Abstract","tagname":"method","name":"drawAxis","id":"method-drawAxis"},{"meta":{},"owner":"Ext.chart.axis.Abstract","tagname":"method","name":"getSurface","id":"method-getSurface"},{"meta":{},"owner":"Ext.chart.axis.Abstract","tagname":"method","name":"hideLabels","id":"method-hideLabels"},{"meta":{},"owner":"Ext.chart.axis.Abstract","tagname":"method","name":"renderFrame","id":"method-renderFrame"},{"meta":{"private":true},"owner":"Ext.chart.axis.Abstract","tagname":"method","name":"reset","id":"method-reset"},{"meta":{"private":true},"owner":"Ext.chart.axis.Abstract","tagname":"method","name":"updateSurfaceBox","id":"method-updateSurfaceBox"}],"cfg":[{"meta":{},"owner":"Ext.chart.axis.Abstract","tagname":"cfg","name":"fields","id":"cfg-fields"},{"meta":{},"owner":"Ext.chart.axis.Abstract","tagname":"cfg","name":"grid","id":"cfg-grid"},{"meta":{},"owner":"Ext.chart.axis.Abstract","tagname":"cfg","name":"label","id":"cfg-label"},{"meta":{},"owner":"Ext.chart.axis.Abstract","tagname":"cfg","name":"labelTitle","id":"cfg-labelTitle"},{"meta":{},"owner":"Ext.chart.axis.Abstract","tagname":"cfg","name":"length","id":"cfg-length"},{"meta":{},"owner":"Ext.chart.axis.Radial","tagname":"cfg","name":"maximum","id":"cfg-maximum"},{"meta":{},"owner":"Ext.chart.axis.Abstract","tagname":"cfg","name":"position","id":"cfg-position"},{"meta":{},"owner":"Ext.chart.axis.Radial","tagname":"cfg","name":"rotation","id":"cfg-rotation"},{"meta":{"required":true},"owner":"Ext.chart.axis.Radial","tagname":"cfg","name":"steps","id":"cfg-steps"},{"meta":{},"owner":"Ext.chart.axis.Abstract","tagname":"cfg","name":"width","id":"cfg-width"}]},"tagname":"class","extends":"Ext.chart.axis.Abstract","name":"Ext.chart.axis.Radial","alternateClassNames":[],"requires":[],"files":[{"href":"Radial.html#Ext-chart-axis-Radial","filename":"Radial.js"}],"singleton":false,"id":"class-Ext.chart.axis.Radial","statics":{"property":[],"event":[],"css_var":[],"css_mixin":[],"method":[],"cfg":[]}});