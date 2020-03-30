import React from "react";
import ReactDOM from "react-dom";
import PageTitle from "./PageTitle.jsx";

const heading = "Test Heading";
const subHeading = "This is a test subheading.";

const PageTitleLocal = () => {
    return (
        <PageTitle heading={heading} subHeading={subHeading} />
    );
};

ReactDOM.render(<PageTitleLocal />, document.getElementById("root"));