var trace = function(str){ console.log(str); };

var displayList;
var tt;

function page_init()
{
	trace("page_init();");

	displayList_init();
}

function displayList_init()
{
	displayList = {};
	displayList.mainHeader = document.querySelector(".page-content header h1");

	tt = setTimeout(entrance_init, 0.5 * 1000);
}

function entrance_init()
{
	displayList.mainHeader.classList.remove("h1-default");
}
