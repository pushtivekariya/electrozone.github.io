$(document).ready(function()    //do stuf when DOM is ready..its a common for every jquery..
{
    $("button").click(function()
    {
        alert("let me show u a magic tric :)")
        $("button").hide();
        document.write("the button is hide through jquery");
    }
    )
}
);