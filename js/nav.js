nav_bar = `<nav> 
<ul style="list-style-type:none;"> 
  <li><a href="dr_sl3_business_tester.html">SL3 and Business Tester Comms</a></li> 
  <li><a href="dr_notification.html">DR Downtime Notifications</a></li> 
  <li><a href="sensitive_rights.html">db-IRS Sensitive Rights</a></li>
  <li><a href="maint_notifications.html">Maintenance Notifications</a></li>
  <li><a href="handover.html">Handover</a></li>
  <li><a href="ToDo.html">ToDo List</a></li>
  <li><div x-data="{
      now_time: '',
      est_tz: '',
      est_tz_printed: $persist('')
      }"
      x-init="setInterval(function(){
        now_time = new Date().getTime(),
        est_tz = new Intl.DateTimeFormat('en-US', {
        timeZone: 'America/New_York',
        timeZoneName: 'short',
        hour12: false,
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',}),
        est_tz_printed = est_tz.format(now_time)}, 1000)">
      <span x-text="est_tz_printed"></span>
    </div></li>
  <li><div x-data="{
        now_time: '',
        gmt_tz: '',
        gmt_tz_printed: $persist('')
      }"
      x-init="setInterval(function(){
        now_time = new Date().getTime(),
        gmt_tz = new Intl.DateTimeFormat('en-US', {
        timeZone: 'Europe/London',
        timeZoneName: 'short',
        hour12: false,
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',}),
        gmt_tz_printed = gmt_tz.format(now_time)}, 1000)">
      <span x-text="gmt_tz_printed"></span>
    </div></li>
  <li><div x-data="{
      now_time: '',
      cet_tz: '',
      cet_tz_printed: $persist('')
      }"
      x-init="setInterval(function(){
        now_time = new Date().getTime(),
        cet_tz = new Intl.DateTimeFormat('en-GB', {
        timeZone: 'Europe/Berlin',
        timeZoneName: 'short',
        hour12: false,
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',}),
        cet_tz_printed = cet_tz.format(now_time)}, 1000)">
      <span x-text="cet_tz_printed"></span>
    </div></li>
</ul> 
</nav>`