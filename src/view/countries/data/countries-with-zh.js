const countries = [
  {
    "name": "Afghanistan",
    "code": "+93",
    "iso": "AF",
    "flag": "https://cdn.kcak11.com/CountryFlags/countries/af.svg",
    "mask": "##-###-####",
    "zh": "阿富汗"
  },
  {
    "name": "Aland Islands",
    "code": "+358",
    "iso": "AX",
    "flag": "https://cdn.kcak11.com/CountryFlags/countries/ax.svg",
    "mask": "(###)###-##-##",
    "zh": "奥兰群岛"
  },
  {
    "name": "Albania",
    "code": "+355",
    "iso": "AL",
    "flag": "https://cdn.kcak11.com/CountryFlags/countries/al.svg",
    "mask": "(###)###-###",
    "zh": "阿尔巴尼亚"
  },
  {
    "name": "Algeria",
    "code": "+213",
    "iso": "DZ",
    "flag": "https://cdn.kcak11.com/CountryFlags/countries/dz.svg",
    "mask": "##-###-####",
    "zh": "阿尔及利亚"
  },
  {
    "name": "American Samoa",
    "code": "+1",
    "iso": "AS",
    "flag": "https://cdn.kcak11.com/CountryFlags/countries/as.svg",
    "mask": "(684)###-####",
    "zh": "美属萨摩亚"
  },
  {
    "name": "Andorra",
    "code": "+376",
    "iso": "AD",
    "flag": "https://cdn.kcak11.com/CountryFlags/countries/ad.svg",
    "mask": "###-###",
    "zh": "安道尔"
  },
  {
    "name": "Angola",
    "code": "+244",
    "iso": "AO",
    "flag": "https://cdn.kcak11.com/CountryFlags/countries/ao.svg",
    "mask": "(###)###-###",
    "zh": "安哥拉"
  },
  {
    "name": "Anguilla",
    "code": "+1",
    "iso": "AI",
    "flag": "https://cdn.kcak11.com/CountryFlags/countries/ai.svg",
    "mask": "(264)###-####",
    "zh": "安圭拉"
  },
  {
    "name": "Antarctica",
    "code": "+672",
    "iso": "AQ",
    "flag": "https://cdn.kcak11.com/CountryFlags/countries/aq.svg",
    "mask": "1##-###",
    "zh": "南极洲"
  },
  {
    "name": "Antigua and Barbuda",
    "code": "+1",
    "iso": "AG",
    "flag": "https://cdn.kcak11.com/CountryFlags/countries/ag.svg",
    "mask": "(268)###-####",
    "zh": "安提瓜和巴布达"
  },
  {
    "name": "Argentina",
    "code": "+54",
    "iso": "AR",
    "flag": "https://cdn.kcak11.com/CountryFlags/countries/ar.svg",
    "mask": "(###)###-####",
    "zh": "阿根廷"
  },
  {
    "name": "Armenia",
    "code": "+374",
    "iso": "AM",
    "flag": "https://cdn.kcak11.com/CountryFlags/countries/am.svg",
    "mask": "##-###-###",
    "zh": "亚美尼亚"
  },
  {
    "name": "Aruba",
    "code": "+297",
    "iso": "AW",
    "flag": "https://cdn.kcak11.com/CountryFlags/countries/aw.svg",
    "mask": "###-####",
    "zh": "阿鲁巴"
  },
  {
    "name": "Ascension Island",
    "code": "+247",
    "iso": "AC",
    "flag": "https://cdn.kcak11.com/CountryFlags/countries/sh.svg",
    "mask": "####",
    "zh": "阿森松岛"
  },
  {
    "name": "Australia",
    "code": "+61",
    "iso": "AU",
    "flag": "https://cdn.kcak11.com/CountryFlags/countries/au.svg",
    "mask": "#-####-####",
    "zh": "澳大利亚"
  },
  {
    "name": "Austria",
    "code": "+43",
    "iso": "AT",
    "flag": "https://cdn.kcak11.com/CountryFlags/countries/at.svg",
    "mask": "(###)###-####",
    "zh": "奥地利"
  },
  {
    "name": "Azerbaijan",
    "code": "+994",
    "iso": "AZ",
    "flag": "https://cdn.kcak11.com/CountryFlags/countries/az.svg",
    "mask": "##-###-##-##",
    "zh": "阿塞拜疆"
  },
  {
    "name": "Bahamas",
    "code": "+1",
    "iso": "BS",
    "flag": "https://cdn.kcak11.com/CountryFlags/countries/bs.svg",
    "mask": "(242)###-####",
    "zh": "巴哈马"
  },
  {
    "name": "Bahrain",
    "code": "+973",
    "iso": "BH",
    "flag": "https://cdn.kcak11.com/CountryFlags/countries/bh.svg",
    "mask": "####-####",
    "zh": "巴林"
  },
  {
    "name": "Bangladesh",
    "code": "+880",
    "iso": "BD",
    "flag": "https://cdn.kcak11.com/CountryFlags/countries/bd.svg",
    "mask": "1###-######",
    "zh": "孟加拉国"
  },
  {
    "name": "Barbados",
    "code": "+1",
    "iso": "BB",
    "flag": "https://cdn.kcak11.com/CountryFlags/countries/bb.svg",
    "mask": "(246)###-####",
    "zh": "巴巴多斯"
  },
  {
    "name": "Belarus",
    "code": "+375",
    "iso": "BY",
    "flag": "https://cdn.kcak11.com/CountryFlags/countries/by.svg",
    "mask": "(##)###-##-##",
    "zh": "白俄罗斯"
  },
  {
    "name": "Belgium",
    "code": "+32",
    "iso": "BE",
    "flag": "https://cdn.kcak11.com/CountryFlags/countries/be.svg",
    "mask": "(###)###-###",
    "zh": "比利时"
  },
  {
    "name": "Belize",
    "code": "+501",
    "iso": "BZ",
    "flag": "https://cdn.kcak11.com/CountryFlags/countries/bz.svg",
    "mask": "###-####",
    "zh": "伯利兹"
  },
  {
    "name": "Benin",
    "code": "+229",
    "iso": "BJ",
    "flag": "https://cdn.kcak11.com/CountryFlags/countries/bj.svg",
    "mask": "##-##-####",
    "zh": "贝宁"
  },
  {
    "name": "Bermuda",
    "code": "+1",
    "iso": "BM",
    "flag": "https://cdn.kcak11.com/CountryFlags/countries/bm.svg",
    "mask": "(441)###-####",
    "zh": "百慕大"
  },
  {
    "name": "Bhutan",
    "code": "+975",
    "iso": "BT",
    "flag": "https://cdn.kcak11.com/CountryFlags/countries/bt.svg",
    "mask": [
      "17-###-###",
      "77-###-###",
      "#-###-###"
    ],
    "zh": "不丹"
  },
  {
    "name": "Bolivia",
    "code": "+591",
    "iso": "BO",
    "flag": "https://cdn.kcak11.com/CountryFlags/countries/bo.svg",
    "mask": "#-###-####",
    "zh": "玻利维亚"
  },
  {
    "name": "Bosnia and Herzegovina",
    "code": "+387",
    "iso": "BA",
    "flag": "https://cdn.kcak11.com/CountryFlags/countries/ba.svg",
    "mask": [
      "##-####",
      "##-#####"
    ],
    "zh": "波斯尼亚和黑塞哥维那"
  },
  {
    "name": "Botswana",
    "code": "+267",
    "iso": "BW",
    "flag": "https://cdn.kcak11.com/CountryFlags/countries/bw.svg",
    "mask": "##-###-###",
    "zh": "博茨瓦纳"
  },
  {
    "name": "Brazil",
    "code": "+55",
    "iso": "BR",
    "flag": "https://cdn.kcak11.com/CountryFlags/countries/br.svg",
    "mask": [
      "(##)####-####",
      "(##)#####-####"
    ],
    "zh": "巴西"
  },
  {
    "name": "British Indian Ocean Territory",
    "code": "+246",
    "iso": "IO",
    "flag": "https://cdn.kcak11.com/CountryFlags/countries/io.svg",
    "mask": "###-####",
    "zh": "英属印度洋领地"
  },
  {
    "name": "Brunei Darussalam",
    "code": "+673",
    "iso": "BN",
    "flag": "https://cdn.kcak11.com/CountryFlags/countries/bn.svg",
    "mask": "###-####",
    "zh": "文莱"
  },
  {
    "name": "Bulgaria",
    "code": "+359",
    "iso": "BG",
    "flag": "https://cdn.kcak11.com/CountryFlags/countries/bg.svg",
    "mask": "(###)###-###",
    "zh": "保加利亚"
  },
  {
    "name": "Burkina Faso",
    "code": "+226",
    "iso": "BF",
    "flag": "https://cdn.kcak11.com/CountryFlags/countries/bf.svg",
    "mask": "##-##-####",
    "zh": "布基纳法索"
  },
  {
    "name": "Burundi",
    "code": "+257",
    "iso": "BI",
    "flag": "https://cdn.kcak11.com/CountryFlags/countries/bi.svg",
    "mask": "##-##-####",
    "zh": "布隆迪"
  },
  {
    "name": "Cambodia",
    "code": "+855",
    "iso": "KH",
    "flag": "https://cdn.kcak11.com/CountryFlags/countries/kh.svg",
    "mask": "##-###-###",
    "zh": "柬埔寨"
  },
  {
    "name": "Cameroon",
    "code": "+237",
    "iso": "CM",
    "flag": "https://cdn.kcak11.com/CountryFlags/countries/cm.svg",
    "mask": "####-####",
    "zh": "喀麦隆"
  },
  {
    "name": "Canada",
    "code": "+1",
    "iso": "CA",
    "flag": "https://cdn.kcak11.com/CountryFlags/countries/ca.svg",
    "mask": "(###)###-####",
    "zh": "加拿大"
  },
  {
    "name": "Cape Verde",
    "code": "+238",
    "iso": "CV",
    "flag": "https://cdn.kcak11.com/CountryFlags/countries/cv.svg",
    "mask": "(###)##-##",
    "zh": "佛得角"
  },
  {
    "name": "Cayman Islands",
    "code": "+1",
    "iso": "KY",
    "flag": "https://cdn.kcak11.com/CountryFlags/countries/ky.svg",
    "mask": "(345)###-####",
    "zh": "开曼群岛"
  },
  {
    "name": "Central African Republic",
    "code": "+236",
    "iso": "CF",
    "flag": "https://cdn.kcak11.com/CountryFlags/countries/cf.svg",
    "mask": "##-##-####",
    "zh": "中非共和国"
  },
  {
    "name": "Chad",
    "code": "+235",
    "iso": "TD",
    "flag": "https://cdn.kcak11.com/CountryFlags/countries/td.svg",
    "mask": "##-##-##-##",
    "zh": "乍得"
  },
  {
    "name": "Chile",
    "code": "+56",
    "iso": "CL",
    "flag": "https://cdn.kcak11.com/CountryFlags/countries/cl.svg",
    "mask": "#-####-####",
    "zh": "智利"
  },
  {
    "name": "China",
    "code": "+86",
    "iso": "CN",
    "flag": "https://cdn.kcak11.com/CountryFlags/countries/cn.svg",
    "mask": [
      "(###)####-###",
      "(###)####-####",
      "##-#####-#####"
    ],
    "zh": "中国"
  },
  {
    "name": "Christmas Island",
    "code": "+61",
    "iso": "CX",
    "flag": "https://cdn.kcak11.com/CountryFlags/countries/cx.svg",
    "mask": "#-####-####",
    "zh": "圣诞岛"
  },
  {
    "name": "Cocos (Keeling) Islands",
    "code": "+61",
    "iso": "CC",
    "flag": "https://cdn.kcak11.com/CountryFlags/countries/cc.svg",
    "mask": "#-####-####",
    "zh": "科科斯（基林）群岛"
  },
  {
    "name": "Colombia",
    "code": "+57",
    "iso": "CO",
    "flag": "https://cdn.kcak11.com/CountryFlags/countries/co.svg",
    "mask": "(###)###-####",
    "zh": "哥伦比亚"
  },
  {
    "name": "Comoros",
    "code": "+269",
    "iso": "KM",
    "flag": "https://cdn.kcak11.com/CountryFlags/countries/km.svg",
    "mask": "##-#####",
    "zh": "科摩罗"
  },
  {
    "name": "Congo",
    "code": "+242",
    "iso": "CG",
    "flag": "https://cdn.kcak11.com/CountryFlags/countries/cg.svg",
    "mask": "##-#####",
    "zh": "刚果（布）"
  },
  {
    "name": "Cook Islands",
    "code": "+682",
    "iso": "CK",
    "flag": "https://cdn.kcak11.com/CountryFlags/countries/ck.svg",
    "mask": "##-###",
    "zh": "库克群岛"
  },
  {
    "name": "Costa Rica",
    "code": "+506",
    "iso": "CR",
    "flag": "https://cdn.kcak11.com/CountryFlags/countries/cr.svg",
    "mask": "####-####",
    "zh": "哥斯达黎加"
  },
  {
    "name": "Croatia",
    "code": "+385",
    "iso": "HR",
    "flag": "https://cdn.kcak11.com/CountryFlags/countries/hr.svg",
    "mask": "##-###-###",
    "zh": "克罗地亚"
  },
  {
    "name": "Cuba",
    "code": "+53",
    "iso": "CU",
    "flag": "https://cdn.kcak11.com/CountryFlags/countries/cu.svg",
    "mask": "#-###-####",
    "zh": "古巴"
  },
  {
    "name": "Cyprus",
    "code": "+357",
    "iso": "CY",
    "flag": "https://cdn.kcak11.com/CountryFlags/countries/cy.svg",
    "mask": "##-###-###",
    "zh": "塞浦路斯"
  },
  {
    "name": "Czech Republic",
    "code": "+420",
    "iso": "CZ",
    "flag": "https://cdn.kcak11.com/CountryFlags/countries/cz.svg",
    "mask": "(###)###-###",
    "zh": "捷克"
  },
  {
    "name": "Democratic Republic of the Congo",
    "code": "+243",
    "iso": "CD",
    "flag": "https://cdn.kcak11.com/CountryFlags/countries/cd.svg",
    "mask": "(###)###-###",
    "zh": "刚果（金）"
  },
  {
    "name": "Denmark",
    "code": "+45",
    "iso": "DK",
    "flag": "https://cdn.kcak11.com/CountryFlags/countries/dk.svg",
    "mask": "##-##-##-##",
    "zh": "丹麦"
  },
  {
    "name": "Djibouti",
    "code": "+253",
    "iso": "DJ",
    "flag": "https://cdn.kcak11.com/CountryFlags/countries/dj.svg",
    "mask": "##-##-##-##",
    "zh": "吉布提"
  },
  {
    "name": "Dominica",
    "code": "+1",
    "iso": "DM",
    "flag": "https://cdn.kcak11.com/CountryFlags/countries/dm.svg",
    "mask": "(767)###-####",
    "zh": "多米尼克"
  },
  {
    "name": "Dominican Republic",
    "code": "+1",
    "iso": "DO",
    "flag": "https://cdn.kcak11.com/CountryFlags/countries/do.svg",
    "mask": [
      "(809)###-####",
      "(829)###-####",
      "(849)###-####"
    ],
    "zh": "多米尼加共和国"
  },
  {
    "name": "Ecuador",
    "code": "+593",
    "iso": "EC",
    "flag": "https://cdn.kcak11.com/CountryFlags/countries/ec.svg",
    "mask": [
      "#-###-####",
      "##-###-####"
    ],
    "zh": "厄瓜多尔"
  },
  {
    "name": "Egypt",
    "code": "+20",
    "iso": "EG",
    "flag": "https://cdn.kcak11.com/CountryFlags/countries/eg.svg",
    "mask": "(###)###-####",
    "zh": "埃及"
  },
  {
    "name": "El Salvador",
    "code": "+503",
    "iso": "SV",
    "flag": "https://cdn.kcak11.com/CountryFlags/countries/sv.svg",
    "mask": "##-##-####",
    "zh": "萨尔瓦多"
  },
  {
    "name": "Equatorial Guinea",
    "code": "+240",
    "iso": "GQ",
    "flag": "https://cdn.kcak11.com/CountryFlags/countries/gq.svg",
    "mask": "##-###-####",
    "zh": "赤道几内亚"
  },
  {
    "name": "Eritrea",
    "code": "+291",
    "iso": "ER",
    "flag": "https://cdn.kcak11.com/CountryFlags/countries/er.svg",
    "mask": "#-###-###",
    "zh": "厄立特里亚"
  },
  {
    "name": "Estonia",
    "code": "+372",
    "iso": "EE",
    "flag": "https://cdn.kcak11.com/CountryFlags/countries/ee.svg",
    "mask": [
      "###-####",
      "####-####"
    ],
    "zh": "爱沙尼亚"
  },
  {
    "name": "Eswatini",
    "code": "+268",
    "iso": "SZ",
    "flag": "https://cdn.kcak11.com/CountryFlags/countries/sz.svg",
    "mask": "##-##-####",
    "zh": "斯威士兰"
  },
  {
    "name": "Ethiopia",
    "code": "+251",
    "iso": "ET",
    "flag": "https://cdn.kcak11.com/CountryFlags/countries/et.svg",
    "mask": "##-###-####",
    "zh": "埃塞俄比亚"
  },
  {
    "name": "Falkland Islands (Malvinas)",
    "code": "+500",
    "iso": "FK",
    "flag": "https://cdn.kcak11.com/CountryFlags/countries/fk.svg",
    "mask": "#####",
    "zh": "福克兰群岛"
  },
  {
    "name": "Faroe Islands",
    "code": "+298",
    "iso": "FO",
    "flag": "https://cdn.kcak11.com/CountryFlags/countries/fo.svg",
    "mask": "## ## ##",
    "zh": "法罗群岛"
  },
  {
    "name": "Fiji",
    "code": "+679",
    "iso": "FJ",
    "flag": "https://cdn.kcak11.com/CountryFlags/countries/fj.svg",
    "mask": "##-#####",
    "zh": "斐济"
  },
  {
    "name": "Finland",
    "code": "+358",
    "iso": "FI",
    "flag": "https://cdn.kcak11.com/CountryFlags/countries/fi.svg",
    "mask": "## ### ####",
    "zh": "芬兰"
  },
  {
    "name": "France",
    "code": "+33",
    "iso": "FR",
    "flag": "https://cdn.kcak11.com/CountryFlags/countries/fr.svg",
    "mask": "# ## ## ## ##",
    "zh": "法国"
  },
  {
    "name": "French Guiana",
    "code": "+594",
    "iso": "GF",
    "flag": "https://cdn.kcak11.com/CountryFlags/countries/gf.svg",
    "mask": "### ## ## ##",
    "zh": "法属圭亚那"
  },
  {
    "name": "French Polynesia",
    "code": "+689",
    "iso": "PF",
    "flag": "https://cdn.kcak11.com/CountryFlags/countries/pf.svg",
    "mask": "## ## ## ##",
    "zh": "法属波利尼西亚"
  },
  {
    "name": "Gabon",
    "code": "+241",
    "iso": "GA",
    "flag": "https://cdn.kcak11.com/CountryFlags/countries/ga.svg",
    "mask": "# ## ## ##",
    "zh": "加蓬"
  },
  {
    "name": "Gambia",
    "code": "+220",
    "iso": "GM",
    "flag": "https://cdn.kcak11.com/CountryFlags/countries/gm.svg",
    "mask": "### ####",
    "zh": "冈比亚"
  },
  {
    "name": "Georgia",
    "code": "+995",
    "iso": "GE",
    "flag": "https://cdn.kcak11.com/CountryFlags/countries/ge.svg",
    "mask": "(###)###-###",
    "zh": "格鲁吉亚"
  },
  {
    "name": "Germany",
    "code": "+49",
    "iso": "DE",
    "flag": "https://cdn.kcak11.com/CountryFlags/countries/de.svg",
    "mask": [
      "###-###",
      "(##) ####-####",
      "(###) ####-####",
      "(####) ###-####",
      "(3####) ##-####"
    ],
    "zh": "德国"
  },
  {
    "name": "Ghana",
    "code": "+233",
    "iso": "GH",
    "flag": "https://cdn.kcak11.com/CountryFlags/countries/gh.svg",
    "mask": "03# ### ####",
    "zh": "加纳"
  },
  {
    "name": "Gibraltar",
    "code": "+350",
    "iso": "GI",
    "flag": "https://cdn.kcak11.com/CountryFlags/countries/gi.svg",
    "mask": "###-#####",
    "zh": "直布罗陀"
  },
  {
    "name": "Greece",
    "code": "+30",
    "iso": "GR",
    "flag": "https://cdn.kcak11.com/CountryFlags/countries/gr.svg",
    "mask": "(###)###-####",
    "zh": "希腊"
  },
  {
    "name": "Greenland",
    "code": "+299",
    "iso": "GL",
    "flag": "https://cdn.kcak11.com/CountryFlags/countries/gl.svg",
    "mask": "##-##-##",
    "zh": "格陵兰"
  },
  {
    "name": "Grenada",
    "code": "+1",
    "iso": "GD",
    "flag": "https://cdn.kcak11.com/CountryFlags/countries/gd.svg",
    "mask": "(473)###-####",
    "zh": "格林纳达"
  },
  {
    "name": "Guadeloupe",
    "code": "+590",
    "iso": "GP",
    "flag": "https://cdn.kcak11.com/CountryFlags/countries/gp.svg",
    "mask": "### ## ## ##",
    "zh": "瓜德罗普"
  },
  {
    "name": "Guam",
    "code": "+1",
    "iso": "GU",
    "flag": "https://cdn.kcak11.com/CountryFlags/countries/gu.svg",
    "mask": "671 ### ####",
    "zh": "关岛"
  },
  {
    "name": "Guatemala",
    "code": "+502",
    "iso": "GT",
    "flag": "https://cdn.kcak11.com/CountryFlags/countries/gt.svg",
    "mask": "#-###-####",
    "zh": "危地马拉"
  },
  {
    "name": "Guernsey",
    "code": "+44",
    "iso": "GG",
    "flag": "https://cdn.kcak11.com/CountryFlags/countries/gg.svg",
    "mask": "(####)######",
    "zh": "根西岛"
  },
  {
    "name": "Guinea",
    "code": "+224",
    "iso": "GN",
    "flag": "https://cdn.kcak11.com/CountryFlags/countries/gn.svg",
    "mask": "##-###-###",
    "zh": "几内亚"
  },
  {
    "name": "Guinea-Bissau",
    "code": "+245",
    "iso": "GW",
    "flag": "https://cdn.kcak11.com/CountryFlags/countries/gw.svg",
    "mask": "#-######",
    "zh": "几内亚比绍"
  },
  {
    "name": "Guyana",
    "code": "+592",
    "iso": "GY",
    "flag": "https://cdn.kcak11.com/CountryFlags/countries/gy.svg",
    "mask": "###-####",
    "zh": "圭亚那"
  },
  {
    "name": "Haiti",
    "code": "+509",
    "iso": "HT",
    "flag": "https://cdn.kcak11.com/CountryFlags/countries/ht.svg",
    "mask": "##-##-####",
    "zh": "海地"
  },
  {
    "name": "Holy See (Vatican City State)",
    "code": "+39",
    "iso": "VA",
    "flag": "https://cdn.kcak11.com/CountryFlags/countries/va.svg",
    "mask": "06 698#####",
    "zh": "梵蒂冈"
  },
  {
    "name": "Honduras",
    "code": "+504",
    "iso": "HN",
    "flag": "https://cdn.kcak11.com/CountryFlags/countries/hn.svg",
    "mask": "####-####",
    "zh": "洪都拉斯"
  },
  {
    "name": "Hong Kong",
    "code": "+852",
    "iso": "HK",
    "flag": "https://cdn.kcak11.com/CountryFlags/countries/hk.svg",
    "mask": "####-####",
    "zh": "中国香港特别行政区"
  },
  {
    "name": "Hungary",
    "code": "+36",
    "iso": "HU",
    "flag": "https://cdn.kcak11.com/CountryFlags/countries/hu.svg",
    "mask": "## ### ####",
    "zh": "匈牙利"
  },
  {
    "name": "Iceland",
    "code": "+354",
    "iso": "IS",
    "flag": "https://cdn.kcak11.com/CountryFlags/countries/is.svg",
    "mask": "###-####",
    "zh": "冰岛"
  },
  {
    "name": "India",
    "code": "+91",
    "iso": "IN",
    "flag": "https://cdn.kcak11.com/CountryFlags/countries/in.svg",
    "mask": "(####)###-###",
    "zh": "印度"
  },
  {
    "name": "Indonesia",
    "code": "+62",
    "iso": "ID",
    "flag": "https://cdn.kcak11.com/CountryFlags/countries/id.svg",
    "mask": [
      "##-###-##",
      "##-###-###",
      "##-###-####",
      "(8##)###-###",
      "(8##)###-##-###"
    ],
    "zh": "印度尼西亚"
  },
  {
    "name": "Iran",
    "code": "+98",
    "iso": "IR",
    "flag": "https://cdn.kcak11.com/CountryFlags/countries/ir.svg",
    "mask": "(###)###-####",
    "zh": "伊朗"
  },
  {
    "name": "Iraq",
    "code": "+964",
    "iso": "IQ",
    "flag": "https://cdn.kcak11.com/CountryFlags/countries/iq.svg",
    "mask": "(###)###-####",
    "zh": "伊拉克"
  },
  {
    "name": "Ireland",
    "code": "+353",
    "iso": "IE",
    "flag": "https://cdn.kcak11.com/CountryFlags/countries/ie.svg",
    "mask": "(###)###-###",
    "zh": "爱尔兰"
  },
  {
    "name": "Isle of Man",
    "code": "+44",
    "iso": "IM",
    "flag": "https://cdn.kcak11.com/CountryFlags/countries/im.svg",
    "mask": "(####)######",
    "zh": "马恩岛"
  },
  {
    "name": "Israel",
    "code": "+972",
    "iso": "IL",
    "flag": "https://cdn.kcak11.com/CountryFlags/countries/il.svg",
    "mask": [
      "#-###-####",
      "5#-###-####"
    ],
    "zh": "以色列"
  },
  {
    "name": "Italy",
    "code": "+39",
    "iso": "IT",
    "flag": "https://cdn.kcak11.com/CountryFlags/countries/it.svg",
    "mask": "(###)####-###",
    "zh": "意大利"
  },
  {
    "name": "Ivory Coast / Cote d'Ivoire",
    "code": "+225",
    "iso": "CI",
    "flag": "https://cdn.kcak11.com/CountryFlags/countries/ci.svg",
    "mask": "##-###-###",
    "zh": "科特迪瓦"
  },
  {
    "name": "Jamaica",
    "code": "+1",
    "iso": "JM",
    "flag": "https://cdn.kcak11.com/CountryFlags/countries/jm.svg",
    "mask": "(876)###-####",
    "zh": "牙买加"
  },
  {
    "name": "Japan",
    "code": "+81",
    "iso": "JP",
    "flag": "https://cdn.kcak11.com/CountryFlags/countries/jp.svg",
    "mask": [
      "(###)###-###",
      "##-####-####"
    ],
    "zh": "日本"
  },
  {
    "name": "Jersey",
    "code": "+44",
    "iso": "JE",
    "flag": "https://cdn.kcak11.com/CountryFlags/countries/je.svg",
    "mask": "(####)####-######",
    "zh": "泽西岛"
  },
  {
    "name": "Jordan",
    "code": "+962",
    "iso": "JO",
    "flag": "https://cdn.kcak11.com/CountryFlags/countries/jo.svg",
    "mask": "#-####-####",
    "zh": "约旦"
  },
  {
    "name": "Kazakhstan",
    "code": "+77",
    "iso": "KZ",
    "flag": "https://cdn.kcak11.com/CountryFlags/countries/kz.svg",
    "mask": [
      "(###) ### ## ##",
      "(####) ## ## ##",
      "(#####) # ## ##"
    ],
    "zh": "哈萨克斯坦"
  },
  {
    "name": "Kenya",
    "code": "+254",
    "iso": "KE",
    "flag": "https://cdn.kcak11.com/CountryFlags/countries/ke.svg",
    "mask": "###-######",
    "zh": "肯尼亚"
  },
  {
    "name": "Kiribati",
    "code": "+686",
    "iso": "KI",
    "flag": "https://cdn.kcak11.com/CountryFlags/countries/ki.svg",
    "mask": "##-###",
    "zh": "基里巴斯"
  },
  {
    "name": "Korea, Democratic People's Republic of Korea",
    "code": "+850",
    "iso": "KP",
    "flag": "https://cdn.kcak11.com/CountryFlags/countries/kp.svg",
    "mask": [
      "###-###",
      "####-####",
      "##-###-###",
      "###-####-###",
      "191-###-####",
      "####-#############"
    ],
    "zh": "朝鲜"
  },
  {
    "name": "Korea, Republic of South Korea",
    "code": "+82",
    "iso": "KR",
    "flag": "https://cdn.kcak11.com/CountryFlags/countries/kr.svg",
    "mask": "##-###-####",
    "zh": "韩国"
  },
  {
    "name": "Kosovo",
    "code": "+383",
    "iso": "XK",
    "flag": "https://cdn.kcak11.com/CountryFlags/countries/xk.svg",
    "mask": [
      "##-###-###",
      "###-###-###"
    ],
    "zh": "科索沃"
  },
  {
    "name": "Kuwait",
    "code": "+965",
    "iso": "KW",
    "flag": "https://cdn.kcak11.com/CountryFlags/countries/kw.svg",
    "mask": "####-####",
    "zh": "科威特"
  },
  {
    "name": "Kyrgyzstan",
    "code": "+996",
    "iso": "KG",
    "flag": "https://cdn.kcak11.com/CountryFlags/countries/kg.svg",
    "mask": "(###)###-###",
    "zh": "吉尔吉斯斯坦"
  },
  {
    "name": "Laos",
    "code": "+856",
    "iso": "LA",
    "flag": "https://cdn.kcak11.com/CountryFlags/countries/la.svg",
    "mask": [
      "##-###-###",
      "(20##)###-###"
    ],
    "zh": "老挝"
  },
  {
    "name": "Latvia",
    "code": "+371",
    "iso": "LV",
    "flag": "https://cdn.kcak11.com/CountryFlags/countries/lv.svg",
    "mask": "##-###-###",
    "zh": "拉脱维亚"
  },
  {
    "name": "Lebanon",
    "code": "+961",
    "iso": "LB",
    "flag": "https://cdn.kcak11.com/CountryFlags/countries/lb.svg",
    "mask": [
      "#-###-###",
      "##-###-###"
    ],
    "zh": "黎巴嫩"
  },
  {
    "name": "Lesotho",
    "code": "+266",
    "iso": "LS",
    "flag": "https://cdn.kcak11.com/CountryFlags/countries/ls.svg",
    "mask": "#-###-####",
    "zh": "莱索托"
  },
  {
    "name": "Liberia",
    "code": "+231",
    "iso": "LR",
    "flag": "https://cdn.kcak11.com/CountryFlags/countries/lr.svg",
    "mask": "##-###-###",
    "zh": "利比里亚"
  },
  {
    "name": "Libya",
    "code": "+218",
    "iso": "LY",
    "flag": "https://cdn.kcak11.com/CountryFlags/countries/ly.svg",
    "mask": [
      "##-###-###",
      "21-###-####"
    ],
    "zh": "利比亚"
  },
  {
    "name": "Liechtenstein",
    "code": "+423",
    "iso": "LI",
    "flag": "https://cdn.kcak11.com/CountryFlags/countries/li.svg",
    "mask": "(###)###-####",
    "zh": "列支敦士登"
  },
  {
    "name": "Lithuania",
    "code": "+370",
    "iso": "LT",
    "flag": "https://cdn.kcak11.com/CountryFlags/countries/lt.svg",
    "mask": "(###)##-###",
    "zh": "立陶宛"
  },
  {
    "name": "Luxembourg",
    "code": "+352",
    "iso": "LU",
    "flag": "https://cdn.kcak11.com/CountryFlags/countries/lu.svg",
    "mask": "(###)###-###",
    "zh": "卢森堡"
  },
  {
    "name": "Macau",
    "code": "+853",
    "iso": "MO",
    "flag": "https://cdn.kcak11.com/CountryFlags/countries/mo.svg",
    "mask": "####-####",
    "zh": "中国澳门特别行政区"
  },
  {
    "name": "Madagascar",
    "code": "+261",
    "iso": "MG",
    "flag": "https://cdn.kcak11.com/CountryFlags/countries/mg.svg",
    "mask": "##-##-#####",
    "zh": "马达加斯加"
  },
  {
    "name": "Malawi",
    "code": "+265",
    "iso": "MW",
    "flag": "https://cdn.kcak11.com/CountryFlags/countries/mw.svg",
    "mask": [
      "1-###-###",
      "#-####-####"
    ],
    "zh": "马拉维"
  },
  {
    "name": "Malaysia",
    "code": "+60",
    "iso": "MY",
    "flag": "https://cdn.kcak11.com/CountryFlags/countries/my.svg",
    "mask": [
      "#-###-###",
      "##-###-###",
      "(###)###-###",
      "##-###-####"
    ],
    "zh": "马来西亚"
  },
  {
    "name": "Maldives",
    "code": "+960",
    "iso": "MV",
    "flag": "https://cdn.kcak11.com/CountryFlags/countries/mv.svg",
    "mask": "###-####",
    "zh": "马尔代夫"
  },
  {
    "name": "Mali",
    "code": "+223",
    "iso": "ML",
    "flag": "https://cdn.kcak11.com/CountryFlags/countries/ml.svg",
    "mask": "##-##-####",
    "zh": "马里"
  },
  {
    "name": "Malta",
    "code": "+356",
    "iso": "MT",
    "flag": "https://cdn.kcak11.com/CountryFlags/countries/mt.svg",
    "mask": "####-####",
    "zh": "马耳他"
  },
  {
    "name": "Marshall Islands",
    "code": "+692",
    "iso": "MH",
    "flag": "https://cdn.kcak11.com/CountryFlags/countries/mh.svg",
    "mask": "###-####",
    "zh": "马绍尔群岛"
  },
  {
    "name": "Martinique",
    "code": "+596",
    "iso": "MQ",
    "flag": "https://cdn.kcak11.com/CountryFlags/countries/mq.svg",
    "mask": "(###)##-##-##",
    "zh": "马提尼克"
  },
  {
    "name": "Mauritania",
    "code": "+222",
    "iso": "MR",
    "flag": "https://cdn.kcak11.com/CountryFlags/countries/mr.svg",
    "mask": "##-##-####",
    "zh": "毛里塔尼亚"
  },
  {
    "name": "Mauritius",
    "code": "+230",
    "iso": "MU",
    "flag": "https://cdn.kcak11.com/CountryFlags/countries/mu.svg",
    "mask": "###-####",
    "zh": "毛里求斯"
  },
  {
    "name": "Mayotte",
    "code": "+262",
    "iso": "YT",
    "flag": "https://cdn.kcak11.com/CountryFlags/countries/yt.svg",
    "mask": "#####-####",
    "zh": "马约特"
  },
  {
    "name": "Mexico",
    "code": "+52",
    "iso": "MX",
    "flag": "https://cdn.kcak11.com/CountryFlags/countries/mx.svg",
    "mask": [
      "##-##-####",
      "(###)###-####"
    ],
    "zh": "墨西哥"
  },
  {
    "name": "Micronesia, Federated States of Micronesia",
    "code": "+691",
    "iso": "FM",
    "flag": "https://cdn.kcak11.com/CountryFlags/countries/fm.svg",
    "mask": "###-####",
    "zh": "密克罗尼西亚"
  },
  {
    "name": "Moldova",
    "code": "+373",
    "iso": "MD",
    "flag": "https://cdn.kcak11.com/CountryFlags/countries/md.svg",
    "mask": "####-####",
    "zh": "摩尔多瓦"
  },
  {
    "name": "Monaco",
    "code": "+377",
    "iso": "MC",
    "flag": "https://cdn.kcak11.com/CountryFlags/countries/mc.svg",
    "mask": [
      "##-###-###",
      "(###)###-###"
    ],
    "zh": "摩纳哥"
  },
  {
    "name": "Mongolia",
    "code": "+976",
    "iso": "MN",
    "flag": "https://cdn.kcak11.com/CountryFlags/countries/mn.svg",
    "mask": "##-##-####",
    "zh": "蒙古"
  },
  {
    "name": "Montenegro",
    "code": "+382",
    "iso": "ME",
    "flag": "https://cdn.kcak11.com/CountryFlags/countries/me.svg",
    "mask": "##-###-###",
    "zh": "黑山"
  },
  {
    "name": "Montserrat",
    "code": "+1",
    "iso": "MS",
    "flag": "https://cdn.kcak11.com/CountryFlags/countries/ms.svg",
    "mask": "(664)###-####",
    "zh": "蒙特塞拉特"
  },
  {
    "name": "Morocco",
    "code": "+212",
    "iso": "MA",
    "flag": "https://cdn.kcak11.com/CountryFlags/countries/ma.svg",
    "mask": "##-####-###",
    "zh": "摩洛哥"
  },
  {
    "name": "Mozambique",
    "code": "+258",
    "iso": "MZ",
    "flag": "https://cdn.kcak11.com/CountryFlags/countries/mz.svg",
    "mask": "##-###-###",
    "zh": "莫桑比克"
  },
  {
    "name": "Myanmar",
    "code": "+95",
    "iso": "MM",
    "flag": "https://cdn.kcak11.com/CountryFlags/countries/mm.svg",
    "mask": [
      "###-###",
      "#-###-###",
      "##-###-###"
    ],
    "zh": "缅甸"
  },
  {
    "name": "Namibia",
    "code": "+264",
    "iso": "NA",
    "flag": "https://cdn.kcak11.com/CountryFlags/countries/na.svg",
    "mask": "##-###-####",
    "zh": "纳米比亚"
  },
  {
    "name": "Nauru",
    "code": "+674",
    "iso": "NR",
    "flag": "https://cdn.kcak11.com/CountryFlags/countries/nr.svg",
    "mask": "###-####",
    "zh": "瑙鲁"
  },
  {
    "name": "Nepal",
    "code": "+977",
    "iso": "NP",
    "flag": "https://cdn.kcak11.com/CountryFlags/countries/np.svg",
    "mask": "##-###-###",
    "zh": "尼泊尔"
  },
  {
    "name": "Netherlands",
    "code": "+31",
    "iso": "NL",
    "flag": "https://cdn.kcak11.com/CountryFlags/countries/nl.svg",
    "mask": "##-###-####",
    "zh": "荷兰"
  },
  {
    "name": "New Caledonia",
    "code": "+687",
    "iso": "NC",
    "flag": "https://cdn.kcak11.com/CountryFlags/countries/nc.svg",
    "mask": "##-####",
    "zh": "新喀里多尼亚"
  },
  {
    "name": "New Zealand",
    "code": "+64",
    "iso": "NZ",
    "flag": "https://cdn.kcak11.com/CountryFlags/countries/nz.svg",
    "mask": [
      "#-###-###",
      "(###)###-###",
      "(###)###-####"
    ],
    "zh": "新西兰"
  },
  {
    "name": "Nicaragua",
    "code": "+505",
    "iso": "NI",
    "flag": "https://cdn.kcak11.com/CountryFlags/countries/ni.svg",
    "mask": "####-####",
    "zh": "尼加拉瓜"
  },
  {
    "name": "Niger",
    "code": "+227",
    "iso": "NE",
    "flag": "https://cdn.kcak11.com/CountryFlags/countries/ne.svg",
    "mask": "##-##-####",
    "zh": "尼日尔"
  },
  {
    "name": "Nigeria",
    "code": "+234",
    "iso": "NG",
    "flag": "https://cdn.kcak11.com/CountryFlags/countries/ng.svg",
    "mask": [
      "##-###-##",
      "##-###-###",
      "(###)###-####"
    ],
    "zh": "尼日利亚"
  },
  {
    "name": "Niue",
    "code": "+683",
    "iso": "NU",
    "flag": "https://cdn.kcak11.com/CountryFlags/countries/nu.svg",
    "mask": "####",
    "zh": "纽埃"
  },
  {
    "name": "Norfolk Island",
    "code": "+672",
    "iso": "NF",
    "flag": "https://cdn.kcak11.com/CountryFlags/countries/nf.svg",
    "mask": "3##-###",
    "zh": "诺福克岛"
  },
  {
    "name": "North Macedonia",
    "code": "+389",
    "iso": "MK",
    "flag": "https://cdn.kcak11.com/CountryFlags/countries/mk.svg",
    "mask": "##-###-###",
    "zh": "北马其顿"
  },
  {
    "name": "Northern Mariana Islands",
    "code": "+1",
    "iso": "MP",
    "flag": "https://cdn.kcak11.com/CountryFlags/countries/mp.svg",
    "mask": "(670)###-####",
    "zh": "北马里亚纳群岛"
  },
  {
    "name": "Norway",
    "code": "+47",
    "iso": "NO",
    "flag": "https://cdn.kcak11.com/CountryFlags/countries/no.svg",
    "mask": "(###)##-###",
    "zh": "挪威"
  },
  {
    "name": "Oman",
    "code": "+968",
    "iso": "OM",
    "flag": "https://cdn.kcak11.com/CountryFlags/countries/om.svg",
    "mask": "##-###-###",
    "zh": "阿曼"
  },
  {
    "name": "Pakistan",
    "code": "+92",
    "iso": "PK",
    "flag": "https://cdn.kcak11.com/CountryFlags/countries/pk.svg",
    "mask": "(###)###-####",
    "zh": "巴基斯坦"
  },
  {
    "name": "Palau",
    "code": "+680",
    "iso": "PW",
    "flag": "https://cdn.kcak11.com/CountryFlags/countries/pw.svg",
    "mask": "###-####",
    "zh": "帕劳"
  },
  {
    "name": "Palestine",
    "code": "+970",
    "iso": "PS",
    "flag": "https://cdn.kcak11.com/CountryFlags/countries/ps.svg",
    "mask": "##-###-####",
    "zh": "巴勒斯坦领土"
  },
  {
    "name": "Panama",
    "code": "+507",
    "iso": "PA",
    "flag": "https://cdn.kcak11.com/CountryFlags/countries/pa.svg",
    "mask": "###-####",
    "zh": "巴拿马"
  },
  {
    "name": "Papua New Guinea",
    "code": "+675",
    "iso": "PG",
    "flag": "https://cdn.kcak11.com/CountryFlags/countries/pg.svg",
    "mask": "(###)##-###",
    "zh": "巴布亚新几内亚"
  },
  {
    "name": "Paraguay",
    "code": "+595",
    "iso": "PY",
    "flag": "https://cdn.kcak11.com/CountryFlags/countries/py.svg",
    "mask": "(###)###-###",
    "zh": "巴拉圭"
  },
  {
    "name": "Peru",
    "code": "+51",
    "iso": "PE",
    "flag": "https://cdn.kcak11.com/CountryFlags/countries/pe.svg",
    "mask": "(###)###-###",
    "zh": "秘鲁"
  },
  {
    "name": "Philippines",
    "code": "+63",
    "iso": "PH",
    "flag": "https://cdn.kcak11.com/CountryFlags/countries/ph.svg",
    "mask": "(###)###-####",
    "zh": "菲律宾"
  },
  {
    "name": "Pitcairn",
    "code": "+870",
    "iso": "PN",
    "flag": "https://cdn.kcak11.com/CountryFlags/countries/pn.svg",
    "mask": "###-###-###",
    "zh": "皮特凯恩群岛"
  },
  {
    "name": "Poland",
    "code": "+48",
    "iso": "PL",
    "flag": "https://cdn.kcak11.com/CountryFlags/countries/pl.svg",
    "mask": "(###)###-###",
    "zh": "波兰"
  },
  {
    "name": "Portugal",
    "code": "+351",
    "iso": "PT",
    "flag": "https://cdn.kcak11.com/CountryFlags/countries/pt.svg",
    "mask": "##-###-####",
    "zh": "葡萄牙"
  },
  {
    "name": "Puerto Rico",
    "code": "+1",
    "iso": "PR",
    "flag": "https://cdn.kcak11.com/CountryFlags/countries/pr.svg",
    "mask": [
      "(787) ### ####",
      "(939) ### ####"
    ],
    "zh": "波多黎各"
  },
  {
    "name": "Qatar",
    "code": "+974",
    "iso": "QA",
    "flag": "https://cdn.kcak11.com/CountryFlags/countries/qa.svg",
    "mask": "####-####",
    "zh": "卡塔尔"
  },
  {
    "name": "Reunion",
    "code": "+262",
    "iso": "RE",
    "flag": "https://cdn.kcak11.com/CountryFlags/countries/re.svg",
    "mask": "#####-####",
    "zh": "留尼汪"
  },
  {
    "name": "Romania",
    "code": "+40",
    "iso": "RO",
    "flag": "https://cdn.kcak11.com/CountryFlags/countries/ro.svg",
    "mask": "##-###-####",
    "zh": "罗马尼亚"
  },
  {
    "name": "Russia",
    "code": "+7",
    "iso": "RU",
    "flag": "https://cdn.kcak11.com/CountryFlags/countries/ru.svg",
    "mask": "(###)###-##-##",
    "zh": "俄罗斯"
  },
  {
    "name": "Rwanda",
    "code": "+250",
    "iso": "RW",
    "flag": "https://cdn.kcak11.com/CountryFlags/countries/rw.svg",
    "mask": "(###)###-###",
    "zh": "卢旺达"
  },
  {
    "name": "Saint Barthelemy",
    "code": "+590",
    "iso": "BL",
    "flag": "https://cdn.kcak11.com/CountryFlags/countries/bl.svg",
    "mask": "###-##-##-##",
    "zh": "圣巴泰勒米"
  },
  {
    "name": "Saint Helena, Ascension and Tristan Da Cunha",
    "code": "+290",
    "iso": "SH",
    "flag": "https://cdn.kcak11.com/CountryFlags/countries/sh.svg",
    "mask": "####",
    "zh": "圣赫勒拿"
  },
  {
    "name": "Saint Kitts and Nevis",
    "code": "+1",
    "iso": "KN",
    "flag": "https://cdn.kcak11.com/CountryFlags/countries/kn.svg",
    "mask": "(869)###-####",
    "zh": "圣基茨和尼维斯"
  },
  {
    "name": "Saint Lucia",
    "code": "+1",
    "iso": "LC",
    "flag": "https://cdn.kcak11.com/CountryFlags/countries/lc.svg",
    "mask": "(758)###-####",
    "zh": "圣卢西亚"
  },
  {
    "name": "Saint Martin",
    "code": "+590",
    "iso": "MF",
    "flag": "https://cdn.kcak11.com/CountryFlags/countries/mf.svg",
    "mask": "(###)###-###",
    "zh": "法属圣马丁"
  },
  {
    "name": "Saint Pierre and Miquelon",
    "code": "+508",
    "iso": "PM",
    "flag": "https://cdn.kcak11.com/CountryFlags/countries/pm.svg",
    "mask": "##-####",
    "zh": "圣皮埃尔和密克隆群岛"
  },
  {
    "name": "Saint Vincent and the Grenadines",
    "code": "+1",
    "iso": "VC",
    "flag": "https://cdn.kcak11.com/CountryFlags/countries/vc.svg",
    "mask": "(784)###-####",
    "zh": "圣文森特和格林纳丁斯"
  },
  {
    "name": "Samoa",
    "code": "+685",
    "iso": "WS",
    "flag": "https://cdn.kcak11.com/CountryFlags/countries/ws.svg",
    "mask": "##-####",
    "zh": "萨摩亚"
  },
  {
    "name": "San Marino",
    "code": "+378",
    "iso": "SM",
    "flag": "https://cdn.kcak11.com/CountryFlags/countries/sm.svg",
    "mask": "####-######",
    "zh": "圣马力诺"
  },
  {
    "name": "Sao Tome and Principe",
    "code": "+239",
    "iso": "ST",
    "flag": "https://cdn.kcak11.com/CountryFlags/countries/st.svg",
    "mask": "##-#####",
    "zh": "圣多美和普林西比"
  },
  {
    "name": "Saudi Arabia",
    "code": "+966",
    "iso": "SA",
    "flag": "https://cdn.kcak11.com/CountryFlags/countries/sa.svg",
    "mask": [
      "#-###-####",
      "5#-####-####"
    ],
    "zh": "沙特阿拉伯"
  },
  {
    "name": "Senegal",
    "code": "+221",
    "iso": "SN",
    "flag": "https://cdn.kcak11.com/CountryFlags/countries/sn.svg",
    "mask": "##-###-####",
    "zh": "塞内加尔"
  },
  {
    "name": "Serbia",
    "code": "+381",
    "iso": "RS",
    "flag": "https://cdn.kcak11.com/CountryFlags/countries/rs.svg",
    "mask": "##-###-####",
    "zh": "塞尔维亚"
  },
  {
    "name": "Seychelles",
    "code": "+248",
    "iso": "SC",
    "flag": "https://cdn.kcak11.com/CountryFlags/countries/sc.svg",
    "mask": "#-###-###",
    "zh": "塞舌尔"
  },
  {
    "name": "Sierra Leone",
    "code": "+232",
    "iso": "SL",
    "flag": "https://cdn.kcak11.com/CountryFlags/countries/sl.svg",
    "mask": "##-######",
    "zh": "塞拉利昂"
  },
  {
    "name": "Singapore",
    "code": "+65",
    "iso": "SG",
    "flag": "https://cdn.kcak11.com/CountryFlags/countries/sg.svg",
    "mask": "####-####",
    "zh": "新加坡"
  },
  {
    "name": "Sint Maarten",
    "code": "+1",
    "iso": "SX",
    "flag": "https://cdn.kcak11.com/CountryFlags/countries/sx.svg",
    "mask": "(721)###-####",
    "zh": "荷属圣马丁"
  },
  {
    "name": "Slovakia",
    "code": "+421",
    "iso": "SK",
    "flag": "https://cdn.kcak11.com/CountryFlags/countries/sk.svg",
    "mask": "(###)###-###",
    "zh": "斯洛伐克"
  },
  {
    "name": "Slovenia",
    "code": "+386",
    "iso": "SI",
    "flag": "https://cdn.kcak11.com/CountryFlags/countries/si.svg",
    "mask": "##-###-###",
    "zh": "斯洛文尼亚"
  },
  {
    "name": "Solomon Islands",
    "code": "+677",
    "iso": "SB",
    "flag": "https://cdn.kcak11.com/CountryFlags/countries/sb.svg",
    "mask": [
      "#####",
      "###-####"
    ],
    "zh": "所罗门群岛"
  },
  {
    "name": "Somalia",
    "code": "+252",
    "iso": "SO",
    "flag": "https://cdn.kcak11.com/CountryFlags/countries/so.svg",
    "mask": [
      "#-###-###",
      "##-###-###"
    ],
    "zh": "索马里"
  },
  {
    "name": "South Africa",
    "code": "+27",
    "iso": "ZA",
    "flag": "https://cdn.kcak11.com/CountryFlags/countries/za.svg",
    "mask": "##-###-####",
    "zh": "南非"
  },
  {
    "name": "South Georgia and the South Sandwich Islands",
    "code": "+500",
    "iso": "GS",
    "flag": "https://cdn.kcak11.com/CountryFlags/countries/gs.svg",
    "mask": "#####",
    "zh": "南乔治亚和南桑威奇群岛"
  },
  {
    "name": "South Sudan",
    "code": "+211",
    "iso": "SS",
    "flag": "https://cdn.kcak11.com/CountryFlags/countries/ss.svg",
    "mask": "##-###-####",
    "zh": "南苏丹"
  },
  {
    "name": "Spain",
    "code": "+34",
    "iso": "ES",
    "flag": "https://cdn.kcak11.com/CountryFlags/countries/es.svg",
    "mask": "(###)###-###",
    "zh": "西班牙"
  },
  {
    "name": "Sri Lanka",
    "code": "+94",
    "iso": "LK",
    "flag": "https://cdn.kcak11.com/CountryFlags/countries/lk.svg",
    "mask": "##-###-####",
    "zh": "斯里兰卡"
  },
  {
    "name": "Sudan",
    "code": "+249",
    "iso": "SD",
    "flag": "https://cdn.kcak11.com/CountryFlags/countries/sd.svg",
    "mask": "##-###-####",
    "zh": "苏丹"
  },
  {
    "name": "Suriname",
    "code": "+597",
    "iso": "SR",
    "flag": "https://cdn.kcak11.com/CountryFlags/countries/sr.svg",
    "mask": [
      "###-###",
      "###-####"
    ],
    "zh": "苏里南"
  },
  {
    "name": "Svalbard and Jan Mayen",
    "code": "+47",
    "iso": "SJ",
    "flag": "https://cdn.kcak11.com/CountryFlags/countries/sj.svg",
    "mask": "(###)##-###",
    "zh": "斯瓦尔巴和扬马延"
  },
  {
    "name": "Sweden",
    "code": "+46",
    "iso": "SE",
    "flag": "https://cdn.kcak11.com/CountryFlags/countries/se.svg",
    "mask": "##-###-####",
    "zh": "瑞典"
  },
  {
    "name": "Switzerland",
    "code": "+41",
    "iso": "CH",
    "flag": "https://cdn.kcak11.com/CountryFlags/countries/ch.svg",
    "mask": "##-###-####",
    "zh": "瑞士"
  },
  {
    "name": "Syrian Arab Republic",
    "code": "+963",
    "iso": "SY",
    "flag": "https://cdn.kcak11.com/CountryFlags/countries/sy.svg",
    "mask": "##-####-###",
    "zh": "叙利亚"
  },
  {
    "name": "Taiwan",
    "code": "+886",
    "iso": "TW",
    "flag": "https://cdn.kcak11.com/CountryFlags/countries/tw.svg",
    "mask": [
      "####-####",
      "#-####-####"
    ],
    "zh": "台湾"
  },
  {
    "name": "Tajikistan",
    "code": "+992",
    "iso": "TJ",
    "flag": "https://cdn.kcak11.com/CountryFlags/countries/tj.svg",
    "mask": "##-###-####",
    "zh": "塔吉克斯坦"
  },
  {
    "name": "Tanzania, United Republic of Tanzania",
    "code": "+255",
    "iso": "TZ",
    "flag": "https://cdn.kcak11.com/CountryFlags/countries/tz.svg",
    "mask": "##-###-####",
    "zh": "坦桑尼亚"
  },
  {
    "name": "Thailand",
    "code": "+66",
    "iso": "TH",
    "flag": "https://cdn.kcak11.com/CountryFlags/countries/th.svg",
    "mask": [
      "##-###-###",
      "##-###-####"
    ],
    "zh": "泰国"
  },
  {
    "name": "Timor-Leste",
    "code": "+670",
    "iso": "TL",
    "flag": "https://cdn.kcak11.com/CountryFlags/countries/tl.svg",
    "mask": [
      "###-####",
      "77#-#####",
      "78#-#####"
    ],
    "zh": "东帝汶"
  },
  {
    "name": "Togo",
    "code": "+228",
    "iso": "TG",
    "flag": "https://cdn.kcak11.com/CountryFlags/countries/tg.svg",
    "mask": "##-###-###",
    "zh": "多哥"
  },
  {
    "name": "Tokelau",
    "code": "+690",
    "iso": "TK",
    "flag": "https://cdn.kcak11.com/CountryFlags/countries/tk.svg",
    "mask": "####",
    "zh": "托克劳"
  },
  {
    "name": "Tonga",
    "code": "+676",
    "iso": "TO",
    "flag": "https://cdn.kcak11.com/CountryFlags/countries/to.svg",
    "mask": "#####",
    "zh": "汤加"
  },
  {
    "name": "Trinidad and Tobago",
    "code": "+1",
    "iso": "TT",
    "flag": "https://cdn.kcak11.com/CountryFlags/countries/tt.svg",
    "mask": "(868)###-####",
    "zh": "特立尼达和多巴哥"
  },
  {
    "name": "Tunisia",
    "code": "+216",
    "iso": "TN",
    "flag": "https://cdn.kcak11.com/CountryFlags/countries/tn.svg",
    "mask": "##-###-###",
    "zh": "突尼斯"
  },
  {
    "name": "Turkey",
    "code": "+90",
    "iso": "TR",
    "flag": "https://cdn.kcak11.com/CountryFlags/countries/tr.svg",
    "mask": "(###)###-####",
    "zh": "土耳其"
  },
  {
    "name": "Turkmenistan",
    "code": "+993",
    "iso": "TM",
    "flag": "https://cdn.kcak11.com/CountryFlags/countries/tm.svg",
    "mask": "#-###-####",
    "zh": "土库曼斯坦"
  },
  {
    "name": "Turks and Caicos Islands",
    "code": "+1",
    "iso": "TC",
    "flag": "https://cdn.kcak11.com/CountryFlags/countries/tc.svg",
    "mask": "(249)###-###",
    "zh": "特克斯和凯科斯群岛"
  },
  {
    "name": "Tuvalu",
    "code": "+688",
    "iso": "TV",
    "flag": "https://cdn.kcak11.com/CountryFlags/countries/tv.svg",
    "mask": [
      "2####",
      "90####"
    ],
    "zh": "图瓦卢"
  },
  {
    "name": "Uganda",
    "code": "+256",
    "iso": "UG",
    "flag": "https://cdn.kcak11.com/CountryFlags/countries/ug.svg",
    "mask": "(###)###-###",
    "zh": "乌干达"
  },
  {
    "name": "Ukraine",
    "code": "+380",
    "iso": "UA",
    "flag": "https://cdn.kcak11.com/CountryFlags/countries/ua.svg",
    "mask": "(##)###-##-##",
    "zh": "乌克兰"
  },
  {
    "name": "United Arab Emirates",
    "code": "+971",
    "iso": "AE",
    "flag": "https://cdn.kcak11.com/CountryFlags/countries/ae.svg",
    "mask": [
      "#-###-####",
      "5#-###-####"
    ],
    "zh": "阿拉伯联合酋长国"
  },
  {
    "name": "United Kingdom",
    "code": "+44",
    "iso": "GB",
    "flag": "https://cdn.kcak11.com/CountryFlags/countries/gb.svg",
    "mask": "##-####-####",
    "zh": "英国"
  },
  {
    "name": "United States",
    "code": "+1",
    "iso": "US",
    "flag": "https://cdn.kcak11.com/CountryFlags/countries/us.svg",
    "mask": "(###)###-####",
    "zh": "美国"
  },
  {
    "name": "Uruguay",
    "code": "+598",
    "iso": "UY",
    "flag": "https://cdn.kcak11.com/CountryFlags/countries/uy.svg",
    "mask": "#-###-##-##",
    "zh": "乌拉圭"
  },
  {
    "name": "Uzbekistan",
    "code": "+998",
    "iso": "UZ",
    "flag": "https://cdn.kcak11.com/CountryFlags/countries/uz.svg",
    "mask": "##-###-####",
    "zh": "乌兹别克斯坦"
  },
  {
    "name": "Vanuatu",
    "code": "+678",
    "iso": "VU",
    "flag": "https://cdn.kcak11.com/CountryFlags/countries/vu.svg",
    "mask": [
      "#####",
      "##-#####"
    ],
    "zh": "瓦努阿图"
  },
  {
    "name": "Venezuela, Bolivarian Republic of Venezuela",
    "code": "+58",
    "iso": "VE",
    "flag": "https://cdn.kcak11.com/CountryFlags/countries/ve.svg",
    "mask": "(###)###-####",
    "zh": "委内瑞拉"
  },
  {
    "name": "Vietnam",
    "code": "+84",
    "iso": "VN",
    "flag": "https://cdn.kcak11.com/CountryFlags/countries/vn.svg",
    "mask": [
      "##-####-###",
      "(###)####-###"
    ],
    "zh": "越南"
  },
  {
    "name": "Virgin Islands, British",
    "code": "+1",
    "iso": "VG",
    "flag": "https://cdn.kcak11.com/CountryFlags/countries/vg.svg",
    "mask": "(284)###-####",
    "zh": "英属维尔京群岛"
  },
  {
    "name": "Virgin Islands, U.S.",
    "code": "+1",
    "iso": "VI",
    "flag": "https://cdn.kcak11.com/CountryFlags/countries/vi.svg",
    "mask": "(340)###-####",
    "zh": "美属维尔京群岛"
  },
  {
    "name": "Wallis and Futuna",
    "code": "+681",
    "iso": "WF",
    "flag": "https://cdn.kcak11.com/CountryFlags/countries/wf.svg",
    "mask": "##-####",
    "zh": "瓦利斯和富图纳"
  },
  {
    "name": "Yemen",
    "code": "+967",
    "iso": "YE",
    "flag": "https://cdn.kcak11.com/CountryFlags/countries/ye.svg",
    "mask": [
      "#-###-###",
      "##-###-###",
      "###-###-###"
    ],
    "zh": "也门"
  },
  {
    "name": "Zambia",
    "code": "+260",
    "iso": "ZM",
    "flag": "https://cdn.kcak11.com/CountryFlags/countries/zm.svg",
    "mask": "##-###-####",
    "zh": "赞比亚"
  },
  {
    "name": "Zimbabwe",
    "code": "+263",
    "iso": "ZW",
    "flag": "https://cdn.kcak11.com/CountryFlags/countries/zw.svg",
    "mask": "#-######",
    "zh": "津巴布韦"
  }
];

export default countries;