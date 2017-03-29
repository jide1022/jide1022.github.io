  var calendar = function (id) {
      this.element = document.getElementById(id);
      this.date = new Date();
      this.today = new Date();
      this.week = ['日', '一', '二', '三', '四', '五', '六'];
      this.init();
      this.fillData();
      this.bindEvent();
  }
  calendar.prototype = {
      init: function () {
          var year = this.date.getFullYear(); //当前年
          var month = this.date.getMonth(); //比实际月份少1
          var days = this.getMonthDays(year, month); //本月天数
          var prevDays = this.getMonthDays(year, month - 1); //上个月天数
          var day = new Date(year, month, 1).getDay(); //星期几 0 1 2 3 4 5 6  这个月第一天
          var lastday = new Date(year, month, days).getDay();
          var table = $("<table>");
          //操作
          var head = $('<tr>')
              .append('<th><i class="fa fa-arrow-left prevMonth"></i></th>')
              .append('<th colspan="5" class="head-text">' + year + '年' + (month + 1) + '月</th>')
              .append('<th><i class="fa fa-arrow-right nextMonth"></i></th>');
          //星期
          var week = $('<tr>');
          for (var i = 0; i < this.week.length; i++) {
              var th = $('<th>').html(this.week[i]);
              week.append(th);
          }
          table.append(head).append(week);
          $(this.element).append(table).addClass('calendar');
      },
      getMonthDays: function (year, month) {
          return new Date(year, month + 1, 0).getDate();
      },
      fillData: function () {
          var year = this.date.getFullYear(); //当前年
          var month = this.date.getMonth(); //比实际月份少1
          var days = this.getMonthDays(year, month); //本月天数
          var prevDays = this.getMonthDays(year, month - 1); //上个月天数
          var day = new Date(year, month, 1).getDay(); //星期几 0 1 2 3 4 5 6  这个月第一天
          var lastday = new Date(year, month, days).getDay();
          //日期显示
          $(this.element).find('.head-text').html(year + '年' + (month + 1) + '月');
          //上个月   
          var content = "";
          for (var i = 0; i < day; i++) {
              var _day = prevDays - day + 1 + i;
              var _oneDate = new Date(year, month - 1, _day);
              if (_oneDate.getDay() === 0) {
                  content += '<tr class="week">';
              }
              var dateStr = _oneDate.getFullYear() + '-' + (_oneDate.getMonth() + 1) + '-' + _oneDate.getDate();
              content += '<td class="day prev" date="' + dateStr + '">' + _oneDate.getDate() + '</td>';
              if (_oneDate.getDay() === 6) {
                  content += "</tr>";
              }
          }
          //这个月
          for (var i = 0; i < days; i++) {
              var _oneDate = new Date(year, month, i + 1);
              if (_oneDate.getDay() === 0) {
                  content += '<tr class="week">';
              }
              var dateStr = _oneDate.getFullYear() + '-' + (_oneDate.getMonth() + 1) + '-' + _oneDate.getDate();
              var classes = "day current";
              var todayDate = this.today.getDate();
              if (this.today.getFullYear() == _oneDate.getFullYear() && this.today.getMonth() == _oneDate.getMonth() &&
                  todayDate == i + 1) {
                  classes += ' active';
              }
              content += '<td class="' + classes + '" date="' + dateStr + '">' + _oneDate.getDate() + '</td>';
              if (_oneDate.getDay() === 6) {
                  content += "</tr>";
              }
          }
          //下个月
          for (var i = 0; i < 6 - lastday; i++) {
              var _oneDate = new Date(year, month + 1, i + 1);
              if (_oneDate.getDay() === 0) {
                  content += '<tr class="week">';
              }
              var dateStr = _oneDate.getFullYear() + '-' + (_oneDate.getMonth() + 1) + '-' + _oneDate.getDate();
              content += '<td class="day next" date="' + dateStr + '">' + _oneDate.getDate() + '</td>';
              if (_oneDate.getDay() === 6) {
                  content += "</tr>";
              }
          }
          //
          $(this.element).find('.week').remove();
          $(this.element).find('table').append(content);
      },
      prevMonth: function () {
          var month = this.date.getMonth();
          this.date.setMonth(month - 1);
          this.fillData();
      },
      nextMonth: function () {
          var month = this.date.getMonth();
          this.date.setMonth(month + 1);
          this.fillData();
      },
      bindEvent: function () {
          var self = this;
          $(this.element).bind('click', function (event) {
              var e = event.target;
              if ($(e).hasClass('prevMonth')) {
                  self.prevMonth();
              } else if ($(e).hasClass('nextMonth')) {
                  self.nextMonth();
              } else if ($(e).hasClass('day') && $(e).hasClass('current')) {
                  alert($(e).attr('date'));
              }
          });
      },
      setDate: function (date) {
          this.date = date;
          this.fillData();
      }
  };