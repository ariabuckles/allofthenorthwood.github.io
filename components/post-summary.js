"use strict";

import React from "react";
import Router from "react-router";
import SimpleMarkdown from "simple-markdown";
import { StyleSheet, css } from "../lib/aphrodite.js";

const Link = Router.Link;

import SS from "../styles/shared.js";

import PostContent from "./post-content.js";

const PostSummary = React.createClass({
  propTypes: {
    post: React.PropTypes.shape({
      content: React.PropTypes.string.isRequired,
      slug: React.PropTypes.string.isRequired,
      title: React.PropTypes.string.isRequired,
    }),
  },

  render: function () {
    const {
      content,
      slug,
      title,
    } = this.props.post;

    return <div>
      <div className={css(ST.post)}>
        <h1 className={css(ST.title)}>
          Title of this Blog Post
        </h1>
        <div className={css(ST.date)}>
          Tuesday Nov 5, 2015
        </div>
        <div className={css(ST.postContent)}>
          <PostContent markdownContent={content.split("\n\n")[0]} />
        </div>
        <Link className={css(ST.link)} to={`/post/${slug}`}>Read more</Link>
      </div>
    </div>;
  },
});

const ST = StyleSheet.create({
  title: {
    fontSize: SS.font.lessLargeSize,
    lineHeight: SS.font.largeLineHeight,
    textAlign: "center",
  },
  date: {
    color: SS.color.grey,
    fontFamily: SS.font.sansFamily,
    fontSize: SS.font.smallSize,
    textAlign: "center",
    textTransform: "uppercase",
  },
  post: {
    padding: `0 ${SS.layout.padding}px`,
  },
  postContent: {
    fontSize: SS.font.contentSize,
    margin: "0 auto",
    maxWidth: SS.layout.maxWidth,
  },
  link: SS.link,
});

module.exports = PostSummary;