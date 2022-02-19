//Project Component
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css'
import runBuddy from "../../assets/images/run-buddy.PNG"
import horiseon from "../../assets/images/horiseon.PNG"
import QuizTime from "../../assets/images/QuizTime.PNG"
import WeatherDash from "../../assets/images/WeatherDashboard.PNG"
import Project1 from "../../assets/images/Project1.png"
import JokeApp from "../../assets/images/JokeApp.PNG"


const Project = () => {

    return (
        <Container>
            <Row className="mb-12 text-center">
                <Col>
                    <div>
                        <h2>👇 Run Buddy 👇</h2>
                        <br></br>
                        <p>Mobile: ✅</p>
                        <br></br>
                        <b>Description: </b>
                        <br></br>
                        <p><b>Run buddy was my introduction to coding. As I constructed this website, I learned the basics
                            of
                            HTML and CSS, with regards to div alignment, forms, the box model, and basic website
                            structure,
                            all while maintaining organized code.</b></p>
                        <a href="https://teeemster.github.io/run-buddy/"><img class="sample-img"
                            src={runBuddy} alt="Sample Of The Run Buddy Website" />
                        </a>
                    </div>

                    <br></br>
                    <br></br>

                    <div>
                        <h2>👇 Horiseon 👇</h2>
                        <br></br>
                        <p>Mobile: ❌</p>
                        <br></br>
                        <b>Description: </b>
                        <br></br>
                        <p><b>Horiseon was my first refactoring assignment. The intent of this assignment was repurposing
                            the
                            website's internal code so that the CSS and HTML was more orderly. Maintaining a tidy,
                            internal
                            code is just as important as developing a clean website user interface.</b></p>
                        <a href="https://teeemster.github.io/horiseon-refacted-code/"><img class="sample-img"
                            src={horiseon} alt="Sample Of The Horiseon Website" />
                        </a>
                    </div>

                    <br></br>
                    <br></br>

                    <div>
                        <h2>👇 Quiz Time 👇</h2>
                        <br></br>
                        <p>Mobile: ❌</p>
                        <br></br>
                        <b>Description: </b>
                        <br></br>
                        <p><b>Quiz Time was my introduction to JavaScript. This website uses timers, loops, and manipulation
                            of
                            the DOM (Document Object Model). The website also incorporates browser local storage to
                            maintain
                            track of high scores.</b></p>
                        <a href="https://teeemster.github.io/timed-quiz/"><img class="sample-img"
                            src={QuizTime} alt="Sample Of The Quiz Time Website" />
                        </a>
                    </div>

                    <br></br>
                    <br></br>

                    <div>
                        <h2>👇 Weather Dash 👇</h2>
                        <br></br>
                        <p>Mobile: ❌</p>
                        <br></br>
                        <b>Description: </b>
                        <br></br>
                        <p><b>The Weather Dashboard was a particularly exciting assignment for me, as this was our first
                            introduction to server-side API's (Application Programming Interface). On this website, I
                            used
                            an API
                            from <a href="https://openweathermap.org/">https://openweathermap.org/</a> to fetch daily
                            weather, a five-day forecast, UV index,
                            humidity, and wind-speed, all while maintaining search results in browser local-storage.</b></p>
                        <a href="https://teeemster.github.io/Weather-Dashboard/"><img class="sample-img"
                            src={WeatherDash} alt="Sample Of The Weather Dashboard Website" />
                        </a>
                    </div>

                    <br></br>
                    <br></br>

                    <div>
                        <h2>👇 FinanceBot.io 👇</h2>
                        <br></br>
                        <p>Mobile: ✅</p>
                        <br></br>
                        <b>Description: </b>
                        <br></br>
                        <p><b>FinanceBot.io was our first class project. We were provided two weeks to build a website,
                            using
                            API's of our choice. For the theme of my website, I opted to go with Bitcoin and stock
                            value,
                            due to my interest in finance. In this project, two API's were utilized:
                            <a href="https://www.alphavantage.co/ ">https://www.alphavantage.co/</a> and <a
                                href="https://www.coinapi.io/">https://www.coinapi.io/</a>.</b></p>
                        <a href="https://teeemster.github.io/Bit-and-SNP-Review/"><img class="sample-img"
                            src={Project1} alt="Sample Of The Finance Bot Website" />
                        </a>
                    </div>

                    <br></br>
                    <br></br>

                    <div>
                        <h2>👇 Rate My Joke! 👇</h2>
                        <br></br>
                        <p>Mobile: ✅</p>
                        <br></br>
                        <b>Description: </b>
                        <br></br>
                        <p><b>'Rate My Joke!' was our second class project. We were provided two weeks to use all of our
                            knowledge
                            obtained so far in the course to
                            build a full-stack website. This is a simple website where a user can build an account, log in,
                            submit jokes, and upvote jokes
                            that interest them. This website utilizes Node.JS, Express.JS, Heroku, Git, Github, SQL, MySQL2,
                            BRCRYPT, Pure, sessions, and handlebars.
                            <br></br>
                            <br></br>
                            The GitHub URL is located here: <a href="https://github.com/Teeemster/Project2 ">https://github.com/Teeemster/Project2</a>
                        </b></p>
                        <a href="https://jokeappproject2.herokuapp.com/login"><img class="sample-img"
                            src={JokeApp} alt="Sample Of The Joke App Website" />
                        </a>
                    </div>

                </Col>
            </Row>
        </Container>
    );
};

export default Project;
