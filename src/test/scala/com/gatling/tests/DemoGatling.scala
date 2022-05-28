package com.gatling.test

import scala.concurrent.duration._

import io.gatling.core.Predef._
import io.gatling.http.Predef._
import io.gatling.jdbc.Predef._

class DemoGatling extends Simulation {

	val httpProtocol = http
		.baseUrl("https://computer-database.gatling.io")
		.inferHtmlResources(BlackList(""".*\.js""", """.*\.css""", """.*\.gif""", """.*\.jpeg""", """.*\.jpg""", """.*\.ico""", """.*\.woff""", """.*\.woff2""", """.*\.(t|o)tf""", """.*\.png""", """.*detectportal\.firefox\.com.*"""), WhiteList())
		.acceptHeader("text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9")
		.acceptEncodingHeader("gzip, deflate")
		.acceptLanguageHeader("en-GB,en-US;q=0.9,en;q=0.8,ta;q=0.7")
		.doNotTrackHeader("1")
		.upgradeInsecureRequestsHeader("1")
		.userAgentHeader("Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/101.0.4951.67 Safari/537.36")

val one= exec(http("request_0")
		.get("/computers"))
		.pause(2)
		.exec(http("request_1")
			.get("/computers/new"))
		.pause(2)

	val two= 	exec(http("request_2")
		.post("/computers")
		.formParam("name", "ArjunDatabase")
		.formParam("introduced", "2022-05-25")
		.formParam("discontinued", "")
		.formParam("company", "2"))
		.pause(4)
		.exec(http("request_3")
			.get("/computers?f=ArjunDatabase"))


	val scn = scenario("DemoGatling").exec(one,two)

	val users=scenario("Users").exec(one)
	val SuperUser=scenario("Super").exec(one,two)

	setUp(
       users.inject(rampUsers(10).during(10)),
	   SuperUser.inject(rampUsers(10).during(10))
	).protocols(httpProtocol)


}