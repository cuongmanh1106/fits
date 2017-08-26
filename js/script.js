$(document).ready(function() {
    $(".my-progress-bar").circularProgress({
        line_width: 10,
        color: "#76b852",
        starting_position: 0, // 12.00 o' clock position, 25 stands for 3.00 o'clock (clock-wise)
        percent: 0, // percent starts from
        percentage: true,
        text: "HTML"
    }).circularProgress('animate', 75, 5000);
});

$(document).ready(function() {
    $(".my-progress-bar1").circularProgress({
        line_width: 10,
        color: "#76b852",
        starting_position: 0, // 12.00 o' clock position, 25 stands for 3.00 o'clock (clock-wise)
        percent: 0, // percent starts from
        percentage: true,
        text: "CSS"
    }).circularProgress('animate', 73, 5000);
});

$(document).ready(function() {
    $(".my-progress-bar2").circularProgress({
        line_width: 10,
        color: "#76b852",
        starting_position: 0, // 12.00 o' clock position, 25 stands for 3.00 o'clock (clock-wise)
        percent: 0, // percent starts from
        percentage: true,
        text: "PHP"
    }).circularProgress('animate', 80, 5000);
});

$(document).ready(function() {
    $(".my-progress-bar3").circularProgress({
        line_width: 6,
        color: "#76b852",
        starting_position: 0, // 12.00 o' clock position, 25 stands for 3.00 o'clock (clock-wise)
        percent: 0, // percent starts from
        percentage: true,
        text: "MYSQL"
    }).circularProgress('animate', 55, 10000);
});
