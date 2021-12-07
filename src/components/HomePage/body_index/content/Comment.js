import React, { Component } from "react";

class Comment extends Component {
  //   constructor(props) {
  //     super(props);
  //     this.state = {
  //       accountID: "",
  //       productsID: "",
  //       comments: [],
  //       comment: "",
  //     };
  //   }

  render() {
    return (
      <div key={this.props.id} className="comment-product-rating">
        <div className="comment-head">
          <div className="comment-avatar">
            <i
              className="fas fa-user  fa-2x"
              style={{
                paddingTop: "15px",
                paddingLeft: "16px",
                color: "#444444",
              }}
            />
            {/* <img className="comment-avatar__img" src="icon người dùng" /> */}
          </div>
          <div className="comment-author-name">{this.props.accountName}</div>
        </div>

        <div className="comment-main">
          {/* <div className="comment-rating">{this.props.rank}Số sao đánh giá</div> */}
          <div className="comment-content">{this.props.comment}</div>
          {/* <div className="comment-image-list">
            <img className="comment-img" src={this.props.img} />
          </div> */}
          <div className="comment-time">{this.props.createAt}</div>
        </div>
      </div>
    );
  }
}

export default Comment;
