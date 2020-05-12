import styled from 'styled-components';

export const HeaderStyle = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width:100vw;
  height: 50px;

  &.sticky {
    background-color: #fff;
    box-shadow: 0 3px 6px rgba(0, 0, 0, .16);
  }

  .logo {
    max-width: 100%;
    max-height: 30px;
    margin-left: 20px;
  }

  ul {
    list-style: none;
    display: flex;
    flex-direction: row;
    margin-right: 20px;

    li {
      list-style: none;
      display: block;
      padding: 5px 10px;
      margin-left: 20px;
      font-weight: 600;
      font-size: .9rem;
      cursor: pointer;

      &.start {
        color: #fff;
        background-color: #ffc560;
        border-radius: 20px;
      }
    }
  }

  @media (max-width: 640px) {
    ul {
      li:not(.start) {
        display: none;
      }
    }
  }
`;

export const HomeStyle = styled.div`
  width:100vw;
  height: 100vh;
  background: url('images/bg-home.png') no-repeat center right;
  background-size: 95%;
  display: flex;
  align-items: center;
  justify-content: center;

  .hide-desktop {
    display: none;
  }

  h1 span {
    color: #45cedd;
  }

  .window {
    width: 1000px;
    height: 500px;
    background: #fff url('images/btn-mac.svg') no-repeat 10px 10px;
    background-size: 50px;
    border-radius: 14px;
    box-shadow: 0 3px 39px rgba(0, 0, 0, .16);
    box-sizing: border-box;
    display: flex;
    padding: 50px 20px;

    .main-image {
      max-width: 100%;
    }

    .row {
      width: 50%;
    }

    .divider {
      height: 2px;
      width: 100px;
      background-color: #000;
      margin: 20px 0;
    }

    button.start {
      display: block;
      width: fit-content;
      color: #fff;
      font-size: .9rem;
      font-weight: 700;
      padding: 10px 30px;
      background-color: #ffc560;
      border: 0;
      border-radius: 20px;
      cursor: pointer;
    }
  }

  .row {
    display: flex;
    flex-direction: row;
  }

  .column {
    display: flex;
    flex-direction: column;
  }

  @media (max-width: 640px) {
    background: #fff;
    box-sizing: border-box;
    padding: 50px 20px 0;
    height: unset;
    min-height: 100vh;

    .hide-desktop {
      display: block;

      img {
        max-width: 80%;
      }
    }

    h1 {
      font-size: 1.3rem;
    }

    .window {
      background: none;
      box-shadow: none;
      width: 100%;
      height: unset;
      padding: 0;
      flex-direction: column;

      .divider {
        display: none;
      }

      .main-image {
        display: none;
      }

      button.start {
        margin: 0 auto 20px;
      }
    }

    .row,
    .column {
      display: flex;
      flex-direction: column;
      width: 100% !important;
      text-align: center;
    }
  }
`;

export const HowItWorksStyle  = styled.div`
  width:100%;
  height: 100vh;
  background: url('images/bg-yellow.png') no-repeat 0 -40px;
  background-size: contain;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;

  h1.content,
  p.content {
    color: #fff;
    margin: 0;
    padding: 0;
  }

  p.content {
    width: 55%;
    font-weight: 500;
  }

  .divider {
    height: 2px;
    width: 100px;
    background-color: #fff;
    margin: 20px 0;
  }

  .row {
    display: flex;
    flex-direction: row;
    margin: 40px 0;

    .step {
      width: 280px;
      height: 260px;
      margin: 0 20px;
      background-color: #fff;
      border-radius: 16px;
      box-shadow: 0 3px 10px rgba(0, 0, 0, .16);
      padding: 20px;
      text-align: center;

      .divider {
        margin: 5px auto;

        &.lightgreen {
          background-color: #87f6ce;
        }
      }

      img {
        max-width: 80%;
      }

      p {
        font-weight: 600;
      }
    }
  }

  @media (max-width: 640px) {
    background-size: 250%;
    background-position: top center;
    box-sizing: border-box;
    padding: 0 20px;
    height: unset;
    min-height: 100vh;

    h1.content {
      font-size: 1.3rem;
      margin: 0;
      padding: 0;
    }
    p.content {
      width: 100%;
    }

    .divider {
      margin-top: 10px;
    }

    .row {
      width: 90vw;
      height: 320px;
      flex-direction: row;
      overflow-x: scroll;

      .step {
        flex: 0 0 auto;
        margin: 0 10px;
      }
    }
  }
