import React from "react";
import Footer from "./Footer";
import Title from "./Title";
import axios from "axios";

class Register extends React.Component {
    constructor() {
        super();
        this.state = {
            redirectaj: false
        }
    }
    handleSubmit = (e) => {
        e.preventDefault();
        var novi = e.target;
        axios
            .post("http://localhost:8080/register", {
                name: novi.name.value,
                lastName: novi.lastName.value,
                email: novi.email.value,
                creditCard: novi.creditCard.value,
                phone: novi.phone.value,
                address: novi.address.value,
                password: novi.pass.value
            })
            .then(res => {
                if (res.data.success) {
                    console.log("registrovan");
                    this.setState({
                        redirectaj: true
                    })
                }

            })
            .catch(err => {
                console.log(err);
            })
    }
    render() {
        return (
            <>
                <div className="container-fluid"
                    style={{
                        backgroundColor: "#efefef",
                        fontFamily: "-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif",
                        height: "calc(100vh - 60px)"
                    }}>
                    <div className="row mx-lg-5" style={{ height: "100%" }}>
                        <div className="col-lg col-md-12 " >
                            <Title
                                fontSize="140px"
                                fontWeight="lighter"
                                color="#666666"
                                text="#TECH"
                            />
                            <div>
                                <p style={{
                                    color: "#b2b2b2",
                                    textAlign: "left",
                                    fontSize: "20px"
                                }}>
                                    Welcome to #tech!<br></br><br></br>
                                    In order to become our customer, please fill out the registration form. All fields are required.
                                </p>
                            </div>
                        </div>
                        <div class="col-md-6 col-lg-4 align-self-center mx-lg-2"  >

                            <div style={{
                                textAlign: "left"
                            }}>

                                <form onSubmit={(e) => this.handleSubmit(e)}>
                                    <h1 style={{
                                        fontSize: "50px",
                                        fontWeight: "lighter",
                                        color: "#666666"
                                    }} >Registration Form</h1>
                                    <br></br>
                                    <input type="text" class="form-control form-control-lg" placeholder="NAME" name="name" />
                                    <br></br>
                                    <input type="text" class="form-control form-control-lg" placeholder="LAST NAME" name="lastName" />
                                    <br></br>
                                    <input type="text" class="form-control form-control-lg" placeholder="ADDRESS" name="address" />
                                    <br></br>
                                    <input type="text" class="form-control form-control-lg" placeholder="EMAIL" name="email" />
                                    <br></br>
                                    <input type="password" class="form-control form-control-lg" placeholder="PASSWORD" name="pass" />
                                    <br></br>
                                    <input type="password" class="form-control form-control-lg" placeholder="CONFIRM PASSWORD" />
                                    <br></br>
                                    <input type="text" class="form-control form-control-lg" placeholder="PHONE" name="phone" />
                                    <br></br>
                                    <input type="text" class="form-control form-control-lg" placeholder="CREDIT CARD" name="creditCard" />
                                    <br></br>
                                    <button
                                        style={{
                                            width: "200px",
                                            height: "50px",
                                            borderRadius: "10px",
                                            backgroundColor: "#2d2d2d",
                                            borderColor: "#2d2d2d",
                                            fontSize: "15px",
                                            color: "white"

                                        }}
                                        type="submit"
                                        data-toggle="modal"
                                        data-target="#confirm"
                                    >R E G I S T E R</button>
                                </form>

                            </div>
                        </div>

                    </div>

                </div>
                <Footer />

                <div class="modal" class="modal fade" id="confirm" onExited={() => {
                    console.log("mrs")
                }}>
                    <div class="modal-dialog modal-dialog-centered">
                        <div class="modal-content">

                            <div class="modal-header">
                                <h4 class="modal-title">Welcome!</h4>
                            </div>

                            <div class="modal-body" style={{ textAlign: "left" }}>
                                Your registration is complete.
                            </div>

                            <div class="modal-footer">
                                <button type="button" class="btn btn-success" data-dismiss="modal" >Ok</button>
                            </div>

                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default Register;