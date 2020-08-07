// @flow
import React, { useEffect } from "react";
import Nav from "react-bootstrap/Nav";
import { connect } from "react-redux";

import { getCategories } from "../../state/categories/actions";
import {
  categoriesSelector,
  isSuccess,
} from "../../state/categories/selectors";

type Props = {
  categories: Array<any>,
  success: boolean,
  getCategories: () => void,
};
const Sidebar = (props: Props) => {
  const { categories, success, getCategories } = props;

  useEffect(() => {
    getCategories();
  }, []);

  return (
    <Nav
      className="col-md-12 d-block bg-light sidebar"
      activeKey="/home"
      onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
    >
      <h3>Blog Categories</h3>
      {!success ? (
        <h1>LODING...</h1>
      ) : (
        categories.resultData.map((category) => {
          return (
            <Nav.Item>
              <Nav.Link href="/home">{category.name}</Nav.Link>
            </Nav.Item>
          );
        })
      )}
    </Nav>
  );
};

const mapStateToProps = (state) => {
  return {
    categories: categoriesSelector(state),
    success: isSuccess(state),
  };
};
export default connect(mapStateToProps, { getCategories })(Sidebar);
