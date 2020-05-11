import styled from 'styled-components';

export const HeaderStyle = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width:100%;
  height: 50px;

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
`;

export const HomeStyle = styled.div`
    width:100%;
    height: 100vh;
    background: url('images/bg-home.png') no-repeat center right;
    background-size: 95%;
    display: flex;
    align-items: center;
    justify-content: center;

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
`;

