(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"Aurora_Landing_HTML5 Canvas_atlas_1", frames: [[0,0,1501,850],[0,852,1501,850]]},
		{name:"Aurora_Landing_HTML5 Canvas_atlas_2", frames: [[0,0,1501,850],[0,852,1501,850]]},
		{name:"Aurora_Landing_HTML5 Canvas_atlas_3", frames: [[0,950,220,61],[222,950,186,61],[0,730,812,108],[0,840,812,108],[0,422,734,152],[0,576,734,152],[0,0,747,420]]}
];


(lib.AnMovieClip = function(){
	this.actionFrames = [];
	this.ignorePause = false;
	this.gotoAndPlay = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.play = function(){
		cjs.MovieClip.prototype.play.call(this);
	}
	this.gotoAndStop = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
	}
	this.stop = function(){
		cjs.MovieClip.prototype.stop.call(this);
	}
}).prototype = p = new cjs.MovieClip();
// symbols:



(lib.CachedBmp_10 = function() {
	this.initialize(ss["Aurora_Landing_HTML5 Canvas_atlas_3"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_9 = function() {
	this.initialize(ss["Aurora_Landing_HTML5 Canvas_atlas_3"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_8 = function() {
	this.initialize(ss["Aurora_Landing_HTML5 Canvas_atlas_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_7 = function() {
	this.initialize(ss["Aurora_Landing_HTML5 Canvas_atlas_1"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_6 = function() {
	this.initialize(ss["Aurora_Landing_HTML5 Canvas_atlas_2"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_5 = function() {
	this.initialize(ss["Aurora_Landing_HTML5 Canvas_atlas_2"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_4 = function() {
	this.initialize(ss["Aurora_Landing_HTML5 Canvas_atlas_3"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_3 = function() {
	this.initialize(ss["Aurora_Landing_HTML5 Canvas_atlas_3"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_2 = function() {
	this.initialize(ss["Aurora_Landing_HTML5 Canvas_atlas_3"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_1 = function() {
	this.initialize(ss["Aurora_Landing_HTML5 Canvas_atlas_3"]);
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.GrungeTexture = function() {
	this.initialize(ss["Aurora_Landing_HTML5 Canvas_atlas_3"]);
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.Personal = function() {
	this.initialize(img.Personal);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,4224,5632);// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop, this.reversed));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.Starbtn = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_2 = function() {
		playSound("selectionwav");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(2).call(this.frame_2).wait(2));

	// button
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#733A21").s().p("AhJCBIjkBDICHjEIiHjDIDkBDICQi9IAGDvIDhBOIjhBPIgGDvg");
	this.shape.setTransform(30.225,31.775);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#733A21").s().p("AheBPIjYhmIDog4IAfjsIB7DMIDrgsIicC0IByDSIjbhcIikCtg");
	this.shape_1.setTransform(25.35,32.325);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#4D2616").s().p("AhJCBIjkBDICHjEIiHjDIDkBDICQi9IAGDvIDhBOIjhBPIgGDvg");
	this.shape_2.setTransform(30.225,31.775);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#00FF00").s().p("AviE2IAAprIfFAAIAAJrg");
	this.shape_3.setTransform(96.525,32.025);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-5.7,0,201.7,63.9);


(lib.场景_1_Slash = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Slash
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#723920").s().p("AjDBAIgCgBIgBgBIgBgBIgGgBIgGgFIAFgBIgGAAIgCgCIAIgCIgJABIAAAAIAIgCIAHAAIgHgDQAAgBAAgBQAAAAgBgBQAAAAABgBQAAAAAAgBQAAgCAEgCIAHgFQgGACAAgCQgBgDAGAAIACABIACAAQABAAAAAAQABAAAAAAQABAAAAAAQAAAAAAAAQAAgBAAAAQAAgBAAAAQAAAAgBAAQAAAAgBAAIgFAAQgHABgBgCIAGgDIADgBIADAAQABgEgGACQgGACAAgCIALgCQgEgBgBgFQgBgFgCgCQgJgGgBgCQgEgFAJgGQACgDAEgBIAKgCIgKgFIASgPIALgFIAcgIICugLIAJAAIAMgBIBlALIA7APQgCABAEAFQADAFgCABQgBABgIgDIgFgCIgGgBIgHABIgGACIgJAGQgGAGgEAJQAAADgHgBIgKgCQABAHgMAHIgJAGQgEAEAAAFIgQgFIgIgBIgIgBIgGABIgQAFQgZADgXAGIgsALIgHgBQAAAAAAABQAAAAAAABQgBAAAAAAQAAABAAAAIgDABIgIgBQgFgBgCACQgBAAAAAAQAAAAAAABQAAAAAAABQAAAAAAABIgdAEIgQgEIAAAEQgCACgDgBIgEgBQgGgCgDABQgBABABAFIg4AHIgEABIgKABIgCAAIgCAAIgBAAIgGgBg");
	this.shape.setTransform(322.265,223.58);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#333333").s().p("AAAAEIAAAAIAAgBIAAgFIAAgBIAAAAIABAAIAAABIAAAFIAAABIgBAAIAAAAg");
	this.shape_1.setTransform(296.4,-30.25);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#723920").s().p("AkyA/IgBAAIgCAAIgCgBIgCgBIgFgBIgDAAIgKgFIABAAIABgCIgDABIgDgCIABgBIABAAIADgBIgBAAIgHABIAAgBIgCAAIAMgBIALgBIAAgBIgJgCQAAAAgBAAQAAgBAAAAQAAAAAAgBQAAAAAAAAIACgCIAHgFIALgDIAAgBIgIAAQgCAAACAAQAAgCAEgBIAGAAIABAAIACAAIADAAQAAAAgBAAQAAgBAAAAQgBAAAAAAQgBgBgBAAIgHAAIgHABQAAAAAAAAQgBAAAAAAQAAgBAAAAQABAAAAgBIADgBIAHgBIAEgCIABAAIAAgBIgEgBIADgBIABgBIAAAAIgCgCQgEgBgDgEIgCgCIABgBIgBgDIAAgDQgFgEAEgCQAAgDAGgEIABgDIABgDIAEgBIAOgDIgCgDIgBgBIAPgHIAPgIQAKgEAHgBIAqgHIEHgLIAPAAIARgBICZALIBYAOIABAAIACADIADAEIAAAAQACAFgFABIgDAAIgKgDIgJgCIAAAAIgJgBIgKABIgJACIgDACQgGACgEADIgBAAIgIAGIgMAJIAAABQAAACgJgBIgGAAIgKgBIgEAGIgRAHIgHADIgHADQgGAEgDAEIgIgCIgcgDIgJgBIgCAAIgIABIgZAFQglADglAGIgyAHIgMACIgCAAIgEABIgLgBQAAABgBABQAAAAgBAAQAAABgBAAQAAAAgBAAIgEABIgGAAIgCAAIgBAAIgDAAQgGgBgEACQgBAAAAAAQgBABgBAAQAAAAAAABQgBAAAAAAIgsAFIgJgCIgCAAIgEgBIgCAAIgHgBIgCAEIgEAAIgEAAIgHgBIgFgBIgCAAIAAABQgEgBgCABQgDABgBAEIhpAJIgDABIgDAAIgBAAIgJgCgAk6AVIADgBIgBABIgCABQAAAAAAAAQgBAAAAAAQABAAAAgBQAAAAAAAAg");
	this.shape_2.setTransform(333.9558,223.605);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#723920").s().p("AmiBAIgBAAIgCgBIgEgBIgCgBIgGgBIgFAAIgOgEIABAAIgCgCIABAAIgFgCIgBgBIAEgBIgIABIAAgBIgDAAIAQgBIAPgBIABAAIgMgCQgBgBgBAAQAAgBAAAAQgBAAABgBQAAAAABAAIADgDIALgEIANgDIAAgBIgLAAIABgBQACgBAFgBIAIAAIABAAIADAAIABAAQgBAAAAgBQgBAAAAAAQgBgBAAAAQgBAAgBAAIgKAAIgJABIAEgCIADgBIAKgBIAGgCIAAAAQABAAAAAAQAAAAAAAAQAAAAgBAAQAAAAgBAAIgCgBIgEgBIAHgBQgBAAAAAAQAAAAAAAAQAAgBAAAAQAAAAAAAAIgBgBIgDgBQgGgCgDgDIgDgDQgBAAAAAAQAAAAAAgBQAAAAABAAQAAAAAAAAIACgEIACgCQgDgEAJgCQACgDAJgEIgCgDIgDgDIAGgBIATgDIAEgEIAAgBIAVgGIAVgHIAWgFIA4gHIFggLIAVAAIAXgBIDNALIB2AOIABAAQAAABAAAAQAAAAABABQAAAAABAAQAAABABAAQAGACgBACIgBAAQABAFgHAAIgFAAIgNgCIgMgCIgaAAIgMADIgEABQgIACgFAEIgBAAQgCADgKACIgSAJIgBABQACACgNAAIgIAAIgOgBQgFADgBACQgKAEgOAEIgKACIgKADQgIAEgFADIgKgBIgngDIgLAAIgDAAIgLAAIghAFQgxADgzAGIhDAIIgRABIgCABIgFABIgPgBQgDACgEAAIgFABIgJAAIgCAAIgBAAIgEAAQgIgBgGACQgEAAgDADIg6AEIgNgCIgCAAIgHgBIgBAAIgKgBIgEAEIgFAAIgHAAIgIgBIgHgBIgDABIABAAQgFAAgEABQgEAAgDAEIiVAKIgDAAIgKgBgAmoAUIAHAAIgIABIgCAAIADgBgAmhAUIAAAAg");
	this.shape_3.setTransform(345.7321,223.6313);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#723920").s().p("AoSA/IgCAAIgCAAIgFgBIgCgBIgJgBIgGAAIgRgFIAAAAIgEgCIAEABIgGgCIgEgBIgBAAIAFgBIgMAAIAUgBIATgBIACgBIgPgCQgFgBAEgCIAFgCIANgEIASgEIgCgBIgOABIADgBQADgCAGAAIALgBIABAAIAEABIACAAIgEgBQgCgBgEAAIgMAAIgLAAIAHgCIAFgBIAMgBIAGgBIABAAIgDgBIgDgBIgEgBIAKAAIgDgCIgBAAQAAgBAAAAQAAAAgBgBQAAAAgBAAQgBgBgBAAQgHgBgFgEIgFgCQAAgBAAAAQAAAAAAAAQAAgBABAAQAAAAABAAIADgDIAGgCQgCgFAOgCQAEgCAKgEIgEgDIgGgDIAHgBIAZgDIAJgEIACgBIAagHIAcgGQAOgEAMgBIBHgGIG5gLIAaAAIFFANIBtAKQAAAAAAAAQgBABABAAQAAAAAAAAQABAAAAAAIAFADQAIACgCACIgBAAQAAAEgKABIgGAAIgRgDIgOgCIgBAAIggABIgPACIgFACQgLACgGAEIgBABQgCACgNADQgNADgMAEIgBABQADADgQAAIgLAAIgRAAQgIADgBADIgfAGIgMACIgNADQgLADgGADIgOgBIgwgCIgNgBIgEAAIgNABIgrAFQg8ADhBAGIhVAHIgVACIgDAAIgGABIgTgBQgFACgFABIgGABIgLgBIgDABIgGAAQgJgBgIACQgGAAgEACIhJAEIgQgCIgDAAIgIgBIgCABIgMgBIgHADIgGABIgIgBIgLAAIgJgBIgDAAIABABIgLAAQgGABgEAEIi7AJIgDAAIgNgBgApCA1IABAAIAAAAgAodAVIADgBIAKgBIgJABIgDABIgBAAgAoQATIAAAAg");
	this.shape_4.setTransform(357.519,223.6813);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#723920").s().p("AqCA/IgCAAIgDgBIgGAAIgDgBIgKgBIgIgBIgVgEIABAAIgIgCIAIAAIgQgDIgBAAIgFAAIAXgCIAXAAIADgBIgSgCQgHgCAFgCIAHgCIARgEIAVgDIgDgBQgQABgBgBIAGgBQADgBAHgBIANAAIACAAIAEABIAGgBIgEAAIgGAAQgCgCgEAAIgPABIgOgBIALgBIAGgBIAOgCIAIgBIABAAIgEAAIgFgBIgGgBIAPgBQgEgBgBgBIgBAAQAAgCgFgBQgJgCgFgDQgFgBgCgCQAAAAgBAAQAAAAAAgBQABAAAAAAQABAAABgBIAFgDIAJgCQgBgFAUgBIASgGIgGgDIgKgDIAIgBIAegEIAPgEIAEgBIAggGIAigGIAfgFIBWgGIIRgKIAgAAIFXAJICzAOQgBAAAAAAQgBAAAAAAQAAAAABAAQABABABAAIAGACQALADgDACIgCAAQgBAEgMAAIgIAAIgUgCIgSgCIgnABIgSACIgGABQgOADgHAFIAAAAQgDADgRACIgeAHIgCAAQAEADgUABIgMAAIgUABQgNADABADIgnAFIgPACIgPADQgNACgJAEIgQgCIg6gCIgQAAIgDAAIgRABIgzAEQhIAEhPAFIhnAIIgZABIgEABIgIABIgWgBQgGACgGAAIgIABIgOAAIgCAAQgBAAAAABIgHAAQgLgBgJABQgIABgFACIhsACIgDgBIgKAAIgCABIgOgBIgJADIgIAAIgKAAIgNgBIgKAAIgEAAIABABIgNAAQgHABgGAEIjiAJIgEAAIgOgBgAqQAUIAEAAIALgBIgHABIgGABIgCgBgAqBATIAAAAg");
	this.shape_5.setTransform(369.3408,223.7188);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#723920").s().p("AryA/IgDAAIgDAAIgHgBIgEAAIgLgCIgJAAIgZgEIgKgDIALAAIgIgBIgKgBIgDgBIACAAIgCAAIgGAAIAbgCIAbAAIAEgBIgUgCQgJgCAGgCIAIgCIAVgEIAYgDIgDgBQgUABAAgBIAHgBQAEgBAJgBIAPAAIACAAIAFABIAGgBIgFAAIgHAAQgEgCgEAAIgRABIgQgBIAOgBIAHgBIARgCIAJgBIABAAIgGgBIgGAAIgIgBIAVgBIgIgCIgBgBQAAgCgGgBQgLgCgGgDIgIgDQgBAAAAAAQAAgBAAAAQABAAABgBQAAAAABAAIAHgCIAMgDQABgFAYgBIAXgGIgJgDIgNgDIAKgBIA4gIIAEgBIAmgGIAogGQATgDASgBIBkgGIJqgKIAmAAIGQAJIDRAOQgBAAAAAAQgBAAAAAAQAAAAABAAQABAAABABIAHADQAPACgFACIgCAAQgCAEgPAAIgJAAIgYgDIgVgCIgBAAIgsACIgVACIgHACQgQADgIAFIgBAAQgDADgUACIglAGIgCAAQAFAEgXABIgPAAIgXABQgQADABADIgtAFIgSACIgTACIgZAFIgUgBIhDgBIgSAAIgEAAIgUAAIg8AFIiwAJIh5AHIgdABIgEABIgKABIgagBQgHACgIAAIgJABIgQAAIgDAAIAAABIgJAAQgMgBgLACIgRACIh9ACIgEgBIgMAAIgCABIgQgBIgMADIgJAAIgLAAIgQgBIgMAAIgEAAIABABIgPABQgJABgIADIkHAJIgEAAIgRgBgAsDAUIAGAAIALgBIgGABIgHABIgEgBgAryATIAAAAg");
	this.shape_6.setTransform(381.1141,223.7313);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#723920").s().p("AtiA/IgDAAIgEAAIgIgBIgEgBIgOgBIgKAAIgcgEIgOgDIgBAAIAQAAIgWgCIgEgBIAGAAIgCAAIgCgBIgIAAIAfgBIAfgBIAFAAIgXgCQgLgCAIgCIAKgDIAYgEIAcgDIgFgBQgXACAAgBIAJgCIAPgBIASAAIABAAIAGAAIAIAAIgGgBIgKAAQgEgBgFAAIgUAAIgSAAIASgCIAIgBIATgBIALgBIACgBIgJAAIgIgBIgHAAIAYgCQgIAAgCgCIgBgBQAAgCgHgBQgNgCgHgDQgHgCgCgBQgBAAAAgBQAAAAAAAAQABgBABAAQAAAAACgBIAIgCIAPgDQACgEAegCIAbgFIgMgDIgQgDIALgBIBDgJIAGgBIArgGIAvgFIApgDIBzgGILDgKIArAAIHKAJIDvANQgEAAAFABIAJADQASADgHACIgCAAQgDADgSAAIgKAAIgbgCIgYgCIgBAAIgzABIgYADIgJACQgSADgJAFIgBABQgDACgYACIgrAFIgDABQAHADgbACIgQABIgbABQgTADABADIg0AFIgVABIgVACIgeAEIgWgBIhNAAIgVAAIgEAAIgXAAIhEAEIjKAJIiKAIIgjABIgEABIgLABIgegBQgIACgKAAIgKABIgSgBIgEABIAAABIgKAAQgOgBgMABQgLABgJACIiPABIgFAAIgNgBIgDACIgTgBIgNACIgKABIgOgBIgSAAIgNgBQgGAAAAABIACABIgRABQgLAAgJADIktAKIgHAAIgRgBgAt1AUIAGgBIAOAAIgGAAIgKABIgEAAgAthATIAAAAg");
	this.shape_7.setTransform(392.913,223.7583);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#723920").s().p("AvSA/IgEAAIgEAAIgJgBIgFAAIgPgBIgLgBIghgEIgQgDIASAAIgagCIgFgBIASAAIgNAAIgCgBIgJAAIAjgBIAjgBIAGAAIgagCQgMgCAJgCIALgDIAbgEIAggDIgFgBQgaACAAgBIAKgCIARgBIAUAAIACAAIAHAAIAIAAIgHgBIgLAAQgFgBgGAAIgWAAIgUAAIAVgCIAJgBIAWgBIAMgBIACgBQABgBgMABIgJgBIgHAAIAbgCQgJAAgCgCQgBAAAAAAQAAAAgBAAQAAAAAAgBQAAAAAAAAQAAgDgIgBQgOgCgJgDQgIgCgDgBQgDgCAHAAIALgDIARgDQAEgEAigCIAfgFIgOgCIgTgDIANgBIBNgKIAHgBIAygGIA0gEIAvgEICBgFIMcgKIAxAAIJLAMIDFAKQgFAAAGABIALADQAUAEgHACIgDAAQgEACgUAAIgMAAIgfgDIgbgBIgBAAIg5ABIgbADIgKACQgVADgJAGIgCABQgDACgcACIgxAEIgDABQAIADgeADIgTABIgeABQgWADACAEIg8ADIgXABIgYACIgjAEIgYgBIhXAAIgXAAIgFAAIgZABIhOAEIjjAJIicAHIgnABIgFABIgMABIgigBQgKACgKAAIgMABIgUgBIgEABQgBAAAAAAQAAAAAAAAQAAABAAAAQAAAAABAAIgMAAIgdABIgXACIiiABIgFAAIgPgBIgDACIgVAAIgQABIgLABIgQgBIgUAAIgPgBQgGAAAAABIACACIgTAAQgMABgMACIlSAKIgJAAIgSgBgAvoAUIAHgBIARAAIgHAAIgMABIgFAAgAvQATIAAAAg");
	this.shape_8.setTransform(404.7273,223.7583);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#723920").s().p("AxDBAIgDAAIgGgBIgKgBIgEAAIgRgBIgNgBIgkgEIgBAAIgVgDIAYAAIgdgBIgHgCIATAAIgZAAIAogCIAlAAIAIgBIgdgCQgNgCAKgCIANgDIAegEIAjgDIgGAAIgdAAQABgBALgBQAHgBANAAIAWAAIACAAIAIAAIAJAAQABgBgKAAIgNAAIgMgBIgYAAQgTABgDgBIAYgCIAKgBIAZgCIANAAIACgBQACgBgPAAIgKAAIgPAAQgLABgJAAIAIgBIAMAAIABAAIAlgCQgKgBgDgBIgCgBQABgDgJgBQgRgDgKgDIgMgDQgDgBAHgBIANgDIAUgEQAFgDAogCIAjgFIgQgCIgYgDIAPgBIBZgKIAIgBIA3gFIA7gFIAzgDIMQgPID0AAIA3AAII9AJIErANQgGAAAHACIANADQAXADgJACIgCAAQgHACgWAAIgNgBIgigCIgegCIgCAAIg/ACIgeAEIgLABQgYAEgKAGIgBABQgEADgfAAIg3AEIgEAAQAKAFgiACIgVABIgiACQgZAEACAEIhDACIgZABIgcABIgmADIgcAAIhfAAIgbAAIgFAAIgcABIhWAEIj+AJIitAHIgrABIgGACIgNAAIglAAIgYABIgkABIgEAAIAAABIgMAAQgRAAgRABIgZACIhrADIhJgCIgGAAIgRgBIgDACIgXAAIgTACIgMgBIgRAAIgXgBIgQAAQgHABAAABIACABIgVAAQgOABgNADIl4AJIgPAAIgQAAg");
	this.shape_9.setTransform(416.5117,223.7625);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#723920").s().p("AyzBAIgEAAIgGgBIgLAAIgFAAIgTgCIgNgBIgogDIgBAAIgWgDIAZgBIghgBIgIgCIAZAAIgeAAIArgCIApAAIAJgBIgggCQgPgCAMgCIAOgDIAigEIAngDIgHAAIghAAQABgBANgBQAIgBAOAAIAYAAIADAAIAIAAIAKAAQACgBgMAAIgPAAIgMgBIgbAAQgVABgEgBIAcgCIALgBIAbgCIAPAAIACgBQACgBgQAAIgMAAIgPAAIAqgCQgMgBgEgBQAAAAgBAAQAAgBgBAAQAAAAAAAAQAAAAAAgBQABgDgKgBQgTgDgKgDIgOgDQgEgBAIgCIAPgDIAXgDQAGgDAugCIAngEIgTgDIgbgCIARgCIBjgKIAJgBIA9gFIBCgEIA4gDINegPIENAAIA9ABILPAKIDxALQgHAAAIACIAOADQAaADgLACIgCAAQgIACgYAAIgPgBIgmgCIghgCIgCAAIhFACIghAEIgMABQgbAFgLAGIgBABQgEADgjAAIg9ADIgEAAQALAFgmADIgXABIglACQgcAEACAEIhJACIgdABIgeAAIgrADIgegBIhpABIgdABIgGAAIgfABIheADIkYAJIi/AIIgvAAIgHACIgOAAIgpAAIgaABIgoABIgFAAQAAAAAAAAQAAAAAAABQAAAAAAAAQAAAAABAAIgOAAIglABIgdACIjFABIgHAAIgTgBIgDACIgZAAIgVACIgOgBIgTAAIgZgBIgSAAQgIABABABIACACIgXAAIgeADImfAJIgQAAIgRAAgAzOAUIAJgBIAOAAIgRABIgGAAg");
	this.shape_10.setTransform(428.326,223.7625);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#723920").s().p("A0nBAIgHAAIgMgBIgFAAIgVgBIgPgBIgsgEIgBAAIgYgDIgDAAIAdgBIgjgBIgIgBIAlgBIgrAAIAvgCIAtAAIAKgBIgjgCQgQgCANgCIAQgDIAlgEIAqgDIgIAAIgjAAQABgBAOgBIAYgBIAbAAIACAAIAKAAIALAAQABgBgMAAIgRAAIgOgBIgeAAQgWABgEgBIAggCIALgBIAegCIAQAAIACgBQACgBgSAAIgNAAIgPAAIAtgCQgOgBgEgCQAAAAgBAAQAAAAgBAAQAAgBAAAAQAAAAAAAAQABgEgLgBQgVgDgLgDIgPgCQgFgCAKgCIAQgDIAagDQAIgDAygCIAsgEIgWgCIgegDIASgBIBugLIALgBIBDgFIBHgEIA9gCIOtgPIEmABIBCAAIMRAKIEHALQgIAAAJACIAQADQAdAEgMACIgDAAQgJABgbAAIgQgBIgpgCIgkgCIgCAAIhMACIglAEIgNACQgdAEgLAHIgCABQgDADgnAAIhEACIgFAAQANAFgpAEIgaAAIgoADQgfAFADAEIhRABIgfAAIghABIgvABIghAAIhzACIggAAIgGAAIgiABIhnADIkxAJIjQAIIg1AAIgHACIgPAAIgtAAIgdABIgrABIgFAAQgBAAAAABQAAAAAAAAQAAAAABAAQAAABAAAAIgPAAIgoAAIggACIiAADIhYgCIgHAAIgUgBIgEADIgcAAIgXABIgPgBIgVAAIgagBIgUAAQgJABAAABIADACIgZAAQgRABgRACInEAJIgkAAgA03ATIAQAAIgZABIAJgBg");
	this.shape_11.setTransform(440.1256,223.775);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#723920").s().p("A2YBBIgGAAIgOgBIgFAAIgXgCIgQgBIgwgDIgBAAIgfgEIAhAAIgngBIgJgCIApgBIgvAAIAzgCIAxAAIALAAIglgCQgTgCAPgDIARgDIAogEIAugDIgIAAIgnAAQACgBAPgBIAbgBIAdAAIACAAIALABIALAAQACgCgOAAIgTAAIgPAAIggAAQgZAAgEgBIAkgCIAMgBIAggCIASAAIACAAQACgCgUAAIgOAAIgXABIgVAAIAJAAIAMAAIAHgBIAxgBQgPgCgFgCQAAAAgBAAQAAAAAAgBQgBAAAAAAQAAAAAAAAQABgEgMgCIgjgFIgRgDQgEgCAKgCIASgCIAegFQAIgCA4gCIAvgEIgYgCIghgCIAUgCIB5gLIAMgBIBIgFIBOgDIBCgCIP8gQIE/ACIBHABINSAKIEdAKQgIAAAJACIARAEQAgAEgNABIgDAAQgKABgegBIgRAAIgtgCIgngCIgCAAIhSACIgoAEIgOADQgfAEgMAHIgDABQgDADgrAAIhKABIgFABQAOAEgtAEIgbACIgsADQgiAFADADIhYABIgiAAIgkAAIgzABIgkAAIh8ADIgiAAIgHAAIgkABIhwADIlLAJIjiAHIg5ABIgHABIgQABIgygBIgfABIgvABIgGAAIABACIgRAAIgrABIgjACIjqAAIgHAAIgXgBIgDADIgfAAIgZABIgQgBIgXAAIgdgBIgVAAQgKABABABIACADIgbAAIglACInqAJIgnABg");
	this.shape_12.setTransform(451.9003,223.75);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#723920").s().p("A4IBBIgIgBIgOAAIgHAAIgYgCIgRgBIgzgDIgCAAIghgEIAkgBIgrAAIgKgCIAZgBIgMAAIgDAAIgQAAIA3gCIA1AAIAMAAIgogDQgUgCAQgDIASgCIAsgEIAygDIgKAAQgqABABgBQABgBARgBIAdgBIAfAAIADAAIALABIANgBQACgBgQAAIgUAAIgRgBIgiABQgbAAgEgCIAngBIANgBIAjgCIATAAIACgBQACgCgWABIgPAAIgmABIgEAAIAagBIA0gCQgQgBgFgCQgBAAgBgBQAAAAgBAAQAAAAAAgBQAAAAAAAAQABgEgNgBIgmgGQgOgBgEgCQgFgCALgCIAVgDIAfgEQALgDA8gBIA0gDIgagCIglgDIAVgCICEgLIANgBIBOgFIBUgDIBIgCIRKgPIFXACIBOABIOUAJIEyALQgJAAAKACIATADQAjAFgPABIgDAAQgLABgggBIgTgBIgwgCIgrgBIgCAAIhZADQgYABgSADIgPABQgiAFgNAIIgCABQgEADgugBIhQABIgGAAQAPAFgwAEIgeACIgvAEQglAFADAEIhfgBIgkAAIgnAAIg3ABIgngBIiGADIglABIgHAAIgnABIh5ADIlkAJIj0AHIg9AAIgIADIgSAAIg1AAIgiAAIgzABIgGAAQAAAAAAABQAAAAAAAAQAAAAAAABQABAAAAAAIgSAAIguABIgmABIj8ABIgIgBIgZAAIgEADIggAAIgcABIgSgBIgYAAIgfgBIgXABQgLAAABACIADACIgdAAIgpACIoPAJIgqABg");
	this.shape_13.setTransform(463.725,223.775);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#723920").s().p("A55BBIgIAAIgPgBIgHAAIgagBIgTgBIg3gEIgBAAIglgEIAoAAIgvgBIgLgCIAZgBIgfAAIA7gBIA5gBIANAAIgrgDQgVgBARgEIAUgCIAvgEIA1gDIgLAAQgtABABgBQACgCASAAIAfgBIAiAAIADAAIAMABIANgBQACgBgRAAIgWgBIgSAAIgkABQgdAAgFgCIArgCIAPgBIAlgBIATAAIADgBQACgCgYABIgQAAIgbAAIAKAAIA5gCQgSgBgGgCQgBAAgBgBQAAAAgBAAQAAAAAAgBQAAAAAAAAQABgFgOgBQgagDgPgDQgPgBgEgCQgGgCANgDIAWgCIAjgEQALgDBCgCIA4gCIgdgCIgogDIAWgBICPgMIAPgBQAtgEAngBIBagCIBMgCISZgPIFwACIBTABIPWAJIFIAKQgKABALACIAVADQAmAFgQACIgEAAIgvgBIgUgBIg0gCIgtgBIgDAAIhfADQgaABgTADIgQACQglAFgOAHIgCACQgEADgygBIhWAAIgGAAQAQAFgzAEIggADIgzAFQgoAEAEAFIhmgCIgoAAIgpgBIg8AAIgqAAIiPAEIgnAAIgIAAIgqABIiBADIl+AJIkGAHIhBAAIgJADIgTAAIg5AAIglAAIg2ABIgGABQAAAAAAAAQgBAAABAAQAAAAAAABQAAAAABAAIgUAAIgxABIgqABIigAEIhugDIgIgBIgaAAIgFADIgiABIgeAAIgUgBIgZgBIgiAAIgZABQgLAAABACIADACIgfAAIgsACIo1AJIgtABg");
	this.shape_14.setTransform(475.5143,223.775);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#723920").s().p("A7pBBIgJAAIgQgBIgIAAIgbgBIgUgBIg7gDIgCAAIgogEIAsgBIgzgBIgMgCIA1gBIg6AAIA/gBIA8gBIAOAAIgugCQgXgCATgEIAVgDIAzgDIA4gDIgLAAQgxABABgBQADgCATgBIAhAAIAlAAIACAAIANABIAPgBQACgCgSAAIgZAAIgSAAIgoABQgeAAgFgCIAugCIAQgBIAngBIAVAAIAEgBQACgCgaAAIgTABIgrABIgNAAIAogBIA8gCQgUgBgGgDQgBAAAAAAQgBAAgBgBQAAAAAAAAQAAAAAAgBQABgFgPgBIgrgFIgVgEQgHgDAOgCIAYgDIAmgDQANgDBHgCIA8gCIgggCIgsgCIAZgCICZgNIAQgBIBagEIBhgCIBRgBITngPIGJADIBZAAIQXAJIFfAKQgLABAMACIAWAEQApAEgSACIgEAAQgNAAgmgBIgVgBIg3gCIgxgCIgCAAIhmAEIgwAEIgSACQgnAFgPAIIgCACQgEADg1gBIhdgBIgHAAQATAGg4AEIgiADIg2AFQgrAFAEAEIhtgCIgqgBIgsAAIhAgBIgtAAIiZAEIgqABIgIAAIgtABIiKACImXAJIkXAIIhHgBIgJADIgUAAIg8AAIgpAAIg5ABIgHABQAAAAgBAAQAAAAABABQAAAAAAAAQABAAAAABIgUAAIg1AAIgtACIirADIh1gDIgJgBIgcAAIgFAEIglAAIggAAIgUgBIgcgBIgkAAIgaABQgMAAAAACIAEADIghAAIgvABIpcAJIgwABg");
	this.shape_15.setTransform(487.3246,223.775);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#723920").s().p("A+aA/IhVgEIgrgEIAygBIg6AAIgNgDIA5gBIg+AAQAsgCBmAAQhWgCAhgGQAdgEBsgFQhBABACgBQAEgDA3AAIApAAQAVABAIgBQACgCgTAAIguAAQhIABgIgCIBDgDQApgCAXABQARgEg7ACQg1ABgHgBIBrgCQgggCABgEQABgFgQgCQg8gGgJgDQgGgDAOgCIBDgHQAUgCCGgDIhRgFIC/gPIBwgFIX0gRIZYAMIF1AKQgTABAsAGQArAFgTABQgLABhGgDQhOgEgjAAIhsAEQguADgYADQguAGgOAKQgEADg5gBIhqgCQAZAHhkAHQhrAIAHAHIihgEQhegDhEAAIjPAGQmHAGoeAOIhLgBIgKADIi9ABIgIABQAAAAAAAAQAAAAAAAAQAAABABAAQAAAAABABIk0AFIh8gDIgKgBIgeAAIgFAEQgiABg9gCQg+gCgiACQgNAAABACIAEADIsQALIgHAAIg5gCg");
	this.shape_16.setTransform(499.1138,223.7792);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#333333").s().p("AACAEIgBAAIgBgDIAAACIAAABIgBAAIgBAAIAAgBIAAgFIAAgBIABAAIABAAIAAAAIADAFIAAABIAAABIgBAAIAAAAg");
	this.shape_17.setTransform(255.3252,-30.2526);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#0066CC").s().p("AgBADIAAgFIADAFg");
	this.shape_18.setTransform(510.275,-30.25);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_1},{t:this.shape}]},39).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_18},{t:this.shape_17},{t:this.shape_16}]},1).to({state:[{t:this.shape_18},{t:this.shape_17},{t:this.shape_16}]},35).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();


(lib.场景_1_Quote = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Quote
	this.instance = new lib.CachedBmp_3();
	this.instance.setTransform(288.9,143.05,0.5,0.5);

	this.instance_1 = new lib.CachedBmp_4();
	this.instance_1.setTransform(288.9,143.05,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},89).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();


(lib.场景_1_Photo = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Photo
	this.instance = new lib.Personal();
	this.instance.setTransform(50,50,0.0473,0.0473);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(30).to({_off:false},0).wait(60));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();


(lib.场景_1_Other_Jaggies = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Other_Jaggies
	this.instance = new lib.CachedBmp_7();
	this.instance.setTransform(-1.95,-2.65,0.5,0.5);

	this.instance_1 = new lib.CachedBmp_8();
	this.instance_1.setTransform(-1.95,-2.65,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance}]},29).to({state:[{t:this.instance_1}]},60).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();


(lib.场景_1_Name = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Name
	this.instance = new lib.CachedBmp_1();
	this.instance.setTransform(308.9,62.05,0.5,0.5);

	this.instance_1 = new lib.CachedBmp_2();
	this.instance_1.setTransform(308.9,62.05,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},89).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();


(lib.场景_1_Jagged_Edge = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Jagged_Edge
	this.instance = new lib.CachedBmp_5();
	this.instance.setTransform(-1.6,-2.45,0.5,0.5);

	this.instance_1 = new lib.CachedBmp_6();
	this.instance_1.setTransform(-1.6,-2.45,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance}]},29).to({state:[{t:this.instance_1}]},60).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();


(lib.场景_1_Grunge_Texture = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Grunge_Texture
	this.instance = new lib.GrungeTexture();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(90));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();


(lib.场景_1_Grad = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Grad
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#723920","rgba(114,57,32,0)"],[0,1],19.7,114.1,19.7,-76.6).s().p("Eg6PAL/IAA39MB0fAAAIAAX9g");
	this.shape.setTransform(374.175,343.3048,1,1.0342);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(90));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();


(lib.___Camera___ = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		this.visible = false;
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(2));

	// cameraBoundary
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("rgba(0,0,0,0)").ss(2,1,1,3,true).p("EAq+AfQMhV7AAAMAAAg+fMBV7AAAg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(2));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-374.5,-211,749,422);


(lib.Start = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// 图层_1
	this.instance = new lib.Starbtn();
	this.instance.setTransform(0.2,25.7,0.4393,0.4393,-20.2137,0,0,0.2,0.6);
	new cjs.ButtonHelper(this.instance, 0, 1, 2, false, new lib.Starbtn(), 3);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#723920").s().p("AkJAoIAXgIIAdAvIAEAFIABAEIABgBIgBgEIAAgGIgJg2IAUgHIAdAuIADAGIACADIABAAIgBgEIgBgGIgIg2IAXgIIAHBYIgaAJIgTgcIgEgJIgDgGIgBAAIACAHIACAKIAEAhIgbAKgAhnBFQgJgBgGgFQgHgFgCgJQgDgJABgIQABgIAFgGQAGgGAJgEQAIgDAIACQAHABAFAFQAGAFACAIIACAFIAAACIgjAMQAEAEADABQAFACAFgCIAGgEIAEgDIACgEIANAJIgDAFQgCAEgFAEIgLAGQgJACgHAAIgDAAgAhmAYQgEABgBADQgCADABAFIAQgGQgBgDgDgCIgEgBIgCAAgAhTgfIAWgIIAgBVIgXAIgAgJAjQgIgBgGgGQgGgFgDgIQgDgJABgHQABgJAGgGQAGgGAJgDQAIgDAFABQAGAAAFAEQAFAEACAGIAAADIABABIgTAIIAAAAIgBgCIgBgEQgCgBgDABQgEABgBAEQgBADACAFQACAFAEADQAEACAFgCIAGgDIAEgFIABgDIAPALIgDAFIgGAHQgGAEgHACQgJADgGAAIgDAAgAA1AMQgJgBgGgFQgGgGgDgHQgDgJABgIQACgIAFgGQAGgHAJgDQAKgDAIABQAIABAGAGQAHAFACAIQAEAJgCAIQgBAIgFAGQgGAGgKADQgHACgGAAIgEAAgAA3geQgEACgBADQgBAEACAGQACAFADACQAEADAEgCQAEgBABgEQABgEgBgGQgCgFgEgCQAAgBgBAAQAAAAgBAAQgBgBAAAAQgBAAAAAAIgEABgABYg9IASgIIACAEIADADIACADQAAgFADgFQADgEAHgDQAHgDAHACQAFACAFAFQgBgGACgFQAEgFAHgDQAIgDAFACQAGABAEAFQAEAEACAGIANAkIgWAIIgLgeQgCgEgCgCQgCgCgEABQgFACAAADQAAAEABAEIALAdIgXAIIgLgeQgBgEgCgCQgCgCgFACQgEABgBADQAAAEACAEIAKAdIgWAIgADhgxQgJgBgGgGQgGgFgDgJQgDgIABgIQACgIAEgGQAGgHAKgDQAIgDAHABQAHABAGAFQAFAGADAIIACAFIAAABIgjANQADADAEACQAEABAGgCIAGgDIADgEIACgDIAOAIIgEAGQgCAEgEADIgMAGQgJADgGAAIgEAAgADiheQgDABgBADQgCADAAAFIAQgHQgBgDgCgCIgEgBIgDABg");
	this.shape.setTransform(60.9,21.125);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Start, new cjs.Rectangle(0,9.8,87.5,41.900000000000006), null);


(lib.Linkbar = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.isSingleFrame = false;
	// timeline functions:
	this.frame_0 = function() {
		if(this.isSingleFrame) {
			return;
		}
		if(this.totalFrames == 1) {
			this.isSingleFrame = true;
		}
		var _this = this;
		/*
		单击指定元件实例时将执行相应函数。
		*/
		_this.linkedin_btn.on('click', function(){
		/*
		在一个新浏览器窗口中加载 URL。
		*/
		window.open('http://www.linkedin.com/in/luyun-aurora-shao', '_blank');
		});
		
		var _this = this;
		/*
		单击指定元件实例时将执行相应函数。
		*/
		_this.ins_btn.on('click', function(){
		/*
		在一个新浏览器窗口中加载 URL。
		*/
		window.open('https://www.instagram.com/aurora.uxdesign/', '_blank');
		});
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// text
	this.instance = new lib.CachedBmp_10();
	this.instance.setTransform(260,20.1,0.5,0.5);

	this.instance_1 = new lib.CachedBmp_9();
	this.instance_1.setTransform(85.25,20.1,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	// star
	this.ins_btn = new lib.Starbtn();
	this.ins_btn.name = "ins_btn";
	this.ins_btn.setTransform(204.8,9.3,0.818,0.818);
	new cjs.ButtonHelper(this.ins_btn, 0, 1, 2, false, new lib.Starbtn(), 3);

	this.linkedin_btn = new lib.Starbtn();
	this.linkedin_btn.name = "linkedin_btn";
	this.linkedin_btn.setTransform(31.8,9.3,0.818,0.818);
	new cjs.ButtonHelper(this.linkedin_btn, 0, 1, 2, false, new lib.Starbtn(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.linkedin_btn},{t:this.ins_btn}]}).wait(1));

	// BG
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("rgba(115,58,33,0)").ss(8,1,1).p("EglvgFdMBLfAAAQBUAAAAAsIAAJjQAAAshUAAMhLfAAAQhUAAAAgsIAApjQAAgsBUAAg");
	this.shape.setTransform(250,35);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(165,93,0,0.267)").s().p("EgluAFeQhVAAAAgsIAApjQAAgsBVAAMBLeAAAQBUAAAAAsIAAJjQAAAshUAAg");
	this.shape_1.setTransform(250,35);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Linkbar, new cjs.Rectangle(-4,-4,508,78), null);


(lib.场景_1_Start = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Start
	this.Start_btn = new lib.Start();
	this.Start_btn.name = "Start_btn";
	this.Start_btn.setTransform(312.2,287.25,1,1,0,0,0,44.6,26.4);

	this.timeline.addTween(cjs.Tween.get(this.Start_btn).to({alpha:0},14).wait(76));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();


(lib.场景_1_Linkbar = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Linkbar
	this.instance = new lib.Linkbar();
	this.instance.setTransform(1012.9,310.35,1,1,0,0,0,250,35);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(32).to({x:992.65},0).wait(1).to({x:963.25},0).wait(1).to({x:932.9},0).wait(1).to({x:901.7},0).wait(1).to({x:869.6},0).wait(1).to({x:836.55},0).wait(1).to({x:802.65},0).wait(1).to({x:767.8},0).wait(1).to({x:732.05},0).wait(1).to({x:695.4},0).wait(1).to({x:657.85},0).wait(1).to({x:619.4},0).wait(1).to({x:580.05},0).wait(1).to({x:539.8},0).wait(1).to({x:539},0).wait(3).to({x:573.3},0).wait(1).to({x:623.35},0).wait(1).to({x:667.8},0).wait(1).to({x:706.75},0).wait(1).to({x:740.1},0).wait(1).to({x:767.9},0).wait(1).to({x:790.15},0).wait(1).to({x:806.8},0).wait(1).to({x:817.95},0).wait(1).to({x:823.5},0).wait(2).to({x:817.95},0).wait(1).to({x:806.8},0).wait(1).to({x:790.15},0).wait(1).to({x:767.9},0).wait(1).to({x:740.1},0).wait(1).to({x:706.75},0).wait(1).to({x:667.8},0).wait(1).to({x:623.35},0).wait(1).to({x:573.3},0).wait(1).to({x:539},0).wait(5).to({x:558},0).wait(1).to({x:572.8},0).wait(1).to({x:583.35},0).wait(1).to({x:589.7},0).wait(1).to({x:591.8},0).wait(1).to({x:589.7},0).wait(1).to({x:583.35},0).wait(1).to({x:572.8},0).wait(1).to({x:558},0).wait(1).to({x:539},0).wait(15));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();


// stage content:
(lib.Aurora_Landing_HTML5Canvas = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [0,14,89,97];
	this.___GetDepth___ = function(obj) {
		var depth = obj.depth;
		var cameraObj = this.___camera___instance;
		if(cameraObj && cameraObj.depth && obj.isAttachedToCamera)
		{
			depth += depth + cameraObj.depth;
		}
		return depth;
		}
	this.___needSorting___ = function() {
		for (var i = 0; i < this.numChildren - 1; i++)
		{
			var prevDepth = this.___GetDepth___(this.getChildAt(i));
			var nextDepth = this.___GetDepth___(this.getChildAt(i + 1));
			if (prevDepth < nextDepth)
				return true;
		}
		return false;
	}
	this.___sortFunction___ = function(obj1, obj2) {
		return (this.exportRoot.___GetDepth___(obj2) - this.exportRoot.___GetDepth___(obj1));
	}
	this.on('tick', function (event){
		var curTimeline = event.currentTarget;
		if (curTimeline.___needSorting___()){
			this.sortChildren(curTimeline.___sortFunction___);
		}
	});

	// timeline functions:
	this.frame_0 = function() {
		this.Start_btn = this.Start.Start_btn;
		this.stop();
		
		var _this = this;
		/*
		单击指定元件实例时将执行相应函数。
		*/
		_this.Start_btn.on('click', function(){
		/*
		播放影片剪辑/视频或当前时间轴。
		播放指定的影片剪辑或视频。
		*/
		_this.play();
		});
		//
		//var_this = this;
		///*
		//Stop a Movie Clip/Video
		//Stops the specified movie clip or video
		//*/
		//_this.stop();
	}
	this.frame_14 = function() {
		this.Start_btn = undefined;this.Start_btn = this.Start.Start_btn;
	}
	this.frame_89 = function() {
		this.stop();
	}
	this.frame_97 = function() {
		this.___loopingOver___ = true;
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(14).call(this.frame_14).wait(75).call(this.frame_89).wait(8).call(this.frame_97).wait(1));

	// Camera
	this.___camera___instance = new lib.___Camera___();
	this.___camera___instance.name = "___camera___instance";
	this.___camera___instance.setTransform(373.5,209.8,0.3968,0.3968,-19.9959,0,0,0,0.4);
	this.___camera___instance.depth = 0;
	this.___camera___instance.visible = false;

	this.timeline.addTween(cjs.Tween.get(this.___camera___instance).to({regY:0,scaleX:0.9983,scaleY:0.9983,rotation:0,y:210},24,cjs.Ease.cubicInOut).wait(65).to({_off:true},1).wait(8));

	// Start_obj_
	this.Start = new lib.场景_1_Start();
	this.Start.name = "Start";
	this.Start.setTransform(310.2,292,2.5203,2.5203,19.9957,0,0,360.9,248.8);
	this.Start.depth = 0;
	this.Start.isAttachedToCamera = 0
	this.Start.isAttachedToMask = 0
	this.Start.layerDepth = 0
	this.Start.layerIndex = 0
	this.Start.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.Start).wait(14).to({_off:true},76).wait(8));

	// Linkbar_obj_
	this.Linkbar = new lib.场景_1_Linkbar();
	this.Linkbar.name = "Linkbar";
	this.Linkbar.setTransform(1012.85,310.35,2.5203,2.5203,19.9957,0,0,625.4,160.3);
	this.Linkbar.depth = 0;
	this.Linkbar.isAttachedToCamera = 0
	this.Linkbar.isAttachedToMask = 0
	this.Linkbar.layerDepth = 0
	this.Linkbar.layerIndex = 1
	this.Linkbar.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.Linkbar).wait(1).to({regX:776,regY:310.4,scaleX:1,scaleY:1,rotation:0,x:1163.45,y:460.45},0).wait(97));

	// Photomask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_29 = new cjs.Graphics().p("AhSBTQgjgiAAgxQAAgwAjgiQAigjAwAAQAwAAAjAjQAjAiAAAwQAAAxgjAiQgjAjgwAAQgwAAgigjg");
	var mask_graphics_30 = new cjs.Graphics().p("AhSBTQgjgiAAgxQAAgwAjgiQAigjAwAAQAwAAAjAjQAjAiAAAwQAAAxgjAiQgjAjgwAAQgwAAgigjg");
	var mask_graphics_31 = new cjs.Graphics().p("AhSBTQgjgiAAgxQAAgwAjgiQAigjAwAAQAwAAAjAjQAjAiAAAwQAAAxgjAiQgjAjgwAAQgwAAgigjg");
	var mask_graphics_32 = new cjs.Graphics().p("AhSBTQgjgiAAgxQAAgwAjgiQAigjAwAAQAwAAAjAjQAjAiAAAwQAAAxgjAiQgjAjgwAAQgwAAgigjg");
	var mask_graphics_33 = new cjs.Graphics().p("AhSBTQgjgiAAgxQAAgwAjgiQAigjAwAAQAwAAAjAjQAjAiAAAwQAAAxgjAiQgjAjgwAAQgwAAgigjg");
	var mask_graphics_34 = new cjs.Graphics().p("AhSBTQgjgiAAgxQAAgwAjgiQAigjAwAAQAwAAAjAjQAjAiAAAwQAAAxgjAiQgjAjgwAAQgwAAgigjg");
	var mask_graphics_35 = new cjs.Graphics().p("AhSBTQgjgiAAgxQAAgwAjgiQAigjAwAAQAwAAAjAjQAjAiAAAwQAAAxgjAiQgjAjgwAAQgwAAgigjg");
	var mask_graphics_36 = new cjs.Graphics().p("AhSBTQgjgiAAgxQAAgwAjgiQAigjAwAAQAwAAAjAjQAjAiAAAwQAAAxgjAiQgjAjgwAAQgwAAgigjg");
	var mask_graphics_37 = new cjs.Graphics().p("AhSBTQgjgiAAgxQAAgwAjgiQAigjAwAAQAwAAAjAjQAjAiAAAwQAAAxgjAiQgjAjgwAAQgwAAgigjg");
	var mask_graphics_38 = new cjs.Graphics().p("AhSBTQgjgiAAgxQAAgwAjgiQAigjAwAAQAwAAAjAjQAjAiAAAwQAAAxgjAiQgjAjgwAAQgwAAgigjg");
	var mask_graphics_39 = new cjs.Graphics().p("AhGBHQgdgeAAgpQAAgpAdgcQAegeAoAAQApAAAeAeQAdAcAAApQAAApgdAeQgeAdgpAAQgoAAgegdg");
	var mask_graphics_40 = new cjs.Graphics().p("AhIBJQgfgeAAgrQAAgqAfgeQAegeAqgBQArABAeAeQAfAeAAAqQAAArgfAeQgeAfgrgBQgqABgegfg");
	var mask_graphics_41 = new cjs.Graphics().p("AhQBRQgighAAgwQAAguAigiQAigiAuAAQAvAAAiAiQAiAiAAAuQAAAwgiAhQgiAigvAAQguAAgigig");
	var mask_graphics_42 = new cjs.Graphics().p("AheBeQgngmAAg4QAAg2AngnQAogoA2AAQA3AAAnAoQAoAnAAA2QAAA4goAmQgnAog3AAQg2AAgogog");
	var mask_graphics_43 = new cjs.Graphics().p("AhxBxQguguAAhDQAAhBAugvQAwgvBBAAQBCAAAvAvQAvAvAABBQAABDgvAuQgvAvhCAAQhBAAgwgvg");
	var mask_graphics_44 = new cjs.Graphics().p("AiJCKQg5g5AAhRQAAhQA5g5QA6g5BPAAQBQAAA6A5QA5A5AABQQAABRg5A5Qg6A5hQAAQhPAAg6g5g");
	var mask_graphics_45 = new cjs.Graphics().p("AioCoQhFhFgBhjQABhiBFhGQBGhFBigBQBiABBGBFQBGBGAABiQAABjhGBFQhGBGhiAAQhiAAhGhGg");
	var mask_graphics_46 = new cjs.Graphics().p("AjNDOQhVhVAAh5QAAh4BVhVQBVhWB4AAQB4AABWBWQBWBVgBB4QABB5hWBVQhWBVh4AAQh4AAhVhVg");
	var mask_graphics_47 = new cjs.Graphics().p("Aj6D7QhohoAAiTQAAiTBohnQBohoCSAAQCTAABoBoQBoBnAACTQAACThoBoQhoBoiTAAQiSAAhohog");
	var mask_graphics_48 = new cjs.Graphics().p("AkwExQh+h+AAizQAAiyB+h+QB+h+CyAAQCyAAB/B+QB+B+AACyQAACzh+B+Qh/B+iyAAQiyAAh+h+g");
	var mask_graphics_49 = new cjs.Graphics().p("AlwFxQiZiZAAjYQAAjYCZiXQCZiaDXAAQDYAACZCaQCZCXAADYQAADYiZCZQiZCZjYAAQjXAAiZiZg");
	var mask_graphics_50 = new cjs.Graphics().p("Am9G9Qi4i4AAkFQAAkEC4i5QC5i4EEAAQEFAAC4C4QC5C5AAEEQAAEFi5C4Qi4C5kFAAQkEAAi5i5g");
	var mask_graphics_51 = new cjs.Graphics().p("AoaIbQjgjfABk8QgBk7DgjfQDgjfE6AAQE8AADfDfQDgDfgBE7QABE8jgDfQjfDfk8AAQk6AAjgjfg");
	var mask_graphics_52 = new cjs.Graphics().p("AqRKSQkQkRAAmBQAAmAEQkQQERkRGAAAQGBAAEQERQEREQAAGAQAAGBkRERQkQEQmBAAQmAAAkRkQg");
	var mask_graphics_53 = new cjs.Graphics().p("As1M1QlUlUAAnhQAAngFUlVQFVlTHgAAQHgAAFWFTQFTFVAAHgQAAHhlTFUQlWFUngABQnggBlVlUg");
	var mask_graphics_54 = new cjs.Graphics().p("AzZTaQoCoDAArXQAArXICoBQIDoDLWAAQLXAAICIDQIDIBAALXQAALXoDIDQoCICrXAAQrWAAoDoCg");
	var mask_graphics_55 = new cjs.Graphics().p("AzZTaQoCoDAArXQAArXICoBQIDoDLWAAQLXAAICIDQIDIBAALXQAALXoDIDQoCICrXAAQrWAAoDoCg");
	var mask_graphics_56 = new cjs.Graphics().p("AzZTaQoCoDAArXQAArXICoBQIDoDLWAAQLXAAICIDQIDIBAALXQAALXoDIDQoCICrXAAQrWAAoDoCg");
	var mask_graphics_57 = new cjs.Graphics().p("AzZTaQoCoDAArXQAArXICoBQIDoDLWAAQLXAAICIDQIDIBAALXQAALXoDIDQoCICrXAAQrWAAoDoCg");
	var mask_graphics_58 = new cjs.Graphics().p("AzZTaQoCoDAArXQAArXICoBQIDoDLWAAQLXAAICIDQIDIBAALXQAALXoDIDQoCICrXAAQrWAAoDoCg");
	var mask_graphics_59 = new cjs.Graphics().p("AzZTaQoCoDAArXQAArXICoBQIDoDLWAAQLXAAICIDQIDIBAALXQAALXoDIDQoCICrXAAQrWAAoDoCg");
	var mask_graphics_60 = new cjs.Graphics().p("AzZTaQoCoDAArXQAArXICoBQIDoDLWAAQLXAAICIDQIDIBAALXQAALXoDIDQoCICrXAAQrWAAoDoCg");
	var mask_graphics_61 = new cjs.Graphics().p("AzZTaQoCoDAArXQAArXICoBQIDoDLWAAQLXAAICIDQIDIBAALXQAALXoDIDQoCICrXAAQrWAAoDoCg");
	var mask_graphics_62 = new cjs.Graphics().p("AzZTaQoCoDAArXQAArXICoBQIDoDLWAAQLXAAICIDQIDIBAALXQAALXoDIDQoCICrXAAQrWAAoDoCg");
	var mask_graphics_63 = new cjs.Graphics().p("AzZTaQoCoDAArXQAArXICoBQIDoDLWAAQLXAAICIDQIDIBAALXQAALXoDIDQoCICrXAAQrWAAoDoCg");
	var mask_graphics_64 = new cjs.Graphics().p("AzZTaQoCoDAArXQAArXICoBQIDoDLWAAQLXAAICIDQIDIBAALXQAALXoDIDQoCICrXAAQrWAAoDoCg");
	var mask_graphics_65 = new cjs.Graphics().p("AzZTaQoCoDAArXQAArXICoBQIDoDLWAAQLXAAICIDQIDIBAALXQAALXoDIDQoCICrXAAQrWAAoDoCg");
	var mask_graphics_66 = new cjs.Graphics().p("AzZTaQoCoDAArXQAArXICoBQIDoDLWAAQLXAAICIDQIDIBAALXQAALXoDIDQoCICrXAAQrWAAoDoCg");
	var mask_graphics_67 = new cjs.Graphics().p("AzZTaQoCoDAArXQAArXICoBQIDoDLWAAQLXAAICIDQIDIBAALXQAALXoDIDQoCICrXAAQrWAAoDoCg");
	var mask_graphics_68 = new cjs.Graphics().p("AzZTaQoCoDAArXQAArXICoBQIDoDLWAAQLXAAICIDQIDIBAALXQAALXoDIDQoCICrXAAQrWAAoDoCg");
	var mask_graphics_69 = new cjs.Graphics().p("AzZTaQoCoDAArXQAArXICoBQIDoDLWAAQLXAAICIDQIDIBAALXQAALXoDIDQoCICrXAAQrWAAoDoCg");
	var mask_graphics_70 = new cjs.Graphics().p("AzZTaQoCoDAArXQAArXICoBQIDoDLWAAQLXAAICIDQIDIBAALXQAALXoDIDQoCICrXAAQrWAAoDoCg");
	var mask_graphics_71 = new cjs.Graphics().p("AzZTaQoCoDAArXQAArXICoBQIDoDLWAAQLXAAICIDQIDIBAALXQAALXoDIDQoCICrXAAQrWAAoDoCg");
	var mask_graphics_72 = new cjs.Graphics().p("AzZTaQoCoDAArXQAArXICoBQIDoDLWAAQLXAAICIDQIDIBAALXQAALXoDIDQoCICrXAAQrWAAoDoCg");
	var mask_graphics_73 = new cjs.Graphics().p("AzZTaQoCoDAArXQAArXICoBQIDoDLWAAQLXAAICIDQIDIBAALXQAALXoDIDQoCICrXAAQrWAAoDoCg");
	var mask_graphics_74 = new cjs.Graphics().p("AzZTaQoCoDAArXQAArXICoBQIDoDLWAAQLXAAICIDQIDIBAALXQAALXoDIDQoCICrXAAQrWAAoDoCg");
	var mask_graphics_75 = new cjs.Graphics().p("AzZTaQoCoDAArXQAArXICoBQIDoDLWAAQLXAAICIDQIDIBAALXQAALXoDIDQoCICrXAAQrWAAoDoCg");
	var mask_graphics_76 = new cjs.Graphics().p("AzZTaQoCoDAArXQAArXICoBQIDoDLWAAQLXAAICIDQIDIBAALXQAALXoDIDQoCICrXAAQrWAAoDoCg");
	var mask_graphics_77 = new cjs.Graphics().p("AzZTaQoCoDAArXQAArXICoBQIDoDLWAAQLXAAICIDQIDIBAALXQAALXoDIDQoCICrXAAQrWAAoDoCg");
	var mask_graphics_78 = new cjs.Graphics().p("AzZTaQoCoDAArXQAArXICoBQIDoDLWAAQLXAAICIDQIDIBAALXQAALXoDIDQoCICrXAAQrWAAoDoCg");
	var mask_graphics_79 = new cjs.Graphics().p("AzZTaQoCoDAArXQAArXICoBQIDoDLWAAQLXAAICIDQIDIBAALXQAALXoDIDQoCICrXAAQrWAAoDoCg");
	var mask_graphics_80 = new cjs.Graphics().p("AzZTaQoCoDAArXQAArXICoBQIDoDLWAAQLXAAICIDQIDIBAALXQAALXoDIDQoCICrXAAQrWAAoDoCg");
	var mask_graphics_81 = new cjs.Graphics().p("AzZTaQoCoDAArXQAArXICoBQIDoDLWAAQLXAAICIDQIDIBAALXQAALXoDIDQoCICrXAAQrWAAoDoCg");
	var mask_graphics_82 = new cjs.Graphics().p("AzZTaQoCoDAArXQAArXICoBQIDoDLWAAQLXAAICIDQIDIBAALXQAALXoDIDQoCICrXAAQrWAAoDoCg");
	var mask_graphics_83 = new cjs.Graphics().p("AzZTaQoCoDAArXQAArXICoBQIDoDLWAAQLXAAICIDQIDIBAALXQAALXoDIDQoCICrXAAQrWAAoDoCg");
	var mask_graphics_84 = new cjs.Graphics().p("AzZTaQoCoDAArXQAArXICoBQIDoDLWAAQLXAAICIDQIDIBAALXQAALXoDIDQoCICrXAAQrWAAoDoCg");
	var mask_graphics_85 = new cjs.Graphics().p("AzZTaQoCoDAArXQAArXICoBQIDoDLWAAQLXAAICIDQIDIBAALXQAALXoDIDQoCICrXAAQrWAAoDoCg");
	var mask_graphics_86 = new cjs.Graphics().p("AzZTaQoCoDAArXQAArXICoBQIDoDLWAAQLXAAICIDQIDIBAALXQAALXoDIDQoCICrXAAQrWAAoDoCg");
	var mask_graphics_87 = new cjs.Graphics().p("AzZTaQoCoDAArXQAArXICoBQIDoDLWAAQLXAAICIDQIDIBAALXQAALXoDIDQoCICrXAAQrWAAoDoCg");
	var mask_graphics_88 = new cjs.Graphics().p("AzZTaQoCoDAArXQAArXICoBQIDoDLWAAQLXAAICIDQIDIBAALXQAALXoDIDQoCICrXAAQrWAAoDoCg");
	var mask_graphics_89 = new cjs.Graphics().p("AzZTaQoCoDAArXQAArXICoBQIDoDLWAAQLXAAICIDQIDIBAALXQAALXoDIDQoCICrXAAQrWAAoDoCg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(29).to({graphics:mask_graphics_29,x:300.975,y:46.125}).wait(1).to({graphics:mask_graphics_30,x:300.975,y:46.125}).wait(1).to({graphics:mask_graphics_31,x:300.975,y:46.125}).wait(1).to({graphics:mask_graphics_32,x:300.975,y:46.125}).wait(1).to({graphics:mask_graphics_33,x:300.975,y:46.125}).wait(1).to({graphics:mask_graphics_34,x:300.975,y:46.125}).wait(1).to({graphics:mask_graphics_35,x:300.975,y:46.125}).wait(1).to({graphics:mask_graphics_36,x:300.975,y:46.125}).wait(1).to({graphics:mask_graphics_37,x:300.975,y:46.125}).wait(1).to({graphics:mask_graphics_38,x:300.975,y:46.125}).wait(1).to({graphics:mask_graphics_39,x:143.025,y:175.25}).wait(1).to({graphics:mask_graphics_40,x:143.025,y:175.25}).wait(1).to({graphics:mask_graphics_41,x:143.025,y:175.225}).wait(1).to({graphics:mask_graphics_42,x:143.025,y:175.225}).wait(1).to({graphics:mask_graphics_43,x:143.025,y:175.225}).wait(1).to({graphics:mask_graphics_44,x:143.025,y:175.25}).wait(1).to({graphics:mask_graphics_45,x:143.05,y:175.25}).wait(1).to({graphics:mask_graphics_46,x:143.05,y:175.25}).wait(1).to({graphics:mask_graphics_47,x:143.025,y:175.25}).wait(1).to({graphics:mask_graphics_48,x:143.025,y:175.225}).wait(1).to({graphics:mask_graphics_49,x:143.05,y:175.25}).wait(1).to({graphics:mask_graphics_50,x:143.025,y:175.25}).wait(1).to({graphics:mask_graphics_51,x:143,y:175.225}).wait(1).to({graphics:mask_graphics_52,x:143.025,y:175.25}).wait(1).to({graphics:mask_graphics_53,x:143,y:175.25}).wait(1).to({graphics:mask_graphics_54,x:143,y:175.25}).wait(1).to({graphics:mask_graphics_55,x:143,y:175.25}).wait(1).to({graphics:mask_graphics_56,x:143,y:175.25}).wait(1).to({graphics:mask_graphics_57,x:143,y:175.25}).wait(1).to({graphics:mask_graphics_58,x:143,y:175.25}).wait(1).to({graphics:mask_graphics_59,x:143,y:175.25}).wait(1).to({graphics:mask_graphics_60,x:143,y:175.25}).wait(1).to({graphics:mask_graphics_61,x:143,y:175.25}).wait(1).to({graphics:mask_graphics_62,x:143,y:175.25}).wait(1).to({graphics:mask_graphics_63,x:143,y:175.25}).wait(1).to({graphics:mask_graphics_64,x:143,y:175.25}).wait(1).to({graphics:mask_graphics_65,x:143,y:175.25}).wait(1).to({graphics:mask_graphics_66,x:143,y:175.25}).wait(1).to({graphics:mask_graphics_67,x:143,y:175.25}).wait(1).to({graphics:mask_graphics_68,x:143,y:175.25}).wait(1).to({graphics:mask_graphics_69,x:143,y:175.25}).wait(1).to({graphics:mask_graphics_70,x:143,y:175.25}).wait(1).to({graphics:mask_graphics_71,x:143,y:175.25}).wait(1).to({graphics:mask_graphics_72,x:143,y:175.25}).wait(1).to({graphics:mask_graphics_73,x:143,y:175.25}).wait(1).to({graphics:mask_graphics_74,x:143,y:175.25}).wait(1).to({graphics:mask_graphics_75,x:143,y:175.25}).wait(1).to({graphics:mask_graphics_76,x:143,y:175.25}).wait(1).to({graphics:mask_graphics_77,x:143,y:175.25}).wait(1).to({graphics:mask_graphics_78,x:143,y:175.25}).wait(1).to({graphics:mask_graphics_79,x:143,y:175.25}).wait(1).to({graphics:mask_graphics_80,x:143,y:175.25}).wait(1).to({graphics:mask_graphics_81,x:143,y:175.25}).wait(1).to({graphics:mask_graphics_82,x:143,y:175.25}).wait(1).to({graphics:mask_graphics_83,x:143,y:175.25}).wait(1).to({graphics:mask_graphics_84,x:143,y:175.25}).wait(1).to({graphics:mask_graphics_85,x:143,y:175.25}).wait(1).to({graphics:mask_graphics_86,x:143,y:175.25}).wait(1).to({graphics:mask_graphics_87,x:143,y:175.25}).wait(1).to({graphics:mask_graphics_88,x:143,y:175.25}).wait(1).to({graphics:mask_graphics_89,x:143,y:175.25}).wait(9));

	// Photo_obj_
	this.Photo = new lib.场景_1_Photo();
	this.Photo.name = "Photo";
	this.Photo.setTransform(0.15,0.05,2.5203,2.5203,19.9957,0,0,205.7,182);
	this.Photo.depth = 0;
	this.Photo.isAttachedToCamera = 0
	this.Photo.isAttachedToMask = 0
	this.Photo.layerDepth = 0
	this.Photo.layerIndex = 2
	this.Photo.maskLayerName = 0

	var maskedShapeInstanceList = [this.Photo];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.Photo).wait(29).to({regX:0.6,regY:0.4,scaleX:1.0017,scaleY:1.0017,rotation:0,x:0},0).wait(60).to({_off:true},1).wait(8));

	// Name_obj_
	this.Name = new lib.场景_1_Name();
	this.Name.name = "Name";
	this.Name.setTransform(492.4,100,1,1,0,0,0,492.4,100);
	this.Name.depth = 0;
	this.Name.isAttachedToCamera = 1
	this.Name.isAttachedToMask = 0
	this.Name.layerDepth = 0
	this.Name.layerIndex = 3
	this.Name.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.Name).wait(89).to({_off:true},1).wait(8));

	// Quote_obj_
	this.Quote = new lib.场景_1_Quote();
	this.Quote.name = "Quote";
	this.Quote.setTransform(491.9,170.1,1,1,0,0,0,491.9,170.1);
	this.Quote.depth = 0;
	this.Quote.isAttachedToCamera = 1
	this.Quote.isAttachedToMask = 0
	this.Quote.layerDepth = 0
	this.Quote.layerIndex = 4
	this.Quote.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.Quote).wait(89).to({_off:true},1).wait(8));

	// Slash_obj_
	this.Slash = new lib.场景_1_Slash();
	this.Slash.name = "Slash";
	this.Slash.setTransform(0.15,0.05,2.5203,2.5203,19.9957,0,0,205.7,182);
	this.Slash.depth = 0;
	this.Slash.isAttachedToCamera = 0
	this.Slash.isAttachedToMask = 0
	this.Slash.layerDepth = 0
	this.Slash.layerIndex = 5
	this.Slash.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.Slash).wait(29).to({regX:0.6,regY:0.4,scaleX:1.0017,scaleY:1.0017,rotation:0,x:0},0).wait(60).to({_off:true},1).wait(8));

	// Jagged_Edge_obj_
	this.Jagged_Edge = new lib.场景_1_Jagged_Edge();
	this.Jagged_Edge.name = "Jagged_Edge";
	this.Jagged_Edge.setTransform(0.15,0.05,2.5203,2.5203,19.9957,0,0,205.7,182);
	this.Jagged_Edge.depth = 0;
	this.Jagged_Edge.isAttachedToCamera = 0
	this.Jagged_Edge.isAttachedToMask = 0
	this.Jagged_Edge.layerDepth = 0
	this.Jagged_Edge.layerIndex = 6
	this.Jagged_Edge.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.Jagged_Edge).wait(29).to({regX:0.6,regY:0.4,scaleX:1.0017,scaleY:1.0017,rotation:0,x:0},0).wait(60).to({_off:true},1).wait(8));

	// Other_Jaggies_obj_
	this.Other_Jaggies = new lib.场景_1_Other_Jaggies();
	this.Other_Jaggies.name = "Other_Jaggies";
	this.Other_Jaggies.setTransform(0.15,0.05,2.5203,2.5203,19.9957,0,0,205.7,182);
	this.Other_Jaggies.depth = 0;
	this.Other_Jaggies.isAttachedToCamera = 0
	this.Other_Jaggies.isAttachedToMask = 0
	this.Other_Jaggies.layerDepth = 0
	this.Other_Jaggies.layerIndex = 7
	this.Other_Jaggies.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.Other_Jaggies).wait(29).to({regX:0.6,regY:0.4,scaleX:1.0017,scaleY:1.0017,rotation:0,x:0},0).wait(60).to({_off:true},1).wait(8));

	// Grad_obj_
	this.Grad = new lib.场景_1_Grad();
	this.Grad.name = "Grad";
	this.Grad.setTransform(374.15,343.15,2.5203,2.5203,19.9957,0,0,391.7,259.2);
	this.Grad.depth = 0;
	this.Grad.isAttachedToCamera = 0
	this.Grad.isAttachedToMask = 0
	this.Grad.layerDepth = 0
	this.Grad.layerIndex = 8
	this.Grad.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.Grad).wait(89).to({regX:374.1,regY:343.1,scaleX:1.0017,scaleY:1.0017,rotation:0,y:343.35},0).to({_off:true},1).wait(8));

	// Grunge_Texture_obj_
	this.Grunge_Texture = new lib.场景_1_Grunge_Texture();
	this.Grunge_Texture.name = "Grunge_Texture";
	this.Grunge_Texture.setTransform(373.5,210.2,2.5203,2.5203,19.9957,0,0,373.4,209.7);
	this.Grunge_Texture.depth = 0;
	this.Grunge_Texture.isAttachedToCamera = 0
	this.Grunge_Texture.isAttachedToMask = 0
	this.Grunge_Texture.layerDepth = 0
	this.Grunge_Texture.layerIndex = 9
	this.Grunge_Texture.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.Grunge_Texture).wait(89).to({regY:210,scaleX:1.0017,scaleY:1.0017,rotation:0,x:373.45,y:210},0).to({_off:true},1).wait(8));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(371.6,179.3,895.3000000000001,243.39999999999998);
