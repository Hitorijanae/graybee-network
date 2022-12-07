"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var PostDialogComponent = function (_React$Component) {
    _inherits(PostDialogComponent, _React$Component);

    function PostDialogComponent(props) {
        _classCallCheck(this, PostDialogComponent);

        var _this = _possibleConstructorReturn(this, (PostDialogComponent.__proto__ || Object.getPrototypeOf(PostDialogComponent)).call(this, props));

        _this.state = {
            uname: localStorage.getItem("uname"),
            filepath: localStorage.getItem("filepath")
        };

        return _this;
    }

    _createClass(PostDialogComponent, [{
        key: "render",
        value: function render() {

            return React.createElement(
                "div",
                { id: "postDialog" },
                React.createElement(
                    "div",
                    { id: "postDialogHeader" },
                    React.createElement(
                        "button",
                        { id: "closePostDialog" },
                        "X"
                    ),
                    React.createElement(
                        "h1",
                        null,
                        "What Did You Want to Post?"
                    )
                ),
                React.createElement(
                    "div",
                    { id: "postDialogBody" },
                    React.createElement(
                        "form",
                        { id: "postForm" },
                        React.createElement("textarea", {
                            id: "postText",
                            name: "postText",
                            placeholder: "What's on your mind?",
                            rows: "10" }),
                        React.createElement("canvas", {
                            id: "pictureCanvas",
                            width: "50px",
                            height: "50px" }),
                        React.createElement("input", {
                            type: "file",
                            title: "postImage",
                            id: "postImage",
                            name: "postImage",
                            accept: "image/*" }),
                        React.createElement("input", {
                            type: "submit",
                            id: "postSubmit",
                            value: "Post" })
                    )
                ),
                React.createElement(
                    "div",
                    { id: "userinfo" },
                    React.createElement(
                        "canvas",
                        {
                            id: "pfpCanvas",
                            width: "50px",
                            height: "50px" },
                        React.createElement("img", {
                            src: this.state.filepath,
                            alt: this.state.uname,
                            id: "postPFP" })
                    ),
                    React.createElement(
                        "p",
                        null,
                        "Posting As: ",
                        React.createElement(
                            "a",
                            { id: "userProfile", href: " profile_link" },
                            this.state.uname
                        )
                    )
                )
            );
        }
    }, {
        key: "componentDidMount",
        value: function componentDidMount() {

            var canvas = document.getElementById("pfpCanvas"); // Get the canvas

            var ctx = canvas.getContext("2d");

            var image = new Image();

            image.src = this.state.filepath;

            image.onload = function () {

                console.log("height: " + image.height + "width: " + image.width);

                ctx.width = $("#postDialogBody").width * 0.02; // Set the canvas to half the size of the image

                ctx.height = image.height * 0.02; // Set the canvas to half the size of the image

                ctx.drawImage(image, 0, 0, 50, 50); // Draw the image to the canvas
            };
        }
    }]);

    return PostDialogComponent;
}(React.Component);

export { PostDialogComponent };