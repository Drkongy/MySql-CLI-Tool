// Colour JS File Generated using ColorC
const Colours = {
    custom: function(string, fg, bg = null) {
        if (bg !== null) {
            return `[38;2;${fg};48;2;${bg}m${string}[0m`
        }
        return `[38;2;${fg}m${string}[0m`
    },
    underline: '[4m',
    reverse: '[7m',
    end: '[0m',
    alice_blue: '240;248;255',
    e_alice_blue: '[38;2;240;248;255m',
    antique_white: '250;235;215',
    e_antique_white: '[38;2;250;235;215m',
    aqua: '0;255;255',
    e_aqua: '[38;2;0;255;255m',
    aquamarine: '127;255;212',
    e_aquamarine: '[38;2;127;255;212m',
    azure: '240;255;255',
    e_azure: '[38;2;240;255;255m',
    beige: '245;245;220',
    e_beige: '[38;2;245;245;220m',
    bisque: '255;228;196',
    e_bisque: '[38;2;255;228;196m',
    black: '0;0;0',
    e_black: '[38;2;0;0;0m',
    blanched_almond: '255;235;205',
    e_blanched_almond: '[38;2;255;235;205m',
    blue: '0;0;255',
    e_blue: '[38;2;0;0;255m',
    blue_violet: '138;43;226',
    e_blue_violet: '[38;2;138;43;226m',
    brown: '165;42;42',
    e_brown: '[38;2;165;42;42m',
    burly_wood: '222;184;135',
    e_burly_wood: '[38;2;222;184;135m',
    cadet_blue: '95;158;160',
    e_cadet_blue: '[38;2;95;158;160m',
    chartreuse: '127;255;0',
    e_chartreuse: '[38;2;127;255;0m',
    chocolate: '210;105;30',
    e_chocolate: '[38;2;210;105;30m',
    coral: '255;127;80',
    e_coral: '[38;2;255;127;80m',
    cornflower_blue: '100;149;237',
    e_cornflower_blue: '[38;2;100;149;237m',
    cornsilk: '255;248;220',
    e_cornsilk: '[38;2;255;248;220m',
    crimson: '220;20;60',
    e_crimson: '[38;2;220;20;60m',
    cyan: '0;255;255',
    e_cyan: '[38;2;0;255;255m',
    dark_blue: '0;0;139',
    e_dark_blue: '[38;2;0;0;139m',
    dark_cyan: '0;139;139',
    e_dark_cyan: '[38;2;0;139;139m',
    dark_golden_rod: '184;134;11',
    e_dark_golden_rod: '[38;2;184;134;11m',
    dark_gray: '169;169;169',
    e_dark_gray: '[38;2;169;169;169m',
    dark_green: '0;100;0',
    e_dark_green: '[38;2;0;100;0m',
    dark_khaki: '189;183;107',
    e_dark_khaki: '[38;2;189;183;107m',
    dark_magenta: '139;0;139',
    e_dark_magenta: '[38;2;139;0;139m',
    dark_olive_green: '85;107;47',
    e_dark_olive_green: '[38;2;85;107;47m',
    dark_orange: '255;140;0',
    e_dark_orange: '[38;2;255;140;0m',
    dark_orchid: '153;50;204',
    e_dark_orchid: '[38;2;153;50;204m',
    dark_red: '139;0;0',
    e_dark_red: '[38;2;139;0;0m',
    dark_salmon: '233;150;122',
    e_dark_salmon: '[38;2;233;150;122m',
    dark_sea_green: '143;188;143',
    e_dark_sea_green: '[38;2;143;188;143m',
    dark_slate_blue: '72;61;139',
    e_dark_slate_blue: '[38;2;72;61;139m',
    dark_slate_gray: '47;79;79',
    e_dark_slate_gray: '[38;2;47;79;79m',
    dark_turquoise: '0;206;209',
    e_dark_turquoise: '[38;2;0;206;209m',
    dark_violet: '148;0;211',
    e_dark_violet: '[38;2;148;0;211m',
    deep_pink: '255;20;147',
    e_deep_pink: '[38;2;255;20;147m',
    deep_sky_blue: '0;191;255',
    e_deep_sky_blue: '[38;2;0;191;255m',
    dim_gray: '105;105;105',
    e_dim_gray: '[38;2;105;105;105m',
    dodger_blue: '30;144;255',
    e_dodger_blue: '[38;2;30;144;255m',
    fire_brick: '178;34;34',
    e_fire_brick: '[38;2;178;34;34m',
    floral_white: '255;250;240',
    e_floral_white: '[38;2;255;250;240m',
    forest_green: '34;139;34',
    e_forest_green: '[38;2;34;139;34m',
    fuchsia: '255;0;255',
    e_fuchsia: '[38;2;255;0;255m',
    gainsboro: '220;220;220',
    e_gainsboro: '[38;2;220;220;220m',
    ghost_white: '248;248;255',
    e_ghost_white: '[38;2;248;248;255m',
    gold: '255;215;0',
    e_gold: '[38;2;255;215;0m',
    golden_rod: '218;165;32',
    e_golden_rod: '[38;2;218;165;32m',
    gray: '128;128;128',
    e_gray: '[38;2;128;128;128m',
    green: '0;128;0',
    e_green: '[38;2;0;128;0m',
    green_yellow: '173;255;47',
    e_green_yellow: '[38;2;173;255;47m',
    honey_dew: '240;255;240',
    e_honey_dew: '[38;2;240;255;240m',
    hot_pink: '255;105;180',
    e_hot_pink: '[38;2;255;105;180m',
    indian_red: '205;92;92',
    e_indian_red: '[38;2;205;92;92m',
    indigo: '75;0;130',
    e_indigo: '[38;2;75;0;130m',
    ivory: '255;255;240',
    e_ivory: '[38;2;255;255;240m',
    khaki: '240;230;140',
    e_khaki: '[38;2;240;230;140m',
    lavender: '230;230;250',
    e_lavender: '[38;2;230;230;250m',
    lavender_blush: '255;240;245',
    e_lavender_blush: '[38;2;255;240;245m',
    lawn_green: '124;252;0',
    e_lawn_green: '[38;2;124;252;0m',
    lemon_chiffon: '255;250;205',
    e_lemon_chiffon: '[38;2;255;250;205m',
    light_blue: '173;216;230',
    e_light_blue: '[38;2;173;216;230m',
    light_coral: '240;128;128',
    e_light_coral: '[38;2;240;128;128m',
    light_cyan: '224;255;255',
    e_light_cyan: '[38;2;224;255;255m',
    light_golden_rod_yellow: '250;250;210',
    e_light_golden_rod_yellow: '[38;2;250;250;210m',
    light_gray: '211;211;211',
    e_light_gray: '[38;2;211;211;211m',
    light_green: '144;238;144',
    e_light_green: '[38;2;144;238;144m',
    light_pink: '255;182;193',
    e_light_pink: '[38;2;255;182;193m',
    light_salmon: '255;160;122',
    e_light_salmon: '[38;2;255;160;122m',
    light_sea_green: '32;178;170',
    e_light_sea_green: '[38;2;32;178;170m',
    light_sky_blue: '135;206;250',
    e_light_sky_blue: '[38;2;135;206;250m',
    light_slate_gray: '119;136;153',
    e_light_slate_gray: '[38;2;119;136;153m',
    light_steel_blue: '176;196;222',
    e_light_steel_blue: '[38;2;176;196;222m',
    light_yellow: '255;255;224',
    e_light_yellow: '[38;2;255;255;224m',
    lime: '0;255;0',
    e_lime: '[38;2;0;255;0m',
    lime_green: '50;205;50',
    e_lime_green: '[38;2;50;205;50m',
    linen: '250;240;230',
    e_linen: '[38;2;250;240;230m',
    magenta: '255;0;255',
    e_magenta: '[38;2;255;0;255m',
    maroon: '128;0;0',
    e_maroon: '[38;2;128;0;0m',
    medium_aquamarine: '102;205;170',
    e_medium_aquamarine: '[38;2;102;205;170m',
    medium_blue: '0;0;205',
    e_medium_blue: '[38;2;0;0;205m',
    medium_orchid: '186;85;211',
    e_medium_orchid: '[38;2;186;85;211m',
    medium_purple: '147;112;219',
    e_medium_purple: '[38;2;147;112;219m',
    medium_sea_green: '60;179;113',
    e_medium_sea_green: '[38;2;60;179;113m',
    medium_slate_blue: '123;104;238',
    e_medium_slate_blue: '[38;2;123;104;238m',
    medium_spring_green: '0;250;154',
    e_medium_spring_green: '[38;2;0;250;154m',
    medium_turquoise: '72;209;204',
    e_medium_turquoise: '[38;2;72;209;204m',
    medium_violet_red: '199;21;133',
    e_medium_violet_red: '[38;2;199;21;133m',
    midnight_blue: '25;25;112',
    e_midnight_blue: '[38;2;25;25;112m',
    mint_cream: '245;255;250',
    e_mint_cream: '[38;2;245;255;250m',
    misty_rose: '255;228;225',
    e_misty_rose: '[38;2;255;228;225m',
    moccasin: '255;228;181',
    e_moccasin: '[38;2;255;228;181m',
    navajo_white: '255;222;173',
    e_navajo_white: '[38;2;255;222;173m',
    navy: '0;0;128',
    e_navy: '[38;2;0;0;128m',
    old_lace: '253;245;230',
    e_old_lace: '[38;2;253;245;230m',
    olive: '128;128;0',
    e_olive: '[38;2;128;128;0m',
    olive_drab: '107;142;35',
    e_olive_drab: '[38;2;107;142;35m',
    orange: '255;165;0',
    e_orange: '[38;2;255;165;0m',
    orange_red: '255;69;0',
    e_orange_red: '[38;2;255;69;0m',
    orchid: '218;112;214',
    e_orchid: '[38;2;218;112;214m',
    pale_golden_rod: '238;232;170',
    e_pale_golden_rod: '[38;2;238;232;170m',
    pale_green: '152;251;152',
    e_pale_green: '[38;2;152;251;152m',
    pale_turquoise: '175;238;238',
    e_pale_turquoise: '[38;2;175;238;238m',
    pale_violet_red: '219;112;147',
    e_pale_violet_red: '[38;2;219;112;147m',
    papaya_whip: '255;239;213',
    e_papaya_whip: '[38;2;255;239;213m',
    peach_puff: '255;218;185',
    e_peach_puff: '[38;2;255;218;185m',
    peru: '205;133;63',
    e_peru: '[38;2;205;133;63m',
    pink: '255;192;203',
    e_pink: '[38;2;255;192;203m',
    plum: '221;160;221',
    e_plum: '[38;2;221;160;221m',
    powder_blue: '176;224;230',
    e_powder_blue: '[38;2;176;224;230m',
    purple: '128;0;128',
    e_purple: '[38;2;128;0;128m',
    rebecca_purple: '102;51;153',
    e_rebecca_purple: '[38;2;102;51;153m',
    red: '255;0;0',
    e_red: '[38;2;255;0;0m',
    rosy_brown: '188;143;143',
    e_rosy_brown: '[38;2;188;143;143m',
    royal_blue: '65;105;225',
    e_royal_blue: '[38;2;65;105;225m',
    saddle_brown: '139;69;19',
    e_saddle_brown: '[38;2;139;69;19m',
    salmon: '250;128;114',
    e_salmon: '[38;2;250;128;114m',
    sandy_brown: '244;164;96',
    e_sandy_brown: '[38;2;244;164;96m',
    sea_green: '46;139;87',
    e_sea_green: '[38;2;46;139;87m',
    sea_shell: '255;245;238',
    e_sea_shell: '[38;2;255;245;238m',
    sienna: '160;82;45',
    e_sienna: '[38;2;160;82;45m',
    silver: '192;192;192',
    e_silver: '[38;2;192;192;192m',
    sky_blue: '135;206;235',
    e_sky_blue: '[38;2;135;206;235m',
    slate_blue: '106;90;205',
    e_slate_blue: '[38;2;106;90;205m',
    slate_gray: '112;128;144',
    e_slate_gray: '[38;2;112;128;144m',
    snow: '255;250;250',
    e_snow: '[38;2;255;250;250m',
    spring_green: '0;255;127',
    e_spring_green: '[38;2;0;255;127m',
    steel_blue: '70;130;180',
    e_steel_blue: '[38;2;70;130;180m',
    tan: '210;180;140',
    e_tan: '[38;2;210;180;140m',
    teal: '0;128;128',
    e_teal: '[38;2;0;128;128m',
    thistle: '216;191;216',
    e_thistle: '[38;2;216;191;216m',
    tomato: '255;99;71',
    e_tomato: '[38;2;255;99;71m',
    turquoise: '64;224;208',
    e_turquoise: '[38;2;64;224;208m',
    violet: '238;130;238',
    e_violet: '[38;2;238;130;238m',
    wheat: '245;222;179',
    e_wheat: '[38;2;245;222;179m',
    white: '255;255;255',
    e_white: '[38;2;255;255;255m',
    white_smoke: '245;245;245',
    e_white_smoke: '[38;2;245;245;245m',
    yellow: '255;255;0',
    e_yellow: '[38;2;255;255;0m',
    yellow_green: '154;205;50',
    e_yellow_green: '[38;2;154;205;50m',
    c_alice_blue: function(string, bg = null) {
        if (bg !== null) {
            return `[38;2;240;248;255;48;2;${bg}m${string}[0m`
        }
        return `[38;2;240;248;255m${string}[0m`
    },
    c_antique_white: function(string, bg = null) {
        if (bg !== null) {
            return `[38;2;250;235;215;48;2;${bg}m${string}[0m`
        }
        return `[38;2;250;235;215m${string}[0m`
    },
    c_aqua: function(string, bg = null) {
        if (bg !== null) {
            return `[38;2;0;255;255;48;2;${bg}m${string}[0m`
        }
        return `[38;2;0;255;255m${string}[0m`
    },
    c_aquamarine: function(string, bg = null) {
        if (bg !== null) {
            return `[38;2;127;255;212;48;2;${bg}m${string}[0m`
        }
        return `[38;2;127;255;212m${string}[0m`
    },
    c_azure: function(string, bg = null) {
        if (bg !== null) {
            return `[38;2;240;255;255;48;2;${bg}m${string}[0m`
        }
        return `[38;2;240;255;255m${string}[0m`
    },
    c_beige: function(string, bg = null) {
        if (bg !== null) {
            return `[38;2;245;245;220;48;2;${bg}m${string}[0m`
        }
        return `[38;2;245;245;220m${string}[0m`
    },
    c_bisque: function(string, bg = null) {
        if (bg !== null) {
            return `[38;2;255;228;196;48;2;${bg}m${string}[0m`
        }
        return `[38;2;255;228;196m${string}[0m`
    },
    c_black: function(string, bg = null) {
        if (bg !== null) {
            return `[38;2;0;0;0;48;2;${bg}m${string}[0m`
        }
        return `[38;2;0;0;0m${string}[0m`
    },
    c_blanched_almond: function(string, bg = null) {
        if (bg !== null) {
            return `[38;2;255;235;205;48;2;${bg}m${string}[0m`
        }
        return `[38;2;255;235;205m${string}[0m`
    },
    c_blue: function(string, bg = null) {
        if (bg !== null) {
            return `[38;2;0;0;255;48;2;${bg}m${string}[0m`
        }
        return `[38;2;0;0;255m${string}[0m`
    },
    c_blue_violet: function(string, bg = null) {
        if (bg !== null) {
            return `[38;2;138;43;226;48;2;${bg}m${string}[0m`
        }
        return `[38;2;138;43;226m${string}[0m`
    },
    c_brown: function(string, bg = null) {
        if (bg !== null) {
            return `[38;2;165;42;42;48;2;${bg}m${string}[0m`
        }
        return `[38;2;165;42;42m${string}[0m`
    },
    c_burly_wood: function(string, bg = null) {
        if (bg !== null) {
            return `[38;2;222;184;135;48;2;${bg}m${string}[0m`
        }
        return `[38;2;222;184;135m${string}[0m`
    },
    c_cadet_blue: function(string, bg = null) {
        if (bg !== null) {
            return `[38;2;95;158;160;48;2;${bg}m${string}[0m`
        }
        return `[38;2;95;158;160m${string}[0m`
    },
    c_chartreuse: function(string, bg = null) {
        if (bg !== null) {
            return `[38;2;127;255;0;48;2;${bg}m${string}[0m`
        }
        return `[38;2;127;255;0m${string}[0m`
    },
    c_chocolate: function(string, bg = null) {
        if (bg !== null) {
            return `[38;2;210;105;30;48;2;${bg}m${string}[0m`
        }
        return `[38;2;210;105;30m${string}[0m`
    },
    c_coral: function(string, bg = null) {
        if (bg !== null) {
            return `[38;2;255;127;80;48;2;${bg}m${string}[0m`
        }
        return `[38;2;255;127;80m${string}[0m`
    },
    c_cornflower_blue: function(string, bg = null) {
        if (bg !== null) {
            return `[38;2;100;149;237;48;2;${bg}m${string}[0m`
        }
        return `[38;2;100;149;237m${string}[0m`
    },
    c_cornsilk: function(string, bg = null) {
        if (bg !== null) {
            return `[38;2;255;248;220;48;2;${bg}m${string}[0m`
        }
        return `[38;2;255;248;220m${string}[0m`
    },
    c_crimson: function(string, bg = null) {
        if (bg !== null) {
            return `[38;2;220;20;60;48;2;${bg}m${string}[0m`
        }
        return `[38;2;220;20;60m${string}[0m`
    },
    c_cyan: function(string, bg = null) {
        if (bg !== null) {
            return `[38;2;0;255;255;48;2;${bg}m${string}[0m`
        }
        return `[38;2;0;255;255m${string}[0m`
    },
    c_dark_blue: function(string, bg = null) {
        if (bg !== null) {
            return `[38;2;0;0;139;48;2;${bg}m${string}[0m`
        }
        return `[38;2;0;0;139m${string}[0m`
    },
    c_dark_cyan: function(string, bg = null) {
        if (bg !== null) {
            return `[38;2;0;139;139;48;2;${bg}m${string}[0m`
        }
        return `[38;2;0;139;139m${string}[0m`
    },
    c_dark_golden_rod: function(string, bg = null) {
        if (bg !== null) {
            return `[38;2;184;134;11;48;2;${bg}m${string}[0m`
        }
        return `[38;2;184;134;11m${string}[0m`
    },
    c_dark_gray: function(string, bg = null) {
        if (bg !== null) {
            return `[38;2;169;169;169;48;2;${bg}m${string}[0m`
        }
        return `[38;2;169;169;169m${string}[0m`
    },
    c_dark_green: function(string, bg = null) {
        if (bg !== null) {
            return `[38;2;0;100;0;48;2;${bg}m${string}[0m`
        }
        return `[38;2;0;100;0m${string}[0m`
    },
    c_dark_khaki: function(string, bg = null) {
        if (bg !== null) {
            return `[38;2;189;183;107;48;2;${bg}m${string}[0m`
        }
        return `[38;2;189;183;107m${string}[0m`
    },
    c_dark_magenta: function(string, bg = null) {
        if (bg !== null) {
            return `[38;2;139;0;139;48;2;${bg}m${string}[0m`
        }
        return `[38;2;139;0;139m${string}[0m`
    },
    c_dark_olive_green: function(string, bg = null) {
        if (bg !== null) {
            return `[38;2;85;107;47;48;2;${bg}m${string}[0m`
        }
        return `[38;2;85;107;47m${string}[0m`
    },
    c_dark_orange: function(string, bg = null) {
        if (bg !== null) {
            return `[38;2;255;140;0;48;2;${bg}m${string}[0m`
        }
        return `[38;2;255;140;0m${string}[0m`
    },
    c_dark_orchid: function(string, bg = null) {
        if (bg !== null) {
            return `[38;2;153;50;204;48;2;${bg}m${string}[0m`
        }
        return `[38;2;153;50;204m${string}[0m`
    },
    c_dark_red: function(string, bg = null) {
        if (bg !== null) {
            return `[38;2;139;0;0;48;2;${bg}m${string}[0m`
        }
        return `[38;2;139;0;0m${string}[0m`
    },
    c_dark_salmon: function(string, bg = null) {
        if (bg !== null) {
            return `[38;2;233;150;122;48;2;${bg}m${string}[0m`
        }
        return `[38;2;233;150;122m${string}[0m`
    },
    c_dark_sea_green: function(string, bg = null) {
        if (bg !== null) {
            return `[38;2;143;188;143;48;2;${bg}m${string}[0m`
        }
        return `[38;2;143;188;143m${string}[0m`
    },
    c_dark_slate_blue: function(string, bg = null) {
        if (bg !== null) {
            return `[38;2;72;61;139;48;2;${bg}m${string}[0m`
        }
        return `[38;2;72;61;139m${string}[0m`
    },
    c_dark_slate_gray: function(string, bg = null) {
        if (bg !== null) {
            return `[38;2;47;79;79;48;2;${bg}m${string}[0m`
        }
        return `[38;2;47;79;79m${string}[0m`
    },
    c_dark_turquoise: function(string, bg = null) {
        if (bg !== null) {
            return `[38;2;0;206;209;48;2;${bg}m${string}[0m`
        }
        return `[38;2;0;206;209m${string}[0m`
    },
    c_dark_violet: function(string, bg = null) {
        if (bg !== null) {
            return `[38;2;148;0;211;48;2;${bg}m${string}[0m`
        }
        return `[38;2;148;0;211m${string}[0m`
    },
    c_deep_pink: function(string, bg = null) {
        if (bg !== null) {
            return `[38;2;255;20;147;48;2;${bg}m${string}[0m`
        }
        return `[38;2;255;20;147m${string}[0m`
    },
    c_deep_sky_blue: function(string, bg = null) {
        if (bg !== null) {
            return `[38;2;0;191;255;48;2;${bg}m${string}[0m`
        }
        return `[38;2;0;191;255m${string}[0m`
    },
    c_dim_gray: function(string, bg = null) {
        if (bg !== null) {
            return `[38;2;105;105;105;48;2;${bg}m${string}[0m`
        }
        return `[38;2;105;105;105m${string}[0m`
    },
    c_dodger_blue: function(string, bg = null) {
        if (bg !== null) {
            return `[38;2;30;144;255;48;2;${bg}m${string}[0m`
        }
        return `[38;2;30;144;255m${string}[0m`
    },
    c_fire_brick: function(string, bg = null) {
        if (bg !== null) {
            return `[38;2;178;34;34;48;2;${bg}m${string}[0m`
        }
        return `[38;2;178;34;34m${string}[0m`
    },
    c_floral_white: function(string, bg = null) {
        if (bg !== null) {
            return `[38;2;255;250;240;48;2;${bg}m${string}[0m`
        }
        return `[38;2;255;250;240m${string}[0m`
    },
    c_forest_green: function(string, bg = null) {
        if (bg !== null) {
            return `[38;2;34;139;34;48;2;${bg}m${string}[0m`
        }
        return `[38;2;34;139;34m${string}[0m`
    },
    c_fuchsia: function(string, bg = null) {
        if (bg !== null) {
            return `[38;2;255;0;255;48;2;${bg}m${string}[0m`
        }
        return `[38;2;255;0;255m${string}[0m`
    },
    c_gainsboro: function(string, bg = null) {
        if (bg !== null) {
            return `[38;2;220;220;220;48;2;${bg}m${string}[0m`
        }
        return `[38;2;220;220;220m${string}[0m`
    },
    c_ghost_white: function(string, bg = null) {
        if (bg !== null) {
            return `[38;2;248;248;255;48;2;${bg}m${string}[0m`
        }
        return `[38;2;248;248;255m${string}[0m`
    },
    c_gold: function(string, bg = null) {
        if (bg !== null) {
            return `[38;2;255;215;0;48;2;${bg}m${string}[0m`
        }
        return `[38;2;255;215;0m${string}[0m`
    },
    c_golden_rod: function(string, bg = null) {
        if (bg !== null) {
            return `[38;2;218;165;32;48;2;${bg}m${string}[0m`
        }
        return `[38;2;218;165;32m${string}[0m`
    },
    c_gray: function(string, bg = null) {
        if (bg !== null) {
            return `[38;2;128;128;128;48;2;${bg}m${string}[0m`
        }
        return `[38;2;128;128;128m${string}[0m`
    },
    c_green: function(string, bg = null) {
        if (bg !== null) {
            return `[38;2;0;128;0;48;2;${bg}m${string}[0m`
        }
        return `[38;2;0;128;0m${string}[0m`
    },
    c_green_yellow: function(string, bg = null) {
        if (bg !== null) {
            return `[38;2;173;255;47;48;2;${bg}m${string}[0m`
        }
        return `[38;2;173;255;47m${string}[0m`
    },
    c_honey_dew: function(string, bg = null) {
        if (bg !== null) {
            return `[38;2;240;255;240;48;2;${bg}m${string}[0m`
        }
        return `[38;2;240;255;240m${string}[0m`
    },
    c_hot_pink: function(string, bg = null) {
        if (bg !== null) {
            return `[38;2;255;105;180;48;2;${bg}m${string}[0m`
        }
        return `[38;2;255;105;180m${string}[0m`
    },
    c_indian_red: function(string, bg = null) {
        if (bg !== null) {
            return `[38;2;205;92;92;48;2;${bg}m${string}[0m`
        }
        return `[38;2;205;92;92m${string}[0m`
    },
    c_indigo: function(string, bg = null) {
        if (bg !== null) {
            return `[38;2;75;0;130;48;2;${bg}m${string}[0m`
        }
        return `[38;2;75;0;130m${string}[0m`
    },
    c_ivory: function(string, bg = null) {
        if (bg !== null) {
            return `[38;2;255;255;240;48;2;${bg}m${string}[0m`
        }
        return `[38;2;255;255;240m${string}[0m`
    },
    c_khaki: function(string, bg = null) {
        if (bg !== null) {
            return `[38;2;240;230;140;48;2;${bg}m${string}[0m`
        }
        return `[38;2;240;230;140m${string}[0m`
    },
    c_lavender: function(string, bg = null) {
        if (bg !== null) {
            return `[38;2;230;230;250;48;2;${bg}m${string}[0m`
        }
        return `[38;2;230;230;250m${string}[0m`
    },
    c_lavender_blush: function(string, bg = null) {
        if (bg !== null) {
            return `[38;2;255;240;245;48;2;${bg}m${string}[0m`
        }
        return `[38;2;255;240;245m${string}[0m`
    },
    c_lawn_green: function(string, bg = null) {
        if (bg !== null) {
            return `[38;2;124;252;0;48;2;${bg}m${string}[0m`
        }
        return `[38;2;124;252;0m${string}[0m`
    },
    c_lemon_chiffon: function(string, bg = null) {
        if (bg !== null) {
            return `[38;2;255;250;205;48;2;${bg}m${string}[0m`
        }
        return `[38;2;255;250;205m${string}[0m`
    },
    c_light_blue: function(string, bg = null) {
        if (bg !== null) {
            return `[38;2;173;216;230;48;2;${bg}m${string}[0m`
        }
        return `[38;2;173;216;230m${string}[0m`
    },
    c_light_coral: function(string, bg = null) {
        if (bg !== null) {
            return `[38;2;240;128;128;48;2;${bg}m${string}[0m`
        }
        return `[38;2;240;128;128m${string}[0m`
    },
    c_light_cyan: function(string, bg = null) {
        if (bg !== null) {
            return `[38;2;224;255;255;48;2;${bg}m${string}[0m`
        }
        return `[38;2;224;255;255m${string}[0m`
    },
    c_light_golden_rod_yellow: function(string, bg = null) {
        if (bg !== null) {
            return `[38;2;250;250;210;48;2;${bg}m${string}[0m`
        }
        return `[38;2;250;250;210m${string}[0m`
    },
    c_light_gray: function(string, bg = null) {
        if (bg !== null) {
            return `[38;2;211;211;211;48;2;${bg}m${string}[0m`
        }
        return `[38;2;211;211;211m${string}[0m`
    },
    c_light_green: function(string, bg = null) {
        if (bg !== null) {
            return `[38;2;144;238;144;48;2;${bg}m${string}[0m`
        }
        return `[38;2;144;238;144m${string}[0m`
    },
    c_light_pink: function(string, bg = null) {
        if (bg !== null) {
            return `[38;2;255;182;193;48;2;${bg}m${string}[0m`
        }
        return `[38;2;255;182;193m${string}[0m`
    },
    c_light_salmon: function(string, bg = null) {
        if (bg !== null) {
            return `[38;2;255;160;122;48;2;${bg}m${string}[0m`
        }
        return `[38;2;255;160;122m${string}[0m`
    },
    c_light_sea_green: function(string, bg = null) {
        if (bg !== null) {
            return `[38;2;32;178;170;48;2;${bg}m${string}[0m`
        }
        return `[38;2;32;178;170m${string}[0m`
    },
    c_light_sky_blue: function(string, bg = null) {
        if (bg !== null) {
            return `[38;2;135;206;250;48;2;${bg}m${string}[0m`
        }
        return `[38;2;135;206;250m${string}[0m`
    },
    c_light_slate_gray: function(string, bg = null) {
        if (bg !== null) {
            return `[38;2;119;136;153;48;2;${bg}m${string}[0m`
        }
        return `[38;2;119;136;153m${string}[0m`
    },
    c_light_steel_blue: function(string, bg = null) {
        if (bg !== null) {
            return `[38;2;176;196;222;48;2;${bg}m${string}[0m`
        }
        return `[38;2;176;196;222m${string}[0m`
    },
    c_light_yellow: function(string, bg = null) {
        if (bg !== null) {
            return `[38;2;255;255;224;48;2;${bg}m${string}[0m`
        }
        return `[38;2;255;255;224m${string}[0m`
    },
    c_lime: function(string, bg = null) {
        if (bg !== null) {
            return `[38;2;0;255;0;48;2;${bg}m${string}[0m`
        }
        return `[38;2;0;255;0m${string}[0m`
    },
    c_lime_green: function(string, bg = null) {
        if (bg !== null) {
            return `[38;2;50;205;50;48;2;${bg}m${string}[0m`
        }
        return `[38;2;50;205;50m${string}[0m`
    },
    c_linen: function(string, bg = null) {
        if (bg !== null) {
            return `[38;2;250;240;230;48;2;${bg}m${string}[0m`
        }
        return `[38;2;250;240;230m${string}[0m`
    },
    c_magenta: function(string, bg = null) {
        if (bg !== null) {
            return `[38;2;255;0;255;48;2;${bg}m${string}[0m`
        }
        return `[38;2;255;0;255m${string}[0m`
    },
    c_maroon: function(string, bg = null) {
        if (bg !== null) {
            return `[38;2;128;0;0;48;2;${bg}m${string}[0m`
        }
        return `[38;2;128;0;0m${string}[0m`
    },
    c_medium_aquamarine: function(string, bg = null) {
        if (bg !== null) {
            return `[38;2;102;205;170;48;2;${bg}m${string}[0m`
        }
        return `[38;2;102;205;170m${string}[0m`
    },
    c_medium_blue: function(string, bg = null) {
        if (bg !== null) {
            return `[38;2;0;0;205;48;2;${bg}m${string}[0m`
        }
        return `[38;2;0;0;205m${string}[0m`
    },
    c_medium_orchid: function(string, bg = null) {
        if (bg !== null) {
            return `[38;2;186;85;211;48;2;${bg}m${string}[0m`
        }
        return `[38;2;186;85;211m${string}[0m`
    },
    c_medium_purple: function(string, bg = null) {
        if (bg !== null) {
            return `[38;2;147;112;219;48;2;${bg}m${string}[0m`
        }
        return `[38;2;147;112;219m${string}[0m`
    },
    c_medium_sea_green: function(string, bg = null) {
        if (bg !== null) {
            return `[38;2;60;179;113;48;2;${bg}m${string}[0m`
        }
        return `[38;2;60;179;113m${string}[0m`
    },
    c_medium_slate_blue: function(string, bg = null) {
        if (bg !== null) {
            return `[38;2;123;104;238;48;2;${bg}m${string}[0m`
        }
        return `[38;2;123;104;238m${string}[0m`
    },
    c_medium_spring_green: function(string, bg = null) {
        if (bg !== null) {
            return `[38;2;0;250;154;48;2;${bg}m${string}[0m`
        }
        return `[38;2;0;250;154m${string}[0m`
    },
    c_medium_turquoise: function(string, bg = null) {
        if (bg !== null) {
            return `[38;2;72;209;204;48;2;${bg}m${string}[0m`
        }
        return `[38;2;72;209;204m${string}[0m`
    },
    c_medium_violet_red: function(string, bg = null) {
        if (bg !== null) {
            return `[38;2;199;21;133;48;2;${bg}m${string}[0m`
        }
        return `[38;2;199;21;133m${string}[0m`
    },
    c_midnight_blue: function(string, bg = null) {
        if (bg !== null) {
            return `[38;2;25;25;112;48;2;${bg}m${string}[0m`
        }
        return `[38;2;25;25;112m${string}[0m`
    },
    c_mint_cream: function(string, bg = null) {
        if (bg !== null) {
            return `[38;2;245;255;250;48;2;${bg}m${string}[0m`
        }
        return `[38;2;245;255;250m${string}[0m`
    },
    c_misty_rose: function(string, bg = null) {
        if (bg !== null) {
            return `[38;2;255;228;225;48;2;${bg}m${string}[0m`
        }
        return `[38;2;255;228;225m${string}[0m`
    },
    c_moccasin: function(string, bg = null) {
        if (bg !== null) {
            return `[38;2;255;228;181;48;2;${bg}m${string}[0m`
        }
        return `[38;2;255;228;181m${string}[0m`
    },
    c_navajo_white: function(string, bg = null) {
        if (bg !== null) {
            return `[38;2;255;222;173;48;2;${bg}m${string}[0m`
        }
        return `[38;2;255;222;173m${string}[0m`
    },
    c_navy: function(string, bg = null) {
        if (bg !== null) {
            return `[38;2;0;0;128;48;2;${bg}m${string}[0m`
        }
        return `[38;2;0;0;128m${string}[0m`
    },
    c_old_lace: function(string, bg = null) {
        if (bg !== null) {
            return `[38;2;253;245;230;48;2;${bg}m${string}[0m`
        }
        return `[38;2;253;245;230m${string}[0m`
    },
    c_olive: function(string, bg = null) {
        if (bg !== null) {
            return `[38;2;128;128;0;48;2;${bg}m${string}[0m`
        }
        return `[38;2;128;128;0m${string}[0m`
    },
    c_olive_drab: function(string, bg = null) {
        if (bg !== null) {
            return `[38;2;107;142;35;48;2;${bg}m${string}[0m`
        }
        return `[38;2;107;142;35m${string}[0m`
    },
    c_orange: function(string, bg = null) {
        if (bg !== null) {
            return `[38;2;255;165;0;48;2;${bg}m${string}[0m`
        }
        return `[38;2;255;165;0m${string}[0m`
    },
    c_orange_red: function(string, bg = null) {
        if (bg !== null) {
            return `[38;2;255;69;0;48;2;${bg}m${string}[0m`
        }
        return `[38;2;255;69;0m${string}[0m`
    },
    c_orchid: function(string, bg = null) {
        if (bg !== null) {
            return `[38;2;218;112;214;48;2;${bg}m${string}[0m`
        }
        return `[38;2;218;112;214m${string}[0m`
    },
    c_pale_golden_rod: function(string, bg = null) {
        if (bg !== null) {
            return `[38;2;238;232;170;48;2;${bg}m${string}[0m`
        }
        return `[38;2;238;232;170m${string}[0m`
    },
    c_pale_green: function(string, bg = null) {
        if (bg !== null) {
            return `[38;2;152;251;152;48;2;${bg}m${string}[0m`
        }
        return `[38;2;152;251;152m${string}[0m`
    },
    c_pale_turquoise: function(string, bg = null) {
        if (bg !== null) {
            return `[38;2;175;238;238;48;2;${bg}m${string}[0m`
        }
        return `[38;2;175;238;238m${string}[0m`
    },
    c_pale_violet_red: function(string, bg = null) {
        if (bg !== null) {
            return `[38;2;219;112;147;48;2;${bg}m${string}[0m`
        }
        return `[38;2;219;112;147m${string}[0m`
    },
    c_papaya_whip: function(string, bg = null) {
        if (bg !== null) {
            return `[38;2;255;239;213;48;2;${bg}m${string}[0m`
        }
        return `[38;2;255;239;213m${string}[0m`
    },
    c_peach_puff: function(string, bg = null) {
        if (bg !== null) {
            return `[38;2;255;218;185;48;2;${bg}m${string}[0m`
        }
        return `[38;2;255;218;185m${string}[0m`
    },
    c_peru: function(string, bg = null) {
        if (bg !== null) {
            return `[38;2;205;133;63;48;2;${bg}m${string}[0m`
        }
        return `[38;2;205;133;63m${string}[0m`
    },
    c_pink: function(string, bg = null) {
        if (bg !== null) {
            return `[38;2;255;192;203;48;2;${bg}m${string}[0m`
        }
        return `[38;2;255;192;203m${string}[0m`
    },
    c_plum: function(string, bg = null) {
        if (bg !== null) {
            return `[38;2;221;160;221;48;2;${bg}m${string}[0m`
        }
        return `[38;2;221;160;221m${string}[0m`
    },
    c_powder_blue: function(string, bg = null) {
        if (bg !== null) {
            return `[38;2;176;224;230;48;2;${bg}m${string}[0m`
        }
        return `[38;2;176;224;230m${string}[0m`
    },
    c_purple: function(string, bg = null) {
        if (bg !== null) {
            return `[38;2;128;0;128;48;2;${bg}m${string}[0m`
        }
        return `[38;2;128;0;128m${string}[0m`
    },
    c_rebecca_purple: function(string, bg = null) {
        if (bg !== null) {
            return `[38;2;102;51;153;48;2;${bg}m${string}[0m`
        }
        return `[38;2;102;51;153m${string}[0m`
    },
    c_red: function(string, bg = null) {
        if (bg !== null) {
            return `[38;2;255;0;0;48;2;${bg}m${string}[0m`
        }
        return `[38;2;255;0;0m${string}[0m`
    },
    c_rosy_brown: function(string, bg = null) {
        if (bg !== null) {
            return `[38;2;188;143;143;48;2;${bg}m${string}[0m`
        }
        return `[38;2;188;143;143m${string}[0m`
    },
    c_royal_blue: function(string, bg = null) {
        if (bg !== null) {
            return `[38;2;65;105;225;48;2;${bg}m${string}[0m`
        }
        return `[38;2;65;105;225m${string}[0m`
    },
    c_saddle_brown: function(string, bg = null) {
        if (bg !== null) {
            return `[38;2;139;69;19;48;2;${bg}m${string}[0m`
        }
        return `[38;2;139;69;19m${string}[0m`
    },
    c_salmon: function(string, bg = null) {
        if (bg !== null) {
            return `[38;2;250;128;114;48;2;${bg}m${string}[0m`
        }
        return `[38;2;250;128;114m${string}[0m`
    },
    c_sandy_brown: function(string, bg = null) {
        if (bg !== null) {
            return `[38;2;244;164;96;48;2;${bg}m${string}[0m`
        }
        return `[38;2;244;164;96m${string}[0m`
    },
    c_sea_green: function(string, bg = null) {
        if (bg !== null) {
            return `[38;2;46;139;87;48;2;${bg}m${string}[0m`
        }
        return `[38;2;46;139;87m${string}[0m`
    },
    c_sea_shell: function(string, bg = null) {
        if (bg !== null) {
            return `[38;2;255;245;238;48;2;${bg}m${string}[0m`
        }
        return `[38;2;255;245;238m${string}[0m`
    },
    c_sienna: function(string, bg = null) {
        if (bg !== null) {
            return `[38;2;160;82;45;48;2;${bg}m${string}[0m`
        }
        return `[38;2;160;82;45m${string}[0m`
    },
    c_silver: function(string, bg = null) {
        if (bg !== null) {
            return `[38;2;192;192;192;48;2;${bg}m${string}[0m`
        }
        return `[38;2;192;192;192m${string}[0m`
    },
    c_sky_blue: function(string, bg = null) {
        if (bg !== null) {
            return `[38;2;135;206;235;48;2;${bg}m${string}[0m`
        }
        return `[38;2;135;206;235m${string}[0m`
    },
    c_slate_blue: function(string, bg = null) {
        if (bg !== null) {
            return `[38;2;106;90;205;48;2;${bg}m${string}[0m`
        }
        return `[38;2;106;90;205m${string}[0m`
    },
    c_slate_gray: function(string, bg = null) {
        if (bg !== null) {
            return `[38;2;112;128;144;48;2;${bg}m${string}[0m`
        }
        return `[38;2;112;128;144m${string}[0m`
    },
    c_snow: function(string, bg = null) {
        if (bg !== null) {
            return `[38;2;255;250;250;48;2;${bg}m${string}[0m`
        }
        return `[38;2;255;250;250m${string}[0m`
    },
    c_spring_green: function(string, bg = null) {
        if (bg !== null) {
            return `[38;2;0;255;127;48;2;${bg}m${string}[0m`
        }
        return `[38;2;0;255;127m${string}[0m`
    },
    c_steel_blue: function(string, bg = null) {
        if (bg !== null) {
            return `[38;2;70;130;180;48;2;${bg}m${string}[0m`
        }
        return `[38;2;70;130;180m${string}[0m`
    },
    c_tan: function(string, bg = null) {
        if (bg !== null) {
            return `[38;2;210;180;140;48;2;${bg}m${string}[0m`
        }
        return `[38;2;210;180;140m${string}[0m`
    },
    c_teal: function(string, bg = null) {
        if (bg !== null) {
            return `[38;2;0;128;128;48;2;${bg}m${string}[0m`
        }
        return `[38;2;0;128;128m${string}[0m`
    },
    c_thistle: function(string, bg = null) {
        if (bg !== null) {
            return `[38;2;216;191;216;48;2;${bg}m${string}[0m`
        }
        return `[38;2;216;191;216m${string}[0m`
    },
    c_tomato: function(string, bg = null) {
        if (bg !== null) {
            return `[38;2;255;99;71;48;2;${bg}m${string}[0m`
        }
        return `[38;2;255;99;71m${string}[0m`
    },
    c_turquoise: function(string, bg = null) {
        if (bg !== null) {
            return `[38;2;64;224;208;48;2;${bg}m${string}[0m`
        }
        return `[38;2;64;224;208m${string}[0m`
    },
    c_violet: function(string, bg = null) {
        if (bg !== null) {
            return `[38;2;238;130;238;48;2;${bg}m${string}[0m`
        }
        return `[38;2;238;130;238m${string}[0m`
    },
    c_wheat: function(string, bg = null) {
        if (bg !== null) {
            return `[38;2;245;222;179;48;2;${bg}m${string}[0m`
        }
        return `[38;2;245;222;179m${string}[0m`
    },
    c_white: function(string, bg = null) {
        if (bg !== null) {
            return `[38;2;255;255;255;48;2;${bg}m${string}[0m`
        }
        return `[38;2;255;255;255m${string}[0m`
    },
    c_white_smoke: function(string, bg = null) {
        if (bg !== null) {
            return `[38;2;245;245;245;48;2;${bg}m${string}[0m`
        }
        return `[38;2;245;245;245m${string}[0m`
    },
    c_yellow: function(string, bg = null) {
        if (bg !== null) {
            return `[38;2;255;255;0;48;2;${bg}m${string}[0m`
        }
        return `[38;2;255;255;0m${string}[0m`
    },
    c_yellow_green: function(string, bg = null) {
        if (bg !== null) {
            return `[38;2;154;205;50;48;2;${bg}m${string}[0m`
        }
        return `[38;2;154;205;50m${string}[0m`
    }
}

module.exports = Colours;