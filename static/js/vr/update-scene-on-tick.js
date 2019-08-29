AFRAME.registerComponent('update-scene-on-click', {
    init: function () {
    },
    play: function () {
    },
    pause: function () {
    },
    tick: function (time, timeDelta) {
        AFRAME.scenes[0].emit('timeUpdated', {delta: timeDelta});
    }
});