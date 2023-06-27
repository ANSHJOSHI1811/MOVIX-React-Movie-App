
//? Its is the Higher-Order Component that Wraps all the Content towards Centre
import React from "react";

import "./style.scss";

const ContentWrapper = ({ children }) => {
    return <div className="contentWrapper">{children}</div>;
};

export default ContentWrapper;