var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "2",
        "ok": "1",
        "ko": "1"
    },
    "minResponseTime": {
        "total": "57",
        "ok": "206",
        "ko": "57"
    },
    "maxResponseTime": {
        "total": "206",
        "ok": "206",
        "ko": "57"
    },
    "meanResponseTime": {
        "total": "132",
        "ok": "206",
        "ko": "57"
    },
    "standardDeviation": {
        "total": "75",
        "ok": "0",
        "ko": "0"
    },
    "percentiles1": {
        "total": "132",
        "ok": "206",
        "ko": "57"
    },
    "percentiles2": {
        "total": "169",
        "ok": "206",
        "ko": "57"
    },
    "percentiles3": {
        "total": "199",
        "ok": "206",
        "ko": "57"
    },
    "percentiles4": {
        "total": "205",
        "ok": "206",
        "ko": "57"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 1,
    "percentage": 50
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group4": {
    "name": "failed",
    "count": 1,
    "percentage": 50
},
    "meanNumberOfRequestsPerSecond": {
        "total": "2",
        "ok": "1",
        "ko": "1"
    }
},
contents: {
"req_get-request-76828": {
        type: "REQUEST",
        name: "Get Request",
path: "Get Request",
pathFormatted: "req_get-request-76828",
stats: {
    "name": "Get Request",
    "numberOfRequests": {
        "total": "1",
        "ok": "1",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "206",
        "ok": "206",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "206",
        "ok": "206",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "206",
        "ok": "206",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "0",
        "ok": "0",
        "ko": "-"
    },
    "percentiles1": {
        "total": "206",
        "ok": "206",
        "ko": "-"
    },
    "percentiles2": {
        "total": "206",
        "ok": "206",
        "ko": "-"
    },
    "percentiles3": {
        "total": "206",
        "ok": "206",
        "ko": "-"
    },
    "percentiles4": {
        "total": "206",
        "ok": "206",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 1,
    "percentage": 100
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "1",
        "ok": "1",
        "ko": "-"
    }
}
    },"req_check-request-w-1f005": {
        type: "REQUEST",
        name: "Check Request With ID",
path: "Check Request With ID",
pathFormatted: "req_check-request-w-1f005",
stats: {
    "name": "Check Request With ID",
    "numberOfRequests": {
        "total": "1",
        "ok": "0",
        "ko": "1"
    },
    "minResponseTime": {
        "total": "57",
        "ok": "-",
        "ko": "57"
    },
    "maxResponseTime": {
        "total": "57",
        "ok": "-",
        "ko": "57"
    },
    "meanResponseTime": {
        "total": "57",
        "ok": "-",
        "ko": "57"
    },
    "standardDeviation": {
        "total": "0",
        "ok": "-",
        "ko": "0"
    },
    "percentiles1": {
        "total": "57",
        "ok": "-",
        "ko": "57"
    },
    "percentiles2": {
        "total": "57",
        "ok": "-",
        "ko": "57"
    },
    "percentiles3": {
        "total": "57",
        "ok": "-",
        "ko": "57"
    },
    "percentiles4": {
        "total": "57",
        "ok": "-",
        "ko": "57"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 0,
    "percentage": 0
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group4": {
    "name": "failed",
    "count": 1,
    "percentage": 100
},
    "meanNumberOfRequestsPerSecond": {
        "total": "1",
        "ok": "-",
        "ko": "1"
    }
}
    }
}

}

function fillStats(stat){
    $("#numberOfRequests").append(stat.numberOfRequests.total);
    $("#numberOfRequestsOK").append(stat.numberOfRequests.ok);
    $("#numberOfRequestsKO").append(stat.numberOfRequests.ko);

    $("#minResponseTime").append(stat.minResponseTime.total);
    $("#minResponseTimeOK").append(stat.minResponseTime.ok);
    $("#minResponseTimeKO").append(stat.minResponseTime.ko);

    $("#maxResponseTime").append(stat.maxResponseTime.total);
    $("#maxResponseTimeOK").append(stat.maxResponseTime.ok);
    $("#maxResponseTimeKO").append(stat.maxResponseTime.ko);

    $("#meanResponseTime").append(stat.meanResponseTime.total);
    $("#meanResponseTimeOK").append(stat.meanResponseTime.ok);
    $("#meanResponseTimeKO").append(stat.meanResponseTime.ko);

    $("#standardDeviation").append(stat.standardDeviation.total);
    $("#standardDeviationOK").append(stat.standardDeviation.ok);
    $("#standardDeviationKO").append(stat.standardDeviation.ko);

    $("#percentiles1").append(stat.percentiles1.total);
    $("#percentiles1OK").append(stat.percentiles1.ok);
    $("#percentiles1KO").append(stat.percentiles1.ko);

    $("#percentiles2").append(stat.percentiles2.total);
    $("#percentiles2OK").append(stat.percentiles2.ok);
    $("#percentiles2KO").append(stat.percentiles2.ko);

    $("#percentiles3").append(stat.percentiles3.total);
    $("#percentiles3OK").append(stat.percentiles3.ok);
    $("#percentiles3KO").append(stat.percentiles3.ko);

    $("#percentiles4").append(stat.percentiles4.total);
    $("#percentiles4OK").append(stat.percentiles4.ok);
    $("#percentiles4KO").append(stat.percentiles4.ko);

    $("#meanNumberOfRequestsPerSecond").append(stat.meanNumberOfRequestsPerSecond.total);
    $("#meanNumberOfRequestsPerSecondOK").append(stat.meanNumberOfRequestsPerSecond.ok);
    $("#meanNumberOfRequestsPerSecondKO").append(stat.meanNumberOfRequestsPerSecond.ko);
}
