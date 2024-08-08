// For todays date;
var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

Date.prototype.today = function () {
  return (this.getDate() < 10 ? "0" : "") +
  this.getDate() + " " +
  months[this.getMonth()] + " " +
  this.getFullYear() + " - " + (
  this.getHours() < 10 ? "0" : "") +
  this.getHours() + ":" + (
  this.getMinutes() < 10 ? "0" : "") +
  this.getMinutes()
  /*  +":"+ ((this.getSeconds() < 10)?"0":"") + this.getSeconds() */;
};

var NavBar = React.createClass({
  displayName: "NavBar",
  render: function () {
    var navList = [
    
      { name: 'About', href: 'about.html' },
      { name: 'Home', href: '#' },
      { name: 'Blog', href: '#' },
      
    ];
    var navLinks = navList.map(function (item) {
      return /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", { href: item.href }, item.name));
    });

    return /*#__PURE__*/(
      React.createElement("header", null, /*#__PURE__*/
      React.createElement("div", { className: "navbar" }, /*#__PURE__*/
      React.createElement("ul", null,
      navLinks))));
  }
});



var Home = React.createClass({
  displayName: "Home",
  render: function () {
    const titleStyle = {
      background: 'rgba(255, 255, 255, 0.5)',
      backdropFilter: 'blur(5px)',
      padding: '20px',
      borderRadius: '10px'
    };

    return /*#__PURE__*/(
      React.createElement("section", { className: "home clearfix" }, /*#__PURE__*/
      React.createElement(NavBar, null), /*#__PURE__*/
      React.createElement("div", { className: "home-title", style: titleStyle }, /*#__PURE__*/
      React.createElement("h1", null, "ATL", /*#__PURE__*/React.createElement("br", null), " Blogs")), /*#__PURE__*/
      React.createElement("button", { id: "add-post" }, "ADD POST")));
  }
});



var SinglePost = React.createClass({ displayName: "SinglePost",
  render: function () {
    return /*#__PURE__*/(
      React.createElement("div", { className: "post-container" }, /*#__PURE__*/
      React.createElement("div", null, /*#__PURE__*/
      React.createElement("div", { className: "post-image" }, /*#__PURE__*/React.createElement("img", { src: this.props.postPhoto, className: "post-photo" })), /*#__PURE__*/
      React.createElement("div", { className: "post-content" }, /*#__PURE__*/
      React.createElement("h2", { className: "post-title" }, this.props.postTitle), /*#__PURE__*/
      React.createElement("p", { className: "post-text" }, this.props.postText))), /*#__PURE__*/


      React.createElement("hr", null), /*#__PURE__*/
      React.createElement("div", { className: "post-info" }, /*#__PURE__*/
      React.createElement("div", { className: "tags-container" },
      this.props.postTags.map(function (data) {
        return /*#__PURE__*/React.createElement("p", null, data);
      })), /*#__PURE__*/

      React.createElement("p", { className: "post-author" }, "Written by: ", /*#__PURE__*/React.createElement("span", { style: { fontStyle: 'italic', textDecoration: 'underline' } }, this.props.postAuthor)), /*#__PURE__*/
      React.createElement("p", { className: "date" }, this.props.time))));



  } });


var Posts = React.createClass({ displayName: "Posts",
  getInitialState: function () {
    return {
      post_photo: 'http://i1040.photobucket.com/albums/b406/purpleswag/your-blog-logo-280x224_zpsdcutthrb.png',
      post_text: '',
      post_title: '',
      post_tags: '',
      post_author: '',
      photo_value: '',
      title_value: '',
      text_value: '',
      tags_value: '',
      author_value: '',
      time: '',
      postsContent: [] };

  },

  changeForm: function (data) {
    this.setState(data);
  },

  update: function () {
    var currentDate = new Date();
    var dateTime = currentDate.today();
    this.setState({
      postsContent: this.state.postsContent.concat({
        post_photo: this.state.post_photo,
        post_text: this.state.post_text,
        post_title: this.state.post_title,
        post_tags: this.state.post_tags.split(', '),
        post_author: this.state.post_author,
        time: dateTime }),

      photo_value: '',
      title_value: '',
      text_value: '',
      tags_value: '',
      author_value: '' });



    modal.style.display = "none";
  },

  render: function () {

    return /*#__PURE__*/(
      React.createElement("section", { className: "posts clearfix" }, /*#__PURE__*/
      React.createElement(AddPost, {
        changeForm: this.changeForm,
        update: this.update,
        photoValue: this.state.photo_value,
        titleValue: this.state.title_value,
        textValue: this.state.text_value,
        tagsValue: this.state.tags_value,
        authorValue: this.state.author_value }),
      this.state.postsContent.map(function (content) {
        return /*#__PURE__*/React.createElement(SinglePost, { postText: content.post_text, postTitle: content.post_title, postPhoto: content.post_photo, postTags: content.post_tags, postAuthor: content.post_author, time: content.time });
      })));


  } });