`;

export const AboutUsStyle  = styled.div`
  width:100%;
  height: 150vh;
  background: url('images/bg-about.png') no-repeat center bottom;
  background-size: 103%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding-top: 50px;

  h1 span {
    color: #45cedd;
  }

  .divider {
    height: 2px;
    width: 100px;
    background-color: #000;
    margin: 20px 0;
  }

  .row {
    display: flex;
    flex-direction: row;
  }

  .column {
    display: flex;
    flex-direction: column;

    &.w35 {
      width: 45%;
      padding: 20px 40px;
      box-sizing: border-box;
    }
    &.w65 {
      width: 55%;
      padding: 40px;
      background: url('images/img_why.svg') no-repeat right bottom;
      background-size: 30%;
    }

    &.w50 {
      width: 50%;
    }
  }

  .option {
    width: 65%;
    padding: 10px;
    margin-bottom: 30px;
    align-items: flex-start;

    &:first-child {
      box-shadow: 0 0 39px rgba(69, 206, 221, .33);
    }

    img {
      max-width: 80px;
    }

    p {
      margin: 0;
      padding: 0 0 0 20px;
      font-size: .8rem;

      &.title {
        font-size: 1rem;
        padding-bottom: 10px;
      }
    }
  }

  .percent {
    width: 200%;
    color: #45cedd;
    font-size: 1rem;
    font-weight: 500;
    margin-top: 130px;

    span {
      font-size: 5rem;
      font-weight: 600;
      padding-right: 20px;
    }
  }

  .content {
    width: 250%;
    font-size: 1rem;
    font-weight: 600;
    color: #fff;
    border-left: 2px solid #fff;
    padding-left: 20px;
    margin-top: 30px;
    margin-left: -40px;

    p {
      margin: 0;
      padding: 10px 0 20px 10px;
    }
  }

  @media (max-width: 640px) {
    background-size: 290%;
    background-position-x: -600px;
    box-sizing: border-box;
    padding: 0 20px;
    height: unset;
    min-height: 100vh;
    text-align: center;

    h1 {
      font-size: 1.3rem;
    }

    .divider {
      display: none;
    }

    .row,
    .column {
      width: 100%;
      flex-direction: column;

      &.w35,
      &.w65,
      &.w50 {
        width: 100%;
        margin: 0;
        padding: 0;
        background: none;
      }
    }

    .option {
      width: 95%;
      margin: 20px auto;
      box-shadow: 0 0 18px rgba(69,206,221,.33);
      text-align: left;

      img {
        max-width: 60px;
      }

      &.row {
        flex-direction: row;
      }
    }

    .percent {
      margin-top: 80px;
      width: 100%;
      color: #fff;
    }

    .content {
      width: 100%;
      border: 0;
      margin: 0;
      padding: 0 0 60px;

      p {
        padding: 0;
        font-size: .8rem;
      }
    }
  }
