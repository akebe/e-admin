/* eslint-disable no-console */
const longpress = {
  name: 'longpress',
  bind: function (el, binding, vNode) {
    //触发长按事件时间
    let MaxTime = 500;
    //长按事件循环触发事件
    let LoopTime = 50;

    // Make sure expression provided is a function
    if (typeof binding.value !== 'function') {
      // Fetch name of component
      const compName = vNode.context.name;
      // pass warning to console
      let warn = `[longpress:] provided expression '${binding.expression}' is not a function, but has to be`;
      if (compName) {
        warn += `Found in component '${compName}' `;
      }

      console.warn(warn);
    }

    // Define variable
    let pressTimer = null;
    let loopTimer = null;

    // Define funtion handlers
    // Create timeout ( run function after 1s )
    let start = (e) => {
      if (e.type === 'click' && e.button !== 0) {
        return;
      }

      if (pressTimer === null) {
        pressTimer = setTimeout(() => {
          // Run function
          handler();
          loopTimer = setInterval(() => {
            handler();
          }, LoopTime);
        }, MaxTime);
      }
    };

    // Cancel Timeout
    let cancel = () => {
      // Check if timer has a value or not
      if (pressTimer !== null) {
        clearTimeout(pressTimer);
        pressTimer = null;
      }
      if (loopTimer !== null) {
        clearInterval(loopTimer);
        loopTimer = null;
      }
    };
    // Run Function
    const handler = (e) => {
      binding.value(e);
    };

    // Add Event listeners
    el.addEventListener('mousedown', start);
    el.addEventListener('touchstart', start);
    // Cancel timeouts if this events happen
    el.addEventListener('click', cancel);
    el.addEventListener('mouseout', cancel);
    el.addEventListener('touchend', cancel);
    el.addEventListener('touchcancel', cancel);
  },
};

export default longpress;