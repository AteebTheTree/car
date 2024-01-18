AFRAME.registerComponent("car", {
    schema: {
        height: {type: "number", default: 0.05},
        width: {type: "number", default: 0.05},
    },

    init: function() {
        this.el.setAttribute("geometry", {
            primitive: "box",
            height: this.data.height,
            width: this.data.width
        })
    }
})