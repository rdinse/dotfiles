/*
 * .phoenix.js configuration
 * by Robin Dinse 2014
 */

Phoenix.set({
  daemon: false,
  openAtLogin: true
});

function fullScreen() {
  var win = Window.focused();
  var sframe = win.screen().visibleFrame();
  win.setFrame({
    x: 0,//sframe.x,
    y: sframe.y,
    width: sframe.width + sframe.x,
    height: sframe.height
  });
}

function decSize() {
  var factor = 0.9;
  var win = Window.focused();
  var sframe = win.screen().visibleFrame();
  var wframe = win.frame();
  // var originX = sframe.x + (sframe.width - (wframe.width * factor)) / 2;
  win.setFrame({
    x: wframe.x + (wframe.width * (1-factor)) / 2,
    y: wframe.y + (wframe.height * (1-factor)) / 2,
    width: wframe.width * factor,
    height: wframe.height * factor
  });
}

function incSize() {
  var factor = 1.1111111;
  var win = Window.focused();
  var sframe = win.screen().visibleFrame();
  var wframe = win.frame();
  // var originX = sframe.x + (sframe.width - (wframe.width * factor)) / 2;
  win.setFrame({
    x: wframe.x + (wframe.width * (1-factor)) / 2,
    y: wframe.y + (wframe.height * (1-factor)) / 2,
    width: wframe.width * factor,
    height: wframe.height * factor
  });
}

function fullHeight() {
  var win = Window.focused();
  var sframe = win.screen().visibleFrame();
  var wframe = win.frame(); 
  win.setFrame({
    x: wframe.x,
    y: sframe.y,
    width: wframe.width,
    height: sframe.height
  });
}

function leftHalfForFoxit() {
  var win = Window.focused();
  var sframe = win.screen().visibleFrame();
  win.setFrame({
    x: sframe.x,
    y: sframe.y,
    width: 571,
    height: sframe.height
  });
}

function leftHalf() {
  var win = Window.focused();
  var sframe = win.screen().visibleFrame();
  win.setFrame({
    x: sframe.x,
    y: sframe.y,
    width: sframe.width / 2 - border,
    height: sframe.height
  });
}

function rightHalf() {
  var win = Window.focused();
  var sframe = win.screen().visibleFrame();
  win.setFrame({
    x: sframe.width / 2 + border,
    y: sframe.y,
    width: sframe.width / 2,
    height: sframe.height
  });
}

function leftTwoThirds() {
  var win = Window.focused();
  var sframe = win.screen().visibleFrame();
  var width =
  win.setFrame({
    x: sframe.x,
    y: sframe.y,
    width: Math.round(sframe.width * 0.625) - border,
    height: sframe.height
  });
}

function rightThird() {
  var win = Window.focused();
  var sframe = win.screen().visibleFrame();
  win.setFrame({
    x: Math.round(sframe.width * 0.625) + border,
    y: sframe.y,
    width: Math.round(sframe.width * 0.375),
    height: sframe.height
  });
}

function topHalf() {
  var win = Window.focused();
  var sframe = win.screen().visibleFrame();
  win.setFrame({
    x: sframe.x,
    y: 0,
    width: sframe.width,
    height: sframe.height / 2 - border
  });
}

function bottomHalf() {
  var win = Window.focused();
  var sframe = win.screen().visibleFrame();
  win.setFrame({
    x: sframe.x,
    y: sframe.height / 2,
    width: sframe.width,
    height: sframe.height / 2 - border
  });
}

function topLeft() {
  var win = Window.focused();
  var sframe = win.screen().visibleFrame();
  win.setFrame({
    x: sframe.x,
    y: sframe.y,
    width: sframe.width / 2 - border,
    height: sframe.height / 2 - border
  });
}

function bottomLeft() {
  var win = Window.focused();
  var sframe = win.screen().visibleFrame();
  win.setFrame({
    x: sframe.x,
    y: sframe.y + sframe.height / 2 + border,
    width: sframe.width / 2 - border,
    height: sframe.height / 2 - border
  });
}

