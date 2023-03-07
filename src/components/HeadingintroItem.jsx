import React from "react";

export default function HeadingintroItem({
  headingName,
  headingJobTitle,
  headingIntro,
}) {
  return (
    <div className="ps-5 header-info">
      <h1>{headingName}</h1>
      <p>
        <em>{headingJobTitle}</em>
      </p>
      <p className="heading-intro">{headingIntro}</p>
    </div>
  );
}