var AddPost = React.createClass({ displayName: "AddPost",
  changePhoto: function (event) {
    this.props.changeForm({
      post_photo: event.target.value,
      photo_value: event.target.value });

  },

  changeTitle: function (event) {
    this.props.changeForm({
      post_title: event.target.value,
      title_value: event.target.value });

  },

  changeText: function (event) {
    this.props.changeForm({
      post_text: event.target.value,
      text_value: event.target.value });

  },

  changeTags: function (event) {
    this.props.changeForm({
      post_tags: event.target.value,
      tags_value: event.target.value });

  },

  changeAuthor: function (event) {
    this.props.changeForm({
      post_author: event.target.value,
      author_value: event.target.value });

  },

  render: function () {
    return /*#__PURE__*/(
      React.createElement("div", { className: "modal", id: "myModal" }, /*#__PURE__*/
      React.createElement("div", { className: "modal-content" }, /*#__PURE__*/
      React.createElement("span", { className: "close-modal" }, "x"), /*#__PURE__*/
      React.createElement("ul", null, /*#__PURE__*/
      React.createElement("li", null, /*#__PURE__*/React.createElement("p", null, "Photo:"), /*#__PURE__*/React.createElement("input", { type: "text", className: "post-photo-input", placeholder: "Post's photo (direct URL)", onChange: this.changePhoto, value: this.props.photoValue })), /*#__PURE__*/
      React.createElement("li", null, /*#__PURE__*/React.createElement("p", null, "Title:"), /*#__PURE__*/React.createElement("input", { type: "text", ref: "titleInput", className: "post-title-input", placeholder: "Enter the title of your post", onChange: this.changeTitle, value: this.props.titleValue })), /*#__PURE__*/
      React.createElement("li", null, /*#__PURE__*/React.createElement("p", null, "Text:"), /*#__PURE__*/React.createElement("textarea", { ref: "myArea", className: "post-text-input", placeholder: "Enter text of your post", rows: "10", onChange: this.changeText, value: this.props.textValue })), /*#__PURE__*/
      React.createElement("li", null, /*#__PURE__*/React.createElement("p", null, "Tags:"), /*#__PURE__*/React.createElement("input", { type: "text", className: "post-tags", placeholder: "Enter tags (e.g. nature, travel, politic)", onChange: this.changeTags, value: this.props.tagsValue })), /*#__PURE__*/
      React.createElement("li", null, /*#__PURE__*/React.createElement("p", null, "Author:"), /*#__PURE__*/React.createElement("input", { type: "text", className: "post-author", placeholder: "Enter your name", onChange: this.changeAuthor, value: this.props.authorValue }))), /*#__PURE__*/

      React.createElement("button", { onClick: this.props.update, className: "modal-add-post" }, "ADD POST"))));



  } });


var MainApp = React.createClass({ displayName: "MainApp",
  render: function () {
    return /*#__PURE__*/(
      React.createElement("div", null, /*#__PURE__*/
      React.createElement(Home, null), /*#__PURE__*/
      React.createElement(Posts, null)));


  } });


ReactDOM.render( /*#__PURE__*/React.createElement(MainApp, null),
document.getElementById('app'));



var add_btn = document.getElementById('add-post');
var modal = document.getElementById('myModal');
var close = document.getElementsByClassName('close-modal')[0];

add_btn.onclick = function () {
  modal.style.display = "block";
};

close.onclick = function () {
  modal.style.display = "none";
};

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};