function topRight() {
  var win = Window.focused();
  var sframe = win.screen().visibleFrame();
  win.setFrame({
    x: sframe.x + sframe.width / 2 + border,
    y: sframe.y,
    width: sframe.width / 2 - border,
    height: sframe.height / 2 - border
  });
}

function bottomRight() {
  var win = Window.focused();
  var sframe = win.screen().visibleFrame();
  win.setFrame({
    x: sframe.x + sframe.width / 2 + border,
    y: sframe.y + sframe.height / 2,
    width: sframe.width / 2 - border,
    height: sframe.height / 2 - border
  });
}

function center() {
  var win = Window.focused();
  var wframe = win.frame();
  var sframe = win.screen().visibleFrame();
  win.setFrame({
    x: Math.round(sframe.width/2 - wframe.width/2),
    y: Math.round(sframe.height/2 - wframe.height/2),
    width: wframe.width,
    height: wframe.height
  });
}

function nudge(x, y) {
    var win = Window.focused();
    var wframe = win.frame();
    var sframe = win.screen().visibleFrame();
    var xPercent = sframe.width * (x / 100);
    var yPercent = sframe.height * (y / 100);
    if (wframe.x > sframe.x && wframe.x + xPercent < sframe.x) xPercent = sframe.x - wframe.x;
    if (wframe.y > sframe.y && wframe.y + yPercent < sframe.y) yPercent = sframe.y - wframe.y;
    if (wframe.x + wframe.width < sframe.width + sframe.x && wframe.x + wframe.width + xPercent > sframe.width + sframe.x)
	xPercent = sframe.x + sframe.width - (wframe.x + wframe.width);
    if (wframe.y + wframe.height < sframe.height + sframe.y && wframe.y + wframe.height + yPercent > sframe.height + sframe.y)
	yPercent = sframe.height + sframe.y - (wframe.y + wframe.height);
    win.setFrame({
	x: wframe.x + xPercent,
	y: wframe.y + yPercent,
	width: wframe.width,
	height: wframe.height
    });
}

function resize(w, h) {
    var win = Window.focused();
	var wframe = win.frame();
	var wPercent = wframe.width * (w / 100);
	var hPercent = wframe.height * (h / 100);
	win.setFrame({
	    x: wframe.x,
	    y: wframe.y,
	    width: wframe.width + wPercent,
	    height: wframe.height + hPercent
	});
    }

function moveToScreen(win, screen) {
	if(screen.null === null) return;

	var frame = win.frame()
	var oldScreenRect = win.screen().visibleFrame()
	var newScreenRect = screen.visibleFrame()

	var xRatio = newScreenRect.w  / oldScreenRect.w
	var yRatio = newScreenRect.h / oldScreenRect.h

	win.setFrame({
	    x: Math.round((frame.x - oldScreenRect.x) * xRatio) + newScreenRect.x,
	    y: Math.round((frame.y - oldScreenRect.y) * yRatio) + newScreenRect.y,
	    w: Math.round(frame.w * xRatio),
	    h: Math.round(frame.h * yRatio)
	});
}

function moveToNextScreen() {
    var win = Window.focused();
    moveToScreen(win, win.nextScreen());
}

var border = 2;
var nudge_step = 10;
var resize_step = 15;
var max_tries = 50;

function launchAndFocus(appName) {
  app = App.launch(appName);
  n_tries = 0;
  wait_loop = function () {
    n_tries++;
    app.activate();
    app.focus();
    app.show();
    if (!app.isActive() && n_tries < max_tries) setTimeout(wait_loop, 10);
  }
  wait_loop(); 
}

