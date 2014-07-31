var total_vote= 0;
var xing_vote = 0;
var chu_vote  = 0;
var bing_vote = 0;
var ling_vote = 0;

function the_max_vote() 
{
	var temp1=(xing_vote>chu_vote)?xing_vote:chu_vote;
	var temp2=(bing_vote>ling_vote)?bing_vote:ling_vote;
	var max_vote=(temp1>temp2)?temp1:temp2;
	return max_vote;
}

//根据最大票数设置显示结果的整体宽度
function setWidth()
{
	var max=the_max_vote();

	var setResult=document.getElementById("showResult");
	switch(parseInt(max))
	{
		case 1: setResult.style.width="130px";break;
		case 2: setResult.style.width="180px";break;
		case 3: setResult.style.width="230px";break;
		case 4: setResult.style.width="280px";break;
	}
}

//根据票数设置结果
function setResult()
{
	var xing_width=((xing_vote*50)>200)?200:(xing_vote*50);
	var chu_width =((chu_vote *50)>200)?200:(chu_vote*50);
	var bing_width=((bing_vote*50)>200)?200:(bing_vote*50);
	var ling_width=((ling_vote*50)>200)?200:(ling_vote*50);

	var voteresult1=document.getElementById("voteresult1");
	var vote_num1=document.getElementById("span1");
	voteresult1.style.width=xing_width+"px";
	vote_num1.innerHTML=xing_vote+"票";

	var voteresult2=document.getElementById("voteresult2");
	var vote_num2=document.getElementById("span2");
	voteresult2.style.width=chu_width+"px";
	vote_num2.innerHTML=chu_vote+"票";

	var voteresult3=document.getElementById("voteresult3");
	var vote_num3=document.getElementById("span3");
	voteresult3.style.width=bing_width+"px";
	vote_num3.innerHTML=bing_vote+"票";

	var voteresult4=document.getElementById("voteresult4");
	var vote_num4=document.getElementById("span4");
	voteresult4.style.width=ling_width+"px";
	vote_num4.innerHTML=ling_vote+"票";

	//显示table
	var table=document.getElementById("showResult");
	table.style.display="block";

	setWidth();
}

//根据字符串获取Cookie值
function getCookie(c_name)
{
	if (document.cookie.length>0)
	{ 
		c_start=document.cookie.indexOf(c_name + "=");
		if (c_start!=-1)
		{ 
			c_start=c_start + c_name.length+1 ;
			c_end=document.cookie.indexOf(";",c_start);
			if (c_end==-1) c_end=document.cookie.length;
				return unescape(document.cookie.substring(c_start,c_end));
		} 
	}
	return ""
}

function setCookie(c_name,value,expiredays)
{
	var exdate=new Date();
	exdate.setDate(exdate.getDate()+expiredays);
	document.cookie=c_name+ "=" +escape(value)+
	((expiredays==null) ? "" : "; expires="+exdate.toGMTString());
}
//首先检查是否存在Cookie
//若存在，则按钮设置为不能点击
//否则，添加Cookie信息
function checkCookie()
{
  	flag=getCookie('flag');
  	if(flag!=null&&flag!="")
  	{
  		var submit_button=document.getElementById("submit_button");
		submit_button.style.disabled=true;
  	}
  	else
  	{
  		setCookie('flag',"123",365);
  	}
}

function vote()
{
	//首先检查用户是否已经投票过
	checkCookie();
	setWidth();
	var selectItem = 0;
	var items = document.getElementsByName("item");
	for(i = 0; i < items.length; i++)
	{
		if(items[i].checked)
		{
			selectItem++;
			total_vote++;
			switch(parseInt(items[i].value))
			{
				case 1: xing_vote++;break;
				case 2: chu_vote++;break;
				case 3: bing_vote++;break;
				case 4: ling_vote++;break;
			}
		}
	}

	if(selectItem <= 0)
	{
		alert("请先选择你心目中的宿舍长");
		return;
	}

	//设置投票结果
	setResult();

	for(i = 0; i < items.length; i++)
	{
		items[i].checked = false;
	}
}
	


