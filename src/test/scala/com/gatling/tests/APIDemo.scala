package com.gatling.tests

import io.gatling.core.scenario.Simulation
import io.gatling.core.Predef._
import io.gatling.http.Predef._
import io.gatling.jsonpath.JsonPath

class APIDemo extends Simulation{

  //protocol
  val httpProtocol= http.baseUrl("https://reqres.in/")

  //scenario
val getUser= scenario("Get Request")
  .exec(http("Get Request")
    .get("/api/users/2")
    .check(
      status is 200,
      jsonPath ("$.data.first_name") is "Janet"
    )
    )

  //setup

  setUp(
    getUser.inject(atOnceUsers(1)).protocols(httpProtocol)

  )

}
