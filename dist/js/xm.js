"use strict";$(function(){$("#cjk").mouseover(function(){$(this).children([0]).slideDown(300)}).mouseout(function(){$(this).children([0]).hide()})}),$(function(){var u;u=setInterval(function(){var t=new Date("2020/10/21 00:00:00"),o=new Date,s=o.getDate(),n=o.getMonth()+1,e=o.getFullYear(),a=e+"/"+n+"/"+s+" 08:00:00",l=e+"/"+n+"/"+s+" 12:00:00",c=e+"/"+n+"/"+s+" 14:00:00",i=e+"/"+n+"/"+s+" 20:00:00";a=new Date(a).getTime(),l=new Date(l).getTime(),c=new Date(c).getTime(),i=new Date(i).getTime();var r="",d="";o<t?(r=t,$("#stopNow").css("display","none"),$("#startNow").css("display","none"),$("#noStart").css("display","block"),$(".content").html("距离活动开始")):o<a?(r=a,d="8:00 场",$("#stopNow").css("display","none"),$("#startNow").css("display","none"),$("#noStart").css("display","block"),$(".content").html("距离活动开始剩余")):a<=o&&o<l?(r=l,d="12:00 场",$("#stopNow").css("display","none"),$("#startNow").css("display","block"),$("#noStart").css("display","none"),$(".content").html("距离活动结束剩余")):o<c?(r=c,d="14:00 场",$("#stopNow").css("display","none"),$("#startNow").css("display","none"),$("#noStart").css("display","block"),$(".content").html("距离活动开始剩余")):c<=o&&o<i?(r=i,d="20:00 场",$("#stopNow").css("display","none"),$("#startNow").css("display","block"),$("#noStart").css("display","none"),$(".content").html("距离活动结束剩余")):i<=o&&(r=a+864e5,$("#stopNow").css("display","block"),$("#startNow").css("display","none"),$("#noStart").css("display","none"),$(".content").html("距离活动开始剩余"));var p=r-o;if(p<1e3)return window.location.reload(),clearInterval(u),u=null,!1;var h=0,w=0,y=0,m=0;0<=p&&(h=Math.floor(p/1e3/3600/24),w=Math.floor(p/1e3/3600%24),y=Math.floor(p/1e3/60%60),m=Math.floor(p/1e3%60),h<10&&(h="0"+h),w<10&&(w="0"+w),y<10&&(y="0"+y),m<10&&(m="0"+m),$(".botHours").html(w),$(".botMIn").html(y),$(".botSecond").html(m),$("#chang").html(d))},1e3)});