`;

export const StartStyle  = styled.div`
  width:100%;
  height: 100vh;
  background: url('images/bg-start.png') no-repeat center bottom;
  background-size: contain;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  .row {
    display: flex;
    flex-direction: row;
  }

  .column {
    display: flex;
    flex-direction: column;
  }

  button.start {
    display: block;
    width: fit-content;
    color: #fff;
    font-size: .9rem;
    font-weight: 700;
    padding: 10px 30px;
    background-color: #ffc560;
    border: 0;
    border-radius: 20px;
    cursor: pointer;
  }

  button.back {
    display: block;
    width: fit-content;
    color: #000;
    background-color: #fff;
    font-size: .7rem;
    font-weight: 500;
    padding: 6px 18px;
    border: 1px solid #000;
    border-radius: 20px;
    cursor: pointer;
  }

  .cards {
    width: 90%;
    padding: 20px;
    box-sizing: border-box;
    display: flex;
    flex-direction: row;
    overflow-x: hidden;

    .card {
      /* scroll-margin: 20px; */
      box-shadow: 0 3px 20px rgba(0, 0, 0, .16);
      box-sizing: border-box;
      background-color: #fff;
      border-radius: 15px;
      padding: 40px;
      margin-right: 80px;
      width: 100%;
      flex: 0 0 auto;

      &.step1 {
        /* display: none; */
        background: #fff url('images/bg-step1.svg') no-repeat bottom right;
        background-size: 45%;

        .content {
          width: 60%;
          padding-bottom: 50px;

          h2 {
            margin: 0;
            padding: 0;
          }

          .divider {
            height: 2px;
            width: 100px;
            background-color: #000;
            margin: 20px 0;
          }

          button.start {
            margin-top: 80px;
          }
        }
      }

      &.step2 {
        .column {
          margin-right: 10px;
        }

        .row:last-child {
          margin-top: 40px;

          button.start {
            margin-top: 30px;
            margin-left: 200px;
          }
        }

        label {
          font-size: .9rem;
          font-weight: 600;
          padding-bottom: 10px;
        }

        input {
          border: 1px solid rgb(0, 0, 0, .21);
          padding: 5px 5px 5px 25px;
          border-radius: 6px;
          height: 20px;
          width: 220px;
          background-size: 12px;

          &#name {
            background: #fff url('images/icon-person.svg') no-repeat 8px -26px;
            background-size: 12px;
          }
          &#phone {
            background: #fff url('images/icon-phone.svg') no-repeat 8px -28px;
            background-size: 14px;
          }
          &#company {
            background: #fff url('images/icon-commerce.svg') no-repeat 8px -26px;
            background-size: 16px;
          }
          &#city,
          &#address {
            background: #fff url('images/icon-location.svg') no-repeat 8px -27px;
            background-size: 12px;
          }
          &#address {
            width: 480px;
          }

          &:focus {
            border: 1px solid #45cedd;

            &#name {
              background-position-y: 8px;
            }
            &#phone {
              background-position-y: 9px;
            }
            &#company {
              background-position-y: 7px;
            }
            &#city,
            &#address {
              background-position-y: 8px;
            }
          }

        }
      }

      &.step3 {
        .group-question {
          display: none;
          &.show {
            display: flex;
            flex-direction: column;
            width: 100%;
            border-top: 2px solid #ffc560;

            .questions {
              display: grid;
              grid-template-columns: repeat(4, 1fr);
              grid-column-gap: 20px;
              grid-row-gap: 20px;
              margin: 30px auto;
              width: 90%;

              label {
                font-size: .9rem;
                padding-left: 10px;
              }

              input#type-other {
                border: 1px solid rgb(0, 0, 0, .21);
                padding: 5px;
                border-radius: 6px;
                height: 20px;
                width: 100%;
                background-size: 12px;
              }
            }

            .actions-buttons {
              display: flex;
              flex-direction: row;
              justify-content: space-around;
            }
          }
        }

        div.question {
          width: 25%;
          margin: 1.5%;
          padding: 15px;
          text-align: center;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: flex-start;
          cursor: pointer;

          &.selected {
            border-radius: 19px;
            box-shadow: 0 3px 6px rgba(0, 0, 0, .16);
          }

          .number.finished {
            text-indent: -99999px;
            background: url('images/icon-done.svg') no-repeat center center;
            background-size: contain;
          }

          p {
            margin: 0;
            padding: 0;
            font-size: .8rem;
            &.number {
              font-size: 1.2rem;
              display: block;
              width: 30px;
              height: 30px;
              margin-bottom: 10px;
            }
          }
        }
      }
    }
  }

  @media (max-width: 640px) {
    background-image: none;
    box-sizing: border-box;
    padding: 0 20px;
    height: unset;
    min-height: 100vh;
    text-align: center;

    .cards {
      width: 100%;
      padding: 0;

      .card {
        box-shadow: none;
        background-color: transparent !important;
        width: 100%;
        padding: 0;
        margin: 0;

        h2 {
          font-size: 1.2rem;
        }

        &.step1 {
          background-position: top center;
          background-size: 95%;
          padding-top: 240px;

          .content {
            width: 100%;

            .divider {
              display: none;
            }

            button.start {
              margin: 80px auto 0;
            }
          }
        }

        &.step2 {
          .row,
          .column {
            margin: 0;
            width: 100%;
            flex-direction: column;
          }

          .row:last-child {
            margin-top: 0;
            button.start {
              margin: 0 auto;
            }
          }

          label {
            text-align: left;
          }

          input {
            width: initial !important;
            margin-bottom: 20px;
          }
        }

        &.step3 {
          width: 100%;

          .row,
          .column {
            width: 100%;
            flex-direction: column;
          }

          div.question {
            width: 100%;
            box-shadow: none !important;
            box-sizing: border-box;
            margin: 0 0 10px;
            border-radius: 19px;
            padding: 10px;
            flex-direction: row;
            text-align: left;

            &.selected {
              border: 1px solid #c5c5c5;
              &.finished {
                border: 1px solid #87f6ce;
              }
            }

            &.finished {
              background-color: #87f6ce;
              color: #fff;
            }

            p.number {
              margin: 0;
              height: unset;
              font-weight: 600;

              &.finished {
                text-indent: 0;
                background: none;
              }
            }
          }

          .group-question {
            &.show {
              .questions {
                display: grid;
                grid-template-columns: repeat(2,1fr);
                grid-column-gap: 20px;
                grid-row-gap: 20px;
                margin: 30px auto;
                width: 90%;
                text-align: left;
              }
            }
          }
        }
      }
    }
  }
