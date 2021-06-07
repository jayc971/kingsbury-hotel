let startDateUI = $("#startdate_datepicker").datepicker({
  numberOfMonths:[1, 2],
  todayHighlight: true,
  beforeShowDay: function (calDate) {
      return calDate - new Date() < 0 ? [false, '', ''] : [true, '','']
  }
});
$("#enddate_datepicker").datepicker({
  numberOfMonths:[1, 2],
  todayHighlight: true,
  beforeShowDay: function (calDate) {
      let selectedStartDate = $( "#startdate_datepicker" ).datepicker( "getDate" )
      return calDate - selectedStartDate < 0 ? [false, 'disable-day', 'not available day!!!'] : [true, '','']
  }
});