var setupHandlers = function() {
    var throwModifiers = ["ctrl", "cmd", "alt"];
    var moveModifiers = ["ctrl", "alt", "cmd", "shift"];
    var resizeModifiers = ["ctrl", "alt", "cmd"];
    var appModifiers = ["ctrl"];

    return {
        left:   new Key('left', resizeModifiers, function() { nudge(-nudge_step, 0) }),
        right:  new Key('right', resizeModifiers, function() { nudge(nudge_step, 0) }),
        up:     new Key('up', resizeModifiers, function() { nudge(0, -nudge_step) }),
        down:   new Key('down', resizeModifiers, function() { nudge(0, nudge_step) }),

        left1:  new Key('left', moveModifiers, function() { resize(-resize_step, 0) }),
        right1: new Key('right', moveModifiers, function() { resize(resize_step, 0) }),
        up1:    new Key('up', moveModifiers, function() { resize(0, -resize_step) }),
        down1:  new Key('down', moveModifiers, function() { resize(0, resize_step) }),

        b:      new Key('b', throwModifiers, function() { center() }),
        v:      new Key('v', throwModifiers, function() { moveToNextScreen() }),

        z:      new Key('z', throwModifiers, function() { leftTwoThirds() }),
        o:      new Key('o', throwModifiers, function() { rightThird() }),

        i:      new Key('i', throwModifiers, function() { topHalf() }),
        u:      new Key('u', throwModifiers, function() { bottomHalf() }),

        h:      new Key('h', throwModifiers, function() { leftHalf() }),
        l:      new Key('l', throwModifiers, function() { rightHalf() }),

        k:      new Key('k', throwModifiers, function() { fullScreen() }),
        t:      new Key('t', throwModifiers, function() { fullHeight() }),
        j:      new Key('j', throwModifiers, function() { decSize() }),
        g:      new Key('g', throwModifiers, function() { incSize() }),
        f:      new Key('f', throwModifiers, function() { leftHalfForFoxit() }),

        n:      new Key('n', throwModifiers, function() { topLeft() }),
        period: new Key('.', throwModifiers, function() { topRight() }),
        m:      new Key('m', throwModifiers, function() { bottomLeft() }),
        comma:  new Key(',', throwModifiers, function() { bottomRight() }),
        
        apptab: new Key('tab', ['alt'], function() { launchAndFocus("iTerm") }),
        appstab:new Key('tab', ['alt', "shift"], function() { launchAndFocus("Emacs") }),
        app1:   new Key('1', appModifiers, function() { launchAndFocus("Finder") }),
        app2:   new Key('2', appModifiers, function() { launchAndFocus("Firefox") }),
        app3:   new Key('3', appModifiers, function() { launchAndFocus("Telegram") }),
        app4:   new Key('4', appModifiers, function() { launchAndFocus("Mail") }),
        app5:   new Key('5', appModifiers, function() { launchAndFocus("Notes") }),
        app6:   new Key('6', appModifiers, function() { launchAndFocus("Calendar") }),
        app7:   new Key('7', appModifiers, function() { launchAndFocus("Activity Monitor") })
    };
}

var keyHandlers = setupHandlers();

// function p(obj) {
//   Phoenix.log(JSON.stringify(obj))
//   return obj
// }
// 
// function move_window(rect, screen) {
//   screen = screen || Window.focusedWindow().screen()
//   var scr = screen.visibleFrameInRectangle();
//   p(scr)
//   var r = {
//     x: Math.round(scr.x + rect.x * scr.width),
//     y: Math.round(scr.y + rect.y * scr.height),
//     width: Math.round(scr.width * rect.width),
//     height: Math.round(scr.height * rect.height),
//   };
//   p(r)
//   var before = Window.focusedWindow().frame()
//   p(before)
//   Window.focusedWindow().setFrame(r);
//   var after = Window.focusedWindow().frame()
//   p("after:")
//   p(after)
// 
//   if (isRectEqual(before, after)) {
//     move_window(rect, screen.next())
//   }
// }
// 
// function isRectEqual(a, b) {
//   return a.x === b.x &&
//     a.y === b.y &&
//     a.width === b.width &&
//     a.height === b.height
// }
// 
// keys.push(Phoenix.bind('h', ['cmd', 'ctrl'], function () {
//   move_window({ x: 0, y: 0, width: 0.5, height: 1.0 })
// }))
