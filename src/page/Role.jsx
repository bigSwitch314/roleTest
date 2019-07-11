import React from "react";

class Role extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  static getDerivedStateFromProps(props, state) {
    if (props.userList !== state.userList) {
      return { userList: props.userList };
    }

    return null;
  }

  componentDidMount() {}

  render() {
    return <div className="container">角色----</div>;
  }
}

export default Role;
