import React, { Component, useState, useEffect } from "react";
import { connect } from "react-redux";
import { getBlogPosts, sendBlogPost } from "../../state/blogPosts/actions";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Jumbotron from "react-bootstrap/Jumbotron";
import Spinner from "react-bootstrap/Spinner";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import DeleteDialog from "../../components/Dialogs";
import ApplicationMessage from "../../components/ApplicationMessage";
import Navigation from "../../components/Navigation";
import FormDialog from "../../components/FormDialog";
import Sidebar from "../../components/Sidebar";

import { blogPosts, isSuccess } from "../../state/blogPosts/selectors";
import PostList from "../../widgets/PostList";

import "./style.css";

const Home = (props) => {
  const { getBlogPosts, sendBlogPost, posts, success } = props;
  const [modalShow, setModalShow] = useState(false);
  const [deleteModal, setDeleteModal] = useState(false);
  const [value, setValue] = useState({
    title: "",
    text: "",
  });

  useEffect(() => {
    getBlogPosts();
  }, []);

  const openModal = () => {
    setModalShow(true);
  };

  const closeModal = () => {
    setModalShow(false);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    sendBlogPost(value);
    console.log(value);

    setModalShow(false);
  };

  const onChange = (event) => {
    setValue({
      ...value,
      [event.target.name]: event.target.value,
    });
  };

  const closeDeleteModal = () => {
    setDeleteModal(false);
  };
  const editPost = () => {};

  const deletePost = () => {}
  const openDeleteModal = () => {
    setDeleteModal(true);
  };
  return (
    <>
      <Navigation />

      <ApplicationMessage />

      <div>
        <Button variant="dark" onClick={openModal}>
          Add Post
        </Button>
      </div>
      <div>
        <Container fluid>
          <Row>
            <Col>
              <Sidebar />
            </Col>
            <Col sm={10}>
              {!success ? (
                <Spinner animation="border" size="lg" className="spinner" />
              ) : (
                <PostList
                  posts={posts}
                  onEdit={editPost}
                  onDelete={openDeleteModal}
                />
              )}
            </Col>
          </Row>
        </Container>

        <FormDialog
          show={modalShow}
          onHide={closeModal}
          onSubmit={onSubmit}
          onCancel={closeModal}
          onChange={onChange}
        />

        <DeleteDialog
          deleteModal={deleteModal}
          closeDeleteModal={closeDeleteModal}
          deletePost={deletePost}
        />
      </div>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    posts: blogPosts(state),
    success: isSuccess(state),
  };
};

export default connect(mapStateToProps, { getBlogPosts, sendBlogPost })(Home);
