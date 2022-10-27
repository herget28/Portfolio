import React from "react";

import {
  Section,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";

const MyAccomplishments = () => (
  <Section>
    <SectionTitle>My Accomplishments</SectionTitle>

    <SectionText>
      -Completed my Bachelor Degree in Software Engineering with 'VERY GREAT
      DISTINICTION' of CGPA 3.82.
      <br />-
      <a
        style={{
          textUnderlineOffset: 0,
          textDecorationLine: "underline",
          textDecorationStyle: "solid",
          textDecorationColor: "gold",
          color: "gold",
        }}
        href="https://www.linkedin.com/posts/hermela-getnet-407ab9211_activity-6913454422119391232-4Zcb?utm_source=share&utm_medium=member_android"
      >
        Microsoft Certified Azure Data Scientist Associate
      </a>{" "}
      <br />-
      <a
        style={{
          textUnderlineOffset: 0,
          textDecorationLine: "underline",
          textDecorationStyle: "solid",
          textDecorationColor: "gold",
          color: "gold",
        }}
        href="https://github.com"
      >
        Certificate
      </a>{" "}
      in Oracle Database 11g: SQL Fundamentals.
      <br />-
      <a
        style={{
          textUnderlineOffset: 0,
          textDecorationLine: "underline",
          textDecorationStyle: "solid",
          textDecorationColor: "gold",
          color: "gold",
        }}
        href="https://github.com"
      >
        Certificate
      </a>{" "}
      in Oracle 12c Database: Administration Workshop. <br />-
      <a
        style={{
          textUnderlineOffset: 0,
          textDecorationLine: "underline",
          textDecorationStyle: "solid",
          textDecorationColor: "gold",
          color: "gold",
        }}
        href="https://github.com"
      >
        Certificate
      </a>{" "}
      in Oracle Java SE 8 Programmer 1.
      <br />-
      <a
        style={{
          textUnderlineOffset: 0,
          textDecorationLine: "underline",
          textDecorationStyle: "solid",
          textDecorationColor: "gold",
          color: "gold",
        }}
        href="https://github.com"
      >
        Certificate
      </a>{" "}
      in Oracle Java EE 7 Application Developer.
      <br />
    </SectionText>
  </Section>
);

export default MyAccomplishments;
