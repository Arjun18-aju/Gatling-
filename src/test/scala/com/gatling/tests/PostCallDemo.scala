package com.gatling.tests

import io.gatling.core.scenario.Simulation
import io.gatling.core.Predef._
import io.gatling.http.Predef._
class PostCallDemo extends Simulation{
  val httpProtocol= http.baseUrl("https://reqres.in/")

  //scenario
  val createUser= scenario("Post Request")
    .exec(http("Post Request")
      .post("/api/users")
      .body(RawFileBody("payload1.json")).asJson
      .check(
        status is 201,
        jsonPath ("$.name") is "Arjun"
      )
    )

  //setup

  setUp(
    createUser.inject(atOnceUsers(1)).protocols(httpProtocol)

  )

}
