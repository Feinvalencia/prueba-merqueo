import React from "react";
import { connect } from "react-redux";
import Publication from './content';

class Post extends React.Component {
  render() {
    return (
      <div>
        <Publication posts={this.props.posts} />
      </div>
    );
  }

}

function mapStateToProps(state) {
  return {
    posts: state.post.publications
  };
}

export default connect(mapStateToProps)(Post);