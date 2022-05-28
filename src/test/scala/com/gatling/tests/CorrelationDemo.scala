package com.gatling.tests

import io.gatling.core.Predef._
import io.gatling.http.Predef._

class CorrelationDemo extends Simulation{

  val httpProtocol= http.baseUrl("https://gorest.co.in/")

  //scenario
  val scn= scenario("GO REST")
    .exec(http("Get Request")
      .get("public/v2/users")
      .check(jsonPath("$[0].id").saveAs("ID")
      )
    )
    .exec(http("Check Request With ID")
      .get("public/v2/users/${ID}")
      .check(
        status is 200,
        jsonPath("$.id").is("2694"),
        jsonPath("$.name").is("Girish Tagore IV"),
        jsonPath("$.gender").is("male")))


  //setup

  setUp(
    scn.inject(atOnceUsers(1)).protocols(httpProtocol)

  )



}
