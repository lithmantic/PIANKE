; (function ($) {
    var
        setting = {
            column_width: 240,
            column_className: 'waterfall_column',
            column_space: 10,
            cell_selector: '.cell',
            img_selector: 'img',
            auto_imgHeight: true,
            fadein: true,
            fadein_speed: 600,
            insert_type: 1, 
            getResource: function (index) { }
        },
        waterfall = $.waterfall = {},
        $waterfall = null;
        waterfall.load_index = 0,
        $.fn.extend({
            waterfall: function (opt) {
                opt = opt || {};
                setting = $.extend(setting, opt);
                $waterfall = waterfall.$waterfall = $(this);
                waterfall.$columns = creatColumn();
                render($(this).find(setting.cell_selector).detach(), false); 
                waterfall._scrollTimer2 = null;
                $(window).bind('scroll', function () {
                    clearTimeout(waterfall._scrollTimer2);
                    waterfall._scrollTimer2 = setTimeout(onScroll, 300);
                });
                waterfall._scrollTimer3 = null;
                $(window).bind('resize', function () {
                    clearTimeout(waterfall._scrollTimer3);
                    waterfall._scrollTimer3 = setTimeout(onResize, 300);
                });
            }
        });
    function creatColumn() {
        waterfall.column_num = calculateColumns();
        var html = '';
        for (var i = 0; i < waterfall.column_num; i++) {
            html += '<div class="' + setting.column_className + '" style="width:' + setting.column_width + 'px; display:inline-block; *display:inline;zoom:1; margin-left:' + setting.column_space / 2 + 'px;margin-right:' + setting.column_space / 2 + 'px; vertical-align:top; overflow:hidden"></div>';
        }
        $waterfall.prepend(html);
        return $('.' + setting.column_className, $waterfall);
    }
    function calculateColumns() {
        var num = Math.floor(($waterfall.innerWidth()) / (setting.column_width + setting.column_space));
        if (num < 1) { num = 1; }
        return num;
    }
    function render(elements, fadein) {
        if (!$(elements).length) return;
        var $columns = waterfall.$columns;
        $(elements).each(function (i) {
            if (!setting.auto_imgHeight || setting.insert_type == 2) {
                if (setting.insert_type == 1) {
                    insert($(elements).eq(i), setting.fadein && fadein);
                } else if (setting.insert_type == 2) {
                    insert2($(elements).eq(i), i, setting.fadein && fadein);	 
                }
                return true;
            }
            if ($(this)[0].nodeName.toLowerCase() == 'img' || $(this).find(setting.img_selector).length > 0) {//本身是图片或含有图片
                var image = new Image;
                var src = $(this)[0].nodeName.toLowerCase() == 'img' ? $(this).attr('src') : $(this).find(setting.img_selector).attr('src');
                image.onload = function () {
                    image.onreadystatechange = null;
                    if (setting.insert_type == 1) {
                        insert($(elements).eq(i), setting.fadein && fadein);
                    } else if (setting.insert_type == 2) {
                        insert2($(elements).eq(i), i, setting.fadein && fadein);	 
                    }
                    image = null;
                }
                image.onreadystatechange = function () {
                    if (image.readyState == "complete") {
                        image.onload = null;
                        if (setting.insert_type == 1) {
                            insert($(elements).eq(i), setting.fadein && fadein);
                        } else if (setting.insert_type == 2) {
                            insert2($(elements).eq(i), i, setting.fadein && fadein);	 
                        }
                        image = null;
                    }
                }
                image.src = src;
            } else {
                if (setting.insert_type == 1) {
                    insert($(elements).eq(i), setting.fadein && fadein);
                } else if (setting.insert_type == 2) {
                    insert2($(elements).eq(i), i, setting.fadein && fadein);	 
                }
            }
        });
    }
    function public_render(elems) {
        render(elems, true);
    }
    function insert($element, fadein) {
        if (fadein) {
            $element.css('opacity', 0).appendTo(waterfall.$columns.eq(calculateLowest())).fadeTo(setting.fadein_speed, 1);
        } else {
            $element.appendTo(waterfall.$columns.eq(calculateLowest()));
        }
    }
    function insert2($element, i, fadein) {
        if (fadein) {
            $element.css('opacity', 0).appendTo(waterfall.$columns.eq(i % waterfall.column_num)).fadeTo(setting.fadein_speed, 1);
        } else {
            $element.appendTo(waterfall.$columns.eq(i % waterfall.column_num));
        }
    }
    function calculateLowest() {
        var min = waterfall.$columns.eq(0).outerHeight(), min_key = 0;
        waterfall.$columns.each(function (i) {
            if ($(this).outerHeight() < min) {
                min = $(this).outerHeight();
                min_key = i;
            }
        });
        return min_key;
    }
    function getElements() {
        $.waterfall.load_index++;
        return setting.getResource($.waterfall.load_index, public_render);
    }
    waterfall._scrollTimer = null;
    function onScroll() {
        clearTimeout(waterfall._scrollTimer);
        waterfall._scrollTimer = setTimeout(function () {
            var $lowest_column = waterfall.$columns.eq(calculateLowest());
            var bottom = $lowest_column.offset().top + $lowest_column.outerHeight();
            var scrollTop = document.documentElement.scrollTop || document.body.scrollTop || 0;
            var windowHeight = document.documentElement.clientHeight || document.body.clientHeight || 0;
            if (scrollTop >= bottom - windowHeight) {
                render(getElements(), true);
            }
        }, 100);
    }
    function onResize() {
        if (calculateColumns() == waterfall.column_num) return;
        var $cells = waterfall.$waterfall.find(setting.cell_selector);
        waterfall.$columns.remove();
        waterfall.$columns = creatColumn();
        render($cells, false); 
    }
})(jQuery);

var opt = {
    getResource: function (index, render) {
        if (index >= 7) index = index % 7 + 1;
        var html = '';
        for (var i = 20 * (index - 1); i < 20 * (index - 1) + 20; i++) {
            var k = '';
            for (var ii = 0; ii < 3 - i.toString().length; ii++) {
                k += '0';
            }
            k += i;
            var src = "http://cued.xunlei.com/demos/publ/img/P_" + k + ".jpg";
            // var src = "#_" + k + ".jpg";
            html += '<div class="cell"><a href="#"><img src="' + src + '" /></a><p>' + k + '</p></div>';
        }
        return $(html);
    },
    auto_imgHeight: true,
    insert_type: 1
}
$('#waterfall').waterfall(opt);