`;

export const ContactStyle  = styled.div`
  width:100%;
  height: 100vh;
  background: url('images/bg-contact.png') no-repeat center bottom;
  background-size: contain;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;

  .wrapper-title {
    width: 100%;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  h1.content,
  p.content {
    color: #000;
    margin: 0;
    padding: 0;
  }

  p.content {
    width: 40%;
    font-weight: 500;
  }

  p.white {
    color: #fff;
    font-weight: 800;
    font-size: 1.2rem;
    width: 50%;
    text-align: left;
  }

  .divider {
    height: 2px;
    width: 100px;
    background-color: #45cedd;
    margin: 10px 0;
  }


  .row {
    display: flex;
    flex-direction: row;
  }

  .column {
    display: flex;
    flex-direction: column;
  }

  button.send {
    display: block;
    width: fit-content;
    color: #fff;
    font-size: .9rem;
    font-weight: 700;
    padding: 5px 20px;
    background-color: #45cedd;
    border: 0;
    border-radius: 20px;
    cursor: pointer;
    margin-top: 10px;
    margin-left: 440px;
  }

  .wrapper-contact {
    width: 80%;

    .tabs {
      margin: 10px 0;

      .tab {
        color: #000;
        font-size: .8rem;
        font-weight: 500;
        cursor: pointer;
        margin: 0 10px;
        padding: 5px 10px;

        &.selected {
          color: #45cedd;
          border-radius: 20px;
          box-shadow: 0 3px 6px rgba(0, 0, 0, .16);
        }
      }
    }

    .contact-area {
      &.contact-email {
        background: url('images/img-contact-email.svg') no-repeat right bottom;
        background-size: 35%;

        .column {
          margin-right: 20px;
        }
        .row {
          margin-bottom: 10px;
        }

        label {
          font-size: .9rem;
          font-weight: 600;
          padding-bottom: 10px;
          text-align: left;
        }

        input,
        textarea {
          border: 1px solid rgb(0, 0, 0, .21);
          padding: 5px 5px 5px 25px;
          border-radius: 6px;
          height: 20px;
          width: 220px;

          &#email {
            background: #fff url('images/icon-person.svg') no-repeat 8px -26px;
            background-size: 12px;
          }
          &#phone1 {
            background: #fff url('images/icon-phone.svg') no-repeat 8px -28px;
            background-size: 14px;
          }

          &:focus {
            border: 1px solid #45cedd;

            &#email {
              background-position-y: 8px;
            }
            &#phone1 {
              background-position-y: 9px;
            }
          }
        }

        textarea {
          padding: 5px;
          height: 50px;
          width: 515px;
        }
      }

      &.contact-phone {
        /* background: url('images/img-contact-phone.svg') no-repeat right bottom;
        background-size: 30%; */

        .row {
          margin: 30px;
          align-items: center;
        }

        img {
          width: 80px;
          height: 80px;
          overflow: hidden;
          border-radius: 50%;
          margin-right: 20px;
        }

        .card {
          background-color: #fff;
          box-shadow: 0 3px 6px rgba(0, 0, 0, .16);
          text-align: left;
          padding: 20px;
          width: 300px;

          .divider {
            margin: 5px 0;
          }

          p {
            margin: 0;
            padding: 0;
            font-size: .8rem;

            &.name {
              font-size: .9rem;
              font-weight: 600;
            }
          }
        }
      }

      margin-bottom: 30px;
      display: none;
      &.show {
        display: block;
      }
    }
  }

  @media (max-width: 640px) {
    background-size: 200%;
    box-sizing: border-box;
    padding: 0 20px;
    height: unset;
    min-height: 100vh;
    text-align: center;

    .wrapper-title {
      width: 100vw;
      height: 160px;
      background: url('images/bg-contact.png') no-repeat center bottom;
      background-size: cover;
      padding-top: 10px;
      justify-content: center;
    }

    h1.content {
      color: #fff;
      font-size: 1.3rem;
    }
    p.content {
      color: #fff;
      width: 100%;
    }
    .divider {
      background-color: #fff;
    }

    p.white {
      color: #fff;
      font-weight: 600;
      font-size: 1rem;
      width: 100%;
      text-align: center;
      margin-bottom: 50px;
    }

    button.send {
      margin: 0 auto;
      background-color: #ffc560;
    }

    .wrapper-contact {
      width: 100%;

      .tabs {
        margin: 30px auto;
      }

      .contact-area {
        &.contact-email {
          background-position: center bottom;
          background-size: 100%;
          padding-bottom: 240px;
        }
        .row {
          flex-direction: column;
        }
        .column {
          margin: 0 !important;
        }

        input,
        textarea {
          width: initial !important;
          margin-bottom: 20px;
        }
      }
    }
  }
`;

