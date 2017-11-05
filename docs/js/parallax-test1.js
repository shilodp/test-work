function setEqualHeight(columns)
{
var tallestcolumn = 0;
columns.each(
function()
{
currentHeight = $(this).height();
if(currentHeight > tallestcolumn)
{
tallestcolumn = currentHeight;
}
}
);
if ($(".tall").height()>(tallestcolumn-160)) {
tallestcolumn=($(".tall").height()+160)
};
columns.height(tallestcolumn);
}
$(document).ready(function() {
setEqualHeight($(".height"));
});

