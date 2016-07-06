var trace = function(str){ console.log(str); };

var displayList;
var tt;
var nav;

function page_init()
{
	trace("page_init();");

	displayList_init();
}

function displayList_init()
{
	displayList = {};
	displayList.body		= document.querySelector("body");
	displayList.pageWrapper = document.querySelector(".page-wrapper"); 
	displayList.mainHeader 	= document.querySelector(".page-wrapper header h1");
	displayList.navIcon		= document.querySelector(".page-wrapper .nav-icon");

	nav_init();

	tt = setTimeout(entrance_init, 0.5 * 1000);
}

function entrance_init()
{
	displayList.mainHeader.classList.remove("h1-default");
}

function nav_init()
{
	nav = {};
	nav.open = false;

	displayList.navIcon.addEventListener("click", nav_event, false);
}

function nav_event(event)
{
	var exitFrame;

	if(nav.open)
	{
		nav.open = false;

		displayList.body.classList.remove("nav-lock");
		displayList.pageWrapper.classList.remove("page-wrapper-nav-open");

		displayList.pageWrapper.removeEventListener("click", nav_event, false);
	}

	else
	{
		nav.open = true;

		displayList.body.classList.add("nav-lock");
		displayList.pageWrapper.classList.add("page-wrapper-nav-open");

		// nav_help();
		
		exitFrame = setTimeout(nav_help, 20);
	}
}

function nav_help()
{
	displayList.pageWrapper.addEventListener("click", nav_event, false);
}
