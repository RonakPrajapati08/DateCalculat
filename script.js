$(document).ready(function () {
  function getDateDifference(startDateStr, endDateStr) {
    const startDate = new Date(startDateStr);
    const endDate = new Date(endDateStr);
    const timeDiff = endDate - startDate;
    3;

    const oneDay = 24 * 60 * 60 * 1000; // Hours , Minits , Secomds , Miniseconds
    const oneWeek = 7 * oneDay;
    const oneMonth = 30.44 * oneDay;
    const oneYear = 365.25 * oneDay;

    const years = Math.floor(timeDiff / oneYear);
    const months = Math.floor(timeDiff / oneMonth);
    const weeks = Math.floor(timeDiff / oneWeek);
    const days = Math.floor(timeDiff / oneDay);

    return { years, months, weeks, days };
  }

  $("#calculateBtn").click(function () {
    const startDateInput = $("#startDate").val();
    const endDateInput = $("#endDate").val();

    const dateDifference = getDateDifference(startDateInput, endDateInput);

    $("#result").html(`
        Years: ${dateDifference.years}<br>
        Months: ${dateDifference.months}<br>
        Weeks: ${dateDifference.weeks}<br>
        Days: ${dateDifference.days}
        `);
  });
});