// library properties:
lib.properties = {
	id: 'D78D1129F464E64DAA57C8942D9E2646',
	width: 747,
	height: 420,
	fps: 30,
	color: "#E2C59F",
	opacity: 1.00,
	manifest: [
		{src:"images/Personal.jpg?1620609312073", id:"Personal"},
		{src:"images/Aurora_Landing_HTML5 Canvas_atlas_1.png?1620609312023", id:"Aurora_Landing_HTML5 Canvas_atlas_1"},
		{src:"images/Aurora_Landing_HTML5 Canvas_atlas_2.png?1620609312023", id:"Aurora_Landing_HTML5 Canvas_atlas_2"},
		{src:"images/Aurora_Landing_HTML5 Canvas_atlas_3.png?1620609312023", id:"Aurora_Landing_HTML5 Canvas_atlas_3"},
		{src:"sounds/selectionwav.mp3?1620609312073", id:"selectionwav"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['D78D1129F464E64DAA57C8942D9E2646'] = {
	getStage: function() { return exportRoot.stage; },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}

p._getProjectionMatrix = function(container, totalDepth) {	var focalLength = 528.25;
	var projectionCenter = { x : lib.properties.width/2, y : lib.properties.height/2 };
	var scale = (totalDepth + focalLength)/focalLength;
	var scaleMat = new createjs.Matrix2D;
	scaleMat.a = 1/scale;
	scaleMat.d = 1/scale;
	var projMat = new createjs.Matrix2D;
	projMat.tx = -projectionCenter.x;
	projMat.ty = -projectionCenter.y;
	projMat = projMat.prependMatrix(scaleMat);
	projMat.tx += projectionCenter.x;
	projMat.ty += projectionCenter.y;
	return projMat;
}
p._handleTick = function(event) {
	var cameraInstance = exportRoot.___camera___instance;
	if(cameraInstance !== undefined && cameraInstance.pinToObject !== undefined)
	{
		cameraInstance.x = cameraInstance.pinToObject.x + cameraInstance.pinToObject.pinOffsetX;
		cameraInstance.y = cameraInstance.pinToObject.y + cameraInstance.pinToObject.pinOffsetY;
		if(cameraInstance.pinToObject.parent !== undefined && cameraInstance.pinToObject.parent.depth !== undefined)
		cameraInstance.depth = cameraInstance.pinToObject.parent.depth + cameraInstance.pinToObject.pinOffsetZ;
	}
	stage._applyLayerZDepth(exportRoot);
}
p._applyLayerZDepth = function(parent)
{
	var cameraInstance = parent.___camera___instance;
	var focalLength = 528.25;
	var projectionCenter = { 'x' : 0, 'y' : 0};
	if(parent === exportRoot)
	{
		var stageCenter = { 'x' : lib.properties.width/2, 'y' : lib.properties.height/2 };
		projectionCenter.x = stageCenter.x;
		projectionCenter.y = stageCenter.y;
	}
	for(child in parent.children)
	{
		var layerObj = parent.children[child];
		if(layerObj == cameraInstance)
			continue;
		stage._applyLayerZDepth(layerObj, cameraInstance);
		if(layerObj.layerDepth === undefined)
			continue;
		if(layerObj.currentFrame != layerObj.parent.currentFrame)
		{
			layerObj.gotoAndPlay(layerObj.parent.currentFrame);
		}
		var matToApply = new createjs.Matrix2D;
		var cameraMat = new createjs.Matrix2D;
		var totalDepth = layerObj.layerDepth ? layerObj.layerDepth : 0;
		var cameraDepth = 0;
		if(cameraInstance && !layerObj.isAttachedToCamera)
		{
			var mat = cameraInstance.getMatrix();
			mat.tx -= projectionCenter.x;
			mat.ty -= projectionCenter.y;
			cameraMat = mat.invert();
			cameraMat.prependTransform(projectionCenter.x, projectionCenter.y, 1, 1, 0, 0, 0, 0, 0);
			cameraMat.appendTransform(-projectionCenter.x, -projectionCenter.y, 1, 1, 0, 0, 0, 0, 0);
			if(cameraInstance.depth)
				cameraDepth = cameraInstance.depth;
		}
		if(layerObj.depth)
		{
			totalDepth = layerObj.depth;
		}
		//Offset by camera depth
		totalDepth -= cameraDepth;
		if(totalDepth < -focalLength)
		{
			matToApply.a = 0;
			matToApply.d = 0;
		}
		else
		{
			if(layerObj.layerDepth)
			{
				var sizeLockedMat = stage._getProjectionMatrix(parent, layerObj.layerDepth);
				if(sizeLockedMat)
				{
					sizeLockedMat.invert();
					matToApply.prependMatrix(sizeLockedMat);
				}
			}
			matToApply.prependMatrix(cameraMat);
			var projMat = stage._getProjectionMatrix(parent, totalDepth);
			if(projMat)
			{
				matToApply.prependMatrix(projMat);
			}
		}
		layerObj.transformMatrix = matToApply;
	}
}
an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}

// Virtual camera API : 

an.VirtualCamera = new function() {
var _camera = new Object();
function VC(timeline) {
	this.timeline = timeline;
	this.camera = timeline.___camera___instance;
	this.centerX = lib.properties.width / 2;
	this.centerY = lib.properties.height / 2;
	this.camAxisX = this.camera.x;
	this.camAxisY = this.camera.y;
	if(timeline.___camera___instance == null || timeline.___camera___instance == undefined ) {
		timeline.___camera___instance = new cjs.MovieClip();
		timeline.___camera___instance.visible = false;
		timeline.___camera___instance.parent = timeline;
		timeline.___camera___instance.setTransform(this.centerX, this.centerY);
	}
	this.camera = timeline.___camera___instance;
}

VC.prototype.moveBy = function(x, y, z) {
z = typeof z !== 'undefined' ? z : 0;
	var position = this.___getCamPosition___();
	var rotAngle = this.getRotation()*Math.PI/180;
	var sinTheta = Math.sin(rotAngle);
	var cosTheta = Math.cos(rotAngle);
	var offX= x*cosTheta + y*sinTheta;
	var offY = y*cosTheta - x*sinTheta;
	this.camAxisX = this.camAxisX - x;
	this.camAxisY = this.camAxisY - y;
	var posX = position.x + offX;
	var posY = position.y + offY;
	this.camera.x = this.centerX - posX;
	this.camera.y = this.centerY - posY;
	this.camera.depth += z;
};

VC.prototype.setPosition = function(x, y, z) {
	z = typeof z !== 'undefined' ? z : 0;

	const MAX_X = 10000;
	const MIN_X = -10000;
	const MAX_Y = 10000;
	const MIN_Y = -10000;
	const MAX_Z = 10000;
	const MIN_Z = -5000;

	if(x > MAX_X)
	  x = MAX_X;
	else if(x < MIN_X)
	  x = MIN_X;
	if(y > MAX_Y)
	  y = MAX_Y;
	else if(y < MIN_Y)
	  y = MIN_Y;
	if(z > MAX_Z)
	  z = MAX_Z;
	else if(z < MIN_Z)
	  z = MIN_Z;

	var rotAngle = this.getRotation()*Math.PI/180;
	var sinTheta = Math.sin(rotAngle);
	var cosTheta = Math.cos(rotAngle);
	var offX= x*cosTheta + y*sinTheta;
	var offY = y*cosTheta - x*sinTheta;
	
	this.camAxisX = this.centerX - x;
	this.camAxisY = this.centerY - y;
	this.camera.x = this.centerX - offX;
	this.camera.y = this.centerY - offY;
	this.camera.depth = z;
};

VC.prototype.getPosition = function() {
	var loc = new Object();
	loc['x'] = this.centerX - this.camAxisX;
	loc['y'] = this.centerY - this.camAxisY;
	loc['z'] = this.camera.depth;
	return loc;
};

VC.prototype.resetPosition = function() {
	this.setPosition(0, 0);
};

VC.prototype.zoomBy = function(zoom) {
	this.setZoom( (this.getZoom() * zoom) / 100);
};

VC.prototype.setZoom = function(zoom) {
	const MAX_zoom = 10000;
	const MIN_zoom = 1;
	if(zoom > MAX_zoom)
	zoom = MAX_zoom;
	else if(zoom < MIN_zoom)
	zoom = MIN_zoom;
	this.camera.scaleX = 100 / zoom;
	this.camera.scaleY = 100 / zoom;
};

VC.prototype.getZoom = function() {
	return 100 / this.camera.scaleX;
};

VC.prototype.resetZoom = function() {
	this.setZoom(100);
};

VC.prototype.rotateBy = function(angle) {
	this.setRotation( this.getRotation() + angle );
};

VC.prototype.setRotation = function(angle) {
	const MAX_angle = 180;
	const MIN_angle = -179;
	if(angle > MAX_angle)
		angle = MAX_angle;
	else if(angle < MIN_angle)
		angle = MIN_angle;
	this.camera.rotation = -angle;
};

VC.prototype.getRotation = function() {
	return -this.camera.rotation;
};

VC.prototype.resetRotation = function() {
	this.setRotation(0);
};

VC.prototype.reset = function() {
	this.resetPosition();
	this.resetZoom();
	this.resetRotation();
	this.unpinCamera();
};
VC.prototype.setZDepth = function(zDepth) {
	const MAX_zDepth = 10000;
	const MIN_zDepth = -5000;
	if(zDepth > MAX_zDepth)
		zDepth = MAX_zDepth;
	else if(zDepth < MIN_zDepth)
		zDepth = MIN_zDepth;
	this.camera.depth = zDepth;
}
VC.prototype.getZDepth = function() {
	return this.camera.depth;
}
VC.prototype.resetZDepth = function() {
	this.camera.depth = 0;
}

VC.prototype.pinCameraToObject = function(obj, offsetX, offsetY, offsetZ) {

	offsetX = typeof offsetX !== 'undefined' ? offsetX : 0;

	offsetY = typeof offsetY !== 'undefined' ? offsetY : 0;

	offsetZ = typeof offsetZ !== 'undefined' ? offsetZ : 0;
	if(obj === undefined)
		return;
	this.camera.pinToObject = obj;
	this.camera.pinToObject.pinOffsetX = offsetX;
	this.camera.pinToObject.pinOffsetY = offsetY;
	this.camera.pinToObject.pinOffsetZ = offsetZ;
};

VC.prototype.setPinOffset = function(offsetX, offsetY, offsetZ) {
	if(this.camera.pinToObject != undefined) {
	this.camera.pinToObject.pinOffsetX = offsetX;
	this.camera.pinToObject.pinOffsetY = offsetY;
	this.camera.pinToObject.pinOffsetZ = offsetZ;
	}
};

VC.prototype.unpinCamera = function() {
	this.camera.pinToObject = undefined;
};
VC.prototype.___getCamPosition___ = function() {
	var loc = new Object();
	loc['x'] = this.centerX - this.camera.x;
	loc['y'] = this.centerY - this.camera.y;
	loc['z'] = this.depth;
	return loc;
};

this.getCamera = function(timeline) {
	timeline = typeof timeline !== 'undefined' ? timeline : null;
	if(timeline === null) timeline = exportRoot;
	if(_camera[timeline] == undefined)
	_camera[timeline] = new VC(timeline);
	return _camera[timeline];
}

this.getCameraAsMovieClip = function(timeline) {
	timeline = typeof timeline !== 'undefined' ? timeline : null;
	if(timeline === null) timeline = exportRoot;
	return this.getCamera(timeline).camera;
}
}


// Layer depth API : 

an.Layer = new function() {
	this.getLayerZDepth = function(timeline, layerName)
	{
		if(layerName === "Camera")
		layerName = "___camera___instance";
		var script = "if(timeline." + layerName + ") timeline." + layerName + ".depth; else 0;";
		return eval(script);
	}
	this.setLayerZDepth = function(timeline, layerName, zDepth)
	{
		const MAX_zDepth = 10000;
		const MIN_zDepth = -5000;
		if(zDepth > MAX_zDepth)
			zDepth = MAX_zDepth;
		else if(zDepth < MIN_zDepth)
			zDepth = MIN_zDepth;
		if(layerName === "Camera")
		layerName = "___camera___instance";
		var script = "if(timeline." + layerName + ") timeline." + layerName + ".depth = " + zDepth + ";";
		eval(script);
	}
	this.removeLayer = function(timeline, layerName)
	{
		if(layerName === "Camera")
		layerName = "___camera___instance";
		var script = "if(timeline." + layerName + ") timeline.removeChild(timeline." + layerName + ");";
		eval(script);
	}
	this.addNewLayer = function(timeline, layerName, zDepth)
	{
		if(layerName === "Camera")
		layerName = "___camera___instance";
		zDepth = typeof zDepth !== 'undefined' ? zDepth : 0;
		var layer = new createjs.MovieClip();
		layer.name = layerName;
		layer.depth = zDepth;
		layer.layerIndex = 0;
		timeline.addChild(layer);
	}
}
an.handleSoundStreamOnTick = function(event) {
	if(!event.paused){
		var stageChild = stage.getChildAt(0);
		if(!stageChild.paused || stageChild.ignorePause){
			stageChild.syncStreamSounds();
		}
	}
}
an.handleFilterCache = function(event) {
	if(!event.paused){
		var target = event.target;
		if(target){
			if(target.filterCacheList){
				for(var index = 0; index < target.filterCacheList.length ; index++){
					var cacheInst = target.filterCacheList[index];
					if((cacheInst.startFrame <= target.currentFrame) && (target.currentFrame <= cacheInst.endFrame)){
						cacheInst.instance.cache(cacheInst.x, cacheInst.y, cacheInst.w, cacheInst.h);
					}
				}
			}
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;